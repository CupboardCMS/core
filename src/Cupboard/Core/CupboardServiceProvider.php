<?php namespace Cupboard\Core;

use Illuminate\Support\ServiceProvider;
use Config;

class CupboardServiceProvider extends ServiceProvider {

	/**
	 * Indicates if loading of the provider is deferred.
	 *
	 * @var bool
	 */
	protected $defer = false;

	/**
	 * Bootstrap the application events.
	 *
	 * @return void
	 */
	public function boot()
	{
		$this->package('cupboard/core');
		$this->setConnection();
		$this->bindRepositories();
		$this->bootCommands();

		require_once __DIR__.'/../../themeHelpers.php';
		require_once __DIR__.'/../../routes.php';
		require_once __DIR__.'/../../filters.php';
	}

	/**
	 * Bind repositories.
	 *
	 * @return  void
	 */
	protected function bindRepositories()
	{
		$this->app->singleton('Cupboard\Core\Repositories\PostRepositoryInterface', 'Cupboard\Core\Repositories\DbPostRepository');

		$this->app->singleton('Cupboard\Core\Repositories\UserRepositoryInterface', 'Cupboard\Core\Repositories\DbUserRepository');

		$this->app->bind('Cupboard', function()
		{
			return new \Cupboard\Core\Facades\Cupboard(new Repositories\DbPostRepository);
		});
	}

	protected function bootCommands()
	{
		$this->app['cupboard.console.theme'] = $this->app->share(function($app)
		{
			return new Console\ThemeCommand;
		});

		$this->app['cupboard.console.config'] = $this->app->share(function($app)
		{
			return new Console\ConfigCommand;
		});

		$this->app['cupboard.console.migrate'] = $this->app->share(function($app)
		{
			return new Console\MigrateCommand;
		});

		$this->app['cupboard.console.user'] = $this->app->share(function($app)
		{
			return new Console\UserCommand;
		});

		$this->commands('cupboard.console.theme', 'cupboard.console.config', 'cupboard.console.migrate', 'cupboard.console.user');
	}

	public function register(){}

	/**
	 * Get the services provided by the provider.
	 *
	 * @return array
	 */
	public function provides()
	{
		return array();
	}

	/**
	 * Set up the db connection
	 *
	 * @return  void
	 */
	public function setConnection()
	{
		$connection = Config::get('core::database.default');

		if ($connection !== 'default')
		{
			$cupboardConfig = Config::get('core::database.connections.'.$connection);
		}
		else
		{
			$connection = Config::get('database.default');
			$cupboardConfig = Config::get('database.connections.'.$connection);
		}

		Config::set('database.connections.cupboard', $cupboardConfig);
	}

}
