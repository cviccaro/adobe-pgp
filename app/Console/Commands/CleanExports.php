<?php

namespace App\Console\Commands;

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
        $files = \File::files(storage_path('exports'));

        $yesterday = \Carbon\Carbon::now()->subDay(1);

        $deleted = $processed = 0;
        foreach($files as $filename) {
            $lastModified = \File::lastModified($filename);
            $processed++;
            if ($yesterday->diffInHours(\Carbon\Carbon::createFromTimestamp($lastModified)) <= 0) {
                \File::delete($filename);
                $deleted++;
            }
        }
        $this->comment('Iterated over ' . $processed . ' exports.  Cleaned ' . $deleted . '.');
    }
}
