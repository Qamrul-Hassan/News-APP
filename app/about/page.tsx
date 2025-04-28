import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link> {/* Routes to Home Page */}
      <Link href="/about">About</Link> {/* Routes to About Page */}
    </nav>
  );
}
