import { useState, useEffect } from "react";
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
  RiCloseLine,
} from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);

  const totalHeaderHeightMobile = "114px";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isSearchOverlayOpen) {
      setIsSearchOverlayOpen(false);
    }
  };

  const toggleSearchOverlay = () => {
    setIsSearchOverlayOpen(!isSearchOverlayOpen);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY;
      setSavedScrollPosition(scrollY);
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.left = "0";
      document.body.style.right = "0";
    } else if (savedScrollPosition !== null) {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.left = "";
      document.body.style.right = "";

      setTimeout(() => {
        window.scrollTo(0, savedScrollPosition);
      }, 0);
    }

    // Cleanup function
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.left = "";
      document.body.style.right = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Contact Info (Mobile View) */}
      <div className="bg-custom-black text-white text-sm py-3 px-6 md:px-14 lg:px-28">
        <div className="flex flex-row flex-wrap justify-center items-center gap-x-2 gap-y-2 md:hidden">
          <div className="flex items-center space-x-1 text-xs">
            <RiPhoneFill className="h-4 w-4" />
            <span>+(1600) 456 7890</span>
          </div>
          <div className="flex items-center space-x-1 text-xs">
            <RiMailFill className="h-4 w-4" />
            <span>yourid@example.com</span>
          </div>
          <div className="flex items-center space-x-1 text-xs">
            <RiMapPin2Fill className="h-4 w-4" />
            <span>123 Fifth Avenue</span>
          </div>
        </div>

        {/* Contact Info (Desktop View) */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a
              href="#"
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

          <div className="flex items-center space-x-2">
            <a href="#" className="hover:text-blue-500">
              <RiGoogleFill className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-blue-500">
              <RiFacebookCircleFill className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-blue-500">
              <RiTwitterFill className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-blue-500">
              <RiLinkedinBoxFill className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Header Navigasi Utama */}
      <div className="sticky top-0 z-50 px-6 sm:px-10 md:px-14 lg:px-28 flex justify-between items-center py-4 text-white bg-neutral-700">
        <a
          href="#home"
          className="flex items-center gap-2 text-2xl font-bold italic hover:text-custom-brown"
        >
          <RiDragMoveLine className="h-6 w-6" />
          Skatcher
        </a>

        {/* Navigasi Desktop */}
        <nav className="hidden md:flex space-x-10 items-center">
          <a
            href="#about"
            className="text-md font-semibold hover:text-custom-brown"
          >
            About
          </a>
          <a
            href="#services"
            className="text-md font-semibold hover:text-custom-brown"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-md font-semibold hover:text-custom-brown"
          >
            Contact
          </a>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Here"
              className="text-sm rounded-2xl h-10 w-44 pl-4 pr-10 text-gray-800 focus:outline-none focus:ring-2 focus:ring-custom-brown"
            />
            <RiSearchLine className="absolute inset-y-0 right-3 h-full w-5 text-blue-400 pointer-events-none" />
          </div>
        </nav>

        {/* Search & Hamburger Button (Mobile View) */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            className="text-white focus:outline-none bg-custom-brown rounded-sm p-2"
            onClick={toggleSearchOverlay}
          >
            <RiSearchLine className="h-full w-7" />
          </button>

          <button
            className="text-white focus:outline-none bg-custom-brown rounded-sm p-2"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <RiCloseLine className="h-full w-7" />
            ) : (
              <HiOutlineMenuAlt3 className="h-full w-7" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* Mobile Navigation Sidebar */}
      <div
        className={`
          md:hidden
          fixed top-0 right-0 z-40
          h-screen w-3/4 sm:w-1/2 md:w-1/3 max-w-sm
          bg-neutral-700 text-white
          py-6 px-6
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-end mb-8">
          <button
            className="text-white p-2 rounded-full hover:bg-neutral-600"
            onClick={toggleMobileMenu}
          >
            <RiCloseLine className="h-8 w-8" />
          </button>
        </div>
        <nav className="flex flex-col space-y-6">
          <a
            href="#about"
            className="text-lg font-semibold hover:text-custom-brown py-2 border-b border-neutral-600 last:border-b-0"
            onClick={toggleMobileMenu}
          >
            About
          </a>
          <a
            href="#services"
            className="text-lg font-semibold hover:text-custom-brown py-2 border-b border-neutral-600 last:border-b-0"
            onClick={toggleMobileMenu}
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-lg font-semibold hover:text-custom-brown py-2 border-b border-neutral-600 last:border-b-0"
            onClick={toggleMobileMenu}
          >
            Contact
          </a>
        </nav>

        {/* Social Icons (sidebar) */}
        <div className="flex items-center justify-center space-x-4 mt-auto py-4 border-t border-neutral-600">
          <a href="#" className="hover:text-blue-500">
            <RiGoogleFill className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-blue-500">
            <RiFacebookCircleFill className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-blue-500">
            <RiTwitterFill className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-blue-500">
            <RiLinkedinBoxFill className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Search Form (Mobile View) */}
      {isSearchOverlayOpen && (
        <div
          className="
            md:hidden
            fixed left-0 right-0 z-[55]
            bg-neutral-700
            py-4 px-6
            transition-all duration-300 ease-in-out
            flex items-center justify-between
          "
          style={{ top: totalHeaderHeightMobile }}
        >
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search Here"
              className="text-lg rounded-full h-12 w-full pl-6 pr-14 text-gray-800 focus:outline-none focus:ring-2 focus:ring-custom-brown"
              autoFocus
            />
            <RiSearchLine className="absolute inset-y-0 right-5 h-full w-6 text-gray-500 pointer-events-none" />
          </div>
          <button
            className="text-white p-2 rounded-full ml-4"
            onClick={toggleSearchOverlay}
          >
            <RiCloseLine className="h-8 w-8" />
          </button>
        </div>
      )}
    </>
  );
}
