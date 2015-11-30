define({
    fxNull: function() {},
    keyboardbind: (function() {
        var _keyboardcallbacks = {};
        document.onkeydown = function(e) {
            var code = e.keyCode;
            if (_keyboardcallbacks[code]) {
                var cbs = _keyboardcallbacks[code];
                for (var i = 0; i < cbs.length; i++) {
                    cbs[i](e);
                }
            }
        }
        return function(keyCode, callback) {
            if(_keyboardcallbacks[keyCode]) {
                _keyboardcallbacks[keyCode].push(callback);
            } else {
                _keyboardcallbacks[keyCode] = [callback];
            }
        }
    })(),
    
});