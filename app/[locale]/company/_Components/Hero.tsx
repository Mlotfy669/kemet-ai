"use client";

import BrandsTrustSection from "@/components/ui/BrandsTrustSection";
import { Link } from "@/i18n/routing";
import arrowDown from "@/public/assets/shared/heroArrowDown.webp";
import heroBgFrame1 from "@/public/assets/shared/heroBgFrame1.webp";
import heroBgFrame2 from "@/public/assets/shared/heroBgFrame2.webp";
import heroBgFrame3 from "@/public/assets/shared/heroBgFrame3.webp";
import underline from "@/public/assets/shared/underline.webp";
import hero from "@/public/assets/company/hero.png";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const HeroSection = () => {

  const t = useTranslations()
  const locale = useLocale()

  return (
    <section className="relative h-screen hero-bg mb-20 lg:mb-40">
      <div className="2xl:h-17 xl:h-14 lg:h-15 h-12 container mx-auto" />
      <div className="absolute inset-0 w-full h-full">
        <Image src={heroBgFrame1} alt="Hero Background Frame 1" className="absolute 2xl:size-24 xl:size-22 lg:size-20 md:size-18 size-16 bottom-[19vh] left-0" />
        <Image src={heroBgFrame2} alt="Hero Background Frame 2" className="absolute 2xl:size-20 xl:size-18 lg:size-16 md:size-14 size-12 bottom-[10vh] right-0" />
        <Image src={heroBgFrame3} alt="Hero Background Frame 3" className="absolute 2xl:size-20 xl:size-12 lg:size-16 md:size-14 size-8 top-[15vh] left-0" />
      </div>
      <div className="container h-full mx-auto relative px-6 2xl:py-20 xl:py-6 lg:py-10 md:py-10 py-8">
        <div className={`flex h-full items-start md:flex-row flex-col xl:gap-10 lg:gap-12 md:gap-8 gap-8 mx-auto`}>
          {/* left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white flex-1 flex flex-col xl:gap-2 lg:gap-7 md:gap-6 gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`font-bold md:mb-4 mb-6 leading-tight relative z-10 ${locale === "ar" ? "md:w-[90%] mb-8 2xl:text-6xl xl:text-[52px] lg:text-[44px] md:text-[36px] text-[27px]" : "2xl:text-[70px] xl:text-[60px] lg:text-[44px] md:text-[40px] text-[31px]"}`}
              >
                <Image
                  src={underline}
                  alt="Title underline"
                  className={`absolute -bottom-5 -z-1 lg:w-[250px] md:w-[230px] w-[200px] ${locale === "ar" ? "left-20" : "right-10"}`}
                />
                {t("We've Been Building Applied AI Since 2020")}
              </motion.h1>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`md:w-3/4 flex leading-relaxed relative z-10 ${locale === "ar" ? "2xl:text-3xl xl:text-2xl lg:text-[28px] md:text-[26px] text-[22px]" : "2xl:text-2xl xl:text-xl lg:text-lg text-lg"}`}
              >
                {t("We've Been Building Applied AI Since 2020 desc")}
              </motion.span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="2xl:my-8 xl:my-4 lg:my-3 md:my-4 my-3"
            >
              <Link
                href={`/contact-us`}
                className="rounded-full bg-primary-normal hover:bg-primary-normal-hover transition-all px-16 2xl:py-3.5 py-3 2xl:text-base xl:text-[15px] lg:text-[15px] md:text-[15px] text-[13px]"
              >
                {t("Get In Touch !")}
              </Link>
            </motion.div>
          </motion.div>

          {/* right content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 md:block hidden"
          >
            <Image
              src={arrowDown}
              alt="Hero Arrow Down"
              className={`absolute 2xl:size-20 xl:size-18 lg:size-16 md:size-14 size-8 2xl:-top-[8vh] xl:-top-[10vh] lg:-top-[12vh] md:-top-[14vh] -top-[16vh] ${locale === "ar" ? "left-0 scale-x-[-1]" : "right-0"}`}
            />
            <Image
              src={hero}
              alt="KEMET.AI Dashboard"
              width={600}
              height={600}
              priority
              className="lg:rounded-b-[45px] rounded-[20px] 2xl:w-[600px] xl:w-[490px] lg:w-[400px] md:w-[300px] w-full"
            />
          </motion.div>
        </div>
      </div>
      <BrandsTrustSection />
    </section>
  );
}

export default HeroSection;