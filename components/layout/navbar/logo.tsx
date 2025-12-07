"use client";

import { Link } from '@/i18n/routing';
import logo from '@/public/assets/shared/logoWithText.webp';
import { useTranslations } from "next-intl";
import Image from "next/image";

const NavbarLogo = () => {

  const t = useTranslations();

  return (
    <Link href={`/`} className='flex items-center gap-2 ms-2'>
      <Image
        src={logo}
        alt="KEMET.AI"
        className="object-contain xl:h-auto h-7"
      />
      <div className='flex flex-col text-white'>
        <p className='text-lg font-bold'>KEMET.AI</p>
        <p className='text-[13px] -mt-1'>{t("We Innovate")}</p>
      </div>
    </Link>
  );
}

export default NavbarLogo;
