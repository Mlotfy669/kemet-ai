"use client";

import { Link } from '@/i18n/routing';
import logo from '@/public/assets/shared/logoWithText.webp';
import { useLocale } from "next-intl";
import Image from "next/image";

const NavbarLogo = () => {

  const locale = useLocale();

  return (
    <Link href={`/`}>
      <Image
        src={logo}
        alt="KEMET.AI"
        className="object-contain xl:h-auto h-7"
      />
    </Link>
  );
}

export default NavbarLogo;
