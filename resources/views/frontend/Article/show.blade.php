@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@section('content')

<h1>
{{ $article->name }}
</h1>

@endsection
