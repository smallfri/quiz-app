@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Learn More About Russell') }} <button id="lets-begin">{{__('Take a Quiz')}}</button></div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                        <div class="container">
                            <div id="resume"></div>
                        </div>
                        <script src="../js/app.js"></script>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
