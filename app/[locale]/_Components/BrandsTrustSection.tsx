"use client";

import TrustedBy from "@/components/ui/TrustedBy";
import orangeBlocks from "@/public/assets/home/orangeBlocks.webp";
import company1 from "@/public/assets/shared/whyUs/company1.webp";
import company2 from "@/public/assets/shared/whyUs/company2.webp";
import company3 from "@/public/assets/shared/whyUs/company3.webp";
import company4 from "@/public/assets/shared/whyUs/company4.webp";
import company5 from "@/public/assets/shared/whyUs/company5.webp";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const brands = [company1, company2, company3, company4, company5];

const BrandsTrustSection = () => {

  const t = useTranslations()

  return (
    <section className="relative bg-white lg:py-28 py-14">
      <div className="absolute inset-0 w-full h-full">
        <Image src={orangeBlocks} alt="Hero Background Frame 3" className="absolute 2xl:size-20 xl:size-18 lg:size-16 md:size-14 size-8 bottom-0 left-0" />
      </div>
      <div className="relative container mx-auto px-6">
        <span className="size-3 bg-secondery-normal absolute top-0 md:right-0 right-6 rotate-45"></span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center gap-4"
        >
          <TrustedBy />
          <h2 className="lg:text-4xl text-3xl font-bold">
            {t("These Brands Trust Us")}
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-wrap items-center justify-center lg:gap-12 gap-6 2xl:mt-8 mt-6"
          >
            {brands.map((brand, index) => (
              <Image
                key={index}
                src={brand}
                alt={`brand-${index}`}
                width={300}
                height={100}
                className="md:w-auto w-[100px] object-contain"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default BrandsTrustSection