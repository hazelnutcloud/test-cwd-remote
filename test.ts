import { join } from "https://deno.land/std@0.179.0/path/mod.ts";

if (import.meta.main) {
  const path = Deno.args[0];
  await import(`file://${join(Deno.cwd(), path)}`);
}
