import { join } from "https://deno.land/std@0.179.0/path/mod.ts";

if (import.meta.main) {
  const dir = Deno.env.get("DENO_DIR");
  console.log(dir);
  const path = Deno.args[0];
  console.log(join(Deno.cwd(), path));
  Deno.env.set("DENO_DIR", "/");
  await import(join(Deno.cwd(), path));
}
