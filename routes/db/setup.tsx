import { FreshContext, Handlers } from "$fresh/server.ts";
import { DatabaseSync } from "node:sqlite";

export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext) {
    const db = new DatabaseSync("test.db");
    db.exec(`CREATE TABLE IF NOT EXISTS people (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age INTEGER);`);

    db.exec("DELETE FROM people");
    const rows = db.prepare("SELECT * FROM people").all();
    if (rows.length === 0) {
      db.prepare(`INSERT INTO people (name, age) VALUES (?, ?);`).run(
        "Bob",
        40,
      );
    }

    const resp = await ctx.render();
    return resp;
  },
};

export default function Setup() {
  return (
    <>
      <h1 class="text-4xl py-4 font-bold">DB Setup</h1>
      <p class="my-4">
        När denna sidan laddas så kommer databasen att skapas och tabellen
        "people" att skapas om den inte redan finns. Om tabellen är tom så
        kommer en rad att läggas till en person med namnet Bob och åldern 40.
      </p>
    </>
  );
}
