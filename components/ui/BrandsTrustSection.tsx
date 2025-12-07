"use client";

import TrustedBy from "@/components/ui/TrustedBy";
import company1 from "@/public/assets/shared/partner/1.svg";
import company2 from "@/public/assets/shared/partner/2.svg";
import company3 from "@/public/assets/shared/partner/3.svg";
import company4 from "@/public/assets/shared/partner/4.svg";
import company5 from "@/public/assets/shared/partner/5.svg";
import company6 from "@/public/assets/shared/partner/6.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";

const brands = [company1, company2, company3, company4, company5, company6];

const BrandsTrustSection = () => {

  const t = useTranslations()

  return (
    <section className="absolute 2xl:-bottom-20 xl:-bottom-30 lg:-bottom-16 md:-bottom-4 bottom-0 container bg-white p-6 rounded-se-[50px]">
      <div className="text-center flex flex-col items-center xl:gap-4 gap-2">
        <TrustedBy />
        <h2
          className="xl:text-4xl md:text-3xl text-2xl font-bold"
        >
          {t("These Brands Trust Us")}
        </h2>

        <div className="w-full flex flex-wrap items-center justify-center 2xl:gap-8 xl:gap-6 gap-2 2xl:mt-8 md:mt-6 mt-2">
          {brands.map((brand, index) => (
            <Image
              key={index}
              src={brand}
              alt={`brand-${index}`}
              width={300}
              height={50}
              className="2xl:w-[190px] xl:w-[160px] md:w-[140px] w-[100px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandsTrustSection