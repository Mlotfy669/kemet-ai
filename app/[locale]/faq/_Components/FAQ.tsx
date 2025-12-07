"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

interface FAQItem {
  id: number;
  question: string;
  nestedTitle?: string;
  answer: string;
  answer2?: string;
  answer3?: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is the concept of Sovereign AI that KEMET offers",
    answer: "What is the concept of Sovereign AI that KEMET offers desc",
  },
  {
    id: 2,
    question: "How does KEMET guarantee answer accuracy in custom solutions",
    answer: "How does KEMET guarantee answer accuracy in custom solutions desc",
  },
  {
    id: 3,
    question: "Do your AI solutions require us to transfer our data to external servers",
    answer: "Do your AI solutions require us to transfer our data to external servers desc",
  },
  {
    id: 4,
    question: "What is the expected Return on Investment (ROI) from automating Compliance and Audit tasks",
    nestedTitle: "The ROI is measurable and substantial in terms of cost and time",
    answer: "What is the expected Return on Investment (ROI) from automating Compliance and Audit tasks desc",
  },
  {
    id: 5,
    question: "How can your solutions help improve Contact Center performance",
    nestedTitle: "We provide advanced Contact Center AI focused on augmenting cognitive tasks",
    answer: "How can your solutions help improve Contact Center performance desc1",
    answer2: "How can your solutions help improve Contact Center performance desc2",
  },
  {
    id: 6,
    question: "Can your system handle billions of documents, and how quickly",
    answer: "Can your system handle billions of documents, and how quickly desc",
  },
  {
    id: 7,
    question: "Do KEMET solutions support Arabic and other multilingual data",
    answer: "Do KEMET solutions support Arabic and other multilingual data desc1",
    answer2: "Do KEMET solutions support Arabic and other multilingual data desc2",
  },
  {
    id: 8,
    question: "What security measures are in place to protect data from unauthorized access",
    nestedTitle: "We enforce rigorous, non-negotiable security protocols, including",
    answer: "What security measures are in place to protect data from unauthorized access desc1",
    answer2: "What security measures are in place to protect data from unauthorized access desc2",
    answer3: "What security measures are in place to protect data from unauthorized access desc3",
  }
];

export default function FAQ() {

  const t = useTranslations();
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="container mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-900 2xl:mb-8 xl:mb-6 md:mb-4 mb-3"
      >
        {t("Kemet Frequently Asked Questions")}
      </motion.h2>

      <>
        {
          faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className={`cursor-pointer ${openId === faq.id ? 'border-b-2 border-primary-normal' : "border-b border-[#999]"} w-full flex items-start justify-between px-1 lg:py-6 md:py-4 py-3 hover:bg-gray-50 transition-colors`}
              >
                <div className="flex items-start md:gap-4 gap-2 flex-1">
                  <div className="md:size-3 size-2.5 mt-2 rotate-45 bg-secondery-normal shrink-0" />
                  <h3 className="text-start text-base md:text-lg font-semibold text-primary-normal pr-4">
                    {t(faq.question)}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 mt-1"
                >
                  <ChevronDown className="size-6 text-primary-normal" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-1 lg:py-6 md:py-4 py-3 text-sm md:text-base text-gray-700 leading-relaxed bg-orange-50/30 flex flex-col gap-2">
                      {faq?.nestedTitle && <b>{t(faq?.nestedTitle)} :</b>}
                      {t(faq.answer)} <br />
                      {faq?.answer2 && t(faq?.answer2)}
                      {faq?.answer3 && <><br /> {t(faq?.answer3)}</>}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        }
      </>
    </section>
  );
}
