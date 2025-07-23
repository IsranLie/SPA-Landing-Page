import { RiCheckLine } from "react-icons/ri";

export default function GetInTouchSection() {
  return (
    <div className="bg-white py-16 px-6 md:px-14 lg:px-28">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="order-first">
            <h3 className="font-semibold mb-2 text-custom-brown tracking-wide">
              Get In Touch
            </h3>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 leading-snug">
              Let Us Know by Sent Your Message For More Information
            </h2>
          </div>

          {/*Image (Mobile View)*/}
          <div className="w-full flex justify-center mb-6 md:hidden order-2">
            <img
              src="/img/portrait-2.jpg"
              alt="portrait-2"
              className="w-full h-auto rounded-md shadow object-cover aspect-square"
            />
          </div>
          <div className="order-3">
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes.
            </p>
          </div>
          <div className="w-full order-4">
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-900 mb-2">
                  E-mail Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="block w-full rounded-md text-sm border border-gray-300 bg-white px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-custom-brown"
                  placeholder="Insert Your E-mail Address Here"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="block w-full rounded-md text-sm border border-gray-300 px-4 py-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-custom-brown"
                  placeholder="Insert Your Message Here"
                />
              </div>
              <button
                type="submit"
                className="bg-custom-brown rounded-md py-2 w-full text-sm font-semibold text-white hover:bg-amber-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-end hidden md:flex">
          {" "}
          <img
            src="/img/portrait-2.jpg"
            alt="portrait-2"
            className="w-[400px] h-auto rounded-md shadow"
          />
        </div>
      </div>
    </div>
  );
}
