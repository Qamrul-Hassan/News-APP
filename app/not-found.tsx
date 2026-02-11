import Image from "next/image";
import Link from "next/link";
import NotFoundImage from "../public/404.jpg";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col items-center rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-10" aria-labelledby="not-found-title">
      <h1 id="not-found-title" className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
        404 - Page not found
      </h1>
      <p className="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
        The page you requested does not exist or may have been moved.
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
        <Image
          src={NotFoundImage}
          alt="Illustration for 404 page not found"
          width={700}
          height={700}
          className="h-auto w-full max-w-xl object-cover"
          priority
        />
      </div>

      <Link
        href="/"
        className="mt-8 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
      >
        Back to homepage
      </Link>
    </section>
  );
}
