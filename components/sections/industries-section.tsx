// "use client";

// import { motion } from "framer-motion";
// import { useLocale } from "next-intl";
// import { Shield, Heart, DollarSign, GraduationCap, FileSearch, Eye } from "lucide-react";
// import { Link } from "@/i18n/routing";

// export function IndustriesSection() {
//   const locale = useLocale();

//   const industries = [
//     {
//       icon: <DollarSign className="h-8 w-8" />,
//       title: "Finance & Fintech",
//       description:
//         "Comprehensive, Accurate Document Analysis On Unprecedented Scale.",
//       href: "/solutions/fintech",
//       color: "from-blue-500 to-cyan-500"
//     },
//     {
//       icon: <Heart className="h-8 w-8" />,
//       title: "Healthcare",
//       description:
//         "Hospitals Maintain Complete Confidentiality For Their Records And Enhance The Speed And Accuracy Of Data.",
//       href: "/solutions/healthcare",
//       color: "from-pink-500 to-rose-500"
//     },
//     {
//       icon: <Shield className="h-8 w-8" />,
//       title: "Government",
//       description:
//         "In The Government Sector AI Solutions Are Deployed Locally Within Secure Environments.",
//       href: "/solutions/government",
//       color: "from-purple-500 to-indigo-500"
//     },
//     {
//       icon: <GraduationCap className="h-8 w-8" />,
//       title: "Education",
//       description:
//         "Allow Educational Institutions To Harness The Full Power Of Generative AI While Maintaining Full Control Of Their Data.",
//       href: "/solutions/education",
//       color: "from-green-500 to-emerald-500"
//     },
//     {
//       icon: <FileSearch className="h-8 w-8" />,
//       title: "NLP",
//       description:
//         "Advanced Accuracy And Real-Time Analysis For Natural Language And Arabic Data.",
//       href: "/solutions/nlp",
//       color: "from-orange-500 to-amber-500"
//     },
//     {
//       icon: <Eye className="h-8 w-8" />,
//       title: "Vision Analysis",
//       description:
//         "Comprehensive OCR, Image Recognition, And AI-powered Insights In Full Privacy.",
//       href: "/solutions/vision-analysis",
//       color: "from-teal-500 to-cyan-500"
//     }
//   ];

//   return (
//     <section className="bg-gray-50 py-20">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-16 text-center"
//         >
//           <h2 className="text-4xl font-bold text-gray-900">
//             One Platform For Every Industry.
//           </h2>
//         </motion.div>

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {industries.map((industry, index) => (
//             <motion.div
//               key={industry.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <Link
//                 href={industry.href}
//                 className="group block h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-kemet-teal hover:shadow-xl"
//               >
//                 <div
//                   className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${industry.color} p-3 text-white`}
//                 >
//                   {industry.icon}
//                 </div>
//                 <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-kemet-teal">
//                   {industry.title}
//                 </h3>
//                 <p className="text-sm leading-relaxed text-gray-600">
//                   {industry.description}
//                 </p>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";

const svgPaths = {
  p12f2d00: "M674.893 390.682C705.179 382.35 728.434 417.642 708.829 442.184L614.841 559.845C606.073 570.82 605.37 586.193 613.099 597.924L695.957 723.671C713.24 749.9 686.862 782.922 657.463 771.861L516.517 718.832C503.369 713.885 488.531 717.967 479.764 728.943L385.776 846.603C366.171 871.145 326.614 856.263 328.049 824.884L334.928 674.45C335.57 660.417 327.102 647.567 313.954 642.62L173.009 589.591C143.609 578.53 145.54 536.31 175.826 527.978L321.023 488.034C334.568 484.307 344.172 472.283 344.814 458.25L351.693 307.817C353.128 276.438 393.878 265.227 411.161 291.457L494.019 417.204C501.748 428.934 516.152 434.353 529.696 430.627L674.893 390.682Z",
  p14943c70: "M1675.61 159.321C1711.64 138.52 1756.68 164.521 1756.68 206.123L1756.67 554.042C1756.67 595.644 1711.64 621.646 1675.61 600.844L1374.3 426.885C1338.28 406.084 1338.28 354.081 1374.3 333.28L1675.61 159.321Z",
}


function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1909 1011"
      >
        <g id="Group 1261158706">
          <g filter="url(#filter0_f_1_55)" id="Star 3">
            <path
              d={svgPaths.p12f2d00}
              fill="var(--color-primary-normal)"
              fillOpacity="0.25"
            />
          </g>
          <g filter="url(#filter1_f_1_55)" id="Polygon 9">
            <path
              d={svgPaths.p14943c70}
              fill="var(--color-primary-normal)"
              fillOpacity="0.25"
            />
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="886.044"
            id="filter0_f_1_55"
            width="868.06"
            x="5.26189e-07"
            y="124.825"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur result="effect1_foregroundBlur_1_55" stdDeviation="76" />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="760.165"
            id="filter1_f_1_55"
            width="713.392"
            x="1195.28"
            y="6.59887e-07"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur result="effect1_foregroundBlur_1_55" stdDeviation="76" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default function IndustrySection() {

  const industries = [
    {
      title: "Finance & Fintech",
      description:
        "Comprehensive automation of compliance (KYC/AML) and fraud risk reduction.",
    },
    {
      title: "Healthcare",
      description:
        "Analysis of medical records and research while preserving patient data privacy.",
    },
    {
      title: "Goverment",
      description:
        "Transforming massive archives into instant intelligence for strategic decision support.",
    },
    {
      title: "Education",
      description:
        "Institutional knowledge management and protection of  academic/administrative data ",
    },
    {
      title: "NLP",
      description:
        "Comprehensive automation of compliance (KYC/AML) and fraud risk reduction.",
    },
    {
      title: "Vision Analysis",
      description:
        "Comprehensive automation of compliance (KYC/AML) and fraud risk reduction.",
    },
  ];

  return (
    <section className="relative w-full pb-20">
      <BackgroundBlobs />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-6 flex flex-col gap-13"
      >
        {/* Header */}
        <motion.div
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[42px] font-bold text-black mb-3"
          >
            One Platform for Every Industry.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[19px] text-black/40 max-w-[370px] mx-auto"
          >
            Kemet AI empowers governments and banks with secure, Arabic-native AI.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-12"
        >
          {industries.map((industry, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className=" bg-white rounded-[10px] border border-[#f3f3f3] shadow-[0px_61.494px_76.868px_0px_rgba(185,192,201,0.2)] p-6 pb-10 flex flex-col gap-5 items-center text-center"
            >
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="capitalize text-[28px] text-primary-normal font-bold"
              >
                {industry.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="capitalize text-base max-w-[260px]"
              >
                {industry.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
