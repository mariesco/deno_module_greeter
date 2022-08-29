import { greet, Greeting } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.134.0/testing/asserts.ts";

Deno.test("greet default", () => {
  const greeting = greet("Typescript Congress");
  assertEquals(greeting, "Hello Typescript Congress jeje");
});
