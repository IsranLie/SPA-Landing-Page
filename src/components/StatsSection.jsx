import { RiStarFill } from "react-icons/ri";
import { PiMapPinAreaFill } from "react-icons/pi";

export default function StatsSection() {
  return (
    <div className="py-6 px-10 md:px-14 lg:px-28">
      <div className="flex gap-10 bg-white">
        <div className="text-black">
          <span className="text-3xl font-semibold flex items-center gap-2">
            <PiMapPinAreaFill className="h-8 w-8 text-amber-600" />
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
      </div>
    </div>
  );
}
