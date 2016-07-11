<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>@yield('title')</title>
    <link href="{{ asset(theme_path('css/style.css')) }}" rel="stylesheet" media="screen">
  </head>
  <body>
    <div class="container">
      <header>
        <h1><a href="{{ cupboard_url('/') }}">{{ site_title() }}</a></h1>
        <nav>
          <ul>
            <li><a href="{{ cupboard_url('/archive') }}">Posts</a></li>
            <li><a href="{{ cupboard_url('/about') }}">About</a></li>
            <li><a href="{{ cupboard_url('/rss') }}">RSS</a></li>
          </ul>
        </nav>
      </header>
      <div class="content">
        @yield('content')
      </div>
      <footer>
      <p>Powered by <a href="http://cupboardcms.com">Cupboard</a></p>
      </footer>
    </div>
  </body>
</html>
