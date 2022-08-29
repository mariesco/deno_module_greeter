import * as dntShim from "./_dnt.test_shims.js";
import { greet, Greeting } from "./mod.js";
import { assertEquals } from "./deps/deno.land/std@0.134.0/testing/asserts.js";

dntShim.Deno.test("greet default", () => {
  const greeting = greet("Typescript Congress");
  assertEquals(greeting, "Hello Typescript Congress jeje again");
});
