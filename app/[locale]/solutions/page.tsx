import { redirect } from "@/i18n/routing"
import { useLocale } from "next-intl"


const SolutionsPage = () => {
  const locale = useLocale()
  redirect({ href: '/solutions/government', locale })
}

export default SolutionsPage