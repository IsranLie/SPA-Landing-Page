import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const images = [
  { title: "portrait-1", url: "/img/portrait-1.jpg" },
  { title: "portrait-2", url: "/img/portrait-2.jpg" },
  { title: "portrait-3", url: "/img/portrait-3.jpg" },
];

export default function HeroSection() {
  return (
    <div className="bg-neutral-600 text-white px-6 md:px-14 lg:px-28 pt-10 md:pt-0">
      {/* Kontainer Utama: flex-col di mobile, flex-row di desktop */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Kontainer untuk Teks dan Gambar Mobile */}
        {/* Ini akan menjadi kolom tersendiri di mobile, dan akan mengambil setengah lebar di desktop */}
        <div className="md:w-1/2 flex flex-col md:items-start md:text-left">
          {/* Ditambahkan flex-col di sini */}
          {/* Teks: Selalu di atas dalam kolom ini */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Discover Modern <br /> Single Property
          </h1>
          <p className="mb-8 text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>
          {/* Tombol: flex-col di mobile, flex-row di sm/desktop */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
            <button className="bg-custom-brown text-md rounded-md py-4 w-full sm:w-[180px] font-semibold hover:bg-amber-700 transition">
              Overview
            </button>
            <button className="border border-gray-200 text-md rounded-md py-4 w-full sm:w-[180px] font-semibold hover:bg-neutral-500 transition">
              Learn More
            </button>
          </div>
          {/* Gambar Mobile (Hanya Tampil di Mobile, Persegi) - Sekarang menggunakan Swiper */}
          <div className="w-full flex justify-center md:hidden relative">
            <div className="relative w-full max-w-[350px]">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]} // Hanya Pagination dan Autoplay untuk mobile
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                  prevEl: ".swiper-button-prev-custom-mobile",
                  nextEl: ".swiper-button-next-custom-mobile",
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full aspect-square object-cover rounded-lg shadow-lg relative z-10"
                style={{ position: "relative", bottom: "-50px" }}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Tombol navigasi tepat di tepi gambar */}
              <div className="swiper-button-prev-custom-mobile absolute top-[60%] -translate-y-1/2 -left-6 bg-custom-brown rounded-full text-white p-2 cursor-pointer z-20">
                <RiArrowLeftSLine size={24} />
              </div>
              <div className="swiper-button-next-custom-mobile absolute top-[60%] -translate-y-1/2 -right-6 bg-custom-brown rounded-full text-white p-2 cursor-pointer z-20">
                <RiArrowRightSLine size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Gambar Desktop (Hanya Tampil di Desktop, Proporsi Asli) - Sekarang menggunakan Swiper */}
        <div className="md:w-1/2 hidden md:flex justify-end relative">
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]} // Navigation, Pagination, dan Autoplay untuk desktop
              spaceBetween={0}
              slidesPerView={1}
              navigation={{
                prevEl: ".swiper-button-prev-custom-desktop",
                nextEl: ".swiper-button-next-custom-desktop",
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="w-[400px] md:w-[400px] h-[550px] rounded-lg shadow-lg relative z-10" // Sesuaikan tinggi sesuai kebutuhan
              style={{ position: "relative", bottom: "-100px" }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Tombol navigasi tepat di tepi gambar */}
            <div className="swiper-button-prev-custom-desktop absolute top-[70%] -translate-y-1/2 -left-6 bg-custom-brown rounded-full text-white p-2 cursor-pointer z-20">
              <RiArrowLeftSLine size={24} />
            </div>
            <div className="swiper-button-next-custom-desktop absolute top-[70%] -translate-y-1/2 -right-6 bg-custom-brown rounded-full text-white p-2 cursor-pointer z-20">
              <RiArrowRightSLine size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
