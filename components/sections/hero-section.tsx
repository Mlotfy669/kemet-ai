"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "next-intl";
import Image from "next/image";

export function HeroSection() {
  const locale = useLocale();

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-[#0a0e27] via-[#1e293b] to-[#0f766e]">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-kemet-teal/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-kemet-purple/20 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6 py-20 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block rounded-full border border-kemet-teal/50 bg-kemet-teal/10 px-4 py-2 text-sm font-medium text-kemet-teal"
            >
              Trusted By 20,000+ Clients ⭐⭐⭐⭐
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-5xl font-bold leading-tight lg:text-6xl xl:text-7xl"
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
