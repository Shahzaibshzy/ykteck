import React from "react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Our team designs and develops responsive, mobile-first websites that adapt seamlessly to all devices and screen sizes. We work closely with you to understand your brand, audience, and goals, ensuring your website is not only visually striking but also optimized for performance, accessibility, and SEO. Whether you're building an eCommerce store, a corporate site, or a custom web application, we use the latest technologies—like HTML5, CSS3, JavaScript frameworks, and CMS platforms—to create a tailored online presence that delivers measurable results",

    imageSrc: "/web.jpeg",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "We specialize in crafting high-performance, intuitive mobile applications that deliver seamless user experiences across iOS and Android platforms. Whether you're targeting consumers or enterprise users, our apps are built using the latest development frameworks and design best practices to ensure speed, scalability, and responsiveness. From initial concept and UI/UX design to development, testing, and launch, we handle the entire lifecycle—resulting in mobile solutions that not only look great but also engage users and achieve business goals",

    imageSrc: "/app.jpg",
  },
  {
    id: 3,
    title: "Software Development",
    description:
      "We offer end-to-end custom software development services designed to improve efficiency, reduce costs, and support your unique business processes. Whether you need a custom CRM, ERP system, data management platform, or internal workflow automation tool, our team works closely with your stakeholders to gather requirements, identify bottlenecks, and engineer scalable solutions. Leveraging modern technologies and agile methodologies, we ensure that the final product is secure, flexible, and fully aligned with your long-term business strategy.",

    imageSrc: "/software.jpg",
  },
];

const ServiceCard = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-10 md:text-6xl ">
        Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-900 rounded-lg shadow-lg border-[20px] border-gray-900 overflow-hidden relative transform transition-transform duration-200 hover:-translate-y-1"
          >
            {/* Image with badge & icon */}
            <div className="relative">
              <img
                src={service.imageSrc}
                alt={service.title}
                className="w-full h-52 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />

              <div className="absolute top-2 right-2 text-gray-500 hover:text-blue-500">
                <i className="icofont-heart-alt text-lg"></i>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex justify-between text-gray-100 text-sm mb-2">
                <div className="flex items-center space-x-1">
                  <i className="icofont-book-alt"></i>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-100 hover:text-gray-600 mb-5">
                {service.title}
              </h3>
              <div className="h-px bg-gray-300 w-full opacity-20 mb-4" />
              <p className="text-gray-100 text-md font-sem mb-4">
                {service.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2"></div>
                <div className="flex items-center space-x-1 text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="icofont-star"></i>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;
