"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import blueBlocks from "@/public/assets/home/ready/blueBlocks.webp";
import orangeBlocks from "@/public/assets/home/ready/orangesBlocks.webp";
import Image from "next/image";
import TrustedBy from "@/components/ui/TrustedBy";

export default function CTASection() {

  const t = useTranslations();

  return (
    <section className="relative w-full py-3">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container bg-[#fbfbfb] rounded-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-6 sm:py-8 md:py-10 lg:py-12"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block absolute bottom-32 right-24 w-3 h-3 bg-primary-normal"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 45 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:block absolute top-24 left-40 w-3 h-3 bg-secondery-normal rotate-45"
        />
        <Image src={blueBlocks} alt="Hero Background Frame 3" className="hidden md:block absolute 2xl:h-24 2xl:w-auto xl:w-auto lg:h-16 lg:w-auto md:h-12 md:w-auto size-14 bottom-0 left-0" />
        <Image src={orangeBlocks} alt="Hero Background Frame 3" className="hidden md:block absolute 2xl:h-20 2xl:w-auto xl:h-16 xl:w-auto lg:h-14 lg:w-auto md:h-16 md:w-auto w-[100px] h-[50px] top-0 right-0" />
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center gap-2"
        >
          <TrustedBy />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-[42px] text-black font-bold capitalize mb-4"
          >
            {t("Eliminate the Compliance Burden and Reduce Legal Risks")}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-black capitalize mb-4"
          >
            {t("Request a Free Assessment of Your Audit Requirements from KEMET")}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer bg-primary-normal w-fit hover:bg-primary-normal-hover text-white px-10 sm:px-12 md:px-14 py-3.5 sm:py-4 md:py-[15px] rounded-full capitalize transition-colors text-base font-extrabold"
          >
            {t("Request Assessment")}
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
