<?php

namespace App\Providers;

use App\Jobs\ExportSignedList;
use App\Jobs\Job;
use App\UploadedList;
use Carbon\CarbonInterval;
use Faker\Provider\zh_TW\DateTime;
use Illuminate\Support\ServiceProvider;
use Illuminate\Queue\Events\JobProcessed;
use Carbon\Carbon;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        \Queue::after(function (JobProcessed $event) {
            if ($event->job->getQueue() === 'string') {
                $command = unserialize($event->data['data']['command']);

                if (isset($command->list_id)) {
                    $list = UploadedList::find($command->list_id);

//                    $job = \DB::table('jobs')->where('payload', $event->job->getRawBody())->first();

                    $estimate = null;

                    if (\File::exists(storage_path('signed-string-job-last-completed.json'))) {
                        $json = json_decode(\File::get(storage_path('signed-string-job-last-completed.json')));
                        if (is_object($json)) {
                            $diff = Carbon::now()->diffInSeconds(Carbon::createFromTimestamp($json->last_time));
                            if ($diff) {
                                $seconds = ($list->rows - $list->progress) * $diff;
                                $minutes = 0;
                                $hours = 0;
                                if ($seconds % 60) {
                                    $minutes = floor($seconds / 60);
                                    $seconds = $seconds - ($minutes * 60);
                                    if ($minutes % 60) {
                                        $hours = floor($minutes / 60);
                                        $minutes = $minutes - ($hours * 60);
                                    }
                                }
                                $estimate = sprintf('%d hours %d minutes %d seconds', $hours, $minutes, $seconds);
                                $list->time_left = $estimate;
                                $list->save();
                            }
                        }
                    }
                    \File::put(storage_path('signed-string-job-last-completed.json'), json_encode(['last_time' => time()]));

//                    \Log::info(sprintf(
//                        'SignStringJob# --- Completed item %d of %d on list %s.  TIme left (estimate): %s',
//                        $list->progress,
//                        $list->rows,
//                        $list->filename,
//                        $estimate
//                    ));

                    if ($list->progress == $list->rows) {
                        $job = (new ExportSignedList($list))->onQueue('list');
                        dispatch($job);
                        \Log::info('SignStringJob# --- Completed list ' . $list->filename . '!  Dispatching ExportSignedList job.');
                    }
                }
            }
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ($this->app->environment() == 'local') {
            $this->app->register('Laracasts\Generators\GeneratorsServiceProvider');
        }
    }
}
