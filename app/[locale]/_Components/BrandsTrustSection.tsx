"use client";

import TrustedBy from "@/components/ui/TrustedBy";
import orangeBlocks from "@/public/assets/home/orangeBlocks.webp";
import company1 from "@/public/assets/shared/partner/1.svg";
import company2 from "@/public/assets/shared/partner/2.svg";
import company3 from "@/public/assets/shared/partner/3.svg";
import company7 from "@/public/assets/shared/partner/5.svg";
import company6 from "@/public/assets/shared/partner/6.svg";
import company4 from "@/public/assets/shared/partner/7.svg";
import company5 from "@/public/assets/shared/partner/8.svg";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const brands = [company1, company2, company3, company4, company5, company6, company7];

const BrandsTrustSection = () => {

  const t = useTranslations()
  const locale = useLocale()
  const isRTL = locale === 'ar'

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
            className="w-full overflow-hidden 2xl:mt-8 mt-6"
          >
            <div className="brands-slider" data-rtl={isRTL}>
              <div className="brands-track">
                {/* First set of brands */}
                {brands.map((brand, index) => (
                  <div key={`brand-1-${index}`} className="brand-slide">
                    <Image
                      src={brand}
                      alt={`brand-${index}`}
                      width={300}
                      height={100}
                      className="md:w-[190px] w-[140px] h-[55px] md:h-[65px] object-contain"
                    />
                  </div>
                ))}
                {/* Second set for infinite loop */}
                {brands.map((brand, index) => (
                  <div key={`brand-2-${index}`} className="brand-slide">
                    <Image
                      src={brand}
                      alt={`brand-${index}`}
                      width={300}
                      height={100}
                      className="md:w-[190px] w-[140px] h-[55px] md:h-[65px] object-contain"
                    />
                  </div>
                ))}
                {/* Third set for smoother mobile experience */}
                {brands.map((brand, index) => (
                  <div key={`brand-3-${index}`} className="brand-slide">
                    <Image
                      src={brand}
                      alt={`brand-${index}`}
                      width={300}
                      height={100}
                      className="md:w-[190px] w-[140px] h-[55px] md:h-[65px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <style jsx>{`
            .brands-slider {
              width: 100%;
              position: relative;
            }

            .brands-track {
              display: flex;
              gap: 2rem;
              animation: scroll 25s linear infinite;
              width: fit-content;
            }

            .brand-slide {
              flex-shrink: 0;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .brands-slider:hover .brands-track {
              animation-play-state: paused;
            }

            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }

            @keyframes scrollRTL {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(100%);
              }
            }

            .brands-slider[data-rtl="true"] .brands-track {
              animation-name: scrollRTL;
            }

            @media (max-width: 768px) {
              .brands-track {
                gap: 1.25rem;
                animation-duration: 15s;
              }
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-200%);
              }
            }

            @keyframes scrollRTL {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(200%);
              }
            }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}

export default BrandsTrustSection