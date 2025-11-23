"use client";

import { motion } from "framer-motion";

export function StatsSection() {
  const stats = [
    { value: "99.5%", label: "Model Accuracy" },
    { value: "2s", label: "Response Time" },
    { value: "100%", label: "Data Sovereignty" },
    { value: "24/7", label: "Availability" }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-kemet-navy lg:text-6xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-gray-600 lg:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
