"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function VisionMissionSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Our Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              At the AI Hub, We Are Building An Arabic AI Infrastructure To
              Empower Companies In The Middle East To Harness The Full Potential
              Of Generative AI, While Maintaining Complete Control Over Their
              Data. Sovereign AI Is Key To Our Vision Of A Strong And
              Independent M.E.
            </p>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our commitment is to helping Regional Businesses improve their
              operational capabilities through Sovereign AI solutions. Through
              advanced analytics and natural language processing, we deliver the
              AI innovations that optimize business performance while respecting
              the Stringent requirements of the M.E. Digital Space.
            </p>
          </motion.div>
        </div>

        {/* Vision Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
        >
          <Image
            src="/kemet-design/Group 1000004707.png"
            alt="Vision"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
