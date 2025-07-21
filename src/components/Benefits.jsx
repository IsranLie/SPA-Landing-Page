import {
  RiWifiFill,
  RiSnowflakeFill,
  RiTv2Line,
  RiArrowRightLine,
} from "react-icons/ri";
import { FaSwimmingPool } from "react-icons/fa";

export default function Benefits() {
  return (
    <div className="bg-white py-16 px-6 md:px-14 lg:px-28">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 flex">
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="group bg-white shadow rounded-xl p-6 hover:shadow-xl transition">
              <div className="flex items-center justify-center w-14 h-14 rounded-full border border-amber-600 mb-4 mx-auto transition group-hover:bg-amber-600">
                <RiSnowflakeFill className="text-amber-600 w-6 h-6 transition group-hover:text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Air Conditioned
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
              <div className="text-amber-600 text-sm font-bold">
                <RiArrowRightLine className="h-4 w-4" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white shadow rounded-xl p-6 hover:shadow-xl transition">
              <div className="flex items-center justify-center w-14 h-14 rounded-full border border-amber-600 mb-4 mx-auto transition group-hover:bg-amber-600">
                <RiWifiFill className="text-amber-600 w-6 h-6 transition group-hover:text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Free Wifi</h3>
              <p className="text-gray-500 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
              <div className="text-amber-600 text-sm font-bold">
                <RiArrowRightLine className="h-4 w-4" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white shadow rounded-xl p-6 hover:shadow-xl transition">
              <div className="flex items-center justify-center w-14 h-14 rounded-full border border-amber-600 mb-4 mx-auto transition group-hover:bg-amber-600">
                <FaSwimmingPool className="text-amber-600 w-6 h-6 transition group-hover:text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Swimming Pool
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
              <div className="text-amber-600 text-sm font-bold">
                <RiArrowRightLine className="h-4 w-4" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="group bg-white shadow rounded-xl p-6 hover:shadow-xl transition">
              <div className="flex items-center justify-center w-14 h-14 rounded-full border border-amber-600 mb-4 mx-auto transition group-hover:bg-amber-600">
                <RiTv2Line className="text-amber-600 w-6 h-6 transition group-hover:text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Television</h3>
              <p className="text-gray-500 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
              <div className="text-amber-600 text-sm font-bold">
                <RiArrowRightLine className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h3 className="font-semibold mb-2 text-amber-600 tracking-wide">
            Benefits
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900 leading-snug">
            Explore More About Our Property & Benefits
          </h2>
          <p className="text-gray-600 mb-2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>

          <h2 className="font-bold mb-2 text-gray-900 leading-snug">
            Awesome Features
          </h2>
          <p className="text-gray-600 mb-2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque.
          </p>
          <h2 className="font-bold mb-2 text-gray-900 leading-snug">
            Luxurious Interior Design
          </h2>
          <p className="text-gray-600 mb-2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque.
          </p>
          <h2 className="font-bold mb-2 text-gray-900 leading-snug">
            Modern Concept
          </h2>
          <p className="text-gray-600 mb-2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque.
          </p>
        </div>
      </div>
    </div>
  );
}
