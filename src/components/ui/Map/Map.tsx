import { Button } from "@/components/Button";
import Link from "next/link";

export const Map = () => {
  return (
    <section
      id="farm-management"
      aria-labelledby="management-title"
      className="relative w-full max-w-7xl mx-auto scroll-my-24 px-4 sm:px-6 lg:px-8 py-10 sm:py-10"
    >
      <div className="bg-gray-600 rounded-3xl shadow-md px-4 sm:px-8 md:px-16 py-8 sm:py-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
            Hvem vi hjelper
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Er du vårt neste gjennombrudds Startup?
          </h2>
          <p className="mt-6 text-lg sm:text-xl font-semibold text-orange-500">
            Vi inngår partnerskap med gründere og team som:
          </p>
        </div>

        <div className="mt-8 max-w-2xl mx-auto space-y-4 px-2 sm:px-0">
          {[
            {
              question: "Har en idé med stort potensial, prototype eller MVP",
              answer:
                "Du har en tydelig idé og gjerne en tidlig versjon (MVP) av produktet eller tjenesten. Du trenger en strukturert vei videre – med riktig støtte, teknologi og strategi for å komme fra idéstadiet til et vekstklart selskap. Vi hjelper deg med å validere, justere og bygge videre.",
            },
            {
              question:
                "Jobber innen teknologi, AI, bærekraft eller skalerbare tjenester",
              answer:
                "Du bygger løsninger med teknologisk kjerne – gjerne innen AI, automatisering, grønn teknologi eller digitale tjenester med globalt potensial. Vi har spisskompetanse på slike felt og hjelper deg med å løfte produktet fra idé til skalerbar forretningsmodell.",
            },
            {
              question: "Ønsker strukturert støtte, ansvarlighet og fremdrift",
              answer:
                "Du vet at å bygge selskap krever mer enn inspirasjon – det krever tydelige mål, kontinuerlig fremgang og gode beslutninger. Vi tilbyr tett oppfølging, struktur og veiledning gjennom hele reisen – slik at du ikke står alene i det som betyr mest.",
            },
            {
              question: "Ser etter en strategisk partner for å vokse smartere",
              answer:
                "Du ønsker mer enn rådgivning – du vil samarbeide med noen som forstår reisen, deler ambisjonen og bidrar aktivt i utviklingen av selskapet ditt. Vi jobber tett med deg for å styrke strategi, struktur og vekstkapasitet – og er med hele veien fra idé til gjennombrudd.",
            },
          ].map((item, index) => (
            <details
              key={index}
              className="group border border-gray-200 rounded-xl bg-gray-50 shadow-sm"
            >
              <summary className="px-5 py-4 text-base sm:text-lg font-medium text-gray-700 cursor-pointer hover:text-orange-600">
                {item.question}
              </summary>
              <div className="px-5 pb-5 pt-2 text-gray-600 text-sm sm:text-base">
                {item.answer}
              </div>
            </details>
          ))}
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
      </div>
    </section>
  );
};
