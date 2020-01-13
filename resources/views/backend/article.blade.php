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
                                <div class="col-6"><a href="{{Route('admin.show', '2323' )}}">{{Route('admin.show', '2323' )}}</a></div>
                                <div class="col-6">2</div>
                            </div>
                        </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-6">1</div>
                            <div class="col-6">2</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
@endsection
