"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const svgPaths = {
  p12f2d00: "M674.893 390.682C705.179 382.35 728.434 417.642 708.829 442.184L614.841 559.845C606.073 570.82 605.37 586.193 613.099 597.924L695.957 723.671C713.24 749.9 686.862 782.922 657.463 771.861L516.517 718.832C503.369 713.885 488.531 717.967 479.764 728.943L385.776 846.603C366.171 871.145 326.614 856.263 328.049 824.884L334.928 674.45C335.57 660.417 327.102 647.567 313.954 642.62L173.009 589.591C143.609 578.53 145.54 536.31 175.826 527.978L321.023 488.034C334.568 484.307 344.172 472.283 344.814 458.25L351.693 307.817C353.128 276.438 393.878 265.227 411.161 291.457L494.019 417.204C501.748 428.934 516.152 434.353 529.696 430.627L674.893 390.682Z",
  p14943c70: "M1675.61 159.321C1711.64 138.52 1756.68 164.521 1756.68 206.123L1756.67 554.042C1756.67 595.644 1711.64 621.646 1675.61 600.844L1374.3 426.885C1338.28 406.084 1338.28 354.081 1374.3 333.28L1675.61 159.321Z",
}


function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1909 1011"
      >
        <g id="Group 1261158706">
          <g filter="url(#filter0_f_1_55)" id="Star 3">
            <path
              d={svgPaths.p12f2d00}
              fill="var(--color-primary-normal)"
              fillOpacity="0.25"
            />
          </g>
          <g filter="url(#filter1_f_1_55)" id="Polygon 9">
            <path
              d={svgPaths.p14943c70}
              fill="var(--color-primary-normal)"
              fillOpacity="0.25"
            />
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="886.044"
            id="filter0_f_1_55"
            width="900.06"
            x="5.26189e-07"
            y="124.825"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur result="effect1_foregroundBlur_1_55" stdDeviation="76" />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="760.165"
            id="filter1_f_1_55"
            width="900.392"
            x="1195.28"
            y="6.59887e-07"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur result="effect1_foregroundBlur_1_55" stdDeviation="76" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

const industries = [
  {
    title: "Medical Image Analysis",
    description: "Assisting doctors in analyzing X-rays and scans of legacy medical reports",
  },
  {
    title: "Facial Recognition",
    description: "Security and surveillance applications within closed environments (in compliance with local privacy laws)",
  },
  {
    title: "Vehicle Recognition",
    description: "Applications in fleet management, customs, and ports for automated vehicle identification and scanning",
  },
  {
    title: "Retail Customer Analytics",
    description: "Analyzing customer movement patterns in physical stores to optimize the shopping experience",
  }
];

const OCR = () => {

  const t = useTranslations();

  return (
    <section className="relative w-full lg:pb-20 pb-12 pt-5">
      <BackgroundBlobs />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-6 flex flex-col lg:gap-13 md:gap-10 gap-8"
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:text-4xl text-2xl max-w-[630px] text-center mx-auto font-bold text-black mb-3"
        >
          {t("Reading Physical Documents (OCR) and Linking to AI")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:gap-x-8 gap-x-4 lg:gap-y-12 md:gap-y-8 gap-y-4"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-[10px] border border-[#f3f3f3] shadow-[0px_61.49px_76.86px_0px_rgba(185,192,201,0.2)] 2xl:p-6 p-4 flex flex-col lg:gap-5 md:gap-4 gap-3 items-center text-center"
            >
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="capitalize flex 2xl:text-3xl xl:text-2xl lg:text-xl text-xl md:text-lg text-primary-normal font-bold 2xl:max-w-4/5"
              >
                {t(industry.title)}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="capitalize lg:text-base text-sm 2xl:max-w-3/4 flex"
              >
                {t(industry.description)}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default OCR
