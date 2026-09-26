import Link from "next/link";

export default function HomeContact() {
  return (
    <div className=" max-w-7xl mx-auto w-full flex items-center space-around bg-secondary-foreground">
      <h2 className="text-2xl font-bold text-primary">Let's get your home comfortable!</h2>
      <div>
        <Link href="/contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Contact us
      </Link>
      </div>
      
    </div>
  );
}