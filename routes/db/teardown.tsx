import { FreshContext, Handlers } from "$fresh/server.ts";
import { DatabaseSync } from "node:sqlite";

export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext) {
    const db = new DatabaseSync("test.db");
    db.exec("DELETE FROM people");

    const resp = await ctx.render();
    return resp;
  },
};

export default function Teardown() {
  return (
    <div class="px-4 py-8 mx-auto ">
      <h1 class="text-4xl font-bold">Teardown</h1>
      <p class="my-4">
        This is the teardown page.
      </p>
    </div>
  );
}
