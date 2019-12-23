@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@section('content')

<div class="row mb-4">
    <div class="col">
        <div class="card">
            <div class="card-header">
                <strong>
                    <i class="fas fa-question-circle"></i> @lang('navs.frontend.dashboard')
                </strong>
            </div><!--card-header-->
           <div class="card-body"> Описание</div>
        </div><!-- card -->
    </div><!-- row -->
</div><!-- row -->

@foreach ($Articles as $Article )

<div class="row mb-4">
    <div class="col">
        <div class="card">
            <div class="card-header">
                <strong>
                    <i class="fas fa-newspaper"></i>  {{$Article->name}}
                </strong>
            </div><!--card-header-->
                <div class="card-body">
                  <h5 class="card-title"></h5>
                  <p class="card-text">{{$Article->another_info}}</p>
                  <a href="article/{{$Article->id}}/edit" class="btn btn-primary">Read more</a>
                </div>
        </div><!-- card -->
    </div><!-- row -->
</div><!-- row -->
@endforeach

@endsection
