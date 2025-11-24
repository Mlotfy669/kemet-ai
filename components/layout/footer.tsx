
"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import footerLogo from "@/public/assets/shared/footerLogo.png";

export default function FooterSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
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
              className="lg:col-span-3 space-y-6"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-32 md:w-40"
              >
                <Image
                  src={footerLogo}
                  alt="Kemet AI Logo"
                  className="w-full h-auto"

                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  href="mailto:help@kemetai.com"
                  className="flex items-center gap-3 text-black hover:text-primary-normal transition-colors"
                >
                  <Mail className="w-5 h-5 text-secondery-normal" />
                  <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>help@kemetai.com</motion.span>
                </motion.a>
                
                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  href="tel:+01128501210"
                  className="flex items-center gap-3 text-black hover:text-primary-normal transition-colors"
                >
                  <Phone className="w-5 h-5 text-secondery-normal" />
                  <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>+01128501210</motion.span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Links Column */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-6 text-black capitalize">Links</motion.h3>
              <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-3">
                <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <motion.a href="#about" className="text-black hover:text-primary-normal transition-colors capitalize">
                    About
                  </motion.a>
                </motion.li>
                <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <motion.a href="#careers" className="text-black hover:text-primary-normal transition-colors capitalize">
                    Careers
                  </motion.a>
                </motion.li>
                <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <motion.a href="#contact" className="text-black hover:text-primary-normal transition-colors capitalize">
                    Contact
                  </motion.a>
                </motion.li>
              </motion.ul>
            </motion.div>

            {/* Legal Column */}
            <motion.div
                initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-6 text-black capitalize">Legal</motion.h3>
              <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-3">
                <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <motion.a href="#terms" className="text-black hover:text-primary-normal transition-colors capitalize">
                    Terms of Use
                  </motion.a>
                </motion.li>
                <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <motion.a href="#privacy" className="text-black hover:text-primary-normal transition-colors capitalize">
                    Privacy Policy
                  </motion.a>
                </motion.li>
                <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <motion.a href="#cookies" className="text-black hover:text-primary-normal transition-colors capitalize">
                    Cookie Policy
                  </motion.a>
                </motion.li>
              </motion.ul> 
            </motion.div>

            {/* Resources Column */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
            >
              <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-6 text-black capitalize">Resources</motion.h3>
              <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-3">
                <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <motion.a href="#blog" className="text-black hover:text-primary-normal transition-colors capitalize">
                    Blog
                  </motion.a>
                </motion.li>
                <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <motion.a href="#faq-ar" className="text-black hover:text-primary-normal transition-colors capitalize">
                    FAQ (AR)
                  </motion.a>
                </motion.li>
                <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <motion.a href="#faq-en" className="text-black hover:text-primary-normal transition-colors capitalize">
                    FAQ (EN)
                  </motion.a>
                </motion.li>
              </motion.ul>
            </motion.div>

            {/* Newsletter Column */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
            >
              <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-2 text-black capitalize">Newsletter</motion.h3>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-6 text-black capitalize">Stay up to date</motion.p>
              
              <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative" onSubmit={(e) => e.preventDefault()}>
                <motion.input
                  type="email"
                  placeholder="Your email"
                  className="w-full h-16 md:h-20 px-6 pr-32 md:pr-40 rounded-full border-2 border-[#e1e1e1] bg-white text-black placeholder:text-[#a8a8a8] focus:outline-none focus:border-primatext-primary-normal transition-colors"
                />
                <motion.button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-12 md:h-[60px] px-6 md:px-8 bg-primatext-primary-normal text-white rounded-full hover:bg-[var(--color-primary-dark)] transition-colors capitalize"
                >
                  Subscribe
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>

          {/* Copyright Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pt-8 border-t border-[#d9d9d9]"
          >
            <p className="text-center text-black capitalize">
              © Kemet AI – Sovereign Arabic-Native AI
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
