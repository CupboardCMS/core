this["JST"] = this["JST"] || {};

this["JST"]["account/edit/templates/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form class="form-horizontal center">\n  <div id="js-errors" class="hide">\n    <div class="alert alert-error">\n      <button type="button" class="close" data-dismiss="alert">×</button>\n      <span></span>\n    </div>\n  </div>\n  <div class="alert alert-success hide">\n    ' +
((__t = ( Lang.account_saved )) == null ? '' : __t) +
'\n  </div>\n  <div class="control-group">\n    <label class="control-label" for="first_name">' +
((__t = ( Lang.account_first_name )) == null ? '' : __t) +
'</label>\n    <div class="controls">\n      <input type="text" id="first_name" name="first_name" placeholder="' +
((__t = ( Lang.account_first_name )) == null ? '' : __t) +
'">\n    </div>\n  </div>\n  <div class="control-group">\n    <label class="control-label" for="last_name">' +
((__t = ( Lang.account_last_name )) == null ? '' : __t) +
'</label>\n    <div class="controls">\n      <input type="text" id="last_name" name="last_name" placeholder="' +
((__t = ( Lang.account_last_name )) == null ? '' : __t) +
'">\n    </div>\n  </div>\n  <div class="control-group">\n    <label class="control-label" for="email">' +
((__t = ( Lang.account_email )) == null ? '' : __t) +
'</label>\n    <div class="controls">\n      <input type="text" id="email" name="email" placeholder="' +
((__t = ( Lang.account_email )) == null ? '' : __t) +
'">\n    </div>\n  </div>\n  <div class="control-group">\n    <label class="control-label" for="password">' +
((__t = ( Lang.account_password )) == null ? '' : __t) +
'</label>\n    <div class="controls">\n      <input id="password" type="password" name="password" value="">\n      <span class="help-block">' +
((__t = ( Lang.account_password_keep )) == null ? '' : __t) +
'</span>\n    </div>\n  </div>\n  <div class="control-group">\n    <div class="controls">\n      <button type="submit" class="btn save">' +
((__t = ( Lang.account_save )) == null ? '' : __t) +
'</button>\n    </div>\n  </div>\n</form>\n';

}
return __p
};

this["JST"]["account/list/templates/grid.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="holder"></div>\n<button class="btn add-new"><i class="icon-plus-sign"></i> ' +
((__t = ( Lang.account_add_new )) == null ? '' : __t) +
'</button>';

}
return __p
};

this["JST"]["account/list/templates/item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<a href="#" class="details">\n  <img src="" class="avatar img-polaroid" width="100" height="100">\n  ' +
((__t = ( first_name )) == null ? '' : __t) +
' ' +
((__t = ( last_name )) == null ? '' : __t) +
'\n</a>\n';
 if (canDelete()) { ;
__p += '\n  <a href="#" class="delete" title="' +
((__t = ( Lang.account_delete )) == null ? '' : __t) +
'"><i class="icon-trash"></i></a>\n';
 } ;
__p += '\n';

}
return __p
};

this["JST"]["account/new/templates/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form class="form-horizontal center">\n  <div id="js-errors" class="hide">\n    <div class="alert alert-error">\n      <button type="button" class="close" data-dismiss="alert">×</button>\n      <span></span>\n    </div>\n  </div>\n  <div class="alert alert-success hide">\n    ' +
((__t = ( Lang.account_saved )) == null ? '' : __t) +
'\n  </div>\n  <div class="control-group">\n    <label class="control-label" for="first_name">' +
((__t = ( Lang.account_first_name )) == null ? '' : __t) +
'</label>\n    <div class="controls">\n      <input type="text" id="first_name" name="first_name" placeholder="' +
((__t = ( Lang.account_first_name )) == null ? '' : __t) +
'">\n    </div>\n  </div>\n  <div class="control-group">\n    <label class="control-label" for="last_name">' +
((__t = ( Lang.account_last_name )) == null ? '' : __t) +
'</label>\n    <div class="controls">\n      <input type="text" id="last_name" name="last_name" placeholder="' +
((__t = ( Lang.account_last_name )) == null ? '' : __t) +
'">\n    </div>\n  </div>\n  <div class="control-group">\n    <label class="control-label" for="email">' +
((__t = ( Lang.account_email )) == null ? '' : __t) +
'</label>\n    <div class="controls">\n      <input type="text" id="email" name="email" placeholder="' +
((__t = ( Lang.account_email )) == null ? '' : __t) +
'">\n    </div>\n  </div>\n  <div class="control-group">\n    <label class="control-label" for="password">' +
((__t = ( Lang.account_password )) == null ? '' : __t) +
'</label>\n    <div class="controls">\n      <input id="password" type="password" name="password" value="">\n    </div>\n  </div>\n  <div class="control-group">\n    <label class="control-label" for="password_confirm">' +
((__t = ( Lang.account_password_confirm )) == null ? '' : __t) +
'</label>\n    <div class="controls">\n      <input id="password_confirm" type="password" name="password_confirm" value="">\n    </div>\n  </div>\n  <div class="control-group">\n    <div class="controls">\n      <button type="submit" class="btn save">' +
((__t = ( Lang.account_add )) == null ? '' : __t) +
'</button>\n    </div>\n  </div>\n</form>\n';

}
return __p
};

this["JST"]["header/list/templates/header.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<nav>\n  <ul>\n    <li><a class="write" href="#"><i class="fa fa-plus"></i> ' +
((__t = ( Lang.write )) == null ? '' : __t) +
'</a></li>\n    <li><a class="posts" href="#post"><i class="fa fa-list"></i> ' +
((__t = ( Lang.posts )) == null ? '' : __t) +
'</a></li>\n    <li><a class="accounts" href="#accounts"><i class="fa fa-user"></i> ' +
((__t = ( Lang.accounts )) == null ? '' : __t) +
'</a></li>\n    <li><a href="' +
((__t = ( logoutUrl() )) == null ? '' : __t) +
'"><i class="fa fa-power-off"></i> ' +
((__t = ( Lang.logout )) == null ? '' : __t) +
'</a></li>\n  </ul>\n</nav>\n';

}
return __p
};

this["JST"]["post/_base/templates/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '    <form>\n        <input class="js-active" id="active" name="active" type="hidden" value="1">\n    </form>\n    <div class="field pull-right">\n        <div class="btn-group pull-right">\n            <button class="btn btn-sm btn-primary publish">' +
((__t = ( submitBtnText() )) == null ? '' : __t) +
'</button> <button class=\n            "btn btn-sm btn-primary dropdown-toggle" data-toggle="dropdown" type="button"><span class="caret"></span>\n            <span class="sr-only">Toggle Dropdown</span></button>\n            <ul class="dropdown-menu" role="menu">\n                <li>\n                    <a class="js-status" data-action="publish" href="#">' +
((__t = ( Lang.post_publish )) == null ? '' : __t) +
'</a>\n                </li>\n                <li>\n                    <a class="js-status" data-action="draft" href="#">' +
((__t = ( Lang.post_save )) == null ? '' : __t) +
'</a>\n                </li>\n                <li class="divider"></li>\n                <li>\n                    <a class="preview" href="' +
((__t = ( previewUrl() )) == null ? '' : __t) +
'" target="_blank">' +
((__t = ( Lang.post_preview )) == null ? '' : __t) +
'\n                    <i class="icon-external-link"></i></a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <form action="/admin/posts/edit/{{ $post->id }}" class="post" id="post-form" method="post" name=\n    "post-form" role="form">\n        <div class="content-area">\n            <textarea id="content" name="content" placeholder="' +
((__t = ( Lang.post_content )) == null ? '' : __t) +
'"></textarea>\n        </div>\n        <div class="form-group">\n            <input class="form-control input-lg" id="title" name="title" placeholder="' +
((__t = ( Lang.post_title )) == null ? '' : __t) +
'" type=\n            "text">\n        </div>\n        <div class="form-group">\n            <input class="form-control" id="slug" name="slug" placeholder="' +
((__t = ( Lang.post_slug )) == null ? '' : __t) +
'" type="text">\n        </div>\n        <div class="form-group author">\n            <select class="form-control" id="js-user" name="user_id">\n                </select>\n        </div>\n        <div class="form-group">\n            <input class="form-control js-date" id="publish_date" name="date" placeholder=\n            "' +
((__t = ( Lang.post_publish_date )) == null ? '' : __t) +
'" type="text" value="">\n        </div>\n        <div class="form-group">\n            <label for="tags">' +
((__t = ( Lang.post_tags )) == null ? '' : __t) +
'</label> <input class="tags" id="js-tags" name="tags" placeholder=\n            "' +
((__t = ( Lang.post_tags )) == null ? '' : __t) +
'" style="width: 100%" type="text" value="">\n        </div>\n    </form>\n    <div id="film-form" style="display: none">\n        <form class="form-inline">\n            <label for="date">Video URL</label><br>\n            <input class="form-control js-film" id="film" name="date" placeholder="http://youtube.com/" type="text"\n            value=""> <button class="btn js-submitfilm btn-sm">' +
((__t = ( Lang.post_publish_date_set )) == null ? '' : __t) +
'</button>\n        </form>\n    </div>\n';

}
return __p
};

this["JST"]["post/list/templates/empty.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="well no-posts">\n  <h3>You do not have any drafts.</h3>\n  <p class="lead">\n    quotes go here.\n  </p>\n\n  <a href="#" class="btn btn-default btn-lg">Start Writing</a>\n</div>';

}
return __p
};

this["JST"]["post/list/templates/grid.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-header">\n  <ul class="nav nav-pills pull-right">\n    <li class="active js-filter" data-type="draft"><a href="#post/draft"><i class="fa fa-edit"></i> &nbsp; Drafts</a></li>\n    <li class="js-filter" data-type="scheduled"><a href="#post/scheduled"><i class="fa fa-calendar"></i> &nbsp; Scheduled</a></li>\n    <li class="js-filter" data-type="published"><a href="#post/published"><i class="fa fa-laptop"></i> &nbsp; Published</a></li>\n  </ul>\n  <h1>Your Posts </h1>\n</div>\n\n<form class="filter form-inline hidden-xs" role="form">\n  <div class="form-group">\n    <input type="text" class="form-control filter" id="js-filter" name="filter" placeholder="Filter">\n  </div>\n</form>\n<table class="table table-hover">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>' +
((__t = ( Lang.post_title )) == null ? '' : __t) +
'</th>\n\t\t\t<th>' +
((__t = ( Lang.post_published )) == null ? '' : __t) +
'</th>\n\t\t</tr>\n\t</thead>\n\t<tbody></tbody>\n</table>\n\n<div class="well no-posts">\n  <h3>You do not have any <span>draft</span> posts.</h3>\n  <p class="lead js-quote"></p>\n  <a href="#" class="btn btn-default btn-lg">Start Writing</a>\n</div>\n';

}
return __p
};

this["JST"]["post/list/templates/item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td class="title">\n  <div class="actions">\n    <a href="#" class="delete" title="' +
((__t = ( Lang.post_delete )) == null ? '' : __t) +
'"><i class="fa fa-trash"></i></a>\n    <a href="#" target="_blank" title="Preview" class="preview"><i class="fa fa-search-plus"></i></a>\n  </div>\n  <a href="#" class="details">' +
((__t = ( title )) == null ? '' : __t) +
'</a>\n</td>\n<td class="date js-format-date" data-date="' +
((__t = ( publish_date )) == null ? '' : __t) +
'">' +
((__t = ( publish_date )) == null ? '' : __t) +
'</td>\n\n';

}
return __p
};