import { RiCheckLine } from "react-icons/ri";

const overviews = [
  {
    title: "Awesome Features",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
  },
  {
    title: "Luxury Property",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
  },
];

export default function OverviewSection() {
  return (
    <div className="bg-custom-black py-16 px-6 md:px-14 lg:px-28">
      {/* Text */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="md:w-1/2">
          <h3 className="font-semibold mb-2 text-white tracking-wide">
            Overview
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
            See Our Property Benefits by Preview Video Below
          </h2>
        </div>
        <div className="md:w-1/2">
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>
        </div>
      </div>

      <div className="w-full h-[400px] py-6">
        <iframe
          src="https://www.youtube.com/embed/PpeE86P9TnA?si=nxGO9usSrzz4kXYv"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-md shadow w-full h-full"
        ></iframe>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 py-4">
        {overviews.map((overview, index) => (
          <div key={index} className="md:w-1/2">
            <h2 className="font-bold mb-4 text-white leading-snug">
              {overview.title}
            </h2>
            <p className="text-gray-300">{overview.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
