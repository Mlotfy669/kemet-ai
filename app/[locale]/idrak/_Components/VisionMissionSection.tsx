"use client";

import visionImage from "@/public/assets/home/vision.webp";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import blueBlocks from "@/public/assets/home/idrak/blueBlocks.webp";


export default function VisionMissionSection() {

  const t = useTranslations();

  return (
    <section className="relative w-full bg-[#fbfbfb]  overflow-hidden">
      <Image src={blueBlocks} alt="Hero Background Frame 3" className="absolute 2xl:h-20 2xl:w-auto xl:h-16 xl:w-auto lg:h-14 lg:w-auto md:h-12 md:w-auto size-10 rotate-180 bottom-30 left-0" />
      {/* Decorative Squares */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 45 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden lg:block absolute top-16 left-20 w-3 h-3 bg-secondery-normal rotate-45"
      />
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 45 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="hidden lg:block absolute top-8 right-32 w-3 h-3 bg-secondery-normal rotate-45"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="hidden lg:block absolute bottom-32 right-24 w-3 h-3 bg-primary-normal"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 xl:gap-20 items-center"
        >
          {/* Left Column - Vision & Mission */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 lg:space-y-10"
          >
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-[42px] text-black font-bold capitalize mb-0 sm:mb-8"
              >
                {t("Our Vision")}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-[16px] shadow-[0px_40px_50px_0px_rgba(185,192,201,0.2)] p-6 sm:p-8"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-sm sm:text-base text-black/50 capitalize leading-relaxed"
                >
                  {t("To be the key player in the EMEA region providing world-class digital transformation services through Sovereign AI")}
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-2xl sm:text-3xl md:text-[42px] text-black font-bold capitalize mb-0 sm:mb-8"
              >
                {t("Our Mission")}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white rounded-[16px] shadow-[0px_40px_50px_0px_rgba(185,192,201,0.2)] p-6 sm:p-8"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-sm sm:text-base text-black/50 capitalize leading-relaxed"
                >
                  {t("We are committed to solving complex technology problems by providing simple, efficient, and effective solutions for transforming businesses into the digital world")}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image with Decorations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full max-w-[500px] mx-auto lg:ml-auto lg:mr-0"
            >
              <Image
                alt="Vision and Mission - Digital Transformation"
                className="w-full h-[430px] md:h-auto object-cover rounded-[10px]"
                src={visionImage}
                width={500}
                height={500}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
