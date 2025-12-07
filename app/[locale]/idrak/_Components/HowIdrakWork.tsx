"use client";

import automatingAccess from "@/public/assets/idrak/how.png";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const svgPaths = "M71.5661 42.7833C71.5387 40.7895 71.2792 38.7784 70.7599 36.7537C68.9391 29.6481 60.8154 25.0864 52.169 24.0138C43.526 22.9413 34.538 25.382 31.074 31.5628C29.0926 35.0967 28.8193 38.1425 29.6289 40.7104C30.4352 43.2645 32.3481 45.3821 34.9444 47.0321C42.1833 51.6282 54.861 52.5667 60.6446 50.6451C63.3195 49.7547 65.9328 48.6823 68.4778 47.455C67.0225 55.4888 61.601 63.0997 54.3655 69.9577C38.6408 84.8633 14.2389 96.1764 0.949913 100.336C0.235929 100.559 -0.160383 101.323 0.0616693 102.041C0.283722 102.759 1.0421 103.162 1.75609 102.938C15.3081 98.6962 40.1849 87.1424 56.2206 71.9412C64.5048 64.0897 70.408 55.2515 71.4158 45.9596C90.1434 35.8908 105.523 17.6233 118.672 2.25029C119.161 1.68308 119.096 0.820209 118.529 0.328629C117.961 -0.159514 117.107 -0.0976632 116.619 0.472982C104.006 15.217 89.3679 32.7557 71.5661 42.7833ZM68.8435 44.2443C68.9459 42.0029 68.7272 39.7272 68.1362 37.4309C66.5613 31.281 59.3224 27.644 51.8375 26.7158C47.2496 26.1486 42.5319 26.6162 38.8321 28.28C36.5057 29.325 34.5891 30.841 33.4345 32.9036C31.9177 35.609 31.5897 37.9225 32.2114 39.8854C32.8332 41.862 34.3775 43.4502 36.3896 44.7255C42.9863 48.916 54.5295 49.8064 59.7939 48.0566C62.8992 47.0253 65.9124 45.7396 68.8435 44.2443Z"


function AbstractShape() {
  return (
    <svg
      className="w-[90px] h-[90px]"
      fill="none"
      viewBox="0 0 119 103"
    >
      <path
        clipRule="evenodd"
        d={svgPaths}
        fill="var(--color-primary-normal)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default function HowIdrakWork() {

  const t = useTranslations()
  const locale = useLocale()


  return (
    <section className="relative w-full bg-[#fbfbfb] py-12 sm:py-12 md:py-20 lg:py-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 45 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden md:block absolute top-4 right-8 lg:right-20 w-3 h-3 bg-secondery-normal rotate-45"
      />

      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 81.509 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block absolute bottom-10 left-0 "
        style={{ transform: "rotate(81.509deg)" }}
      >
        <AbstractShape />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 md:gap-0 2xl:gap-10"
      >
        {/* left Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full flex-1 relative z-10 md:block hidden"
        >
          <Image
            src={automatingAccess}
            alt="automating Access"
            width={600}
            height={600}
            priority
            className="2xl:w-[570px] xl:w-[450px] lg:w-[400px] md:w-[300px] w-full"
          />
        </motion.div>


        {/* right content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col gap-5"
        >


          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-[30px] xl:text-[37px] 2xl:text-[42px] max-w-full md:max-w-[550px] text-black font-bold"
          >
            {t("How Idraak Works?")}
          </motion.h1>

          {/* Description */}
          <motion.ul
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={` flex flex-col gap-4 text-black/40 max-w-full mb-2 ${locale === "ar" ? "text-base md:text-lg xl:text-xl 2xl:text-2xl md:max-w-[500px]" : "text-base md:text-lg xl:text-lg 2xl:text-xl md:max-w-[470px]"}`}
          >
            <li className="flex items-start gap-2">
              <Check className="text-[#FFC27A] min-w-[25px]" />
              {t("how to work p1")}
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-[#FFC27A] min-w-[25px]" />
              {t("how to work p2")}
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-[#FFC27A] min-w-[25px]" />
              {t("how to work p3-1")}
              <br />
              {t("how to work p3-2")}
            </li>
          </motion.ul>
        </motion.div>

      </motion.div>
    </section>
  );
}
