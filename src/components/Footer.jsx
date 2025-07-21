import {
  RiSearchLine,
  RiGoogleFill,
  RiFacebookCircleFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiDragMoveLine,
} from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
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
              <a href="#" className="text-white hover:text-gray-400">
                <RiGoogleFill className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <RiFacebookCircleFill className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <RiTwitterFill className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <RiLinkedinBoxFill className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="text-white text-sm space-y-2">
              <li>123 Avenue, New York</li>
              <li>+(160) 456 7890</li>
              <li>yourid@example.com</li>
              <li>9:00 AM - 7:00 PM</li>
              <li>@officialpage</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Features</h3>
            <ul className="text-white text-sm space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Provide</li>
              <li>Benefits</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Help Center</h3>
            <ul className="text-white text-sm space-y-2">
              <li>Call Center</li>
              <li>Official Pages</li>
              <li>Frequently Asked Question</li>
              <li>History Background</li>
              <li>Newsletter Subscription</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 py-4 flex justify-between text-sm text-white">
          <div>Terms & Condition</div>
          <div>© 2022 Skatcher. All Rights Reserved</div>
          <div>Privacy & Policy</div>
        </div>
      </div>
    </footer>
  );
}
