import StatsSection from "./StatsSection";
import { RiStarFill, RiMapPin2Fill } from "react-icons/ri";

export default function Home() {
  return (
    <section
      id="home"
      className="scroll-mt-20 bg-neutral-600 text-white py-14 px-6 md:px-14 lg:px-28"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Discover Modern <br /> Single Property
          </h1>
          <p className="mb-8 text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>

          <div className="flex gap-4 mb-10">
            <button className="bg-amber-700 text-md rounded-md py-2 px-6 font-semibold hover:bg-amber-800 transition">
              Overview
            </button>
            <button className="border border-gray-200 text-md rounded-md py-2 px-6 font-semibold hover:bg-neutral-500 transition">
              Learn More
            </button>
          </div>

          {/* Stats Section */}
          {/* <div className="flex gap-10 bg-white">
            <div className="text-black">
              <span className="text-3xl font-semibold flex items-center gap-2">
                <RiMapPin2Fill className="h-7 w-7 text-amber-600" />
                4.500
              </span>
              <p className="text-sm mt-1 text-black">Our Square Feets</p>
            </div>
            <div className="text-black">
              <span className="text-3xl font-semibold flex items-center gap-2">
                <RiStarFill className="h-7 w-7 text-amber-600" />
                5.00
              </span>
              <p className="text-sm mt-1 text-black">Rates by 1.100</p>
            </div>
          </div> */}
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center relative">
          <img
            src="/img/portrait-1.jpg"
            alt="Property"
            className="w-[320px] md:w-[400px] h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* <div>
          <StatsSection />
        </div> */}
      </div>
    </section>
  );
}
