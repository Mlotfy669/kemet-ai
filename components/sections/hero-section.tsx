"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "next-intl";
import Image from "next/image";

import heroBgFrame1 from "@/public/assets/shared/heroBgFrame1.webp";
import heroBgFrame2 from "@/public/assets/shared/heroBgFrame2.webp";
import heroBgFrame3 from "@/public/assets/shared/heroBgFrame3.webp";

export function HeroSection() {
  const locale = useLocale();

  return (
    <section className="relative h-screen overflow-hidden bg-[url('@/public/assets/shared/heroBg.webp')] bg-cover bg-center bg-no-repeat">
      <div className="h-18 container" />
      <Image src={heroBgFrame1} alt="Hero Background Frame 1" className="absolute bottom-[19vh] left-0"/>
      <Image src={heroBgFrame2} alt="Hero Background Frame 2" className="absolute bottom-[10vh] right-0"/>
      <Image src={heroBgFrame3} alt="Hero Background Frame 3" className="absolute top-[12vh] left-0"/>
      <div className="container relative mx-auto px-6 py-10">
        <div className="flex flex-col items-center">
          {/* upper Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white flex flex-col items-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-full bg-[#ffc17a3d] px-4 py-2 text-sm font-medium text-white"
            >
              Trusted By 150,000+ Users <span className="text-base">👋</span>
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-5xl font-bold leading-tight lg:text-6xl xl:text-7xl text-center"
            >
              Sovereign Generative AI For The Middle East
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-lg text-gray-300 lg:text-xl"
            >
              Explore Sovereign AI Solutions For Advanced & Secure Document
              Analysis In The Middle East.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8"
            >
              <Link
                href={`/${locale}/book-demo`}
                className="inline-block rounded-full bg-kemet-teal px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-kemet-teal/50 transition-all hover:bg-kemet-teal/90 hover:shadow-xl"
              >
                Book Now!
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
              <Image
                src="/kemet-design/Dashboard.jpg"
                alt="KEMET.AI Dashboard"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
