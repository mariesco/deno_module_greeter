"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = exports.Greeting = void 0;
var Greeting;
(function (Greeting) {
    Greeting["Hello"] = "Hello";
    Greeting["Hi"] = "Hi";
    Greeting["GoodEvening"] = "Good evening";
})(Greeting = exports.Greeting || (exports.Greeting = {}));
/**
 * This function creates a greeting based on the name and the greeting parameter specified.
 */
function greet(name, greeting = Greeting.Hello) {
    return `${greeting} ${name} jeje`;
}
exports.greet = greet;
