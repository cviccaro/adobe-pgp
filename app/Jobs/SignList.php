<?php

namespace App\Jobs;

use App\UploadedList;
use App\Jobs\Job;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SignList extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;

    protected $list;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($list)
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
        \Log::info('Run sign list job on list ' . $this->list['file'] . ' with ' . count($this->list['data']) . ' rows.');

        $data = $this->list['data'];

        $list_obj = UploadedList::create([
            'filename' => $this->list['file'],
            'rows' => count($this->list['data'])
        ]);

        foreach($data as $datum) {
            $email = array_values($datum)[0];
            $job = (new SignString($list_obj->id, $email))->onQueue('string');
            dispatch($job);
        }
    }
}
