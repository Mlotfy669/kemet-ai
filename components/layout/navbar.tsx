"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { MegaMenu, MegaMenuSection } from "./mega-menu";
import Image from "next/image";

export function Navbar() {
  const locale = useLocale();
  const t = useTranslations();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const solutionsMenuItems: MegaMenuSection[] = [
    {
      title: "Industries",
      items: [
        {
          title: "Government",
          href: "/solutions/government",
          description: "Sovereign AI for absolute data control"
        },
        {
          title: "Healthcare",
          href: "/solutions/healthcare",
          description: "Confidential medical report analysis"
        },
        {
          title: "Fintech & Finance",
          href: "/solutions/fintech",
          description: "Compliance automation and fraud prevention"
        },
        {
          title: "Education",
          href: "/solutions/education",
          description: "Institutional knowledge management"
        }
      ]
    },
    {
      title: "Technologies",
      items: [
        {
          title: "Vision Analysis",
          href: "/solutions/vision-analysis",
          description: "Transform visual data into intelligence"
        },
        {
          title: "NLP",
          href: "/solutions/nlp",
          description: "Natural language processing solutions"
        },
        {
          title: "Compliance & Audit",
          href: "/solutions/compliance",
          description: "Risk reduction for regulated enterprises"
        }
      ]
    }
  ];

  const resourcesMenuItems: MegaMenuSection[] = [
    {
      title: "Learn",
      items: [
        {
          title: "Blog",
          href: "/resources/blog",
          description: "Latest insights and updates"
        },
        {
          title: "Case Studies",
          href: "/resources/case-studies",
          description: "Real-world success stories"
        },
        {
          title: "Documentation",
          href: "/resources/docs",
          description: "Technical documentation"
        }
      ]
    },
    {
      title: "Support",
      items: [
        {
          title: "FAQ",
          href: "/resources/faq",
          description: "Frequently asked questions"
        },
        {
          title: "Help Center",
          href: "/resources/help",
          description: "Get help and support"
        },
        {
          title: "Contact",
          href: "/contact",
          description: "Get in touch with us"
        }
      ]
    }
  ];

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    const currentPath = window.location.pathname.replace(`/${locale}`, "");
    window.location.href = `/${newLocale}${currentPath}`;
  };

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 bg-kemet-navy/95 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <Image
                  src="/kemet-design/Kemet logo.png"
                  alt="KEMET.AI"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">KEMET.AI</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 lg:flex">
              <Link
                href={`/${locale}`}
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                Home
              </Link>

              {/* Solutions Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu("solutions")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-white/90 transition-colors hover:text-white">
                  Solutions
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeMenu === "solutions" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <Link
                href={`/${locale}/idrak`}
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                Idrak
              </Link>

              {/* Resources Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu("resources")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-white/90 transition-colors hover:text-white">
                  Resources
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeMenu === "resources" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <Link
                href={`/${locale}/company`}
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                Company
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                <Globe className="h-4 w-4" />
                <span>{locale === "en" ? "AR" : "EN"}</span>
              </button>

              {/* Book Demo Button */}
              <Link
                href={`/${locale}/book-demo`}
                className="hidden rounded-full bg-kemet-teal px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-kemet-teal/90 hover:shadow-lg hover:shadow-kemet-teal/50 lg:block"
              >
                Book A Demo
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white lg:hidden"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Solutions Mega Menu */}
      <MegaMenu
        isOpen={activeMenu === "solutions"}
        sections={solutionsMenuItems}
        onClose={() => setActiveMenu(null)}
      />

      {/* Resources Mega Menu */}
      <MegaMenu
        isOpen={activeMenu === "resources"}
        sections={resourcesMenuItems}
        onClose={() => setActiveMenu(null)}
      />

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="fixed left-0 right-0 top-20 z-40 bg-kemet-navy lg:hidden"
        >
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col gap-4">
              <Link
                href={`/${locale}`}
                className="text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href={`/${locale}/solutions`}
                className="text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href={`/${locale}/idrak`}
                className="text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Idrak
              </Link>
              <Link
                href={`/${locale}/resources`}
                className="text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href={`/${locale}/company`}
                className="text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Company
              </Link>
              <Link
                href={`/${locale}/book-demo`}
                className="mt-4 rounded-full bg-kemet-teal px-6 py-2.5 text-center text-sm font-semibold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book A Demo
              </Link>
            </div>
          </div>
        </motion.div>
      )}

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20" />
    </>
  );
}
