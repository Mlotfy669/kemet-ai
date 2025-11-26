"use client";

import TrustedBy from "@/components/ui/TrustedBy";
import orangeBlocks from "@/public/assets/home/orangeBlocks.webp";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const pillars = [
  {
    title: "Built Specifically for Government (Multi-Layered Architecture)",
    description: "Built Specifically for Government (Multi-Layered Architecture) desc",
  },
  {
    title: "Instant Respond",
    description: "Instant Respond desc",
  },
  {
    title: "Total Data Security",
    description: "Total Data Security desc",
  },
  {
    title: "Massive Document Capacity",
    description: "Massive Document Capacity desc",
  }
];

export default function FourPillarsSection() {

  const t = useTranslations()


  return (
    <section className="relative bg-[#fbfbfb] py-12 md:py-16 lg:py-24 overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute left-8 top-12 md:left-16 md:top-16 lg:left-24 lg:top-20"
      >
        <div className="w-3 h-3 bg-[#ffc27a] rotate-45" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute right-8 bottom-12 md:right-16 md:bottom-16 lg:right-24 lg:bottom-20"
      >
        <div className="w-3 h-3 bg-[#ffc27a] rotate-45" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute right-16 top-1/2 w-3 h-3 bg-primary-normal hidden lg:block"
      />

      <div className="absolute inset-0 w-full h-full">
        <Image src={orangeBlocks} alt="Hero Background Frame 3" className="absolute 2xl:size-20 xl:size-18 lg:size-16 md:size-14 size-8 top-1/3 left-0" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 md:px-6 lg:px-8"
      >

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-8 md:space-y-12"
        >
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            <TrustedBy />

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] max-w-full md:max-w-[700px] text-black capitalize font-bold mt-1 mb-3 sm:mb-5 md:mb-7 2xl:mb-10"
            >
              {t("The Four Pillars of Secure AI from KEMET")}
            </motion.h2>
          </motion.div>

          {/* Pillars Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 lg:gap-10"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col lg:gap-5 md:gap-4 gap-3 bg-white rounded-[10px] p-3 md:p-5 2xl:p-10 shadow-[0px_61.494px_76.868px_0px_rgba(185,192,201,0.2)] hover:shadow-[0px_80px_100px_0px_rgba(185,192,201,0.3)] transition-shadow duration-300"
              >
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="capitalize lg:text-2xl md:text-xl text-lg text-primary-normal font-bold max-w-full 2xl:max-w-[70%]"
                >
                  {t(pillar.title)}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="capitalize text-black max-w-full 2xl:max-w-[90%] text-sm md:text-base"
                >
                  {t(pillar.description)}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
