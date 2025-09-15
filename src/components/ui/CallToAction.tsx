export function CallToAction() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-16 px-4">
      <h1 className="text-3xl font-bold text-gray-600 mb-8">Hva Gründere Sier</h1>
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg px-6 py-12 text-center">
        <figure className="mx-auto">
          <svg
            className="h-12 mx-auto mb-4 text-orange-500"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-xl sm:text-2xl font-medium text-gray-500">
              &quot;Launchlabs ga oss struktur, tilgang til investorer og klarhet. De trodde på oss før vi trodde på oss selv.&quot;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <div className="flex items-center divide-x-2 divide-orange-200">
              <div className="pr-3 font-semibold text-gray-900">Robinson Jalut</div>
              <div className="pl-3 text-sm text-gray-600">CEO Innoscribe</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default CallToAction;
