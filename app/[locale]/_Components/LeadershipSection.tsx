"use client";

import TrustedBy from "@/components/ui/TrustedBy";
import abdo from "@/public/assets/home/abdo.webp";
import hakim from "@/public/assets/home/hakim.webp";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  desc: string;
  job: string;
  image: any;
  index: number;
}

function TestimonialCard({ name, desc, job, image, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative bg-white rounded-[16px] shadow-[0px_40px_50px_0px_rgba(185,192,201,0.2)] md:p-6 p-4 border-l-4 border-secondery-normal"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="flex flex-col sm:flex-row gap-6 items-start"
      >
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
          className="shrink-0"
        >
          <Image
            alt={name}
            className="md:size-28 sm:size-24 size-20 rounded-full object-cover"
            src={image}
            width={122}
            height={122}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className="flex-1"
        >
          <motion.h3
            className="text-xl sm:text-2xl text-black font-bold mb-2"
          >
            {name}
          </motion.h3>
          <motion.h3
            className="text-base sm:text-lg text-primary-normal font-bold mb-1"
          >
            {job}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            className="text-sm sm:text-base text-black/60"
          >
            {desc}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function LeadershipSection() {

  const t = useTranslations();

  const testimonials = [
    {
      name: t("Abdo Farouk"),
      desc: t("abdo desc"),
      job: t("CEO & Founder"),
      image: abdo,
    },
    {
      name: t("Mohamed Hakim"),
      job: t("Lead Group Product Manager"),
      desc: t("hakim desc"),
      image: hakim,
    },
  ];

  return (
    <section className="relative w-full bg-[#fbfbfb] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Decorative Squares */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="hidden md:block absolute bottom-24 left-20 w-3 h-3 bg-primary-normal"
      />
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 1, rotate: 45 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden md:block absolute top-16 right-24 w-3 h-3 bg-secondery-normal rotate-45"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center items-center gap-2 mb-12 sm:mb-16 lg:mb-20"
        >
          {/* Trusted Badge */}
          <TrustedBy shouldBeCol={false} />

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-black font-bold max-w-4xl mx-auto px-4"
          >
            {t("Leadership at KEMET")}
          </motion.h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              desc={testimonial.desc}
              job={testimonial.job}
              image={testimonial.image}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
