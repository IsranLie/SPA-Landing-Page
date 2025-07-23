import { RiStarFill } from "react-icons/ri";
import { PiMapPinAreaFill } from "react-icons/pi";

export default function StatsSection() {
  return (
    <div className="bg-white mb-6 mt-20 md:mt-10 px-10 md:px-14 lg:px-28 relative z-0">
      <div className="flex gap-10 items-center justify-between md:justify-start">
        <div className="text-custom-black">
          <span className="text-3xl font-semibold flex items-center gap-2">
            <PiMapPinAreaFill className="h-9 w-9 text-custom-brown" />
            4.500
          </span>
          <p className="text-sm mt-1 text-custom-black">Our Square Feets</p>
        </div>
        <div className="text-custom-black">
          <span className="text-3xl font-semibold flex items-center gap-2">
            <RiStarFill className="h-7 w-7 text-custom-brown" />
            5.00
          </span>
          <p className="text-sm mt-1 text-custom-black">Rates by 1.100</p>
        </div>
      </div>
    </div>
  );
}
