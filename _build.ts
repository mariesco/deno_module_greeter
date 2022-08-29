import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";

await emptyDir("./npm")

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: "dev",
  },
  package: {
    //package.json properties
    name: "@mariesco/DenoModuleGreeter",
    version: Deno.args[0],
    description: "a Deno project for try write universal modules for Deno, Node, and browser",
    license: "MIT",
  }
})

Deno.copyFileSync("README.md", "npm/README.md");
