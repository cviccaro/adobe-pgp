<?php

namespace App\Console\Commands;

use App\UploadedList;
use Illuminate\Console\Command;

class CleanExports extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'clean:exports';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Clean CSV/Zip exports in storage/exports';

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
        $this->comment('CleanExports# --- Starting task.');

        $lastMonth = \Carbon\Carbon::now()->subMonth();

        $models = UploadedList::where('updated_at', '<=', $lastMonth)->get();
        if ( !$models->isEmpty() ) {
            $this->comment('CleanExports# --- Found ' . $models->count() . ' UploadedLists to delete.');

            $deleted = 0;
            $models->each(function(UploadedList $list) use ($deleted) {
                if ($list->delete()) {
                    $filepath = str_replace('api/', '', $list->download_url);
                    if (\File::exists($filepath)) \File::delete($filepath);

                    $deleted++;

                    $this->comment('CleanExport# --- Deleted UploadedList ' . $list->filename . ' and its export at ' . storage_path($filepath));
                }
            });
            $this->comment('CleanExports# --- Deleted ' . $deleted . ' UploadedLists and their files.');
        } else {
            $this->comment('CleanExport# --- Nothing to delete.');
        }
    }
}
