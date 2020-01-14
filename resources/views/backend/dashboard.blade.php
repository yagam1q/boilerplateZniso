@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('strings.backend.dashboard.title'))

@push('after-styles')
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css">
    <style>
    .dataTables_filter {
    width: 50%;
    float: right;
    text-align: right;
    }
    </style>
@endpush

@section('content')
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <strong>@lang('strings.backend.dashboard.welcome') {{ $logged_in_user->name }}!</strong>
                </div><!--card-header-->
                <div class="card-body">

                    <table id="example" class="display" style="width:100%">
                        <thead>
                        <tr>
                            <th>Дата поступления</th>
                            <th>Иднт. Номер</th>
                            <th>Название</th>
                            <th>Статус</th>
                            <th>Организация</th>
                        </tr>
                        </thead>
                        <tfoot>
                        <tr>
                            <th>Дата поступления</th>
                            <th>Иднт. Номер</th>
                            <th>Название</th>
                            <th>Статус</th>
                            <th>Организация</th>
                        </tr>
                        </tfoot>
                    </table>

                </div><!--card-body-->
            </div><!--card-->
        </div><!--col-->
    </div><!--row-->
    @push('after-scripts')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.8.4/moment.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>

    <script src="https://cdn.datatables.net/plug-ins/1.10.20/dataRender/datetime.js"></script>
    <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js"></script>

    <script>
        $(document).ready(function() {
            $('#example').DataTable( {
                "processing": true,
                "serverSide": true,
                "ajax": {
                    "url": "/api/articles",
                    "type": "GET"
                },
                "order": [[ 1, "desc" ]],
                columnDefs:[{targets:0, render:function(data){
                        return moment(data).format('L');
                    }}],

                "columns": [
                    { "data" : "created_at"},
                    { "data" : "id"},
                    { "data": "name" },
                    { "data": "status" },
                    { "data": "organisation" },
                ],
                "language": {
                    "url": "https://cdn.datatables.net/plug-ins/1.10.20/i18n/Russian.json"
                },


            } );
            var table = $('#example').DataTable();

            $('#example tbody').on( 'dblclick', 'tr', function () {
                if ( $(this).hasClass('selected') ) {
                    $(this).removeClass('selected');
                }
                else {
                    table.$('tr.selected').removeClass('selected');
                    $(this).addClass('selected');
                    var uid = table.row( this ).data().id;
                    window.open("/admin/article/"+uid+"/edit" ,"_blank")
                }
            } );

            $('#button').click( function () {
                table.row('.selected').remove().draw( false );
            } );
        } );
    </script>
    @endpush

@endsection
