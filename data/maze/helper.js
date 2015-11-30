define({
    extend: function() {
        var a = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            var b = arguments[i];
            for (var key in b) {
                if (b.hasOwnProperty(key)) {
                    a[key] = b[key];
                }
            }   
        }
        return a;
    },
    getRandom: function(min, max) {
        return Math.random() * (max - min) + min;
    },
    getRandomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
});