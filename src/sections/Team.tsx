import Image from "next/image";
import { ReactNode } from "react";

import { Quote } from "../svg/Quote";
import { Card } from "../components/Card";
import { Details } from "../components/Details";
import { GradientText } from "../components/GradientText";
import { Section } from "../components/Section";
import { Title } from "../components/Title";


const MemberImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="absolute mx-auto -top-10">
      <Quote />
      <Image
        className="rounded-full"
        src={src}
        width="96"
        height="96"
        alt={alt}
      />
    </div>
  );
};

const MemberText = ({
  quote,
  name,
  title,
  handle,
  link,
}: {
  quote: string;
  name: string;
  title: string;
  handle: string;
  link: string;
}) => {
  return (
    <>
      <blockquote className="font-medium">&quot;{quote}&quot;</blockquote>
      <div className="">
        <cite className="not-italic font-bold">— {name}</cite>
        <div className="text-base text-light">
          <span>{title}</span>{" "}
          <a
            className="text-primary-600 dark:text-primary-400 hover:underline"
            href={link}
          >
            @{handle}
          </a>
        </div>
      </div>
    </>
  );
};

const Member = ({ children }: { children: ReactNode }) => {
  return (
    <Card className="items-center gap-6 p-12 pt-20 body-lg col text-medium">
      {children}
    </Card>
  );
};

export const Team = () => {
  return (
    <Section id="team" grayer className="z-20 gap-24 text-center">
      {/* Header */}
      <div className="gap-4 col">
        <Title size="md">
          <GradientText className="amber-red">Miembros</GradientText> del Equipo
        </Title>
        <Details>Conoce a los talentos detrás del éxito.</Details>
      </div>
      {/* Member */}
      <div className="gap-20 md:gap-6 col md:row">
        {/* Member 1 */}
        <Member>
          <MemberImage src="/landing_page/images/valentin.jpg" alt="Valentin Palonsky" />
          <MemberText
            quote="Organización y estructura para guiar equipos hacia el logro de objetivos."
            name="Valentin Palonsky"
            title="Project"
            handle="Manager"
            link="https://www.linkedin.com/in/valent%C3%ADn-guitart-palonsky-637735145/"
          />
        </Member>
        {/* Member 2 */}
        <Member>
          <MemberImage src="/landing_page/images/fran.jpg" alt="Fran Martín" />
          <MemberText
            quote="Forjando el camino hacia el éxito transformando ideas en realidad"
            name="Fran Martín"
            title="Fundador" 
            handle="CEO"
            link="https://www.linkedin.com/in/fran-martin-ag/"
          />
        </Member>
        {/* Member 3 */}
        <Member>
          <MemberImage src="/landing_page/images/victor.png" alt="Victor Gómez" />
          <MemberText
            quote="Cree en ti mismo y en tus capacidades, no tengas miedo de tomar riesgos"
            name="Victor Gómez"
            title="Senior"
            handle="Developer"
            link="https://www.linkedin.com/in/valent%C3%ADn-guitart-palonsky-637735145/"
          />
        </Member>
      </div>
    </Section>
  );
};
