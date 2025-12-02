'use client'
import TrustedBy from "@/components/ui/TrustedBy";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from "next-intl";

interface StageProps {
  title: string;
  bgColor: string;
  textColor?: string;
}

const svgPaths = {
  p16e62b00: "M44.972 4.70793C44.8864 4.44465 44.6529 4.25825 44.3777 4.23335L40.6244 3.8926L39.141 0.419814C39.0315 0.164672 38.7823 0 38.505 0C38.2276 0 37.9783 0.164672 37.8695 0.419814L36.3862 3.8926L32.6322 4.23335C32.3571 4.25875 32.124 4.44515 32.0379 4.70793C31.9523 4.9712 32.0314 5.25997 32.2395 5.4425L35.0767 7.93034L34.2402 11.6148C34.179 11.8857 34.2841 12.1659 34.5089 12.3284C34.6297 12.4162 34.7717 12.46 34.9141 12.46C35.0366 12.46 35.1591 12.4275 35.2685 12.362L38.505 10.4268L41.7409 12.362C41.9783 12.5038 42.2768 12.4909 42.501 12.3284C42.7258 12.1659 42.831 11.8857 42.7698 11.6148L41.9332 7.93034L44.7704 5.4425C44.9785 5.25997 45.0576 4.9718 44.972 4.70793V4.70793Z",
  p364c8380: "M71.5661 42.7833C71.5387 40.7895 71.2792 38.7784 70.7599 36.7537C68.9391 29.6481 60.8154 25.0864 52.169 24.0138C43.526 22.9413 34.538 25.382 31.074 31.5628C29.0926 35.0967 28.8193 38.1425 29.6289 40.7104C30.4352 43.2645 32.3481 45.3821 34.9444 47.0321C42.1833 51.6282 54.861 52.5667 60.6446 50.6451C63.3195 49.7547 65.9328 48.6823 68.4778 47.455C67.0225 55.4888 61.601 63.0997 54.3655 69.9577C38.6408 84.8633 14.2389 96.1764 0.949913 100.336C0.235929 100.559 -0.160383 101.323 0.0616693 102.041C0.283722 102.759 1.0421 103.162 1.75609 102.938C15.3081 98.6962 40.1849 87.1424 56.2206 71.9412C64.5048 64.0897 70.408 55.2515 71.4158 45.9596C90.1434 35.8908 105.523 17.6233 118.672 2.25029C119.161 1.68308 119.096 0.820209 118.529 0.328629C117.961 -0.159514 117.107 -0.0976632 116.619 0.472982C104.006 15.217 89.3679 32.7557 71.5661 42.7833ZM68.8435 44.2443C68.9459 42.0029 68.7272 39.7272 68.1362 37.4309C66.5613 31.281 59.3224 27.644 51.8375 26.7158C47.2496 26.1486 42.5319 26.6162 38.8321 28.28C36.5057 29.325 34.5891 30.841 33.4345 32.9036C31.9177 35.609 31.5897 37.9225 32.2114 39.8854C32.8332 41.862 34.3775 43.4502 36.3896 44.7255C42.9863 48.916 54.5295 49.8064 59.7939 48.0566C62.8992 47.0253 65.9124 45.7396 68.8435 44.2443Z",
  p3c93f800: "M46.1583 8.07107C46.5488 7.68054 46.5488 7.04738 46.1583 6.65685L39.7943 0.292893C39.4038 -0.0976309 38.7706 -0.0976309 38.3801 0.292893C37.9896 0.683418 37.9896 1.31658 38.3801 1.70711L44.037 7.36396L38.3801 13.0208C37.9896 13.4113 37.9896 14.0445 38.3801 14.435C38.7706 14.8256 39.4038 14.8256 39.7943 14.435L46.1583 8.07107ZM0 7.36396V8.36396H45.4512V7.36396V6.36396H0V7.36396Z",
  p3d52aa00: "M76.9759 4.70793C76.8903 4.44465 76.6568 4.25825 76.3816 4.23335L72.6283 3.8926L71.145 0.419814C71.0354 0.164672 70.7862 0 70.5089 0C70.2315 0 69.9822 0.164672 69.8734 0.419814L68.3901 3.8926L64.6362 4.23335C64.361 4.25875 64.128 4.44515 64.0418 4.70793C63.9562 4.9712 64.0353 5.25997 64.2434 5.4425L67.0806 7.93034L66.2441 11.6148C66.1829 11.8857 66.288 12.1659 66.5128 12.3284C66.6336 12.4162 66.7756 12.46 66.918 12.46C67.0405 12.46 67.163 12.4275 67.2724 12.362L70.5089 10.4268L73.7448 12.362C73.9822 12.5038 74.2807 12.4909 74.505 12.3284C74.7297 12.1659 74.8349 11.8857 74.7737 11.6148L73.9371 7.93034L76.7743 5.4425C76.9824 5.25997 77.0615 4.9718 76.9759 4.70793V4.70793Z",
  p9e70880: "M60.974 4.70793C60.8884 4.44465 60.6548 4.25825 60.3797 4.23335L56.6263 3.8926L55.143 0.419814C55.0335 0.164672 54.7843 0 54.5069 0C54.2296 0 53.9803 0.164672 53.8715 0.419814L52.3881 3.8926L48.6342 4.23335C48.359 4.25875 48.126 4.44515 48.0399 4.70793C47.9543 4.9712 48.0333 5.25997 48.2415 5.4425L51.0787 7.93034L50.2421 11.6148C50.1809 11.8857 50.2861 12.1659 50.5109 12.3284C50.6317 12.4162 50.7736 12.46 50.9161 12.46C51.0385 12.46 51.161 12.4275 51.2704 12.362L54.5069 10.4268L57.7428 12.362C57.9802 12.5038 58.2787 12.4909 58.503 12.3284C58.7278 12.1659 58.8329 11.8857 58.7717 11.6148L57.9352 7.93034L60.7724 5.4425C60.9804 5.25997 61.0596 4.9718 60.974 4.70793V4.70793Z",
  pebddb00: "M12.9681 4.70793C12.8825 4.44465 12.649 4.25825 12.3738 4.23335L8.62048 3.8926L7.13714 0.419814C7.02762 0.164672 6.77843 0 6.50107 0C6.22371 0 5.97442 0.164672 5.8656 0.419814L4.38226 3.8926L0.62834 4.23335C0.353159 4.25875 0.120139 4.44515 0.0340334 4.70793C-0.0515761 4.9712 0.0274862 5.25997 0.235608 5.4425L3.07282 7.93034L2.23627 11.6148C2.17506 11.8857 2.28022 12.1659 2.505 12.3284C2.62583 12.4162 2.76778 12.46 2.91023 12.46C3.03265 12.46 3.15516 12.4275 3.26458 12.362L6.50107 10.4268L9.73697 12.362C9.97436 12.5038 10.2728 12.4909 10.4971 12.3284C10.7219 12.1659 10.8271 11.8857 10.7659 11.6148L9.92932 7.93034L12.7665 5.4425C12.9746 5.25997 13.0537 4.9718 12.9681 4.70793V4.70793Z",
  pfe67f00: "M28.9701 4.70793C28.8845 4.44465 28.6509 4.25825 28.3758 4.23335L24.6224 3.8926L23.1391 0.419814C23.0296 0.164672 22.7804 0 22.503 0C22.2257 0 21.9764 0.164672 21.8676 0.419814L20.3842 3.8926L16.6303 4.23335C16.3551 4.25875 16.1221 4.44515 16.036 4.70793C15.9504 4.9712 16.0294 5.25997 16.2376 5.4425L19.0748 7.93034L18.2382 11.6148C18.177 11.8857 18.2822 12.1659 18.507 12.3284C18.6278 12.4162 18.7697 12.46 18.9122 12.46C19.0346 12.46 19.1571 12.4275 19.2665 12.362L22.503 10.4268L25.7389 12.362C25.9763 12.5038 26.2748 12.4909 26.4991 12.3284C26.7239 12.1659 26.829 11.8857 26.7678 11.6148L25.9313 7.93034L28.7685 5.4425C28.9765 5.25997 29.0557 4.9718 28.9701 4.70793V4.70793Z",
}

const Stage: React.FC<StageProps> = ({ title, bgColor, textColor = 'text-black' }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative size-[80px] sm:size-[100px] lg:size-[117px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117 117">
          <circle cx="58.4932" cy="58.4932" fill={bgColor} r="58.4932" />
        </svg>
        <div className={`absolute inset-0 flex items-center justify-center px-2 ${textColor}`}>
          <p className="text-center capitalize font-extrabold text-[14px] sm:text-[16px] lg:text-[18px] leading-tight">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

const Arrow: React.FC<{ index?: number }> = ({ index = 0 }) => {
  const isEven = index % 2 === 0;
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <div className={`flex items-center justify-center shrink-0 w-[45px] ${!isEven ? 'hidden min-[25rem]:flex' : ''}`}>
      <svg
        className={`w-full h-[15px] ${isArabic ? 'rotate-180' : ''}`}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 47 15"
      >
        <path d={svgPaths.p3c93f800} fill="black" />
      </svg>
    </div>
  );
};

const DecorativeSquare: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="rotate-45">
        <div className="bg-[#ffc27a] size-[10px] sm:size-[12px]" />
      </div>
    </div>
  );
};


const DecorativeFrame: React.FC = () => {
  return (
    <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 2xl:size-24 xl:size-22 lg:size-20 md:size-18 size-16 rotate-[81.5deg] opacity-60">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119 103">
        <path clipRule="evenodd" d={svgPaths.p364c8380} fill="#208E9A" fillRule="evenodd" />
      </svg>
    </div>
  );
};

export default function OurEvolution() {

  const t = useTranslations()

  const stages = [
    { title: t('NLP'), bgColor: '#E9F4F5', textColor: 'text-black' },
    { title: t('Speech Analysis'), bgColor: '#DEEEF0', textColor: 'text-black' },
    { title: t('Computer Vision'), bgColor: '#BADCE0', textColor: 'text-black' },
    { title: t('Analytics'), bgColor: '#208E9A', textColor: 'text-white' },
    { title: t('Multi Agent'), bgColor: '#1D808B', textColor: 'text-white' },
    { title: t('Generative AI'), bgColor: '#13555C', textColor: 'text-white' },
  ];

  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[500px] bg-[#fbfbfb] rounded-br-[50px] sm:rounded-br-[70px] lg:rounded-br-[86px] overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Decorative Elements */}
      <DecorativeSquare className="absolute top-4 left-4 sm:top-6 sm:left-8 lg:top-[11px] lg:left-[80px]" />
      <DecorativeSquare className="absolute top-16 right-4 sm:top-20 sm:right-8 lg:top-[107px] lg:right-[80px]" />
      <DecorativeFrame />

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6"
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2 2xl:mb-14 lg:mb-10 mb-8"
        >
          <TrustedBy />

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="capitalize text-center md:text-start font-bold text-[32px] sm:text-[38px] lg:text-[42px] text-black tracking-tight leading-tight"
          >
            {t(`Our Evolution`)}
          </motion.h2>
        </motion.div>

        {/* Evolution Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex  items-center md:justify-start justify-center gap-7 flex-wrap max-w-full"
        >
          {stages.map((stage, index) => (
            <React.Fragment key={stage.title}>
              <Stage
                title={stage.title}
                bgColor={stage.bgColor}
                textColor={stage.textColor}
              />
              {index < stages.length - 1 && <Arrow index={index} />}
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
