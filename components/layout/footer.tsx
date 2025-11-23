"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const locale = useLocale();

  const footerLinks = {
    links: [
      { title: "About", href: "/about" },
      { title: "Careers", href: "/careers" },
      { title: "Contact", href: "/contact" }
    ],
    legal: [
      { title: "Terms Of Use", href: "/terms" },
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Cookie Policy", href: "/cookies" }
    ],
    resources: [
      { title: "Blog", href: "/resources/blog" },
      { title: "FAQ (AR)", href: "/faq-ar" },
      { title: "FAQ (EN)", href: "/faq-en" }
    ]
  };

  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo and Contact */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="mb-6 flex items-center gap-2">
              <div className="relative h-8 w-8">
                <Image
                  src="/kemet-design/Kemet logo.png"
                  alt="KEMET.AI"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-kemet-navy">KEMET.AI</span>
            </Link>
            <div className="space-y-3">
              <a
                href="mailto:Help@Kemetai.Com"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-kemet-teal"
              >
                <Mail className="h-4 w-4" />
                Help@Kemetai.Com
              </a>
              <a
                href="tel:+01128501210"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-kemet-teal"
              >
                <Phone className="h-4 w-4" />
                +01128501210
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Links</h3>
            <ul className="space-y-3">
              {footerLinks.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm text-gray-600 hover:text-kemet-teal"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm text-gray-600 hover:text-kemet-teal"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Resources</h3>
            <ul className="mb-6 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-sm text-gray-600 hover:text-kemet-teal"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-900">Newsletter</h3>
              <p className="mb-3 text-sm text-gray-600">Stay Up To Date</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-kemet-teal focus:outline-none focus:ring-2 focus:ring-kemet-teal/20"
                />
                <button className="rounded-full bg-kemet-teal px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-kemet-teal/90">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © Kemet AI - Sovereign Arabic-Native AI
          </p>
        </div>
      </div>
    </footer>
  );
}
