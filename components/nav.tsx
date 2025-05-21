export default function Nav() {
  return (
    <nav class="p-4 flex gap-4 bg-[#555555] text-white">
      <img
        src="/mfhs-logo.avif"
        height="32"
        alt="Mellansels Folkhögskola Logo"
      />
      <a href="/" f-partial="/">Home</a>
      <a href="/about" f-partial="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/db/setup">DB Setup</a>
      <a href="/db/list">DB List</a>
      <a href="/db/add">DB Add</a>
    </nav>
  );
}
