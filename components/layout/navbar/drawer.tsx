"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";

interface NavbarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavbarDrawer = ({ isOpen, onClose }: NavbarDrawerProps) => {
  const locale = useLocale();

  if (!isOpen) return null;

  return (
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
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            href={`/${locale}/solutions`}
            className="text-white"
            onClick={onClose}
          >
            Solutions
          </Link>
          <Link
            href={`/${locale}/idrak`}
            className="text-white"
            onClick={onClose}
          >
            Idrak
          </Link>
          <Link
            href={`/${locale}/resources`}
            className="text-white"
            onClick={onClose}
          >
            Resources
          </Link>
          <Link
            href={`/${locale}/company`}
            className="text-white"
            onClick={onClose}
          >
            Company
          </Link>
          <Link
            href={`/${locale}/book-demo`}
            className="mt-4 rounded-full bg-kemet-teal px-6 py-2.5 text-center text-sm font-semibold text-white"
            onClick={onClose}
          >
            Book A Demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default NavbarDrawer;
