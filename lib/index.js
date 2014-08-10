var NgAnnotateCompiler, ngAnnotate;

ngAnnotate = require('ng-annotate');

module.exports = NgAnnotateCompiler = (function() {
  NgAnnotateCompiler.prototype.brunchPlugin = true;

  NgAnnotateCompiler.prototype.type = 'javascript';

  NgAnnotateCompiler.prototype.extenstion = 'js';

  function NgAnnotateCompiler(config) {
    var _ref, _ref1;
    this.pattern = config != null ? (_ref = config.plugins) != null ? (_ref1 = _ref.ng_annotate) != null ? _ref1.pattern : void 0 : void 0 : void 0;
  }

  NgAnnotateCompiler.prototype.optimize = function(params, callback) {
    var data, path, result, _ref;
    data = params.data, path = params.path;
    if ((_ref = this.pattern) != null ? _ref.test(path) : void 0) {
      result = ngAnnotate(data, {
        add: true
      });
      return callback(result.errors, result.src);
    } else {
      return callback(null, data);
    }
  };

  return NgAnnotateCompiler;

})();
