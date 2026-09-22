import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left column */}
        <div className=" flex flex-col items-start gap-6 py-12 lg:py-20 pr-4 sm:pr-6 lg:pr-8 pl-4 sm:pl-6 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Heating &amp; Cooling
          </p>

          <h1 className="max-w-lg font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Comfort for every season
          </h1>

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
        <div >
          <Image 
          src="/images/hero-home.png" 
          alt="Brick home with an outdoor air conditioning unit" 
          fill 
          sizes="(max-width: 768px) 50vw, 100vw"
          className="object-cover object-right"
          preload
          />
        </div>
      </div>
    </header>
  )}