import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { DatabaseSync } from "node:sqlite";

interface Person {
  id: number;
  name: string;
  age: number;
}

interface State {
  people: Person[];
}

export const handler: Handlers<State> = {
  async GET(_req: Request, ctx: FreshContext) {
    const db = new DatabaseSync("test.db");
    const rows: Person[] = db.prepare("SELECT id, name, age FROM people")
      .all() as Person[];
    console.log("Rows: ", rows);
    return ctx.render({ people: rows });
  },
};

export default function List(props: PageProps<State>) {
  return (
    <>
      <h1 class="text-4xl font-bold py-4">DB List</h1>
      <ul>
        {props.data.people.map((person) => (
          <li class="flex gap-2 items-center" key={person.id}>
            <p class="">{person.id}</p>
            <h3 class=" font-bold">{person.name}</h3>
            <p class="">{person.age}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
