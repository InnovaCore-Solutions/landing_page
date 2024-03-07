import { NewsletterSpheres } from "../svg/NewsletterSpheres";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { ContactForm } from "../components/ContactForm";


const Background = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <div
    className="absolute bottom-0 right-0 hidden pointer-events-none md:block"
    aria-hidden="true"
  >
    <NewsletterSpheres isDarkMode={isDarkMode}/>
  </div>
);

export const Contact = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <Section id="contact" className=" px-4 light sm:px-12">
      <Card className="w-full px-4 py-16 overflow-hidden sm:px-16">
        <Background isDarkMode={isDarkMode}/>
        <div className="z-20 gap-6 text-center md:text-left col">
        <h2 className={`z-20 text-3xl font-bold md:w-1/2 ${isDarkMode ? "text-gray-100" : "text-gray-500"}`}>
            Contacta con Nosotros
          </h2>
          <p className="z-20 text-lg text-light mb-8">
              No dudes en ponerte en contacto con nosotros para colaborar o solicitar información adicional sobre nuestros servicios.
          </p>
          <ContactForm isDarkMode={isDarkMode} id="newsletter-waitlist" /> 
        </div>
      </Card>
    </Section>
  );
};
