## Cupboard

[![Latest Stable Version](https://poser.pugx.org/cupboard/core/version.png)](https://packagist.org/packages/cupboard/core) [![Total Downloads](https://poser.pugx.org/cupboard/core/d/total.png)](https://packagist.org/packages/cupboard/core)

Cupboard is designed to be a very minimal blogging platform with the primary focus on writing. Currently it is a work in progress but you are free to give it a try. (Just be warned this alpha/beta quality). If you have any issues or ideas please report them.

![Cupboard](http://cupboardcms.com/media/cupboard-air-large.png)


Installing Cupboard As A Project
---------------------------------------

Creating a stand-alone Cupboard installation is now as simple as running `composer create-project cupboard/cupboard`. For more information visit [cupboardcms.com](http://cupboardcms.com).

Installing Cupboard In An Existing Laravel Application
---------------------------------------

Installing Cupboard in an existing Laravel application couldn't be easier!

If you have the [Laravel Package Installer](https://github.com/rtablada/package-installer), simply run `php artisan package:install cupboard/core`.

If you do not have the package installer then add  `"cupboard/core": "1.0.*"` to your `composer.json` file and run `composer update`.
Then add `Cupboard\Core\CupboardServiceProvider` to your providers and `'Cupboard' => 'Cupboard\Core\Facades\CupboardFacade'` to your aliases in `app/config/app.php`.

Now the last thing you need to do is publish the necessary files configuration and theme files by running `php artisan cupboard:config`, `php artisan config:publish cupboard/core`, and `php artisan cupboard:themes`.

Configuring the Database Connection
---------------------------------------

CupboardCMS is designed to give you maximum database configuration within existing Laravel applications.
If you would like to use the default database connection from your host app, no configuration is necessary.
However, if you would like to use a separate database connection, this is available in the `app/config/package/cupboard/core/database.php` file.

If the `default` configuration is set to `default` it will use the host application connection. Otherwise, it will use the connection details listed in this `connection` array.

Finally, to migrate to your selected database connection run `php artisan cupboard:migrate`.

Creating Your First User
---------------------------------------

If you are using Cupboard as a package, you will have to create a user.
This is as easy as running `php artisan cupboard:user:create first_name last_name email password`, of course filling in your own details as the arguments.

Using Cupboard
---------------------------------------

By default, your CupboardCMS blog will be located in your applications index.
The administration panel will be located at `/cupboard`.

Both of these routes can be configured using route group rules from the `app/config/package/cupboard/core/routes.php` file.

Theming Cupboard
---------------------------------------
By default, your theme files are located in `public/themes`.
You can modify these themes or create your own using the default themes as a guide.
The configuration for your themes is located in `app/config/packages/cupboard/core/cupboard.php` in the `theme` option.
