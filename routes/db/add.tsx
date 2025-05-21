import { FreshContext, Handlers } from "$fresh/server.ts";
import { DatabaseSync } from "node:sqlite";

export const handler: Handlers = {
  // Handle POST requests to add a new person to the database
  async POST(req: Request, ctx: FreshContext) {
    const db = new DatabaseSync("test.db");
    const formdata = await req.formData();
    const name = formdata.get("name")?.toString();
    const age = formdata.get("age")?.toString();
    // console.log("POST request received", formdata);
    db.prepare(`INSERT INTO people (name, age) VALUES (?, ?);`).run(
      name as string,
      age as string,
    );

    // Redirect to the list page after adding a new person
    const headers = new Headers();
    headers.set("location", "/db/list");
    return new Response(null, {
      status: 303, // See Other
      headers,
    });
  },
};

export default function Add() {
  return (
    <>
      <h1 class="text-4xl font-bold py-4">DB Add</h1>
      <form class="flex gap-4" method="POST">
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="age"
          placeholder="Age"
          required
        />
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add
        </button>
      </form>
    </>
  );
}
