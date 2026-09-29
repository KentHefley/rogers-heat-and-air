import Link from "next/link";

export default function HomeContact() {
  return (
    <section
      aria-labelledby="home-contact-heading"
      className="mx-auto w-full max-w-7xl bg-slate-900 px-4 py-4 sm:px-6 lg:px-8 lg:py-6"
    >
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <h2
          id="home-contact-heading"
          className="font-serif text-2xl font-bold text-white sm:text-3xl"
        >
          Let’s get your home comfortable!
        </h2>

        <Link
          href="/contact"
          className="inline-flex w-full shrink-0 items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
        >
          Request Service
        </Link>
      </div>
    </section>
  );
}