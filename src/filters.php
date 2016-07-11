<?php

Route::filter('cupboard.auth', function()
{
	$auth = Cupboard::getCupboardAuth();

	if ($auth->guest())
	{
		if (Request::ajax()) return Response::make('Unauthorized', 401);

		return Redirect::guest(URL::route('cupboard.admin.login'));
	}
});
