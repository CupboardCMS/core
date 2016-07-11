<?php namespace Cupboard\Core\Facades;

use Illuminate\Support\Facades\Facade;

class CupboardFacade extends Facade {

		/**
		 * Get the registered name of the component.
		 *
		 * @return string
		 */
		protected static function getFacadeAccessor() { return 'Cupboard'; }

}
