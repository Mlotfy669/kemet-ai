'use client';
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import orangeBlocks from "@/public/assets/home/idrak/orangeBlocks.webp";
import Image from "next/image";
import { useState } from "react";

const svgPaths = "M71.5661 42.7833C71.5387 40.7895 71.2792 38.7784 70.7599 36.7537C68.9391 29.6481 60.8154 25.0864 52.169 24.0138C43.526 22.9413 34.538 25.382 31.074 31.5628C29.0926 35.0967 28.8193 38.1425 29.6289 40.7104C30.4352 43.2645 32.3481 45.3821 34.9444 47.0321C42.1833 51.6282 54.861 52.5667 60.6446 50.6451C63.3195 49.7547 65.9328 48.6823 68.4778 47.455C67.0225 55.4888 61.601 63.0997 54.3655 69.9577C38.6408 84.8633 14.2389 96.1764 0.949913 100.336C0.235929 100.559 -0.160383 101.323 0.0616693 102.041C0.283722 102.759 1.0421 103.162 1.75609 102.938C15.3081 98.6962 40.1849 87.1424 56.2206 71.9412C64.5048 64.0897 70.408 55.2515 71.4158 45.9596C90.1434 35.8908 105.523 17.6233 118.672 2.25029C119.161 1.68308 119.096 0.820209 118.529 0.328629C117.961 -0.159514 117.107 -0.0976632 116.619 0.472982C104.006 15.217 89.3679 32.7557 71.5661 42.7833ZM68.8435 44.2443C68.9459 42.0029 68.7272 39.7272 68.1362 37.4309C66.5613 31.281 59.3224 27.644 51.8375 26.7158C47.2496 26.1486 42.5319 26.6162 38.8321 28.28C36.5057 29.325 34.5891 30.841 33.4345 32.9036C31.9177 35.609 31.5897 37.9225 32.2114 39.8854C32.8332 41.862 34.3775 43.4502 36.3896 44.7255C42.9863 48.916 54.5295 49.8064 59.7939 48.0566C62.8992 47.0253 65.9124 45.7396 68.8435 44.2443Z"


function AbstractShape() {
  return (
    <svg
      className="w-[70px] h-[70px]"
      fill="none"
      viewBox="0 0 119 103"
    >
      <path
        clipRule="evenodd"
        d={svgPaths}
        fill="var(--color-primary-normal)"
        fillRule="evenodd"
      />
    </svg>
  );
}

const ContactForm = () => {

  const t = useTranslations();

  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "a6297c09-48b8-4b4b-9e94-41ba842bdf65");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <section className="relative w-full md:-mt-[90px] -mt-[105px]">
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 81.509 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block absolute top-100 left-0"
        style={{ transform: "rotate(81.509deg)" }}
      >
        <AbstractShape />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 81.509 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block absolute bottom-60 right-0"
        style={{ transform: "rotate(81.509deg)" }}
      >
        <AbstractShape />
      </motion.div>
      <Image
        src={orangeBlocks}
        alt="Hero Background Frame 3"
        className="absolute 2xl:h-20 2xl:w-auto xl:h-16 xl:w-auto lg:h-14 lg:w-auto md:h-12 md:w-auto size-8 top-50 -right-4"
      />


      <div className="flex flex-col md:gap-16 gap-10 relative container px-3 mx-auto ">

        <form onSubmit={onSubmit}>
          <input type="text" name="name" required />
          <input type="email" name="email" required />
          <textarea name="message" required></textarea>
          <button type="submit">Submit</button>
          <p>{result}</p>
        </form>
      </div>
    </section>
  );
};

const SectionHeader = ({ title }: { title: string }) => {

  const t = useTranslations();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-start md:gap-4 gap-3">
      {/* Orange Diamond Icon */}
      <div className="size-2.5 mt-3 rotate-45 bg-[#FFC27A] shrink-0"></div>
      <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        {t(title)}
      </motion.h2>
    </motion.div>
  )
};

export default ContactForm;