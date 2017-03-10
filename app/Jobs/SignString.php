<?php

namespace App\Jobs;

use App\Jobs\Job;
use App\SignedString;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SignString extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;

    public $text;
    public $list_id;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($list_id, $text)
    {
        $this->text = $text;
        $this->list_id = $list_id;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        \Log::info('SignString with list_id ' . $this->list_id . ' being signed.  Text is ' . $this->text);
        $gpg = new \Crypt_GPG();
        $pass = \File::get(base_path(env('PGP_PASSPHRASE_FILE')));
        $gpg->addSignKey(env('PGP_KEY'), $pass);
        $armored = $gpg->sign($this->text, \Crypt_GPG::SIGN_MODE_NORMAL, true);
        $base64 = base64_encode($gpg->sign($this->text, \Crypt_GPG::SIGN_MODE_NORMAL, false));
        $string = SignedString::create([
            'text' => $this->text,
            'armored' => $armored,
            'base64' => $base64,
            'list_id' => $this->list_id
        ]);
        \Log::info('SignedString created with ID ' . $string->id . ' from text ' . $this->text);
    }
}
