"use client";

import heroBgFrame1 from "@/public/assets/shared/heroBgFrame1.webp";
import heroBgFrame3 from "@/public/assets/shared/heroBgFrame3.webp";
import underline from "@/public/assets/shared/underline.webp";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const HeroSection = () => {

  const t = useTranslations()
  const locale = useLocale()

  return (
    <section className="relative md:h-[470px] h-[380px] hero-bg">
      <div className={`absolute bottom-0 lg:w-[90%] md:w-[95%] w-full h-[150px] bg-white rounded-se-[50px] ${locale === "ar" ? "right-0" : "left-0"}`} />
      <div className="2xl:h-17 xl:h-14 lg:h-15 h-12 container mx-auto" />
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={heroBgFrame1}
          alt="Hero Background Frame 1"
          className="absolute 2xl:size-24 xl:size-22 lg:size-20 md:size-18 size-16 2xl:bottom-[19vh] xl:bottom-[25vh] lg:bottom-[20vh] md:bottom-[18vh] bottom-[16vh] right-0"
        />
        <Image
          src={heroBgFrame3}
          alt="Hero Background Frame 3"
          className="absolute 2xl:size-20 xl:size-16 lg:size-16 md:size-14 size-8 top-[15vh] left-0"
        />
      </div>
      <div className="container mx-auto relative px-6 xl:py-10 lg:py-10 md:py-20 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`font-bold text-white w-fit relative z-10 2xl:text-[50px] xl:text-[44px] lg:text-[44px] md:text-[40px] text-[32px]`}
          >
            <Image
              src={underline}
              alt="Title underline"
              className="absolute right-0 md:-bottom-5 -bottom-5 -z-1 lg:w-[230px] md:w-[230px] w-[200px]"
            />
            {(() => {
              const fullText = t("Get in touch");
              const words = fullText.split(' ');
              const lastWord = words.pop();
              return (
                <>
                  {words.join(' ')}{' '}
                  <span className="text-[#ffc27a]">{lastWord}</span>
                </>
              );
            })()}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={` text-white md:max-w-[650px] relative z-10 2xl:text-lg xl:text-[18px] lg:text-[18px] md:text-[16px] text-[14px]`}
          >
            {t("Get in touch desc")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;