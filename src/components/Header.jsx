import {
  RiPhoneFill,
  RiMailFill,
  RiMapPin2Fill,
  RiSearchLine,
  RiGoogleFill,
  RiFacebookCircleFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiDragMoveLine,
} from "react-icons/ri";

export default function Header() {
  return (
    <>
      {/* Baris Kontak di Atas */}
      <div className="hidden px-10 md:px-14 lg:px-28 md:flex justify-between items-center py-4 text-sm text-white bg-neutral-800">
        {/* Bagian Kiri: Info Kontak */}
        <div className="flex items-center space-x-4">
          <a
            href="tel:123-456-7890"
            className="hover:text-gray-300 flex items-center space-x-2"
          >
            <RiPhoneFill className="h-4 w-4" />
            <span>+(1600) 456 7890</span>
          </a>
          <a
            href="mailto:yourid@example.com"
            className="hover:text-gray-300 flex items-center space-x-2"
          >
            <RiMailFill className="h-4 w-4" />
            <span>yourid@example.com</span>
          </a>
          <div className="flex items-center space-x-2">
            <RiMapPin2Fill className="h-4 w-4" />
            <span>123 Fifth Avenue, New York-1000, USA</span>
          </div>
        </div>

        {/* Bagian Kanan: Ikon Media Sosial */}
        <div className="flex items-center space-x-2">
          <a href="#" className="hover:text-gray-400">
            <RiGoogleFill className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <RiFacebookCircleFill className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <RiTwitterFill className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <RiLinkedinBoxFill className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Baris Navigasi Utama */}
      <div className="sticky top-0 z-50 px-10 md:px-14 lg:px-28 flex justify-between  items-center py-4 text-white bg-neutral-700">
        <a
          href="#home"
          className="flex items-center gap-2 text-2xl font-bold italic"
        >
          <RiDragMoveLine className="h-6 w-6" />
          Skatcher
        </a>

        <nav className="hidden md:flex space-x-10 items-center">
          <a
            href="#about"
            className="text-md font-semibold hover:text-gray-300"
          >
            About
          </a>
          <a
            href="#services"
            className="text-md font-semibold hover:text-gray-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-md font-semibold hover:text-gray-300"
          >
            Contact
          </a>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Here"
              className="text-sm rounded-2xl h-10 w-44 pl-4 pr-10 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <RiSearchLine className="absolute inset-y-0 right-3 h-full w-5 text-blue-400 pointer-events-none" />
          </div>
        </nav>

        <button className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
}
