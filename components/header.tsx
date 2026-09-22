import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-12">
          {/* Left column */}
          <div className="flex flex-col items-start gap-6">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Heating &amp; Cooling
            </p>

            <h1 className="max-w-lg font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Comfort for every season
            </h1>

            <p className="max-w-md text-lg text-muted-foreground">
              Heating, cooling, and maintenance for a home that feels
              just right.
            </p>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request Service
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 font-medium text-primary transition-colors hover:bg-primary/10"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right column */}
          <div className="relative aspect-3/2 overflow-hidden rounded-lg">
            <Image
              src="/images/hero-home.png"
              alt="Brick home with an outdoor air conditioning unit"
              fill
              sizes="(min-width: 1280px) 584px, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-right"
              preload
            />
          </div>
        </div>
      </div>
    </header>
  )}