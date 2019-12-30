@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@section('content')

        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Название: {{ $article->name }}</h4>
            <h6 class="card-subtitle text-muted">Организация: {{ $article->organisation }}</h6>
          </div>
          <div class="card-body">
            <p class="card-text">{{ $article->another_info }}</p>
          </div>
          <div class="card-footer text-muted">
              <p class="">{{ date('d.m.Y' , strtotime($article->created_at) )}}</p>
          </div>
        </div>
@endsection
