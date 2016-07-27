<?php

namespace App\Http\Controllers;

use App\UploadedList;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator as Paginator;
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
        $current_page = $request->input('current_page', 1) - 1;
        $length = $request->input('length', 15);
        $order_by = $request->input('order_by', 'created_at');
        $descending = $request->input('descending', 'true') === 'true';

        $models = UploadedList::all();

        $models = $models->sortBy(function ($model) use ($order_by) {
            switch ($order_by) {
                case 'updated_at':
                case 'created_at':
                    return \Carbon\Carbon::parse($model->{$order_by})->timestamp;
                    break;
                default:
                    return $model->{$order_by};
            }
        }, SORT_REGULAR, $descending);

        $count = $models->count();

        $paged = $models->slice($current_page * $length, $length)->all();
        $paginator = new Paginator($paged, $count, $length);

        $json = $paginator->toArray();
        $json['current_page'] = $current_page + 1;
        $json['from'] = $current_page * $length;
        $json['to'] = ($json['from']) + $length;

        if ($count !== 0 && $json['from'] === 0) {
            $json['from'] = 1;
        }

        $json['data'] = array_values($json['data']);

        return response($json);
    }
}
