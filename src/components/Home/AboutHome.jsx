"use client";
import { easeOut, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutHome = () => {
   const router = useRouter();
  return (
    <>
      <div className="bg-black text-white">
        {/* Polygon background using clip-path */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="bg-[#1B1B1B] md:py-40 py-70"
            style={{
              clipPath: "polygon(0% 0, 100% 15%, 100% 75%, 0% 100%)",
            }}
          >
            {/* About Us */}
            <motion.h2
              variants={item}
              className="text-6xl font-impact text-center"
            >
              About Us
            </motion.h2>
            <div className="w-40 h-1.5 bg-[#D01A1A] mx-auto my-4 rounded"></div>

            <motion.h3
              variants={item}
              className="text-2xl md:text-4xl font-impact text-center mb-6"
            >
              Engineering Excellence Driven by Experience
            </motion.h3>

            <motion.p
              variants={item}
              className="text-center font-popins max-w-3xl mx-auto text-white-700 leading-relaxed"
            >
              Xtorc was founded with a vision to provide world-class industrial
              tools and services tailored to modern challenges. As a startup
              with over a decade of experience, we're redefining how industries
              achieve precision, efficiency, and safety. All our products are
              proudly manufactured in India and certified to the highest
              standards, including ISO 9001:15000, CE, and ATEX.
            </motion.p>

            <motion.p
              variants={item}
              className="text-center font-popins max-w-xl mx-auto text-white-700  leading-relaxed mt-6 "
            >
              At Xtorc, we believe in creating value that extends beyond
              products. Our WIN-WIN-WIN philosophy ensures that our customers
              win, our employees thrive, and our entrepreneurs succeed.
            </motion.p>

            <motion.div variants={item} className="flex justify-center mt-8">
              <button className="bg-[#D01A1A] text-white px-6 py-3 rounded-2xl font-medium hover:bg-red-700 transition"
              onClick={()=>{
                router.push("/aboutus")
              }}>
                Learn more about us
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Why To Choose Section */}
      <motion.div
        className="px-6 py-16 text-white bg-black"
        // style={{
        //   clipPath: "polygon(0 5%, 100% 0%, 100% 95%, 0% 100%)",
        // }}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
     <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-center gap-6 lg:gap-20 sm:">
  {/* Left Text */}
  <motion.h2
    variants={item}
    className="text-white xl:font-bold text-center lg:text-left 
               text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:mr-100 lg:mr-0
               leading-tight"
    style={{ fontFamily: "Impact, sans-serif" }}
  >
    Why To Choose
  </motion.h2>

  {/* Right Images */}
  <motion.div
  variants={item}
  className="relative flex-shrink-0 md:inline-block md:whitespace-nowrap md:mt-[-80] lg:mt-0 md:mr-[-160] lg:mr-0"
>
  {/* Main Logo */}
  <img
    src="/xtroc.png"
    alt="Xtorc"
    className="w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-auto "
  />

  {/* Overlay Image */}
  <img
    src="/build.png"
    alt="Build"
    className="absolute w-20 sm:w-28 md:w-36 lg:w-40 xl:w-48 
               -bottom-20 sm:-bottom-16 md:-bottom-36 lg:-bottom-40 xl:-bottom-46
               -right-14 sm:-right-6 md:-right-24 lg:-right-24 xl:-right-28"
  />
</motion.div>

</div>


        {/* Red border */}
        <div className="w-100 h-1.5 bg-[#D01A1A] mx-auto my-6 rounded"></div>

        {/* Tagline */}
        <p className="text-center text-3xl md:text-5xl font-impact text-white" style={{ fontFamily: "Impact"}}>
          "The X Factor in Your Industrial Needs"
        </p>
      </motion.div>
    </>
  );
};
export default AboutHome;
