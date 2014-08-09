ngAnnotate = require 'ng-annotate'

module.exports = class NgAnnotateCompiler
  brunchPlugin: yes
  type: 'javascript'
  extenstion: 'js'

  constructor: (config) ->
    @pathRegex = config?.plugins?.ng_annotate?.pathRegex

  optimize: (params, callback) ->
    {data, path} = params

    if @pathRegex?.test path
      result = ngAnnotate data, add: true
      callback result.errors, result.src
    else
      callback null, data


