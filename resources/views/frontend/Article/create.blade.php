@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))
@section('head_menu_title', 'Добавление новости')
@section('content')
<form action="{{ Route('article.store')}}" method="post">
    @csrf
    @method('POST')
    <div id="app">
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <label style="width:10rem" class="input-group-text" for="nameId">Название статьи</label>
        </div>
        <input type="text" name="name" class="form-control @error('name') is-invalid @enderror" id="nameId"
        {{ old('name') }}    required="required">
        @error('name')
        <div class="alert alert-danger">{{ $message }}</div>
        @enderror
    </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label style="width:8rem" class="input-group-text" for="author">Автор (ы):</label>
            </div>
            <input type="text" name="authors[]" class="form-control @error('authors') is-invalid @enderror" id="author"
            placeholder="Фамилия Имя Отчество" {{ old('authors') }}   required="required">

            @error('authors')
            <div class="alert alert-danger">{{ $message }}</div>
            @enderror
            </div>
            <example-component
            authors="Добавить автора"
            name="authors[]"
            label="Автор (ы)"
            placeholder="Фамилия Имя Отчество"
            ></example-component>

    <div class="input-group mb-3">
    <div class="input-group-prepend">
        <label style="width:8rem" class="input-group-text" for="org">Организация</label>
    </div>
    <input type="text" name="organisation[]" class="form-control @error('organisation') is-invalid @enderror" id="org"
    placeholder="Автор"  {{ old('organisation') }}  required="required">
    @error('organisation')
    <div class="alert alert-danger">{{ $message }}</div>
    @enderror
    </div>
        <example-component
        authors="Добавить организацию"
        name="organisation[]"
        label="Организация"
        placeholder="Автор "
        ></example-component>

    <div class="input-group mb-3">
    <div class="input-group-prepend">
        <label style="width:8rem" class="input-group-text" for="posit">Должность</label>
    </div>
    <input type="text" name="position[]" class="form-control @error('position') is-invalid @enderror" id="posit"
    placeholder="Автор" value="{{ old('position') }}" required="required">
    @error('position')
    <div class="alert alert-danger">{{ $message }}</div>
    @enderror
    </div>
        <example-component
        authors="Добавить должность"
        name="position[]"
        label="Должность"
        placeholder="Автор"
        ></example-component>
    </div>
    <div class="input-group mb-3">
    <div class="input-group-prepend">
            <label style="width:rem" class="input-group-text" for="info">Дополнительная информация</label>
    </div>
        <textarea name="another_info" class="form-control @error('another_info') is-invalid @enderror" id="" cols="30" rows="3" required="required">{{ old('another_info') }}</textarea>
        @error('another_info')
        <div class="alert alert-danger">{{ $message }}</div>
        @enderror
    </div>

    <div class="form-group row">
        <label class="col-lg-3 col-form-label form-control-label">Файл статьи</label>
        <div class="col-lg-12">
            <input type="file" name="upload" class="form-control @error('upload') is-invalid @enderror" id="" style="padding-bottom: 2.2rem;">
        </div>
        @error('upload')
        <div class="alert alert-danger">{{ $message }}</div>
        @enderror


    </div>


    <button type="submit" class="btn btn-primary">Отправить</button>
</form>
@endsection
