// app/about/page.tsx
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page of the News App.</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
