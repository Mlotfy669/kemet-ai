"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import heroBgFrame1 from "@/public/assets/shared/heroBgFrame1.webp";
import heroBgFrame2 from "@/public/assets/shared/heroBgFrame2.webp";
import heroBgFrame3 from "@/public/assets/shared/heroBgFrame3.webp";
import underline from "@/public/assets/shared/underline.webp";
import arrowDown from "@/public/assets/shared/heroArrowDown.webp";
import hero from "@/public/assets/solutions/gov/hero.webp";
import { Link } from "@/i18n/routing";
import BrandsTrustSection from "./BrandsTrustSection";

const HeroSection = () => {

  const t = useTranslations()
  const locale = useLocale()

  return (
    <section className="relative h-screen hero-bg mb-40">
      <div className="2xl:h-17 xl:h-14 lg:h-15 h-12 container mx-auto" />
      <div className="absolute inset-0 w-full h-full">
        <Image src={heroBgFrame1} alt="Hero Background Frame 1" className="absolute 2xl:size-24 xl:size-22 lg:size-20 md:size-18 size-16 bottom-[19vh] left-0" />
        <Image src={heroBgFrame2} alt="Hero Background Frame 2" className="absolute 2xl:size-20 xl:size-18 lg:size-16 md:size-14 size-12 bottom-[10vh] right-0" />
        <Image src={heroBgFrame3} alt="Hero Background Frame 3" className="absolute 2xl:size-20 xl:size-18 lg:size-16 md:size-14 size-8 top-[15vh] left-0" />
      </div>
      <div className="container h-full mx-auto relative 2xl:py-32 xl:py-24 lg:py-16 py-12">
        <div className={`flex h-full items-start gap-20 mx-auto`}>
          {/* upper Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white flex flex-col lg:gap-2 md:gap-7 gap-6"
          >

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`font-bold leading-tight relative z-10 ${locale === "ar" ? "2xl:text-[53px] xl:text-[44px] lg:text-[40px] md:text-[36px] text-[27px]" : "2xl:text-7xl xl:text-[55px] lg:text-[44px] md:text-[40px] text-[30px]"}`}
            >
              <Image
                src={underline}
                alt="Title underline"
                className="absolute left-10 top-1/2 -z-1 xl:w-auto lg:w-[250px] md:w-[230px] w-[200px]"
              />
              {t("Sovereign AI") } : <br />
              {t("Advanced Technical Features for Absolute Data Control")}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="2xl:my-8 xl:my-4 lg:my-3 md:my-4 my-3"
            >
              <Link
                href={`/book-demo`}
                className="rounded-full bg-primary-normal hover:bg-primary-normal-hover transition-all px-16 2xl:py-3.5 py-2.5 2xl:text-base xl:text-[15px] lg:text-[15px] md:text-[15px] text-[13px]"
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
            className="w-full relative z-10"
          >
            <Image src={arrowDown} alt="Hero Arrow Down" className="absolute 2xl:size-20 xl:size-18 lg:size-16 md:size-14 size-8 -top-[8vh] right-0" />
            <Image
              src={hero}
              alt="KEMET.AI Dashboard"
              width={700}
              height={700}
              priority
              className="w-full lg:rounded-b-[40px] rounded-[20px] shadow-sm object-cover"
              sizes="(max-width: 600px) 60vw, 500px"
            />
          </motion.div>
        </div>
      </div>
      <BrandsTrustSection />
    </section>
  );
}

export default HeroSection;