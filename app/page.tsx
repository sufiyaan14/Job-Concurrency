import Link from "next/link";

export default function HomePage() {
  return (
    <section>
      <h2>Welcome 👋</h2>
      <p>
        This is a minimal Next.js 14 (App Router) TypeScript starter. It includes a couple of
        pages and a demo API route.
      </p>
      <ul>
        <li>Visit the <Link href="/about">About</Link> page.</li>
        <li>Try the <Link href="/todos">Todos</Link> demo with server actions.</li>
        <li>Hit the API at <code>/api/hello</code> to see JSON.</li>
      </ul>
    </section>
  );
}
