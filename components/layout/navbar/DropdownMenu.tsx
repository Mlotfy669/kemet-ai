"use client";

import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";

interface DropdownMenuProps {
  isOpen: boolean;
  sections: {
    title: string,
    href: string
  }[];
  title: string;
  onClose: () => void;
}

const DropdownMenu = ({ isOpen, sections, title, onClose }: DropdownMenuProps) => {
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
          <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
            {title}
          </h3>
          <ul className="space-y-1">
            {sections.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-start gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-gray-50"
                >
                  <div className="font-medium text-gray-900 group-hover:text-kemet-teal">
                    {item.title}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DropdownMenu