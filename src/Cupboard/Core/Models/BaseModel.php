<?php namespace Cupboard\Core\Models;

class BaseModel extends \Illuminate\Database\Eloquent\Model
{
    public function getConnection()
    {
        return static::resolveConnection('cupboard');
    }
}
