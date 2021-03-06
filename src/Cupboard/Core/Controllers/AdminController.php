<?php namespace Cupboard\Core\Controllers;

use View, Config, Input, Auth, Lang;

use Cupboard\Core\Repositories\UserRepositoryInterface;

class AdminController extends BaseController {

	/**
	 * The user repository implementation.
	 *
	 * @var Cupboard\UserRepositoryInterface
	 */
	protected $users;

	/**
	 * Create a new admin controller instance.
	 *
	 * @param UserRepositoryInterface $users
	 *
	 * @return AdminController
	 */
	public function __construct(UserRepositoryInterface $users)
	{
		parent::__construct();

		$this->users = $users;

		$this->beforeFilter('cupboard.auth');
	}

	/**
	 * Get the main admin view.
	 */
	public function index()
	{
		return View::make('core::admin.index')
			->with('users', $this->users->all())
			->with('user', $this->auth->user())
			->with('locale', $this->loadLanguage());
	}

	/**
	 * Load the designated language file
	 */
	protected function loadLanguage()
	{
		$locale = Lang::get('core::cupboard');
		return $locale;
	}
}
