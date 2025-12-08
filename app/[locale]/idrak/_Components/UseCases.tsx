"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import governemnt from "@/public/assets/idrak/government.webp";
import healthcare from "@/public/assets/idrak/healthcare.webp";
import education from "@/public/assets/idrak/education.webp";
import finance from "@/public/assets/idrak/finance.webp";
import customerSupport from "@/public/assets/idrak/customer-support.webp";
import manufacturing from "@/public/assets/idrak/manufacturing.webp";
import telecom from "@/public/assets/idrak/telecom.webp";
import energy from "@/public/assets/idrak/energy.webp";
import legal from "@/public/assets/idrak/legal.webp";
import Image from "next/image";
import orangeBlocks from "@/public/assets/home/idrak/orangeBlocks.webp";
import orangeArrow from "@/public/assets/idrak/orangeArrow.png";

const svgPaths = {
  p12f2d00: "M674.893 390.682C705.179 382.35 728.434 417.642 708.829 442.184L614.841 559.845C606.073 570.82 605.37 586.193 613.099 597.924L695.957 723.671C713.24 749.9 686.862 782.922 657.463 771.861L516.517 718.832C503.369 713.885 488.531 717.967 479.764 728.943L385.776 846.603C366.171 871.145 326.614 856.263 328.049 824.884L334.928 674.45C335.57 660.417 327.102 647.567 313.954 642.62L173.009 589.591C143.609 578.53 145.54 536.31 175.826 527.978L321.023 488.034C334.568 484.307 344.172 472.283 344.814 458.25L351.693 307.817C353.128 276.438 393.878 265.227 411.161 291.457L494.019 417.204C501.748 428.934 516.152 434.353 529.696 430.627L674.893 390.682Z",
  p14943c70: "M1675.61 159.321C1711.64 138.52 1756.68 164.521 1756.68 206.123L1756.67 554.042C1756.67 595.644 1711.64 621.646 1675.61 600.844L1374.3 426.885C1338.28 406.084 1338.28 354.081 1374.3 333.28L1675.61 159.321Z",
}

const svgPaths2 = "M71.5661 42.7833C71.5387 40.7895 71.2792 38.7784 70.7599 36.7537C68.9391 29.6481 60.8154 25.0864 52.169 24.0138C43.526 22.9413 34.538 25.382 31.074 31.5628C29.0926 35.0967 28.8193 38.1425 29.6289 40.7104C30.4352 43.2645 32.3481 45.3821 34.9444 47.0321C42.1833 51.6282 54.861 52.5667 60.6446 50.6451C63.3195 49.7547 65.9328 48.6823 68.4778 47.455C67.0225 55.4888 61.601 63.0997 54.3655 69.9577C38.6408 84.8633 14.2389 96.1764 0.949913 100.336C0.235929 100.559 -0.160383 101.323 0.0616693 102.041C0.283722 102.759 1.0421 103.162 1.75609 102.938C15.3081 98.6962 40.1849 87.1424 56.2206 71.9412C64.5048 64.0897 70.408 55.2515 71.4158 45.9596C90.1434 35.8908 105.523 17.6233 118.672 2.25029C119.161 1.68308 119.096 0.820209 118.529 0.328629C117.961 -0.159514 117.107 -0.0976632 116.619 0.472982C104.006 15.217 89.3679 32.7557 71.5661 42.7833ZM68.8435 44.2443C68.9459 42.0029 68.7272 39.7272 68.1362 37.4309C66.5613 31.281 59.3224 27.644 51.8375 26.7158C47.2496 26.1486 42.5319 26.6162 38.8321 28.28C36.5057 29.325 34.5891 30.841 33.4345 32.9036C31.9177 35.609 31.5897 37.9225 32.2114 39.8854C32.8332 41.862 34.3775 43.4502 36.3896 44.7255C42.9863 48.916 54.5295 49.8064 59.7939 48.0566C62.8992 47.0253 65.9124 45.7396 68.8435 44.2443Z"


function AbstractShape() {
  return (
    <svg
      className="w-[90px] h-[90px]"
      fill="none"
      viewBox="0 0 119 103"
    >
      <path
        clipRule="evenodd"
        d={svgPaths2}
        fill="var(--color-primary-normal)"
        fillRule="evenodd"
      />
    </svg>
  );
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
    title: "Government",
    description1: "use cases government desc 1",
    description2: "use cases government desc 2",
    description3: "use cases government desc 3",
    icon: governemnt,
  },
  {
    title: "Healthcare",
    description1: "use cases healthcare desc 1",
    description2: "use cases healthcare desc 2",
    description3: "use cases healthcare desc 3",
    icon: healthcare,
  },
  {
    title: "Education",
    description1: "use cases education desc 1",
    description2: "use cases education desc 2",
    description3: "use cases education desc 3",
    icon: education,
  },
  {
    title: "Finance",
    description1: "use cases finance desc 1",
    description2: "use cases finance desc 2",
    description3: "use cases finance desc 3",
    icon: finance,
  },
  {
    title: "Customer Support",
    description1: "use cases customer support desc 1",
    description2: "use cases customer support desc 2",
    description3: "use cases customer support desc 3",
    icon: customerSupport,
  },
  {
    title: "Manufacturing",
    description1: "use cases manufacturing desc 1",
    description2: "use cases manufacturing desc 2",
    description3: "use cases manufacturing desc 3",
    icon: manufacturing,
  },
  {
    title: "Telecom",
    description1: "use cases telecom desc 1",
    description2: "use cases telecom desc 2",
    description3: "use cases telecom desc 3",
    icon: telecom,
  },
  {
    title: "Energy",
    description1: "use cases energy desc 1",
    description2: "use cases energy desc 2",
    description3: "use cases energy desc 3",
    icon: energy,
  },
  {
    title: "Legal",
    description1: "use cases legal desc 1",
    description2: "use cases legal desc 2",
    description3: "use cases legal desc 3",
    icon: legal,
  }
];

const UseCases = () => {

  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="relative w-full lg:py-20 py-12">
      <BackgroundBlobs />
      <Image src={orangeBlocks} alt="Hero Background Frame 3" className="absolute 2xl:h-20 2xl:w-auto xl:h-16 xl:w-auto lg:h-14 lg:w-auto md:h-12 md:w-auto size-8 top-30 -right-4" />
      <Image src={orangeArrow} alt="Hero Background Frame 3" className="absolute 2xl:h-20 2xl:w-auto xl:h-16 xl:w-auto lg:h-14 lg:w-auto md:h-12 md:w-auto size-8 top-10 -left-4" />
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 81.509 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block absolute top-[20vh] left-2 "
        style={{ transform: "rotate(81.509deg)" }}
      >
        <AbstractShape />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-6 flex flex-col lg:gap-20 md:gap-10 gap-8"
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:text-4xl text-2xl max-w-[700px] text-center mx-auto font-bold text-black mb-3"
        >
          {t("Use Cases")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] 2xl:gap-x-12 gap-x-4 lg:gap-y-12 md:gap-y-8 gap-y-4"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0px 80px 100px 0px rgba(185,192,201,0.35)",
                borderColor: "var(--color-primary-normal)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-[10px] border border-[#f3f3f3] shadow-[0px_61.49px_76.86px_0px_rgba(185,192,201,0.2)] 2xl:p-6 p-4 flex flex-col lg:gap-5 md:gap-4 gap-3 items-center text-center"
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Image
                  src={industry.icon}
                  alt={industry.title}
                  width={100}
                  height={100}
                  priority
                  className="xl:size-10 size-8"
                />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex 2xl:text-[28px] xl:text-2xl lg:text-xl text-xl md:text-lg text-primary-normal font-bold 2xl:max-w-4/5"
              >
                {t(industry.title)}
              </motion.h3>

              <motion.ul
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`flex flex-col items-center gap-2 list-disc text-black max-w-[280px] w-full mb-2 ${locale === "ar" ? "text-base md:text-lg xl:text-xl 2xl:text-2xl" : "text-base md:text-lg xl:text-lg 2xl:text-xl"}`}
              >
                <motion.li
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center lg:text-base text-sm font-semibold"
                >
                  {t(industry.description1)}
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center lg:text-base text-sm font-semibold"
                >
                  {t(industry.description2)}
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center lg:text-base text-sm font-semibold"
                >
                  {t(industry.description3)}
                </motion.li>
              </motion.ul>

            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default UseCases
