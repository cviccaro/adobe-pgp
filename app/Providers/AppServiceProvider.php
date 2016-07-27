<?php

namespace App\Providers;

use App\Jobs\ExportSignedList;
use App\UploadedList;
use Illuminate\Support\ServiceProvider;
use Illuminate\Queue\Events\JobProcessed;

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

                    //\Log::info('SignStringJob# --- Completed item ' . $list->progress . ' of ' . $list->rows . ' on list ' . $list->filename);

                    if ($list->progress === $list->rows) {
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
