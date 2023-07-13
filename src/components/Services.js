import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const services = [
  {
    name: "UI/UX design",
    description:
      "I have experience in the field of UI/UX design. I have created several products using HTML, CSS, JavaScript, and ReactJS. I have learned how to listen to users and optimize their experience. UI/UX design is not just a job, but an art that combines understanding of users and design skills. I always leverage these experiences to create the best interfaces and experiences for users.",
  },
  {
    name: "UI/UX design",
    description:
      "I have experience in the field of UI/UX design. I have created several products using HTML, CSS, JavaScript, and ReactJS. I have learned how to listen to users and optimize their experience. UI/UX design is not just a job, but an art that combines understanding of users and design skills. I always leverage these experiences to create the best interfaces and experiences for users.",
  },
  {
    name: "UI/UX design",
    description:
      "I have experience in the field of UI/UX design. I have created several products using HTML, CSS, JavaScript, and ReactJS. I have learned how to listen to users and optimize their experience. UI/UX design is not just a job, but an art that combines understanding of users and design skills. I always leverage these experiences to create the best interfaces and experiences for users.",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px]">I'm a Front-end Developer</h3>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div className="">
              {services.map((service, index) => {
                const { name, description } = service;
                return (
                  <div
                    className="border-b border-white/20 mb-6 flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight mb-3">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
