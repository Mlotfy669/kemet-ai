"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function LeadershipSection() {
  const leaders = [
    {
      name: "Islam M.Hamad",
      role: "CTO & Co-Founder",
      image: "/placeholder-leader-1.jpg",
      description:
        "Leads AI Infrastructure at KEMET.AI with a focus on sovereign AI solutions for the Middle East."
    },
    {
      name: "Abdo Fartouk",
      role: "CEO & Co-Founder",
      image: "/placeholder-leader-2.jpg",
      description:
        "Drives KEMET.AI's vision of empowering Middle Eastern enterprises with secure AI technology."
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-sm font-medium text-gray-600">
            Trusted By 20,000+ Clients ⭐⭐⭐⭐
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Leadership At KEMET.AI Places Paramount Importance On Security And Trust.
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 h-24 w-24 rounded-full bg-gradient-to-br from-kemet-teal to-kemet-purple" />
              <h3 className="text-2xl font-bold text-gray-900">{leader.name}</h3>
              <p className="mt-2 text-kemet-teal">{leader.role}</p>
              <p className="mt-4 max-w-md text-gray-600">{leader.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
