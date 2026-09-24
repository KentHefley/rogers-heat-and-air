import {Snowflake, Flame, Wrench} from "lucide-react";

export default function Offerings() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 py-10 px-5 md:px-20 lg:px-40 xl:px-60">
            <div className="flex flex-col items-center">
                <p className="text-sm font-medium uppercase text-primary">Our Services</p>
                <h2 className="text-4xl font-bold font-serif">How can we help you?</h2>
            </div>
            {/* Cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col align-center rounded-lg border border-border bg-card p-6 shadow-sm">
                    <Snowflake
                    className="size-12 text-primary"
                    strokeWidth={1.5}
                    aria-hidden="true"
                     />
                    <h3 className="mt-4 text-xl font-bold font-serif">Air Conditioning</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Stay cool all summer long. Even on the hottest days.</p>
                </div>
            </div>
            
        </div>

    )
}