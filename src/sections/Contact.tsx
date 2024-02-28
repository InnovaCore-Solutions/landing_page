import { NewsletterSpheres } from "../svg/NewsletterSpheres";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { ContactForm } from "../components/ContactForm";


const Background = () => (
  <div
    className="absolute bottom-0 right-0 hidden pointer-events-none md:block"
    aria-hidden="true"
  >
    <NewsletterSpheres />
  </div>
);

export const Contact = () => {
  return (
    <Section className="px-4 dark sm:px-12">
      <Card className="w-full px-4 py-16 overflow-hidden sm:px-16">
        <Background />
        <div className="gap-6 text-center md:text-left col  ">
          <h2 className="text-3xl font-bold text-gray-100 md:w-1/2">
            Contacta con Nosotros
          </h2>
          <p className="text-lg text-light mb-8">
              No dudes en ponerte en contacto con nosotros para colaborar o solicitar información adicional sobre nuestros servicios.
          </p>
          <ContactForm id="newsletter-waitlist" /> 
        </div>
      </Card>
    </Section>
  );
};
