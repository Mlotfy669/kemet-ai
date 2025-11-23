"use client";

import logo from '@/public/assets/shared/logoWithText.webp';
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const NavbarLogo = () => {
  const locale = useLocale();

  return (
    <Link href={`/${locale}`}>
      <Image
        src={logo}
        alt="KEMET.AI"
        className="object-contain"
      />
    </Link>
  );
}

export default NavbarLogo;
