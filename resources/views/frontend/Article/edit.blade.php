@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))
@section('head_menu_title', 'Редактирование новости')
@section('content')
<form action="{{ Route('article.update' , $article->id)}}" method="post">
        @csrf
        @method('PUT')
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="nameId">Название статьи</label>
            </div>
            <input type="text" name="name" class="form-control @error('name') is-invalid @enderror" id="nameId"
        value="{{$article->name}}"
                required="required">
            @error('name')
            <div class="alert alert-danger">{{ $message }}</div>
            @enderror
        </div>
        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <label class="input-group-text" for="nameId">organisation</label>
        </div>
        <input type="text" name="organisation" class="form-control @error('organisation') is-invalid @enderror" id="nameId"
            value="{{$article->organisation}}"
            required="required">
        @error('organisation')
        <div class="alert alert-danger">{{ $message }}</div>
        @enderror
        </div>

        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <label class="input-group-text" for="nameId">Posit</label>
        </div>
        <input type="text" name="position" class="form-control @error('position') is-invalid @enderror" id="nameId"
            value="{{$article->position}}"
            required="required">
        @error('position')
        <div class="alert alert-danger">{{ $message }}</div>
        @enderror
        </div>

        <div class="input-group mb-3">
        <div class="input-group-prepend">
                <label class="input-group-text" for="nameId">Another info</label>
            </div>
            <input type="text" name="another_info" class="form-control @error('another_info') is-invalid @enderror" id="nameId"
                value="{{$article->another_info}}"
                required="required">
            @error('another_info')
            <div class="alert alert-danger">{{ $message }}</div>
            @enderror
            </div>


        <button type="submit" class="btn btn-primary">Отправить</button>
    </form>
@endsection
