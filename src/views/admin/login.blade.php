@extends('core::admin.layout')

@section('title')
	{{ Lang::get('core::cupboard.login') }}
@stop

@section('content')
	<div id="login-region">
		<h1>{{ Lang::get('core::cupboard.login') }}</h1>
		@if (Session::has('login_errors'))
		<div class="alert alert-block alert-error">
			<p>
				{{ Lang::get('core::cupboard.login_incorrect')}} <a href="{{ url('cupboard/login/remind') }}">{{ Lang::get('core::cupboard.login_forgot') }}</a>
			</p>
		</div>
		@endif
		<form method="post" action="{{ route('cupboard.admin.login') }}" class="form-signin">
				<input class="form-control" type="text" id="inputEmail" name="email" placeholder="{{ Lang::get('core::cupboard.login_email') }}" value="{{ Input::old('email') }}">
				<input class="form-control" type="password" id="inputPassword" name="password" placeholder="{{ Lang::get('core::cupboard.login_password') }}">
				<label class="checkbox pull-left">
                                    <input type="checkbox" name="remember"> {{ Lang::get('core::cupboard.login_remember') }}
                                </label>
			<button type="submit" class="btn btn-lg btn-primary btn-block">{{ Lang::get('core::cupboard.login_sign_in') }}</button>
		</form>
	</div>
@stop

@section('footer.js')

@stop
