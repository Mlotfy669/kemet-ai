"use client";

import { useParams } from "next/navigation";
import { useTransition } from "react";
import { useRouter, usePathname } from "@/i18n/routing";

const languages = [
  { code: "en", name: "English"},
  { code: "ar", name: "العربية"},
];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const currentLocale = params.locale as string;

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="flex items-center gap-2">
      {/* {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          disabled={isPending || currentLocale === lang.code}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            currentLocale === lang.code
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          } disabled:opacity-50`}
          aria-label={`Switch to ${lang.name}`}
        >
          {lang.code.toUpperCase()}
        </button>
      ))} */}
    </div>
  );
}
