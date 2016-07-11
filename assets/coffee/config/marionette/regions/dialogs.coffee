do (Backbone, Marionette) ->

  class Marionette.Region.Dialog extends Marionette.Region

    constructor: ->
      _.extend @, Backbone.Events

    onShow: (view) ->
      @setupBindings view
      options = @getDefaultOptions _.result(view, "dialog")

      # Listen for the destroy callback.
      @$el.on "hidden", =>
        @destroyDialog()
      @$el.on "shown", =>
        Snappy.execute "dialog:shown", view

      @$el.modal options

    getDefaultOptions: (options = {}) ->
      _.defaults options,
        backdrop: true
        keyboard: true
        show: true
        remote: false
        shown: null

    setupBindings: (view) ->
      @listenTo view, "dialog:destroy", @destroyDialog

    destroyDialog: ->
      @stopListening()
      @destroy()
      @$el.modal("hide")
