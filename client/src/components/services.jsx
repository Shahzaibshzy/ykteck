import React from "react";

const services = [
  {
    title: "Web Development",
    description:
      "We build modern, responsive websites that cater to your unique needs.",
  },
  {
    title: "Mobile App Development",
    description:
      "Create engaging and user-friendly mobile apps for iOS and Android platforms.",
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions tailored to streamline your business processes.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-black">
        Services
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black text-white rounded-2xl p-6 shadow-md hover:shadow-xl transform transition duration-300 hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
