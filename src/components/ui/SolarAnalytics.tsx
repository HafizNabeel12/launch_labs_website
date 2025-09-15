export function SolarAnalytics() {
  return (
    <div className="max-w-screen-xl mx-auto py-10 px-2 lg:py-10 lg:px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl tracking-tight font-bold text-gray-600">
          Slik Fungerer Det
        </h2>
        <h3 className="text-gray-600 pt-3">
Vi har gjort prosessen enkel – slik at vi raskt kan finne ut om vi er en  <br />god match og komme i gang med å bygge noe sammen.
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-600">
        {[
          {
            title: "1. Søk",
            desc: "Fortell oss hvem dere er, hva dere bygger og hvorfor. Vi er nysgjerrige på ideen, teamet og drivkraften bak prosjektet.",
          },
          {
            title: "2. Samtale",
            desc: "Vi tar en uformell prat for å forstå ambisjonene, fremdriften og hvordan vi kan bidra på best mulig måte.",
          },
          {
            title: "3. Kom i Gang",
            desc: "Er vi en match, setter vi igang setter vi i gang. Sammen definerer vi mål, retning og neste steg i utviklingen.",
          },
          {
            title: "4. Voks Sammen med Oss",
            desc: "Vi blir en aktiv partner i prosessen – og bidrar med støtte, struktur og verktøy som hjelper dere å vokse raskere og tryggere.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="border-l-4 border-orange-500 bg-white rounded-br-xl p-6 shadow-sm"
          >
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
