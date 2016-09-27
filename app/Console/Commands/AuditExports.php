<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\UploadedList;

class AuditExports extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'audit:exports';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Audit exports for records that are completed but somehow not marked completed';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        \Log::info('Auditing lists for exports incorrectly marked incomplete.');

        $lists = UploadedList::incomplete()->get();
        
        $lists->each(function($list) {
            if ($list->signedStrings->count() >= $list->rows) {
                $list->complete = 1;
                $list->time_left = '';
                $list->save();
            }
        });

    }
}
