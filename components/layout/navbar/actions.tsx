"use client";

import { Link } from '@/i18n/routing';
import ar from '@/public/assets/shared/ar.webp';
import en from '@/public/assets/shared/en.webp';
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation';

interface NavbarActionsProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const NavbarActions = ({ mobileMenuOpen, setMobileMenuOpen }: NavbarActionsProps) => {

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations()

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    const segments = pathname.split('/');
    segments[1] = nextLocale;
    router.push(segments.join('/'));
  };

  return (
    <div className="flex items-center 2xl:gap-4 xl:gap-3 gap-2">
      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-2 cursor-pointer rounded-full border border-transparent px-4 xl:py-2 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
      >
        <Image
          src={locale === 'en' ? ar : en}
          alt={locale}
          priority
          className='size-5'
        />
        <span>{locale === "en" ? "AR" : "EN"}</span>
      </button>

      {/* Book Demo Button */}
      <Link
        href="/book-demo"
        className="hidden rounded-full border border-primary-normal hover:bg-primary-normal-hover px-4 xl:py-2.5 py-1.5 xl:text-sm text-xs xl:font-semibold font-medium text-white transition-all lg:block"
      >
        {t(`Book A Demo`)}
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
