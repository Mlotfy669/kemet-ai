"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "next-intl";
import Image from "next/image";

export function IdrakSection() {
  const locale = useLocale();

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-sm font-medium text-kemet-teal">
            Trusted By 20,000+ Clients ⭐⭐⭐⭐
          </p>
          <h2 className="text-4xl font-bold text-white">
            Idraak Is The Advanced RAG Engine Launched By KEMET.AI.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            Introducing Idraak: A Potent Sovereign AI Solution Engineered For
            Enterprises Handling Massive Datasets. This Scalable Infrastructure
            Is The Key To Unlocking Enhanced Operations Throughout Your
            Organization.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-2xl bg-gray-800/50 p-4 backdrop-blur-sm"
        >
          <Image
            src="/kemet-design/Dashboard-1.jpg"
            alt="Idrak Dashboard"
            width={1200}
            height={700}
            className="rounded-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h3 className="mb-4 text-2xl font-bold text-white">
            Discover The Power Of Idraak In Boosting Your Team's Efficiency.
          </h3>
          <Link
            href={`/${locale}/book-demo`}
            className="inline-block rounded-full bg-kemet-teal px-8 py-3 font-semibold text-white transition-all hover:bg-kemet-teal/90 hover:shadow-lg"
          >
            Discover Idraak!
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
