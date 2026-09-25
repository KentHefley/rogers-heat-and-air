import Image from "next/image";

export default function Process() {
  return (
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border border-border">
<div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
{/* left column */}
<div className="relative aspect-3/2 overflow-hidden rounded-lg">
            <Image
              src="/images/hvac-inspection.png"
              alt="HVAC technician inspecting an outdoor air conditioning unit."
              fill
              sizes="(min-width: 1280px) 584px, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
              preload
            />
          </div>
          {/* right column */}
          <div className="flex flex-col items-start gap-6">
            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                    Our Process
              </p>
              <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
                Know what to expect.
              </h2>
              <p className="max-w-md text-muted-foreground">
                From your first call to the final check, we keep you informed
                every step of the way.
              </p>
            </div>
            <ol className="flex flex-col gap-6">
    <li className="flex items-start gap-4">
      <span
        aria-hidden="true"
        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary"
      >
        1
      </span>

      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Tell us what’s going on</h3>
        <p className="text-muted-foreground">
          Give us a call or request service online. We’ll find a time
          that works for you.
        </p>
      </div>
    </li>

    <li className="flex items-start gap-4">
      <span
        aria-hidden="true"
        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary"
      >
        2
      </span>

      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Understand your options</h3>
        <p className="text-muted-foreground">
          We’ll inspect your system, explain what we find, and review
          the price before work begins.
        </p>
      </div>
    </li>

    <li className="flex items-start gap-4">
      <span
        aria-hidden="true"
        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary"
      >
        3
      </span>

      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Get back to comfortable</h3>
        <p className="text-muted-foreground">
          We’ll complete the work, check your system, and answer your
          questions before we leave.
        </p>
      </div>
    </li>
  </ol>
          </div>
</div>
</div>
  )
}