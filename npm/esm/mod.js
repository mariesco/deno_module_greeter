export var Greeting;
(function (Greeting) {
    Greeting["Hello"] = "Hello";
    Greeting["Hi"] = "Hi";
    Greeting["GoodEvening"] = "Good evening";
})(Greeting || (Greeting = {}));
/**
 * This function creates a greeting based on the name and the greeting parameter specified.
 */
export function greet(name, greeting = Greeting.Hello) {
    return `${greeting} ${name} jeje`;
}
