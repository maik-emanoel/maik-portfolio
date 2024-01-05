import ContactForm from "../components/contact/ContactForm";
import Section from "../components/Section";

export default function Contact() {
  return (
    <Section title="Contact" id="contact" className="h-[calc(100vh_-_40px)]">
      <div className="mt-4 w-full h-fit">
          <p className="text-sm text-slate-400 mb-6">
            Get in touch or shoot me an email directly on{" "}
            <a href="mailto:contato.maikemanoel@gmail.com" className="font-medium text-slate-200">
              contato.maikemanoel@gmail.com
            </a>
          </p>

          <ContactForm />
      </div>
    </Section>
  );
}