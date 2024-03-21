import { useTranslations, useLocale } from "next-intl";
export default function Home() {
  const t = useTranslations("Index");
  return (
    <main>
      <div className="min-h-screen bg-secondary">HeroSection {t("title")}</div>
    </main>
  );
}
