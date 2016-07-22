<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class ListController extends Controller
{
    public function uploadAndParse(Request $request) {
        \Log::info('UploadAndParse Request: ' . print_r($request->toArray(), true));
        $files = $request->allFiles();

        $lists = [];
        foreach($files['file'] as $file) {
            $path = $file->path();
            $lists[] = [
                'data' => \Excel::load($path)->get(),
                'file' => $file->getClientOriginalName()
            ];
        }

        return response(['lists' => $lists]);
    }
}
