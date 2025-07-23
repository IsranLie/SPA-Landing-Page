export default function NewsletterSection() {
  return (
    <div className="bg-custom-gray py-16 px-6 md:px-14 lg:px-28">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="w-full md:w-1/2 md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-custom-black leading-snug">
            Subscribe to Our Newsletter
          </h2>
        </div>

        <div className="w-full md:w-1/2">
          <form className="flex flex-col gap-4 md:flex-row md:gap-2">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="block w-full rounded-md text-sm border border-gray-300 px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-custom-brown"
              placeholder="E-mail Address"
            />
            <button
              type="submit"
              className="bg-custom-brown rounded-md py-2 w-full md:w-auto px-6 text-sm font-semibold text-white hover:bg-amber-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
