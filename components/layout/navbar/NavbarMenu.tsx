"use client";

import { Link, usePathname } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";


const NavbarMenu = ({ isScrolled }: { isScrolled: boolean }) => {

  const t = useTranslations()
  const locale = useLocale()
  const pathname = usePathname()

  const solutions = [
    { title: "Government", href: "/solutions/government", isActive: pathname === "/solutions/government" },
    { title: "Finance & Fintech", href: "/solutions/fintech", isActive: pathname === "/solutions/fintech" },
    { title: "Healthcare", href: "/solutions/healthcare", isActive: pathname === "/solutions/healthcare" },
    { title: "Education", href: "/solutions/education", isActive: pathname === "/solutions/education" },
    { title: "Compliance & Audit", href: "/solutions/compliance", isActive: pathname === "/solutions/compliance" },
  ];

  const resourcesMenuItems = [
    { title: "Blog", href: "/resources/blog", isActive: pathname === "/resources/blog" },
    { title: "FAQ", href: "/resources/faq", isActive: pathname === "/resources/faq" }
  ]


  return (
    <ul className="hidden lg:flex items-center 2xl:gap-10 xl:gap-8 lg:gap-6 gap-4 2xl:h-10 xl:h-9 lg:h-8 h-7">
      {/* Home */}
      <li className="h-full flex items-center">
        <Link
          href="/"
          className={`${pathname === "/" ? `${isScrolled ? `text-primary-darker` : `text-primary-normal`} font-bold` : 'font-medium text-white'} group relative h-full flex items-center overflow-hidden xl:text-base text-sm`}
        >
          <span className="block transition-all duration-300 ease-in-out group-hover:-translate-y-4 group-hover:opacity-0">
            {t(`Home`)}
          </span>

          <span className={`absolute ${locale === "ar" ? "right-0" : "left-0"} top-10 ${isScrolled ? `text-primary-darker` : `text-primary-normal`} transition-all duration-300 ease-in-out group-hover:top-2`}>
            {t(`Home`)}
          </span>
        </Link>
      </li>

      {/* Solutions (dropdown) */}
      <li className="relative group h-full flex items-center">
        {/* Button: layered label + arrow */}
        <button
          type="button"
          className={`${pathname.includes("/solutions") ? `${isScrolled ? `text-primary-darker` : `text-primary-normal`} font-bold` : 'font-medium text-white'} flex items-center gap-1 h-full group relative overflow-hidden xl:text-base text-sm`}
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="block transition-all duration-300 ease-in-out group-hover:-translate-y-4 group-hover:opacity-0">
            {t(`Solutions`)}
          </span>

          <span className={`absolute ${locale === "ar" ? "right-0" : "left-0"} top-10 ${isScrolled ? `text-primary-darker` : `text-primary-normal`} font-semibold transition-all duration-300 ease-in-out group-hover:top-2`}>
            {t(`Solutions`)}
          </span>

          <ChevronDown size={17} className={`transition-transform duration-300 ${isScrolled ? `group-hover:text-primary-darker` : `group-hover:text-primary-normal`} group-hover:rotate-180`} />
        </button>

        {/* Dropdown panel */}
        <div
          className={`pointer-events-none absolute ${locale === "ar" ? "right-0" : "left-0"} top-full z-40 w-72 rounded-md bg-white shadow-lg opacity-0 translate-y-3 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto`}
          role="menu"
          aria-label="Solutions submenu"
        >
          <ul className="grid grid-cols-1 gap-1 p-3">
            {solutions.map((s) => (
              <li key={s.title} className="h-full w-full flex items-center">
                <Link
                  href={s.href}
                  className={`${pathname === s.href ? `${isScrolled ? `text-primary-darker` : `text-primary-normal`} font-bold` : 'font-medium text-black'} group/item h-8 w-full flex items-center overflow-hidden relative xl:text-base text-sm`}

                  role="menuitem"
                >
                  <span className="block transition-all duration-300 ease-in-out group-hover/item:-translate-y-4 group-hover/item:opacity-0">
                    {t(s.title)}
                  </span>

                  <span className={`absolute ${locale === "ar" ? "right-0" : "left-0"} top-10 text-primary-normal font-bold transition-all duration-300 ease-in-out group-hover/item:top-2`}>
                    {t(s.title)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>

      {/* Idrak */}
      <li className="h-full flex items-center">
        <Link
          href="/idrak"
          className={`${pathname === "/idrak" ? `${isScrolled ? `text-primary-darker` : `text-primary-normal`} font-bold` : 'font-medium text-white'} group relative h-full flex items-center overflow-hidden xl:text-base text-sm`}
        >
          <span className="block transition-all duration-300 ease-in-out group-hover:-translate-y-4 group-hover:opacity-0">
            {t(`Idrak`)}
          </span>

          <span className={`absolute ${locale === "ar" ? "right-0" : "left-0"} top-10 ${isScrolled ? `text-primary-darker` : `text-primary-normal`} transition-all duration-300 ease-in-out group-hover:top-2`}>
            {t(`Idrak`)}
          </span>
        </Link>
      </li>

      {/* Resources (dropdown) */}
      <li className="relative group h-full flex items-center">
        {/* Button: layered label + arrow */}
        <button
          type="button"
          className={`${pathname.includes("/resources") ? `${isScrolled ? `text-primary-darker` : `text-primary-normal`} font-bold` : 'font-medium text-white'} flex items-center gap-1 h-full group relative overflow-hidden xl:text-base text-sm`}
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="block transition-all duration-300 ease-in-out group-hover:-translate-y-4 group-hover:opacity-0">
            {t(`Resources`)}
          </span>

          <span className={`absolute ${locale === "ar" ? "right-0" : "left-0"} top-10 ${isScrolled ? `text-primary-darker` : `text-primary-normal`} font-semibold transition-all duration-300 ease-in-out group-hover:top-2`}>
            {t(`Resources`)}
          </span>

          <ChevronDown size={17} className={`transition-transform duration-300 ${isScrolled ? `group-hover:text-primary-darker` : `group-hover:text-primary-normal`} group-hover:rotate-180`} />
        </button>

        {/* Dropdown panel */}
        <div
          className="pointer-events-none absolute left-0 top-full z-40 w-52 rounded-md bg-white shadow-lg opacity-0 translate-y-3 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
          role="menu"
          aria-label="Resources submenu"
        >
          <ul className="grid grid-cols-1 gap-1 p-3">
            {resourcesMenuItems.map((s) => (
              <li key={s.title} className="h-full w-full flex items-center">
                <Link
                  href={s.href}
                  className={`${pathname === s.href ? `${isScrolled ? `text-primary-darker` : `text-primary-normal`} font-bold` : 'font-medium text-black'} group/item h-8 w-full flex items-center overflow-hidden relative xl:text-base text-sm`}
                  role="menuitem"
                >
                  <span className="block transition-all duration-300 ease-in-out group-hover/item:-translate-y-4 group-hover/item:opacity-0">
                    {t(s.title)}
                  </span>

                  <span className={`absolute ${locale === "ar" ? "right-0" : "left-0"} top-10 text-primary-normal font-bold transition-all duration-300 ease-in-out group-hover/item:top-2`}>
                    {t(s.title)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>

      {/* Company */}
      <li className="h-full flex items-center">
        <Link
          href="/company"
          className={`${pathname === "/company" ? `${isScrolled ? `text-primary-darker` : `text-primary-normal`} font-bold` : 'font-medium text-white'} group relative h-full flex items-center overflow-hidden xl:text-base text-sm`}
        >
          <span className="block transition-all duration-300 ease-in-out group-hover:-translate-y-4 group-hover:opacity-0">
            {t(`Company`)}
          </span>

          <span className={`absolute left-0 top-10 ${isScrolled ? `text-primary-darker` : `text-primary-normal`} transition-all duration-300 ease-in-out group-hover:top-2`}>
            {t(`Company`)}
          </span>
        </Link>
      </li>
    </ul>

  );
}


export default NavbarMenu;