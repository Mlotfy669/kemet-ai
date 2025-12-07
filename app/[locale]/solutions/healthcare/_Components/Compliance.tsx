"use client";

import { Link } from "@/i18n/routing";
import dataPrivicy from "@/public/assets/solutions/healthcare/dataPrivicy.png";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";


export default function Compliance() {

  const t = useTranslations()


  return (
    <section className="relative w-full bg-[#fbfbfb] py-12 sm:py-12 md:py-20 lg:py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 45 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden md:block absolute top-4 left-8 lg:left-20 w-3 h-3 bg-secondery-normal rotate-45"
      />

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 md:gap-0 2xl:gap-10"
      >
        {/* left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col gap-2 md:gap-3 lg:gap-5"
        >

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-3xl md:text-[30px] xl:text-[37px] 2xl:text-[42px] max-w-full md:max-w-[550px] text-black font-bold"
          >
            {t("Compliance and Data Privacy Protection")}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:max-w-[510px] text-sm md:text-base xl:text-[20px] text-black/50 max-w-full mb-2"
          >
            {t("Compliance and Data Privacy Protection desc")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex"
          >
            <Link
              href="/contact-us"
              className="bg-primary-normal hover:bg-primary-normal-hover text-white xl:text-lg md:text-base text-sm px-6 sm:px-12 py-2 xl:py-3 rounded-full transition-colors"
            >
              {t("Book Now !")}
            </Link>
          </motion.div>
        </motion.div>


        {/* right content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full flex-1 relative z-10 md:block hidden"
        >
          <Image
            src={dataPrivicy}
            alt="Data Privacy"
            width={600}
            height={600}
            priority
            className="2xl:w-[570px] xl:w-[450px] lg:w-[400px] md:w-[300px] w-full"
          />
        </motion.div>

      </motion.div>
    </section>
  );
}
