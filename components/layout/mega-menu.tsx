"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLocale } from "next-intl";

export interface MegaMenuSection {
  title: string;
  items: {
    title: string;
    href: string;
    description?: string;
    icon?: React.ReactNode;
  }[];
}

interface MegaMenuProps {
  isOpen: boolean;
  sections: MegaMenuSection[];
  onClose: () => void;
}

export function MegaMenu({ isOpen, sections, onClose }: MegaMenuProps) {
  const locale = useLocale();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-20 z-40 bg-black/20 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Mega Menu Content */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              ease: [0.175, 0.885, 0.32, 1.275] // ease-out-back
            }}
            className="fixed left-0 right-0 top-20 z-50 bg-white shadow-2xl"
          >
            <div className="container mx-auto px-6 py-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {sections.map((section, idx) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: idx * 0.05,
                      ease: "easeOut"
                    }}
                  >
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={`/${locale}${item.href}`}
                            onClick={onClose}
                            className="group block rounded-lg p-3 transition-all duration-200 hover:bg-gray-50"
                          >
                            <div className="flex items-start gap-3">
                              {item.icon && (
                                <div className="mt-1 text-kemet-teal transition-transform duration-200 group-hover:scale-110">
                                  {item.icon}
                                </div>
                              )}
                              <div>
                                <div className="font-semibold text-gray-900 transition-colors duration-200 group-hover:text-kemet-teal">
                                  {item.title}
                                </div>
                                {item.description && (
                                  <div className="mt-1 text-sm text-gray-600">
                                    {item.description}
                                  </div>
                                )}
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
