@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@section('content')

@if($Articles ?? '' ?? '')
@foreach ($Articles ?? '' as $Article )

<div class="row mb-4">
    <div class="col">
        <div class="card">
            <div class="card-header">

                <div class="row">
                    <div class="col-6">
                        <strong>
                            <i class="fas fa-newspaper"></i>  {{$Article->name}}
                        </strong>

                    </div>

                    <div class="col-6 text-right">
                        <span class="mr-3 alert alert-primary" role="alert">
                            Статус: {{$Article->status}}
                        </span>
                        @can('edit' , $Article)
                            <a href="{{Route('article.edit' , $Article->id)}}" class="btn btn-outline-primary">Редактровать</a>
                        @endcan
                    </div>
                </div>
            </div><!--card-header-->
                <div class="card-body">
                  <h5 class="card-title">title</h5>
                  <p class="card-text">{{$Article->another_info}}</p>
                  <a href="article/{{$Article->id}}" class="btn btn-primary">Read more</a>
                </div>
        </div><!-- card -->
    </div><!-- row -->
</div><!-- row -->
@endforeach
@else
    Article is empty, please add some articles!
@endif
{{ $Articles ?? ''->links() }}
@endsection
