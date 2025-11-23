"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLocale } from "next-intl";
import { MegaMenuSection } from "./mega-menu";

interface DropdownMenuProps {
  isOpen: boolean;
  sections: MegaMenuSection[];
  onClose: () => void;
}

export function DropdownMenu({ isOpen, sections, onClose }: DropdownMenuProps) {
  const locale = useLocale();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="absolute left-0 top-full z-50 mt-2 w-64 origin-top-left rounded-xl border border-gray-100 bg-white p-2 shadow-xl ring-1 ring-black/5 focus:outline-none"
          onMouseLeave={onClose}
        >
          {sections.map((section, idx) => (
            <div key={section.title} className={idx > 0 ? "mt-4" : ""}>
              {sections.length > 1 && (
                <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {section.title}
                </h3>
              )}
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={`/${locale}${item.href}`}
                      onClick={onClose}
                      className="group flex items-start gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-gray-50"
                    >
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-kemet-teal">
                          {item.title}
                        </div>
                        {item.description && (
                          <div className="text-xs text-gray-500">
                            {item.description}
                          </div>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
