<?php

namespace App\Jobs;

use App\Jobs\Job;
use App\UploadedList;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class ExportSignedList extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;

    public $list;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(UploadedList $list)
    {
        $this->list = $list;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $filename_parts = explode('.', $this->list->filename);
        $extension = array_pop($filename_parts);
        $export_filename = implode('.', $filename_parts) . '-signed-' . time();

        $signedStrings = $this->list->signedStrings->map(function($model) {
            return ['text' => $model->text, 'base64' => $model->base64];
        });

        $created = \Excel::create($export_filename, function($excel) use ($signedStrings) {
            $excel->sheet('Sheet 1', function($sheet) use ($signedStrings) {
                $sheet->fromArray($signedStrings);
            });
        })->store('csv');

        $this->list->complete = true;
        $this->list->download_url = 'api/exports/' . $export_filename;
        $this->list->save();
    }
}
