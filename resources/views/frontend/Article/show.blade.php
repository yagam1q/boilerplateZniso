@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@section('content')

<h1>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Название: {{ $article->name }}</h4>
            <h6 class="card-subtitle text-muted">Организация: {{ $article->organisation }}</h6>
          </div>
          <div class="card-body">
            <p class="card-text">Text</p>
          </div>
          <div class="card-footer text-muted">
              <p class="">sss</p>
          </div>
        </div>

</h1>

@endsection
