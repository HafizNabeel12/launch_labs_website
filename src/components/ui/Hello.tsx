import Link from "next/link";
import { Button } from "../Button";

export default function CallToAction() {
  return (
    <div className="relative mx-auto max-w-5xl flex flex-col items-center justify-center bg-gray-600 rounded-3xl">
      <div className="p-1 w-full bg-white rounded-3xl">
        <div className="rounded-lg bg-white py-10 px-8 sm:px-12">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="text-center">
              <h2 className="block w-full pb-4 font-bold text-gray-600 text-3xl sm:text-4xl lg:text-5xl">
                Klar for å ta neste steg?
              </h2>
              <p className="mt-4 font-medium leading-relaxed tracking-wide text-gray-500 text-lg sm:text-xl">
                Vi samarbeider med gründere som er klare til å bygge seriøst og tenke stort.
                Hvis ambisjonene er reelle og ideen har potensial, hører vi gjerne fra deg
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 w-full">
              <Link href="https://tally.so/r/3jrjAa">
                <Button
                  className="bg-orange-500 text-white button-text flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-300 px-8 py-4 text-sm sm:text-base"
                >
                  Søk nå
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
