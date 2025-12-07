"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface StatItemProps {
  value: string;
  label: string;
  index: number;
  t: any;
}

function StatItem({ value, label, index, t }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-center text-center"
    >
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-[42px] text-black font-bold mb-2 sm:mb-3"
      >
        {value}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        className="text-base sm:text-lg md:text-xl lg:text-[20px] text-black font-medium"
      >
        {t(label)}
      </motion.p>
    </motion.div>
  );
}

const stats = [
  { value: "99.5%", label: "Understanding Accuracy" },
  { value: "2s", label: "Response Time" },
  { value: "100%", label: "Data Sovereignty" },
  { value: "24/7", label: "Availability" },
];


const StatsSection = () => {

  const t = useTranslations();


  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-18 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20"
        >
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              index={index}
              t={t}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default StatsSection;
