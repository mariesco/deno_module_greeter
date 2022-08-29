export declare enum Greeting {
    Hello = "Hello",
    Hi = "Hi",
    GoodEvening = "Good evening"
}
/**
 * This function creates a greeting based on the name and the greeting parameter specified.
 */
export declare function greet(name: string, greeting?: Greeting): string;
