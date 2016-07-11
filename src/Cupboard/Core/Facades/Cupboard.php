<?php namespace Cupboard\Core\Facades;

use Config, App, View;
use Illuminate\Auth\Guard;
use Illuminate\Auth\EloquentUserProvider;
use Cupboard\Core\Repositories\PostRepositoryInterface;

class Cupboard {

	/**
	 * The post repository implementation.
	 *
	 * @var Cupboard\PostRepositoryInterface
	 */
	protected $postsRepo;

	/**
	 * Create a new cupboard facade instance.
	 *
	 * @param \Cupboard\Facades\Cupboard\PostRepositoryInterface|\Cupboard\Repositories\PostRepositoryInterface $postsRepo
	 *
	 * @return \Cupboard\Facades\Cupboard
	 */
	public function __construct(PostRepositoryInterface $postsRepo)
	{
		$this->postsRepo = $postsRepo;
	}

	/**
	 * Fetch post by slug
	 *
	 * @param string $slug
	 * @return Post
	 */
	public function post($slug)
	{
		return $this->postsRepo->findBySlug($slug);
	}
	
	/**
	 * Fetch Posts
	 *
	 * @param array $params
	 * @return Posts
	 */
	public function posts($params = array())
	{
		return $this->postsRepo->facadeSearch($params);
	}

	/**
	 * Fetch all tags
	 */
	public function tags()
	{
		return $this->postsRepo->allTags();
	}

	/**
	 * Generate a route to a named group
	 *
	 * @param  string $route
	 * @param  mixed $param
	 * @return string
	 */
	public function route($route, $param = null)
	{
		if($route == '/')
		{
    	return route('cupboard.index');
		}
		else
		{
			return \URL::route('cupboard.'.$route, $param);
		}
	}

	public function setupViews()
	{
		View::addLocation(public_path().'/'.Config::get('core::cupboard.theme_dir'));
		foreach (Config::get('core::cupboard.view_dirs') as $dir) {
			View::addLocation($dir);
		}
	}

	public function getCupboardAuth()
	{
		$provider = $this->createEloquentProvider();

		$guard = new Guard($provider, App::make('session.store'), App::make('request'));

		$guard->setCookieJar(App::make('cookie'));

		return $guard;
	}

	protected function createEloquentProvider()
	{
		$model = 'Cupboard\Core\Models\User';

		return new EloquentUserProvider(App::make('hash'), $model);
	}

}
