<?php

namespace App\Http\Controllers;

use App\UploadedList;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator as Paginator;
use App\Http\Requests;

class ListController extends Controller
{
    public function uploadAndParse(Request $request)
    {
        \Log::info('UploadAndParse Request: ' . print_r($request->toArray(), true));
        $files = $request->allFiles();

        $lists = [];
        foreach ($files['file'] as $file) {
            $path = $file->path();
            $lists[] = [
                'data' => $this->loadListData($path),
                'file' => $file->getClientOriginalName()
            ];
        }

//        \Log::info('List outputting: ' . print_r($lists, true));

        return response(['lists' => $lists]);
    }

    private function loadListData($path) {
        $data = \Excel::load($path)->get();

        $cleaned = [];

        foreach($data as $i => $row) {
            if (isset($row->email) && !is_null($row->email)) {
                $cleaned[] = $row;
            } else {
                \Log::info('Skipping row ' . $i . ' because email column is null or doesnt exist');
            }
        }

        return $cleaned;
    }

    public function get(Request $request, $id)
    {
        $list = UploadedList::findOrFail($id);

        return response($list);
    }

    public function queued(Request $request)
    {
        $current_page = $request->input('current_page', 1) - 1;
        $length = $request->input('length', 15);
        $order_by = $request->input('order_by', 'created_at');
        $descending = $request->input('descending', 'true') === 'true';

        $models = collect(\DB::table('list')->get());
        $models = $models->map(function ($model) {
            $model->progress = \DB::table('signed_string')->where('list_id', $model->id)->count();
            return $model;
        })->sortBy(function ($model) use ($order_by) {
            switch ($order_by) {
                case 'updated_at':
                case 'created_at':
                    return \Carbon\Carbon::parse($model->{$order_by})->timestamp;
                    break;
                default:
                    return $model->{$order_by};
            }
        }, SORT_REGULAR, $descending)->map(function ($model) {
            $model->complete = intval($model->complete);
            $model->rows = intval($model->rows);
            $model->progress = min($model->rows, intval($model->progress));
            return $model;
        });

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
