'use client';
import { motion } from "framer-motion";
import Image from 'next/image';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import orangeBlocks from "@/public/assets/home/idrak/orangeBlocks.webp";
import { useLocale, useTranslations } from "next-intl";

interface FormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  phone: string;
  howCanWeHelp: string;
  projectDetails: string;
}

interface FormErrors {
  fullName?: string;
  workEmail?: string;
  companyName?: string;
  phone?: string;
  howCanWeHelp?: string;
  projectDetails?: string;
}

const svgPaths = "M71.5661 42.7833C71.5387 40.7895 71.2792 38.7784 70.7599 36.7537C68.9391 29.6481 60.8154 25.0864 52.169 24.0138C43.526 22.9413 34.538 25.382 31.074 31.5628C29.0926 35.0967 28.8193 38.1425 29.6289 40.7104C30.4352 43.2645 32.3481 45.3821 34.9444 47.0321C42.1833 51.6282 54.861 52.5667 60.6446 50.6451C63.3195 49.7547 65.9328 48.6823 68.4778 47.455C67.0225 55.4888 61.601 63.0997 54.3655 69.9577C38.6408 84.8633 14.2389 96.1764 0.949913 100.336C0.235929 100.559 -0.160383 101.323 0.0616693 102.041C0.283722 102.759 1.0421 103.162 1.75609 102.938C15.3081 98.6962 40.1849 87.1424 56.2206 71.9412C64.5048 64.0897 70.408 55.2515 71.4158 45.9596C90.1434 35.8908 105.523 17.6233 118.672 2.25029C119.161 1.68308 119.096 0.820209 118.529 0.328629C117.961 -0.159514 117.107 -0.0976632 116.619 0.472982C104.006 15.217 89.3679 32.7557 71.5661 42.7833ZM68.8435 44.2443C68.9459 42.0029 68.7272 39.7272 68.1362 37.4309C66.5613 31.281 59.3224 27.644 51.8375 26.7158C47.2496 26.1486 42.5319 26.6162 38.8321 28.28C36.5057 29.325 34.5891 30.841 33.4345 32.9036C31.9177 35.609 31.5897 37.9225 32.2114 39.8854C32.8332 41.862 34.3775 43.4502 36.3896 44.7255C42.9863 48.916 54.5295 49.8064 59.7939 48.0566C62.8992 47.0253 65.9124 45.7396 68.8435 44.2443Z"


function AbstractShape() {
  return (
    <svg
      className="w-[70px] h-[70px]"
      fill="none"
      viewBox="0 0 119 103"
    >
      <path
        clipRule="evenodd"
        d={svgPaths}
        fill="var(--color-primary-normal)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default function ContactForm() {

  const t = useTranslations()
  const locale = useLocale()
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    workEmail: '',
    companyName: '',
    phone: '',
    howCanWeHelp: '',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return t('Full name is required');
        if (value.trim().length < 2) return t('Name must be at least 2 characters');
        return undefined;

      case 'workEmail':
        if (!value.trim()) return t('Work email is required');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return t('Please enter a valid email address');
        return undefined;

      case 'companyName':
        if (!value.trim()) return t('Company name is required');
        return undefined;

      case 'phone':
        if (!value) return t('Phone number is required');
        if (value.length < 10) return t('Please enter a valid phone number');
        return undefined;

      case 'howCanWeHelp':
        if (!value.trim()) return t('Please describe how we can help you');
        if (value.trim().length < 10) return t('Please provide more details (at least 10 characters)');
        return undefined;

      case 'projectDetails':
        if (!value.trim()) return t('Project details are required');
        if (value.trim().length < 10) return t('Please provide more details (at least 10 characters)');
        return undefined;

      default:
        return undefined;
    }
  };

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (name: keyof FormData) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name]);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormData>).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched({
      fullName: true,
      workEmail: true,
      companyName: true,
      phone: true,
      howCanWeHelp: true,
      projectDetails: true,
    });

    if (isValid) {
      setIsSubmitting(true);
      try {
        const formData = new FormData(e.target as HTMLFormElement);
        formData.append("access_key", "a6297c09-48b8-4b4b-9e94-41ba842bdf65");

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        await response.json();

        // Show success message
        setIsSuccess(true);

        // Reset form
        setFormData({
          fullName: '',
          workEmail: '',
          companyName: '',
          phone: '',
          howCanWeHelp: '',
          projectDetails: '',
        });
        setTouched({});
        setErrors({});

        // Hide success message after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="relative w-full md:-mt-[90px] -mt-[105px]">
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 81.509 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block absolute top-100 left-0"
        style={{ transform: "rotate(81.509deg)" }}
      >
        <AbstractShape />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 81.509 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block absolute bottom-60 right-0"
        style={{ transform: "rotate(81.509deg)" }}
      >
        <AbstractShape />
      </motion.div>
      <Image
        src={orangeBlocks}
        alt="Hero Background Frame 3"
        className="absolute 2xl:h-20 2xl:w-auto xl:h-16 xl:w-auto lg:h-14 lg:w-auto md:h-12 md:w-auto size-8 top-50 -right-4"
      />

      <div className="w-full max-w-[680px] mx-auto px-3">
        <div className="bg-[#f2f2f2] rounded-[31px] flex flex-col gap-4 p-4 md:p-8">
          <h2 className="capitalize text-primary-normal md:text-xl text-lg font-bold">
            {t(`Contact Us`)}
          </h2>

          {/* Success Message */}
          {isSuccess && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex flex-col items-center justify-center gap-4 animate-fade-in">
              <div className="relative">
                <svg className="w-16 h-16 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle className="animate-scale-in" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path className="animate-check-draw" d="M8 12.5L10.5 15L16 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-green-600 font-bold text-xl mb-2">{t(`Form submitted successfully!`)}</h3>
                <p className="text-gray-600 text-sm">{t(`Thank you! The form has been submitted successfully We will reply to you soon!`)}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="from_name" value="kemet Notification"></input>
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="md:text-base text-sm">{t(`Full Name`)}</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                onBlur={() => handleBlur('fullName')}
                placeholder={t(`Full Name`)}
                disabled={isSubmitting}
                className={`w-full bg-white border ${errors.fullName && touched.fullName ? 'border-red-500' : 'border-[#e7e7e7]'} rounded-sm p-2 text-[#101828] md:text-base text-sm placeholder:text-[#757575] focus:outline-none focus:border-primary-normal transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
              />
              {errors.fullName && touched.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>

            {/* Work Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="workEmail" className="md:text-base text-sm">{t(`Work Email`)}</label>
              <input
                id="workEmail"
                type="email"
                name="workEmail"
                value={formData.workEmail}
                onChange={(e) => handleChange('workEmail', e.target.value)}
                onBlur={() => handleBlur('workEmail')}
                placeholder={t(`Work Email`)}
                disabled={isSubmitting}
                className={`w-full bg-white border ${errors.workEmail && touched.workEmail ? 'border-red-500' : 'border-[#e7e7e7]'} rounded-sm p-2 text-[#101828] md:text-base text-sm placeholder:text-[#757575] focus:outline-none focus:border-primary-normal transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
              />
              {errors.workEmail && touched.workEmail && <p className="text-red-500 text-sm">{errors.workEmail}</p>}
            </div>

            {/* Company Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="companyName" className="md:text-base text-sm">{t(`Company name`)}</label>
              <input
                id="companyName"
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={(e) => handleChange('companyName', e.target.value)}
                onBlur={() => handleBlur('companyName')}
                placeholder={t(`Enter Text`)}
                disabled={isSubmitting}
                className={`w-full bg-white border ${errors.companyName && touched.companyName ? 'border-red-500' : 'border-[#e7e7e7]'} rounded-sm p-2 text-[#101828] md:text-base text-sm placeholder:text-[#757575] focus:outline-none focus:border-primary-normal transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
              />
              {errors.companyName && touched.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="md:text-base text-sm">{t(`Phone`)}</label>
              <div className={`relative bg-white border ${errors.phone && touched.phone ? 'border-red-500' : 'border-[#e7e7e7]'} rounded-sm overflow-hidden`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                <PhoneInput
                  international
                  defaultCountry="EG"
                  value={formData.phone}
                  onChange={(value) => handleChange('phone', value || '')}
                  onBlur={() => handleBlur('phone')}
                  placeholder={t(`Your Phone Number Here`)}
                  disabled={isSubmitting}
                  className="custom-phone-input md:text-base text-sm"
                />
                <div className={`absolute ${locale === 'ar' ? 'md:right-[95px] right-[70px]' : 'md:left-[95px] left-[70px]'} top-1/2 -translate-y-1/2 h-[52px] w-px bg-[#e7e7e7] pointer-events-none`} />
              </div>
              {errors.phone && touched.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            {/* How Can We Help You */}
            <div className="flex flex-col gap-2">
              <label htmlFor="howCanWeHelp" className="md:text-base text-sm">{t(`How Can We Help you ?`)}</label>
              <textarea
                id="howCanWeHelp"
                name="howCanWeHelp"
                value={formData.howCanWeHelp}
                onChange={(e) => handleChange('howCanWeHelp', e.target.value)}
                onBlur={() => handleBlur('howCanWeHelp')}
                placeholder={t(`Please Describe How We Can Help You`)}
                rows={4}
                disabled={isSubmitting}
                className={`w-full bg-white border ${errors.howCanWeHelp && touched.howCanWeHelp ? 'border-red-500' : 'border-[#e7e7e7]'} rounded-sm p-2 text-[#101828] md:text-base text-sm placeholder:text-[#757575] focus:outline-none focus:border-primary-normal transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed`}
              />
              {errors.howCanWeHelp && touched.howCanWeHelp && <p className="text-red-500 text-sm">{errors.howCanWeHelp}</p>}
            </div>

            {/* Project Details */}
            <div className="flex flex-col gap-2">
              <label htmlFor="projectDetails" className="md:text-base text-sm">{t(`Project Details`)}</label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={(e) => handleChange('projectDetails', e.target.value)}
                onBlur={() => handleBlur('projectDetails')}
                placeholder={t(`Please Describe Your Request Briefly Here`)}
                rows={4}
                disabled={isSubmitting}
                className={`w-full bg-white border ${errors.projectDetails && touched.projectDetails ? 'border-red-500' : 'border-[#e7e7e7]'} rounded-sm p-2 text-[#101828] md:text-base text-sm placeholder:text-[#757575] focus:outline-none focus:border-primary-normal transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed`}
              />
              {errors.projectDetails && touched.projectDetails && <p className="text-red-500 text-sm">{errors.projectDetails}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer w-full bg-primary-normal text-white md:py-3 py-2 px-6 rounded-sm hover:bg-[#1a7580] transition-colors focus:outline-none focus:ring-2 focus:ring-primary-normal focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{t(`Submit`)}</span>
                </>
              ) : (
                t(`Submit`)
              )}
            </button>
          </form>
        </div>

        <style jsx>{`
        :global(.PhoneInput) {
          display: flex;
          align-items: center;
          padding: 10px 16px;
          width: 100%;
        }

        :global(.PhoneInputCountry) {
          padding-inline-end: 18px;
        }

        :global(.PhoneInputCountryIcon) {
          width: 24px;
          height: 18px;
          margin-right: 8px;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
        }

        :global(.PhoneInputCountrySelectArrow) {
          display: block;
          width: 20px;
          height: 20px;
          margin-left: 4px;
          flex-shrink: 0;
          border:none;
          rotate:-45deg;
        }

        :global(.PhoneInputCountrySelectArrow)::before {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.6667 6.66667L10 13.3333L3.33333 6.66667' stroke='%23707070' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }

        :global(.PhoneInputInput) {
          flex: 1;
          border: none;
          outline: none;
          font-family: 'Graphik', sans-serif;
          font-size: 16px;
          line-height: 1.4;
          letter-spacing: 0.2px;
          color: #101828;
          background: transparent;
          padding: 0;
          margin-left: 18px;
        }

        :global(.PhoneInputInput::placeholder) {
          color: #757575;
        }

        @media (max-width: 640px) {
          :global(.PhoneInput) {
            padding: 8px;
          }

          :global(.PhoneInputCountry) {
            margin-right: 0px !important;
            padding-right: 12px;
          }

          :global(.PhoneInputInput) {
            font-size: 14px;
            margin-left: 12px;
          }
          
          .custom-phone-input + div {
            left: 80px !important;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes check-draw {
          from {
            stroke-dasharray: 20;
            stroke-dashoffset: 20;
          }
          to {
            stroke-dasharray: 20;
            stroke-dashoffset: 0;
          }
        }

        :global(.animate-fade-in) {
          animation: fade-in 0.5s ease-out;
        }

        :global(.animate-scale-in) {
          animation: scale-in 0.4s ease-out;
        }

        :global(.animate-check-draw) {
          animation: check-draw 0.5s ease-out 0.2s forwards;
          stroke-dasharray: 20;
          stroke-dashoffset: 20;
        }
      `}</style>
      </div>
    </section>
  );
}