"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import heroBgFrame1 from "@/public/assets/shared/heroBgFrame1.webp";
import heroBgFrame2 from "@/public/assets/shared/heroBgFrame2.webp";
import heroBgFrame3 from "@/public/assets/shared/heroBgFrame3.webp";
import titleCorner from "@/public/assets/home/hero/titleCorner.webp";
import underline from "@/public/assets/shared/underline.webp";
import arrowDown from "@/public/assets/shared/heroArrowDown.webp";
import { Link } from "@/i18n/routing";

const HeroSection = () => {

  const t = useTranslations()
  const locale = useLocale()

  return (
    <section className="relative h-screen hero-bg">
      <div className="2xl:h-17 xl:h-14 lg:h-15 h-12 container mx-auto" />
      <div className="absolute inset-0 w-full h-full">
        <Image src={heroBgFrame1} alt="Hero Background Frame 1" className="absolute 2xl:size-24 xl:size-22 lg:size-20 md:size-18 size-16 bottom-[19vh] left-0" />
        <Image src={heroBgFrame2} alt="Hero Background Frame 2" className="absolute 2xl:size-20 xl:size-18 lg:size-16 md:size-14 size-12 bottom-[10vh] right-0" />
        <Image src={heroBgFrame3} alt="Hero Background Frame 3" className="absolute 2xl:size-20 xl:size-18 lg:size-16 md:size-14 size-8 top-[15vh] left-0" />
      </div>
      <div className="container mx-auto relative 2xl:py-2 xl:py-4 lg:py-3 py-10">
        <div className={`flex flex-col items-center gap-4 mx-auto ${locale === "ar" ? "xl:max-w-[850px] lg:max-w-[750px] md:max-w-[700px] max-w-[550px]" : "2xl:max-w-[840px] xl:max-w-[630px] lg:max-w-[550px] md:max-w-[450px] max-w-[415px]"}`}>
          {/* upper Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white flex flex-col items-center lg:gap-2 md:gap-7 gap-10"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-full bg-[#ffc17a3d] px-4 py-0.5 text-sm font-light text-white"
            >
              {t("Trusted By")} <b className="font-bold mx-0.5">150,000+</b> {t("Users")} <span className="text-base">👋</span>
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`font-bold leading-tight text-center relative z-10 ${locale === "ar" ? "2xl:text-[53px] xl:text-[44px] lg:text-[40px] md:text-[36px] text-[27px]" : "2xl:text-7xl xl:text-[55px] lg:text-[44px] md:text-[40px] text-[30px]"}`}
            >
              <Image
                src={titleCorner}
                alt="Title Corner"
                className="absolute lg:left-2 left-0 lg:-top-4 md:-top-2 2xl:size-10 xl:size-8 md:size-6 size-2"
              />
              <Image
                src={underline}
                alt="Title underline"
                className="absolute left-10 lg:-bottom-2 -bottom-5 -z-1 xl:w-auto lg:w-[250px] md:w-[230px] w-[200px]"
              />
              {t("Sovereign Generative AI For The Middle East")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-4 text-center 2xl:text-lg text-[17px]"
            >
              {t("Trusted Sovereign AI Experts for Enterprise & Critical Sector Solutions Slogan")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="2xl:my-8 xl:my-4 lg:my-3 my-4"
            >
              <Link
                href={`/contact-us`}
                className="rounded-full bg-primary-normal hover:bg-primary-normal-hover transition-all px-16 2xl:py-3.5 py-3 2xl:text-base md:text-[15px] text-sm"
              >
                {t("Book Now !")}
              </Link>
            </motion.div>
          </motion.div>

          {/* lower content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full relative z-10 px-3"
          >
            <Image src={arrowDown} alt="Hero Arrow Down" className="absolute 2xl:size-20 xl:size-18 lg:size-16 md:size-14 size-8 -top-[10vh] right-0" />
            <video
              controls
              controlsList="nodownload"
              preload="metadata"
              poster='/assets/home/thupnail.png'
              className="w-full 2xl:h-[500px] xl:h-[300px] lg:h-80 md:h-[220px] h-[200px] object-fill 2xl:rounded-4xl xl:rounded-3xl lg:rounded-2xl rounded-xl"
            >
              <source src={`/assets/home/kemet.mp4`} type="video/mp4" />
              متصفحك مش بيدعم عرض الفيديو.
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;