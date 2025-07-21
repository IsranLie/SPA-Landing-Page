import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-white py-16 px-6 md:px-14 lg:px-28"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/img/square-1.jpg"
            alt="About"
            className="w-[450px] h-auto rounded-md shadow"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h3 className="font-semibold mb-2 text-amber-600 tracking-wide">
            About Us
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 leading-snug">
            Discover an Extraordinary Property With Us
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>

          <div className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a.
          </div>
        </div>
      </div>
    </section>
  );
}
