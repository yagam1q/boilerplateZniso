@extends('backend.layouts.app')

@section('title', $article->name . ' - редактирование статьи |' . $article->name . app_name() )


@section('content')
    <div class="card w-80">
        <div class="card-header">Форма редактирования новости (находиться в процессе разработки)</div>
        <form action="" method="post">
            <div class="card-body">

                <div class="row py-1">
                    <div class="col-3 border-right">
                        <div class="alert alert-primary" role="alert">
                            Иднт. Номер: <br> <b><i>{{$article->id}}</i></b>
                        </div>
                    </div>
                    <div class="col-3 border-right">
                        <div class="alert alert-primary" role="alert">
                            Дата поступления: <br> <b><i>{{ date('d.m.Y h:i:s' , strtotime($article->created_at)) }}</i></b>
                        </div>
                    </div>

                    <div class="col-3 border-right">
                        <div class="row">
                            <div class="col-9"><div class="alert alert-success" role="alert"> Согласие на обработку персональных данных</div></div>
                            <div class="col-3"><button class="btn btn-success" disabled><i class="fas fa-check-square"></i> Есть</button></div>
                        </div>
                    </div>

                    <div class="col-3 border-right">
                        <div class="row">
                            <div class="col-7"><div class="alert alert-success" role="alert"> Наличие файла<br> статьи</div></div>
                        <div class="col-5">
                            @if(!empty($article->fileName))
                            <a target="_blank" href="/storage/data/
                            {{Auth::user()->id .'/' . $article->fileName}}
                            " class="btn btn-success" disabled><i class="fas fa-download"></i><br> Скачать</a>
                            @else
                            Файл не прикреплен
                            @endif
                        </div>
                        </div>
                    </div>
                </div>


                <div class="row py-3">
                    <div class="col-4">Название статьи:</div>
                    <div class="col-8"><input type="text" class="form-control" value="{{$article->name}}">
                    </div>

                </div>
                <div class="row py-3">
                    <div class="col-4">Авторы</div>
                    <div class="col-8"><input type="text" class="form-control" value="{{$article->authors}}">

                    </div>
                </div>
                <div class="row py-3">
                    <div class="col-4">Организация</div>
                    <div class="col-8">
                        @php $orgs = explode("~~; " , $article->organisation ) @endphp
                        @foreach ($orgs as $org)
                        <input type="text" class="form-control mb-1" value="{{$org}}">
                        @endforeach
                    </div>
                </div>
                <div class="row py-3">
                    <div class="col-4">Должность</div>
                    <div class="col-8"><input type="text" class="form-control" value="{{$article->position}}">

                    </div>
                </div>
                <div class="row py-3 border">
                    <div class="col-4">Сообщение</div>
                    <div class="col-8">
                        <textarea name="" class="form-control" id="" cols="30" rows="5">{{$article->anoteher_info}}</textarea>

                    </div>
                </div>
                <div  id="app">
                    <email-notify
                        text="Отказ в принятии рукописи"
                        name=""
                        stl="row py-3 alert alert-secondary"
                        :inv= "[
                        {name: 'Выбрать', id: '0'},
                        {name: 'Статья не носит научно-практической и теоретической значимости по основным научным направлениям журнала', id: '1'},
                        {name: 'Название статьи не соответствует УДК, поставленному автором', id: '2'},
                        {name: 'Отсутствие в статье контактной информации', id: '3'},
                        ]"
                    ></email-notify>

                    <email-notify
                        text="Возврат на доработку"
                        name=""
                        stl="row py-3 alert alert-info"
                        :inv= "[
                        {name: 'Выбрать', id: '0'},
                        {name: 'Несоответствие требованиям к научному содержанию', id: '1'},
                        {name: 'Некорректное описание исследования (либо описание некорректного с научной точки зрения исследования, его параметров и критериев)', id: '2'},
                        {name: 'Использование устаревшей литературы, учебников', id: '3'},
                        {name: 'Отсутствие ссылок на свежие публикации в научных журналах по аналогичной тематике ', id: '4'},
                        {name: 'Название не соответствует представленному материалу', id: '5'},
                        {name: 'В названии содержатся авторские, не общепринятые термины и определения, требующие специальных разъяснений', id: '6'},
                        {name: 'Название статьи отражает наименование интеллектуального и/или материального «продукта» (в частности, название проекта, организации, массовой игры и т. д.), что придает ему рекламный характер', id: '7'},
                        {name: 'Название дублирует название данного журнала или другого известного научного издания', id: '8'},
                        ]"
                    ></email-notify>

                <div class="row py-3 alert alert-info">
                    <div class="col-3">Дата отправки на рецензию</div>
                    <div class="col-7">
                        <input type="date" id="date_sended"  class="form-control form-control-sm w-25 pr-3 mr-3" disabled value="" style="float:left">
                        <select name="" id="list" class="ml-3">
                            <option value="fragmaster1995@gmail.com">GMAIL test</option>
                            <option value="pudovkinms@fcgie.ru">Пудовкин М.С.</option>
                            <option value="tsymlyakovav@fcgie.ru">Цымляков А.В.</option>
                            <option value="makarevichev@fcgie.ru">Макаревич Е.В.</option>
                            <option value="ivanovaan@fcgie.ru"> Иванова А.Н.</option>
                        </select>
                    </div>

                    <div class="col-2">
                        <button id="btn_del" type="button" class="btn btn-success" data-login="" data-article="" data-sfile="" data-id="" disabled><i class="fas fa-envelope-open"></i> Отправить e-mail</button>

                    </div>

                    <div class="col-2">
                        <button type="button" class="btn btn-success" onclick="sendEmail()" disabled ><i class="fas fa-envelope-open"></i> Отправить e-mail</button>
                    </div>

                </div>
                <div class="row py-3 alert alert-info">
                    <div class="col-3">Дата получения рецензии</div>
                    <div class="col-7">
                        <input type="date" id="date_recenz"  class="form-control form-control-sm w-25 pr-3" value="" style="float:left">   <input type="button" id="currDate1" class="ml-3 btn btn-outline-success" value="Текущая дата">
                    </div>
                    <div class="col-2">
                        <button id="get_rev" type="button" class="btn btn-success" data-login="" data-article="" data-sfile="" data-id="" disabled><i class="fas fa-save"></i> Сохранить</button>
                    </div>
                </div>

                <div class="row py-3">
                    <div class="col-9">
                        <update-post
                        article_id="{{$article->id}}"
                        ></update-post>
                    </div>
                    <div class="col-3">

                    </div>
                </div>
            </div>
            </div>
        </form>

    </div>
@endsection

@push('after-scripts')

<script>
    function update(){
        alert('asd');
    }
</script>

@endpush
