import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js Starter",
  description: "A minimal Next.js 14 App Router starter.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom: "1rem"}}>
            <h1 style={{margin:0}}>Next.js Starter</h1>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/todos">Todos</Link>
            </nav>
          </header>
          <main className="card">{children}</main>
          <footer style={{marginTop: "2rem", opacity:.7}}>
            <small>Built with Next.js 14 (App Router)</small>
          </footer>
        </div>
      </body>
    </html>
  );
}
