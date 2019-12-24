@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))
@section('head_menu_title', 'Добавление новости')
@section('content')
<form action="{{ Route('article.store')}}" method="post">
    @csrf
    @method('POST')
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <label class="input-group-text" for="nameId">Название статьи</label>
        </div>
        <input type="text" name="name" class="form-control @error('name') is-invalid @enderror" id="nameId"
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
            required="required">
        @error('another_info')
        <div class="alert alert-danger">{{ $message }}</div>
        @enderror
        </div>


    <button type="submit" class="btn btn-primary">Отправить</button>
</form>
@endsection
