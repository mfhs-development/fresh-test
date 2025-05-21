import type { Signal } from "@preact/signals";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-4 p-8 bg-[#efefef] items-center">
      <button
        type="button"
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadowflex gap-4  bg-[#86efac] text-xl"
        onClick={() => props.count.value -= 1}
      >
        -1
      </button>
      <p class="text-3xl tabular-nums font-bold">{props.count}</p>
      <button
        type="button"
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow text-xl"
        onClick={() => props.count.value += 1}
      >
        +1
      </button>
      <h3>Klient-interaktiv räknare</h3>
    </div>
  );
}
