// Avoid `console` errors in older browsers or browsers that do not have.
var log = function (text) {
    // if (!window.console) window.console = {};
    // if (!window.console.log) window.console.log = function () { };
    "use strict";

    if (typeof (console) !== "undefined" && console.log !== undefined) {
        try {
            console.log.apply(console, arguments);
        } catch (e) {
            var log = Function.prototype.bind.call(console.log, console);
            log.apply(console, arguments);
        }
    }
}

// Place any jQuery/helper plugins in here.
