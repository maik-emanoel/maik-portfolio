import { useTranslations } from "next-intl";
import ContactForm from "../components/contact/ContactForm";
import Section from "../components/Section";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <Section title={t("section-name")} id="contact" className="h-screen-mobile">
      <div className="mt-4 w-full h-fit">
        <p className="text-sm text-muted mb-6 scroll-reveal">
          {t("label")}{" "}
          <a
            href="mailto:contato.maikemanoel@gmail.com"
            className="font-medium text-secondary"
          >
            contato.maikemanoel@gmail.com
          </a>
        </p>

        <ContactForm
          placeholderName={t("placeholder.name")}
          placeholderMessage={t("placeholder.message")}
          buttonTextNormalStatus={t("send-button.normal-status")}
          buttonTextLoadingStatus={t("send-button.loading-status")}
          toastSuccessMessage={t("toast.success-message")}
          toastErrorMessage={t("toast.error-message")}
        />
      </div>
    </Section>
  );
}
