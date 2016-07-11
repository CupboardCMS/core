@extends('core::admin.layout')

@section('title')
  {{ Lang::get('core::cupboard.forgot_password') }}
@stop

@section('content')
  <div id="login-region">
    <h1>{{ Lang::get('core::cupboard.forgot_password') }}</h1>
    @if (Session::has('error'))
      <div class="alert alert-block alert-error">
        <p>
          {{ trans(Session::get('reason')) }}
          {{ trans(Session::get('core::reason')) }}
        </p>
      </div>
    @elseif (Session::has('success'))
      <div class="alert alert-block alert-success">
        <p>{{ Lang::get('core::cupboard.forgot_sent') }}</p>
      </div>
    @endif

    <form method="post" action="/cupboard/login/remind" class="form-horizontal">
      <p><input type="text" id="inputEmail" name="email" placeholder="{{ Lang::get('core::cupboard.account_email') }}"></p>
      <button type="submit" class="btn">{{ Lang::get('core::cupboard.forgot_send') }}</button>
      </div>
    </form>
  </div>
@stop
