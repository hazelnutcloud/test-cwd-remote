import { join } from "https://deno.land/std@0.179.0/path/mod.ts";

if (import.meta.main) {
  const path = Deno.args[0];
  console.log(join(Deno.cwd(), path));

  await import(join(Deno.cwd(), path));
}
