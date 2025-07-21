import { RiCheckLine } from "react-icons/ri";

const features = [
  "Lorem ipsum dolor sit amet, consectetuer",
  "Lorem ipsum dolor sit amet, consectetuer",
  "Lorem ipsum dolor sit amet, consectetuer",
];

export default function Provide() {
  return (
    <div className="bg-white py-16 px-6 md:px-14 lg:px-28">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text */}
        <div className="md:w-1/2">
          <h3 className="font-semibold mb-2 text-amber-600 tracking-wide">
            Provide
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 leading-snug">
            We Provide Many Features and Property Benefits
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>

          <div className="text-gray-600">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <RiCheckLine className="mt-1 text-sm text-gray-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/img/square-1.jpg"
            alt="About"
            className="w-[450px] h-auto rounded-md shadow"
          />
        </div>
      </div>
    </div>
  );
}
