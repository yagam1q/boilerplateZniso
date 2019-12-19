<div class="jumbotron p-1 p-md-5 text-white" style="background:#026978; margin-bottom:0px;border-radius:0px;">
    <div class="row">
        <div class="col-md-6">
            <h1 class="display-4 font-italic">ЗНиСО</h1>
            <p class="lead my-3">Научно-практический журнал входит в Перечень ведущих рецензируемых научных
                журналов и изданий ВАК, включен в Научную электронную библиотеку и ...</p>
            <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">О журнале</a></p>
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-2">
            <ul class="navbar-nav btn btn-light">
            @if(config('locale.status') && count(config('locale.languages')) > 1)
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" id="navbarDropdownLanguageLink" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">@lang('menus.language-picker.language') ({{ strtoupper(app()->getLocale()) }})</a>

                    @include('includes.partials.lang')
                </li>
            @endif
            </ul>
        </div>
    </div>
</div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-1">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-md-center" id="navbarSupportedContent">
        <ul class="navbar-nav">
            @guest

                <li class="nav-item">
                    <a class="btn btn-dark nav-link mx-3 text-white  {{ active_class(Route::is('frontend.auth.login')) }}"
                       href="{{route('frontend.auth.login')}}"> @lang('navs.frontend.login') </a>
                </li>
                <li class="nav-item">
                    <a class="btn btn-dark nav-link mx-3 text-white"
                       href="{{route('frontend.auth.register')}}" class="nav-link {{ active_class(Route::is('frontend.auth.register')) }}">@lang('navs.frontend.register')</a>
                </li>
            @else
                <li class="nav-item">
                    <a class="btn btn-dark nav-link mx-3 text-white" href="/">Главная</a>
                </li>
                <li class="nav-item">
                    <a href="{{route('frontend.user.dashboard')}}" class="btn btn-dark nav-link mx-3 text-white {{ active_class(Route::is('frontend.user.dashboard')) }}">@lang('navs.frontend.dashboard')</a>
                </li>
                <li class="nav-item">
                    <a class="btn btn-dark nav-link mx-3 text-white"
                       href="">{{ __('Мои статьи') }}</a>
                </li>
                <li class="nav-item">
                    <a class="btn btn-dark nav-link mx-3 text-white"
                       href="">{{ __('Создать') }}</a>
                </li>
                @can('view backend')
                    <li class="nav-item">
                    &nbsp;<a href="{{ route('admin.dashboard')}}" class="btn btn-danger">
                        <i class="fas fa-user-secret"></i> @lang('navs.frontend.user.administration')
                    </a>
                    </li>
                @endcan
            @endguest
        </ul>
    </div>
</nav>
</div>
