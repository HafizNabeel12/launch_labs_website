export default function Features() {
  return (
    <section
      aria-label="Solar Technologies Features for Farms"
      id="solutions"
      className="relative mx-auto max-w-8xl scroll-my-24 bg-gray-600 py-16 px-4"
    >
      {/* Vertical lines (if any) */}

      <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-0">
        {/* Left Content */}
        <div className="col-span-2 my-auto px-2">
        
          <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-white md:text-4xl">
        Launchlabs – Mer enn en inkubator.<br />  Vi er din vekstpartner.
          </p>

          <p className="mt-2 text-xl tracking-tighter text-balance text-gray-200 md:text-xl">
        Vi inngår et reelt partnerskap og jobber tett med deg for å utvikle og skalere selskapet ditt. Med vår erfaring, vårt nettverk og kraftfulle AI-verktøy hjelper vi deg å vokse smartere og raskere.
          </p>

          <p className="mt-4 text-balance text-gray-300">
            Som deltaker i Launchlabs får du: <br />  <br />
           1. Tett samarbeid med erfarne gründere og operative rådgivere<br /> <br />
            2. Tilgang til et sterkt nettverk av investorer, eksperter og bransjepartnere <br /> <br />
            3. AI-drevne verktøy og datadrevet innsikt som gir deg et konkurransefortrinn <br /> <br />
            4. Veiledning i møte med offentlig støtteordninger og privat finansiering <br /> <br />
            5. Workshops, faglige samlinger og ressurser som støtter vekst i alle faser
          </p>
        </div>

        {/* Right Image */}
        <div className="col-span-2 flex items-center justify-center px-4">
          <img
            src="/images/hi3.png"
            alt="Launchlabs innovation"
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
