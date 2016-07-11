<?php

Cupboard::setupViews();

$cupboardControllers = 'Cupboard\Core\Controllers\\';

Route::group(Config::get('core::routes.blog_group_rules'), function() use ($cupboardControllers)
{
	Route::get('/', array('uses' => $cupboardControllers.'HomeController@index', 'as' => 'cupboard.index'));
	Route::get('page/{slug}', array('uses' => $cupboardControllers.'PageController@show', 'as' => 'cupboard.pages.show'));
	Route::get('post/{slug}', array('uses' => $cupboardControllers.'PostController@show', 'as' => 'cupboard.posts.show'));
	Route::get('post/preview/{id}', array('uses' => $cupboardControllers.'PostController@preview', 'as' => 'cupboard.posts.preview'));
	Route::get('tag/{tag}', array('uses' => $cupboardControllers.'PostController@tag', 'as' => 'cupboard.posts.tags'));
	Route::get('archive', array('uses' => $cupboardControllers.'PostController@index', 'as' => 'cupboard.posts.archive'));
	Route::get('rss', array('uses' => $cupboardControllers.'RssController@index', 'as' => 'cupboard.posts.rss'));

	/**
	 * Password reset
	 */
	Route::get('password/reset/{token}', function($token)
	{
		return View::make('core::admin.auth.reset')->with('token', $token);
	});

	/**
	 * Password reset Success
	 */
	Route::post('password/reset/{token}', function()
	{
		$credentials = array('email' => Input::get('email'));

		return Password::reset($credentials, function($user, $password)
		{
			$user->password = Hash::make($password);
			$user->save();
			return Redirect::to('cupboard');
		});
	});
});

Route::group(Config::get('core::routes.admin_group_rules'), function() use ($cupboardControllers)
{
	Route::get('/', array('uses' => $cupboardControllers.'AdminController@index', 'as' => 'cupboard.admin.index'));
	Route::get('logout', array('uses' => $cupboardControllers.'LoginController@destroy', 'as' => 'cupboard.admin.logout'));
	Route::get('login', array('uses' => $cupboardControllers.'LoginController@create', 'as' => 'cupboard.admin.login'));
	Route::post('login', array('uses' => $cupboardControllers.'LoginController@store'));
	Route::get('login/remind', array('uses' => $cupboardControllers.'LoginController@remindForm', 'as' => 'cupboard.admin.remindForm'));
	Route::post('login/remind', array('uses' => $cupboardControllers.'LoginController@remindSend'));
});

Route::group(Config::get('core::routes.api_group_rules'), function() use ($cupboardControllers)
{
	Route::get('/', array('as' => 'cupboard.api.index'));
	Route::resource('post', $cupboardControllers.'Api\PostController');
	Route::resource('tag', $cupboardControllers.'Api\TagController');
	Route::resource('user', $cupboardControllers.'Api\UserController');
	Route::controller('dropzone', $cupboardControllers.'Api\DropzoneController');
});

if (Config::get('core::cupboard.handles_404')) {
	App::missing(function($exception)
	{
		View::addLocation(public_path().'/'.Config::get('core::cupboard.theme_dir'));
		return Response::view(theme_view('404'), array(), 404);
	});
}

/**
 * Allows themes complete control to over ride routes or add new ones.
 */

if (file_exists($theme_routes = public_path().'/'.Config::get('core::cupboard.theme_dir').'/'.Config::get('core::cupboard.theme').'/routes.php'))
{
  include $theme_routes;
}
