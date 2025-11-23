"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import en from '@/public/assets/shared/en.webp';
import ar from '@/public/assets/shared/ar.webp';

interface NavbarActionsProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const NavbarActions = ({ mobileMenuOpen, setMobileMenuOpen }: NavbarActionsProps) => {

  const locale = useLocale();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    const currentPath = window.location.pathname.replace(`/${locale}`, "");
    window.location.href = `/${newLocale}${currentPath}`;
  };

  return (
    <div className="flex items-center gap-4">
      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-2 cursor-pointer rounded-full border border-white px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
      >
        <Image
          src={locale === 'en' ? ar : en}
          alt={locale}
          priority
          quality={100}
          className='size-5'
        />
        <span>{locale === "en" ? "AR" : "EN"}</span>
      </button>

      {/* Book Demo Button */}
      <Link
        href={`/${locale}/book-demo`}
        className="hidden rounded-full border border-primary-normal hover:bg-primary-normal-hover px-4 py-2.5 text-sm font-semibold text-white transition-all lg:block"
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
  );
}

export default NavbarActions;
