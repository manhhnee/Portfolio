import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
const About = () => {
  return (
    <section
      className="min-h-[100vh] flex items-center lg:min-h-[100vh]"
      id="about"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:my-auto"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h4 mb-4">
              I am an active individual who is enthusiastic about learning and
              holds a strong sense of responsibility. Setting high goals for
              myself, I continuously strive to develop my knowledge and skills.
              Moreover, I highly value the virtue of responsibility. I make
              every effort to successfully fulfill assigned tasks. I believe
              that the combination of technical expertise, proactiveness, and a
              strong sense of responsibility will contribute to my personal
              growth and success in the future.
            </h3>
            <div className="flex gap-x-8 items-center justify-center">
              <button className="btn btn-lg">Contact me</button>
              <Link href="#" className="text-gradient btn-link">
                My Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
