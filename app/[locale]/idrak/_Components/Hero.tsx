"use client";

import { Link } from "@/i18n/routing";
import idrak from "@/public/assets/idrak/hero.png";
import arrowDown from "@/public/assets/shared/heroArrowDown.webp";
import heroBgFrame1 from "@/public/assets/shared/heroBgFrame1.webp";
import heroBgFrame2 from "@/public/assets/shared/heroBgFrame2.webp";
import heroBgFrame3 from "@/public/assets/shared/heroBgFrame3.webp";
import underline from "@/public/assets/shared/underline.webp";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const HeroSection = () => {

  const t = useTranslations()
  const locale = useLocale()

  return (
    <section className="relative h-screen hero-bg 2xl:mb-[320px] xl:mb-[250px] lg:mb-[150px] md:mb-[120px]">
      <div className="2xl:h-17 xl:h-14 lg:h-15 h-12 container mx-auto" />
      <div className="absolute inset-0 w-full h-full">
        <Image src={heroBgFrame1} alt="Hero Background Frame 1" className="absolute 2xl:size-24 xl:size-22 lg:size-20 md:size-18 size-16 bottom-[19vh] left-0" />
        <Image src={heroBgFrame2} alt="Hero Background Frame 2" className="absolute 2xl:size-20 xl:size-18 lg:size-16 md:size-14 size-12 bottom-[10vh] right-0" />
        <Image src={heroBgFrame3} alt="Hero Background Frame 3" className="absolute 2xl:size-16 xl:size-15 lg:size-14 md:size-13 size-8 top-[15vh] left-0 lg:flex hidden" />
      </div>
      <div className="container mx-auto relative 2xl:py-10 xl:py-6 lg:py-3 py-10 md:px-6 px-3">
        <div className={`flex flex-col gap-4 mx-auto`}>
          {/* upper Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white flex flex-col lg:gap-2 md:gap-3 gap-3"
          >

            <h1 className={`2xl:mb-8 mb-3 w-fit font-bold leading-tight relative z-10 2xl:text-6xl xl:text-[52px] lg:text-[44px] md:text-[40px] text-[25px]`}>
              <Image
                src={underline}
                alt="Title underline"
                className="absolute right-0 lg:-bottom-9 -bottom-5 -z-1 xl:w-auto lg:w-[250px] md:w-[230px] w-[200px]"
              />
              {t("Idraak's Enterprise-Grade RAG")}
            </h1>
            <h2 className={`2xl:mb-8 mb-3 font-bold leading-tight relative z-10 2xl:text-5xl xl:text-[48px] lg:text-[42px] md:text-[37px] text-[22px]`}>
              ({t("Retrieval-Augmented Generation")})
            </h2>
            <h2 className={`2xl:mb-4 mb-1 font-bold leading-tight relative z-10 2xl:text-5xl xl:text-[48px] lg:text-[42px] md:text-[37px] text-[25px]`}>
              {t(`platform`)}
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-4 2xl:text-[22px] xl:text-xl text-xl lg:max-w-1/2 md:max-w-full"
            >
              {t("delivers accurate, reference-backed answers from your internal documents")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="2xl:my-8 xl:my-4 lg:my-3 md:my-4 my-3"
            >
              <Link
                href={`/book-demo`}
                className="rounded-full bg-primary-normal hover:bg-primary-normal-hover transition-all px-16 2xl:py-3.5 py-2.5 2xl:text-base text-[15px]"
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
            className="md:w-4/5 w-full relative z-10 flex justify-start"
          >
            <Image src={arrowDown} alt="Hero Arrow Down" className={`absolute 2xl:size-24 xl:size-20 lg:size-16 md:size-14 size-12 xl:-top-[12vh] -top-[7vh] ${locale === "ar" ? "left-0 -scale-x-100" : "right-0"}`} />
            <Image
              src={idrak}
              alt="KEMET.AI Dashboard"
              width={1200}
              height={610}
              priority
              className="w-full 2xl:max-h-[610px] xl:max-h-[440px] lg:max-h-[400px] md:max-h-[350px]  object-fill"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;