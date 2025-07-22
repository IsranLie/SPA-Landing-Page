import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-white py-16 px-6 md:px-14 lg:px-28"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Gambar khusus desktop */}
        <div className="md:w-1/2 hidden md:flex justify-center">
          <img
            src="/img/square-1.jpg"
            alt="About"
            className="w-[500px] h-[300px] rounded-md shadow"
          />
        </div>

        {/* Teks + gambar untuk mobile */}
        <div className="md:w-1/2">
          <h3 className="font-semibold mb-2 text-custom-brown tracking-wide">
            About Us
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 leading-snug">
            Discover an Extraordinary Property With Us
          </h2>

          {/* Gambar khusus mobile, tampil setelah heading utama */}
          <div className="mb-6 md:hidden">
            <img
              src="/img/square-1.jpg"
              alt="About Mobile"
              className="w-full rounded-md shadow"
            />
          </div>

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
