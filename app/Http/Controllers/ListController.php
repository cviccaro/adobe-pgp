<?php

namespace App\Http\Controllers;

use App\UploadedList;
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

    public function get(Request $request, $id) {
        $list = UploadedList::findOrFail($id);

        return response($list);
    }

    public function queued(Request $request) {
        $models = UploadedList::orderBy('created_at', 'desc')->get();

        return response($models);
    }
}
