import React from "react";
import {
  RiWifiFill,
  RiSnowflakeFill,
  RiTv2Line,
  RiArrowRightLine,
} from "react-icons/ri";
import { FaSwimmingPool } from "react-icons/fa";

const benefits = [
  {
    title: "Awesome Features",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
  },
  {
    title: "Luxurious Interior Design",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
  },
  {
    title: "Modern Concept",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
  },
];

const cards = [
  {
    title: "Air Conditioned",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    icon: (
      <RiSnowflakeFill className="text-custom-brown w-6 h-6 transition group-hover:text-white" />
    ),
  },
  {
    title: "Free Wifi",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    icon: (
      <RiWifiFill className="text-custom-brown w-6 h-6 transition group-hover:text-white" />
    ),
  },
  {
    title: "Swimming Pool",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    icon: (
      <FaSwimmingPool className="text-custom-brown w-6 h-6 transition group-hover:text-white" />
    ),
  },
  {
    title: "Television",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    icon: (
      <RiTv2Line className="text-custom-brown w-6 h-6 transition group-hover:text-white" />
    ),
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="scroll-mt-20 bg-white py-16 px-6 md:px-14 lg:px-28"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5">
        <div className="md:w-1/2 flex">
          <div className="grid grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group bg-white shadow rounded-xl p-6 hover:shadow-xl transition"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full border border-custom-brown mb-4 mx-auto transition group-hover:bg-custom-brown">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{card.description}</p>
                <div className="text-custom-brown text-sm font-bold">
                  <RiArrowRightLine className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2">
          <h3 className="font-semibold mb-2 text-custom-brown tracking-wide">
            Benefits
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 leading-snug">
            Explore More About Our Property & Benefits
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>

          {benefits.map((benefit, index) => (
            <React.Fragment key={index}>
              <h2 className="font-bold mb-2 text-gray-900 leading-snug">
                {benefit.title}
              </h2>
              <p className="text-gray-600 mb-2">{benefit.description}</p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
