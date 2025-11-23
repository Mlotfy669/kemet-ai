"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

export function CTASection() {
  const locale = useLocale();

  return (
    <section className="bg-gradient-to-br from-kemet-navy via-gray-900 to-kemet-teal/20 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-4 text-sm font-medium text-kemet-teal">
            Trusted By 20,000+ Clients ⭐⭐⭐⭐
          </p>
          <h2 className="text-4xl font-bold text-white lg:text-5xl">
            Ready To Get Started?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Request A Demo Now To See Kemet AI's Capabilities For Enhancing
            Efficiency And Security Through Arabic-Native AI. Join Us.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <Link
              href={`/book-demo`}
              className="inline-block rounded-full bg-kemet-teal px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-kemet-teal/50 transition-all hover:bg-kemet-teal/90 hover:shadow-xl"
            >
              Book A Demo Now !
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative Lines */}
        <div className="mt-16 flex justify-center gap-8 opacity-20">
          <div className="h-24 w-32 rounded-lg border-2 border-kemet-teal" />
          <div className="h-24 w-32 rounded-lg border-2 border-kemet-teal" />
          <div className="h-24 w-32 rounded-lg border-2 border-kemet-teal" />
        </div>
      </div>
    </section>
  );
}
