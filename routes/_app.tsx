import { type PageProps } from "$fresh/server.ts";
import Nav from "../components/nav.tsx";
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Partial } from "$fresh/runtime.ts";
export default function App({ Component }: PageProps) {
  const count = useSignal(3);
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh-test</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body f-client-nav>
        <Nav />
        <div class="container mx-auto p-8">
          <Partial name="body">
            <Component />
          </Partial>
        </div>
        <Counter count={count} />
      </body>
    </html>
  );
}
