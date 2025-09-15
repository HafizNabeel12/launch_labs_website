
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

const FooterSimple = () => {
  return (
    <div className="bg-gray-100 py-6 px-4 xl:px-0">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between">
        {/* Logo og opphavsrett */}
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/" className="text-lg font-semibold text-orange-600">
            LAUNCHLABS
          </Link>
          <span className="ml-4 text-sm text-gray-600">
            &copy; {CURRENT_YEAR} | Alle rettigheter reservert.
          </span>
        </div>

       
        </div>
      </div>
   
  );
};

export default FooterSimple;
