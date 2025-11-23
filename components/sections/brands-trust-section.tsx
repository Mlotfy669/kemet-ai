"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BrandsTrustSection() {
  const brands = [
    { name: "ActiveCampaign", logo: "ActiveCampaign >" },
    { name: "afterpay", logo: "afterpay<>" },
    { name: "Airwallex", logo: "Airwallex" },
    { name: "Amplitude", logo: "Amplitude" },
    { name: "asana", logo: "asana" }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-4 text-sm font-medium text-gray-600">
            Trusted By 20,000+ Clients ⭐⭐⭐⭐
          </p>
          <h2 className="mb-12 text-3xl font-bold text-gray-900">
            These Brands Trust Us.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-2xl font-semibold text-gray-400"
              >
                {brand.logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
