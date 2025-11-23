"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { ChevronDown } from "lucide-react";
import { MegaMenuSection } from "../mega-menu";
import { DropdownMenu } from "../dropdown-menu";

const NavbarMenu = () => {
  const locale = useLocale();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const solutionsMenuItems: MegaMenuSection[] = [
    {
      title: "",
      items: [
        { title: "Government", href: "/solutions/government" },
        { title: "Finance & Fintech", href: "/solutions/fintech" },
        { title: "Healthcare", href: "/solutions/healthcare" },
        { title: "Education", href: "/solutions/education" },
        { title: "NLP", href: "/solutions/nlp" },
        { title: "Vision Analysis", href: "/solutions/vision-analysis" },
        { title: "Compliance & Audit", href: "/solutions/compliance" }
      ]
    }
  ];

  const resourcesMenuItems: MegaMenuSection[] = [
    {
      title: "Learn",
      items: [
        { title: "Blog", href: "/resources/blog" },
        { title: "FAQ", href: "/resources/faq" }
      ]
    }
  ];

  return (
    <div className="hidden items-center gap-8 lg:flex">

      {/* Home */}
      <Link
        href={`/${locale}`}
        className="nav-animate text-sm font-medium"
        data-text="Home"
      >
        Home
      </Link>

      {/* Solutions */}
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu("solutions")}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button
          className="nav-animate flex items-center gap-1 text-sm font-medium"
          data-text="Solutions"
        >
          Solutions
          <ChevronDown
            className={`ml-1 h-4 w-4 text-white/90 transition-transform duration-200 ${activeMenu === "solutions" ? "rotate-180" : ""
              }`}
          />
        </button>

        <DropdownMenu
          isOpen={activeMenu === "solutions"}
          sections={solutionsMenuItems}
          onClose={() => setActiveMenu(null)}
        />
      </div>

      {/* Idrak */}
      <Link
        href={`/${locale}/idrak`}
        className="nav-animate text-sm font-medium"
        data-text="Idrak"
      >
        Idrak
      </Link>

      {/* Resources */}
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu("resources")}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button
          className="nav-animate flex items-center gap-1 text-sm font-medium"
          data-text="Resources"
        >
          Resources
          <ChevronDown
            className={`ml-1 h-4 w-4 text-white/90 transition-transform duration-200 ${activeMenu === "resources" ? "rotate-180" : ""
              }`}
          />
        </button>

        <DropdownMenu
          isOpen={activeMenu === "resources"}
          sections={resourcesMenuItems}
          onClose={() => setActiveMenu(null)}
        />
      </div>

      {/* Company */}
      <Link
        href={`/${locale}/company`}
        className="nav-animate text-sm font-medium"
        data-text="Company"
      >
        Company
      </Link>
    </div>
  );
}

export default NavbarMenu;
