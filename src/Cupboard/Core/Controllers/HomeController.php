<?php namespace Cupboard\Core\Controllers;

use Schema, View, Config;
use Cupboard\Core\Repositories\PostRepositoryInterface;

class HomeController extends BaseController {

	/**
	 * The post repository implementation.
	 *
	 * @var Cupboard\PostRepositoryInterface
	 */
	protected $posts;

	/**
	 * Create a new Home controller instance.
	 *
	 * @param PostRepositoryInterface $posts
	 *
	 * @return HomeController
	 */
	public function __construct(PostRepositoryInterface $posts)
	{

                if (!Schema::hasTable('services'))
                {
                     header('Location: install');
                     exit;
                }

		parent::__construct();

		$this->posts = $posts;
	}

	/**
	 * Get the Cupboard index.
	 *
	 * @return Response
	 */
	public function index()
	{
		$posts = $this->posts->active(Config::get('core::cupboard.per_page'));

		return View::make($this->theme.'.index', compact('posts'));
	}

}
