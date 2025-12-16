
"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import footerLogo from "@/public/assets/shared/footerLogo.webp";
import arrowDown from "@/public/assets/shared/arrowDown.webp";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {

  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="relative bg-white w-full pt-12 md:pt-16 lg:pt-20 pb-6">
      <Image src={arrowDown} alt="Arrow Down" className="hidden md:block absolute 2xl:h-24 2xl:w-auto xl:w-auto lg:h-16 lg:w-auto md:h-12 md:w-auto size-14 top-0 left-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Main Footer Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
          >
            {/* Logo and Contact Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 space-y-4"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-fit"
              >
                <Image
                  src={footerLogo}
                  alt="Kemet AI Logo"
                  className="w-full object-none"

                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-2"
              >
                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  href="mailto:Sales@kemetai.com"
                  className="flex items-center gap-3 text-black font-semibold hover:text-primary-normal transition-colors"
                >
                  <Mail className="w-5 h-5 text-secondery-normal" />
                  <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>Sales@kemetai.com</motion.span>
                </motion.a>

                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  href="tel:+20 106 443 6853"
                  className="flex items-center gap-3 text-black font-semibold hover:text-primary-normal transition-colors"
                >
                  <Phone className="w-5 h-5 text-secondery-normal" />
                  <motion.span style={{ direction: "ltr" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>+20 106 443 6853</motion.span>
                </motion.a>
                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  href="tel:+20 114 744 4698"
                  className="flex items-center gap-3 text-black font-semibold hover:text-primary-normal transition-colors"
                >
                  <Phone className="w-5 h-5 text-secondery-normal" />
                  <motion.span style={{ direction: "ltr" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>+20 114 744 4698</motion.span>
                </motion.a>
                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  href="tel:+20 110 113 1892"
                  className="flex items-center gap-3 text-black font-semibold hover:text-primary-normal transition-colors"
                >
                  <Phone className="w-5 h-5 text-secondery-normal" />
                  <motion.span style={{ direction: "ltr" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>+20 110 113 1892</motion.span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Links Column */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 flex flex-col gap-4"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-black font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl"
              >
                {t("Links")}
              </motion.h3>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-3">
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}>
                  <Link href="/company" className="text-black font-semibold hover:text-primary-normal transition-colors">
                    {t("About")}
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}>
                  <Link href="/contact-us" className="text-black font-semibold hover:text-primary-normal transition-colors">
                    {t("Contact Us")}
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Link href="/faq" className="text-black font-semibold hover:text-primary-normal transition-colors ">
                    {t("FAQ")}
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>

            {/* Legal Column */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 flex flex-col gap-4"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-black font-bold  text-lg md:text-xl lg:text-2xl xl:text-3xl"
              >
                {t("Legal")}
              </motion.h3>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-3"
              >
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Link href="/terms" className="text-black font-semibold hover:text-primary-normal transition-colors ">
                    {t("Terms of Use")}
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Link href="/policy" className="text-black font-semibold hover:text-primary-normal transition-colors ">
                    {t("Privacy Policy")}
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
            {/* Address Column */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 flex flex-col gap-4"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-black font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl"
              >
                {t("Address")}
              </motion.h3>
              <div className="flex flex-col gap-3">
                <a href="" target="_blank" rel="noopener noreferrer" className="text-black font-semibold text-sm">
                  {t("Qatar Address")}
                </a>
                <a href="https://maps.app.goo.gl/6Q9dYYr8Ksp34fxXA" target="_blank" rel="noopener noreferrer" className="text-black font-semibold text-sm">
                  {t("Egypt Address")}
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Copyright Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pt-8 font-semibold border-t border-[#d9d9d9]"
          >
            <p className="text-center text-black ">
              © Kemet AI – Sovereign Arabic-Native AI
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer >
  );
}
