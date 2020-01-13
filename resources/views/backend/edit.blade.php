@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('strings.backend.dashboard.title'))


@section('content')
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <strong>@lang('strings.backend.dashboard.welcome') {{ $logged_in_user->name }}!</strong>
                </div><!--card-header-->
                <div class="card-body">

                        <div class="form-group">
                            <div class="row">
                                <div class="col-6">{{$article->id}}</div>
                                <div class="col-6">6</div>
                            </div>
                        </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-6">7</div>
                            <div class="col-6">8</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
@endsection
