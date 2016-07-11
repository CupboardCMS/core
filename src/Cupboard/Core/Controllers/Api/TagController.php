<?php namespace Cupboard\Core\Controllers\Api;

use Cupboard\Core\Controllers\BaseController;

use Response;
use Cupboard\Core\Tag;
use Cupboard\Core\Repositories\PostRepositoryInterface;

class TagController extends BaseController {

	/**
	 * The post repository implementation.
	 *
	 * @var \Cupboard\PostRepositoryInterface  $posts
	 */
	protected $posts;

	/**
	 * Create a new API Tag controller.
	 *
	 * @param PostRepositoryInterface $posts
	 *
	 * @return ApiTagController
	 */
	public function __construct(PostRepositoryInterface $posts)
	{
		parent::__construct();

		$this->posts = $posts;

		$this->beforeFilter('cupboard.auth');
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return Response::json($this->posts->allTags());
	}

}
