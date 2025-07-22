import {
  RiSearchLine,
  RiGoogleFill,
  RiFacebookCircleFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiDragMoveLine,
  RiArrowDropRightLine,
} from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-custom-black text-white py-12">
      <div className="container mx-auto px-10 lg:px-20">
        {/* Adjusted grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Skatcher column - takes more space on larger screens */}
          <div className="col-span-2 lg:col-span-2">
            {" "}
            {/* This ensures it takes 1 column in lg, and adjust others accordingly */}
            <h3 className="flex items-center gap-2 text-xl font-bold mb-4 italic">
              <RiDragMoveLine className="h-6 w-6" />
              Skatcher
            </h3>
            <p className="text-white text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-500">
                <RiGoogleFill className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-blue-500">
                <RiFacebookCircleFill className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-blue-500">
                <RiTwitterFill className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-blue-500">
                <RiLinkedinBoxFill className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="text-white text-sm">
              <li>
                <a href="#" className="flex hover:text-custom-brown">
                  <RiArrowDropRightLine className="h-full w-5" />
                  123 Avenue, New York
                </a>
              </li>
              <li>
                <a href="#" className="flex hover:text-custom-brown">
                  <RiArrowDropRightLine className="h-full w-5" />
                  +(160) 456 7890
                </a>
              </li>
              <li>
                <a href="mailto:yourid@example.com" className="flex">
                  <RiArrowDropRightLine className="h-full w-5" />
                  yourid@example.com
                </a>
              </li>
              <li>
                <a href="#" className="flex hover:text-custom-brown">
                  <RiArrowDropRightLine className="h-full w-5" />
                  9:00 AM - 7:00 PM
                </a>
              </li>
              <li>
                <a href="#" className="flex hover:text-custom-brown">
                  <RiArrowDropRightLine className="h-full w-5" />
                  @officialpage
                </a>
              </li>
            </ul>
          </div>

          {/* Features column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Features</h3>
            <ul className="text-white text-sm">
              <li>
                <a href="#home" className="flex hover:text-custom-brown">
                  <RiArrowDropRightLine className="h-full w-5" />
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="flex hover:text-custom-brown">
                  <RiArrowDropRightLine className="h-full w-5" />
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="flex hover:text-custom-brown">
                  <RiArrowDropRightLine className="h-full w-5" />
                  Provide
                </a>
              </li>
              <li>
                <a href="#benefits" className="flex hover:text-custom-brown">
                  <RiArrowDropRightLine className="h-full w-5" />
                  Benefits
                </a>
              </li>
              <li>
                <a href="#contact" className="flex hover:text-custom-brown">
                  <RiArrowDropRightLine className="h-full w-5" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help Center column */}
          <div className="hidden md:block lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Help Center</h3>
            <ul className="text-white text-sm">
              <li>
                <a href="#" className="flex hover:text-custom-brown">
                  <RiArrowDropRightLine className="h-full w-5" />
                  Call Center
                </a>
              </li>
              <li>
                <a href="#" className="flex hover:text-custom-brown">
                  <RiArrowDropRightLine className="h-full w-5" />
                  Official Pages
                </a>
              </li>
              <li>
                <a href="#" className="flex hover:text-custom-brown">
                  <RiArrowDropRightLine className="h-full w-5" />
                  Frequently Asked Question
                </a>
              </li>
              <li>
                <a href="#" className="flex hover:text-custom-brown">
                  <RiArrowDropRightLine className="h-full w-5" />
                  History Background
                </a>
              </li>
              <li>
                <a href="#" className="flex hover:text-custom-brown">
                  <RiArrowDropRightLine className="h-full w-5" />
                  Newsletter Subscription
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 py-4 flex justify-between text-sm text-white hidden md:flex flex-col md:flex-row md:gap-0">
          <div>
            <a href="#" className="hover:text-custom-brown">
              Terms & Condition
            </a>
          </div>
          <div>© 2022 Skatcher. All Rights Reserved</div>
          <div>
            <a href="#" className="hover:text-custom-brown">
              Privacy & Policy
            </a>
          </div>
        </div>

        <div className="mt-8 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-white md:hidden">
          <div className="order-last md:order-none mt-4 md:mt-0 text-center">
            © 2022 Skatcher. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
