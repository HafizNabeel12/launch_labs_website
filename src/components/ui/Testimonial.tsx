import Link from "next/link";
import { Button } from "../Button";

export default function Testimonial() {
  return (
    <section
      id="partner"
      className="relative mx-auto w-full max-w-7xl scroll-my-24 px-6 sm:px-8 py-20 bg-gray-600 rounded-3xl"
    >
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
       
        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Vi støtter deg ikke bare. <br /> Vi bygger sammen med deg.
        </p>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
          Når vi velger å samarbeide med en startup, går vi fullt inn.
          Launchlabs er ikke en passiv støttespiller – vi er en aktiv vekstpartner. <br className="hidden sm:block" />
          Du kommer med visjon og drivkraft. Vi bidrar med verktøy, erfaring og nettverk for å løfte selskapet ditt – og akselerere veien videre.
        </p>
      </div>

      <div className="mt-10 text-center">
        <Link href="https://tally.so/r/3jrjAa">
          <Button
            variant="secondary"
            className="inline-block rounded-full bg-orange-500 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold text-white shadow-md hover:bg-orange-600 transition duration-300"
          >
            Søk nå
          </Button>
        </Link>
      </div>
    </section>
  );
}
