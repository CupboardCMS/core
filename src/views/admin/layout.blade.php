<!DOCTYPE html>
<html lang="en">
<head>
  <title>@yield('title') | Cupboard</title>
  <meta name="env" content="{{ App::environment() }}">
  <meta name="token" content="{{ Session::token() }}">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="{{ asset(cupboard_path('admin/style.css')) }}">
</head>
<body>
  <div id="header-region" class="header"></div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div id="js-alert"></div>
        <div id="js-errors" class="alert alert-danger">
           <button type="button" class="close" data-hide="alert" aria-hidden="true">&times;</button>
           <span></span>
        </div>
      </div>
      @yield('content')
      <div id="main-region" class="col-md-12"></div>
    </div>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="{{ asset(cupboard_path('admin/js/jquery.js')) }} "><\/script>')</script>
  <script type="text/javascript" src="{{ asset(cupboard_path('admin/js/structure.js')) }}"></script>
  <script type="text/javascript" src="{{ asset(cupboard_path('admin/js/app.js')) }}"></script>
  @yield('footer.js')
</body>
</html>
