"use client";

import { Link, usePathname } from "@/i18n/routing";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface NavbarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const solutions = [
  { title: "Government", href: "/solutions/government" },
  { title: "Finance & Fintech", href: "/solutions/fintech" },
  { title: "Vision Analysis", href: "/solutions/vision-analysis" },
  { title: "Healthcare", href: "/solutions/healthcare" },
  { title: "Education", href: "/solutions/education" },
  { title: "Compliance & Audit", href: "/solutions/compliance" },
];

const resourcesMenuItems = [
  { title: "Blog", href: "/resources/blog" },
  { title: "FAQ", href: "/resources/faq" }
];

const NavbarDrawer = ({ isOpen, onClose }: NavbarDrawerProps) => {

  const t = useTranslations();
  const pathname = usePathname()
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="fixed left-0 right-0 top-12 z-40 bg-primary-dark/95 backdrop-blur-md lg:hidden"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col gap-4">
          {/* Home */}
          <Link
            href={`/`}
            className="text-white font-medium hover:text-primary-darker transition-colors text-sm"
            onClick={onClose}
          >
            {t(`Home`)}
          </Link>

          {/* Solutions (expandable) */}
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="flex items-center justify-between text-white font-medium hover:text-primary-darker transition-colors text-sm"
            >
              <span>{t(`Solutions`)}</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${solutionsOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-2 ps-4 overflow-hidden"
                >
                  {solutions.map((solution) => (
                    <Link
                      key={solution.title}
                      href={solution.href}
                      className="text-white/80 text-sm hover:text-primary-darker transition-colors"
                      onClick={onClose}
                    >
                      {t(solution.title)}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Idrak */}
          <Link
            href="/idrak"
            className="text-white font-medium hover:text-primary-darker transition-colors text-sm"
            onClick={onClose}
          >
            {t(`Idrak`)}
          </Link>

          {/* Resources (expandable) */}
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="flex items-center justify-between text-white font-medium hover:text-primary-darker transition-colors text-sm"
            >
              <span>{t(`Resources`)}</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${resourcesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {resourcesOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-2 ps-4 overflow-hidden"
                >
                  {resourcesMenuItems.map((resource) => (
                    <Link
                      key={resource.title}
                      href={resource.href}
                      className="text-white/80 text-sm hover:text-primary-darker transition-colors"
                      onClick={onClose}
                    >
                      {t(resource.title)}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Company */}
          <Link
            href="/company"
            className="text-white font-medium hover:text-primary-darker transition-colors text-sm"
            onClick={onClose}
          >
            {t(`Company`)}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default NavbarDrawer;
