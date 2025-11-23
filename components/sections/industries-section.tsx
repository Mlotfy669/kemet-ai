"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Shield, Heart, DollarSign, GraduationCap, FileSearch, Eye } from "lucide-react";
import { Link } from "@/i18n/routing";

export function IndustriesSection() {
  const locale = useLocale();

  const industries = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Finance & Fintech",
      description:
        "Comprehensive, Accurate Document Analysis On Unprecedented Scale.",
      href: "/solutions/fintech",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Healthcare",
      description:
        "Hospitals Maintain Complete Confidentiality For Their Records And Enhance The Speed And Accuracy Of Data.",
      href: "/solutions/healthcare",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Government",
      description:
        "In The Government Sector AI Solutions Are Deployed Locally Within Secure Environments.",
      href: "/solutions/government",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Education",
      description:
        "Allow Educational Institutions To Harness The Full Power Of Generative AI While Maintaining Full Control Of Their Data.",
      href: "/solutions/education",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FileSearch className="h-8 w-8" />,
      title: "NLP",
      description:
        "Advanced Accuracy And Real-Time Analysis For Natural Language And Arabic Data.",
      href: "/solutions/nlp",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Vision Analysis",
      description:
        "Comprehensive OCR, Image Recognition, And AI-powered Insights In Full Privacy.",
      href: "/solutions/vision-analysis",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            One Platform For Every Industry.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={industry.href}
                className="group block h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-kemet-teal hover:shadow-xl"
              >
                <div
                  className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${industry.color} p-3 text-white`}
                >
                  {industry.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-kemet-teal">
                  {industry.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {industry.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
