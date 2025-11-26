"use client";

import TrustedBy from "@/components/ui/TrustedBy";
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
    <section className="absolute 2xl:-bottom-20 xl:-bottom-30 lg:-bottom-16 md:-bottom-4 bottom-0 container bg-white p-6 rounded-se-[50px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center flex flex-col items-center xl:gap-4 gap-2"
      >
        <TrustedBy />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="xl:text-4xl md:text-3xl text-2xl font-bold"
        >
          {t("These Brands Trust Us")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-wrap items-center justify-center xl:gap-12 gap-6 2xl:mt-8 md:mt-6 mt-3"
        >
          {brands.map((brand, index) => (
            <Image
              key={index}
              src={brand}
              alt={`brand-${index}`}
              width={300}
              height={100}
              className="xl:w-auto lg:w-[120px] md:w-[100px] w-[80px] object-contain"
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default BrandsTrustSection