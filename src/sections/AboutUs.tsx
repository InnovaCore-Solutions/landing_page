import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import { Demo } from "../components/Demo";
import { Details } from "../components/Details";
import { GradientText } from "../components/GradientText";
import { Section } from "../components/Section";
import { Title } from "../components/Title";

const FeatureSection = ({
  children,
  grayer,
  right,
  center,
}: {
  children: ReactNode;
  grayer?: boolean;
  right?: boolean;
  center?: boolean;
}) => (
  <Section
    id="about"
    gradients2
    grayer={grayer}
    fullWidth
    className={`z-20 col items-center min-h-screen 2xl:min-h-[1000px] h-fit gap-16 col ${
      center ? "" : right ? "md:flex-row-reverse" : "md:flex-row"
    }`}
  >
    {children}
  </Section>
);

const FeatureDemo = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    webmSrc: string;
    mp4Src: string;
    bumpLeft?: boolean;
    center?: boolean;
    className: string;
    alt: string;
  }
) => {
  const { webmSrc, mp4Src, bumpLeft, center, alt, className, ...divProps } =
    props;
  return (
    <div
      {...divProps}
      className={twMerge(
        `w-5/6 md:w-1/2 p-4 md:p-12 bg-gradient-to-br rounded-xl ${
          center ? "" : bumpLeft ? "md:-translate-x-14" : "md:translate-x-14"
        }`,
        className
      )}
    >
      <Demo
        data-aos={`${
          center ? "zoom-y-out" : bumpLeft ? "fade-right" : "fade-left"
        }`}
        data-aos-delay="300"
        webmSrc={webmSrc}
        mp4Src={mp4Src}
        alt={alt}
      />
    </div>
  );
};

const Text = ({
  children,
  center,
}: {
  children: ReactNode;
  center?: boolean;
}) => (
  <div
    className={`w-5/6 col gap-4 text-center mb-8 mx-auto ${
      center ? "md:w-2/3" : "md:w-2/5 md:text-left md:my-auto"
    }`}
  >
    {children}
  </div>
);

export const AboutUs = () => {
  return (
    <>
    <FeatureSection right>
      <Text>
        <Title size="md">
          <GradientText className="pink-blue">Sobre Nosotros</GradientText>
          <br /> 
        </Title>
        <Details>Somos una empresa apasionada de la tecnología, 
          dedicada a ofrecer soluciones innovadoras y personalizadas 
          en desarrollo de software y consultoría. Con un 
          enfoque centrado en el cliente, nuestro equipo 
          experto trabaja para impulsar el éxito de tu 
          negocio a través de la tecnología.</Details>
        <br />
        <Details>
          <GradientText className="purple-teal">Porque Nosotros?</GradientText>
          <br /> 
        </Details>
        <Details>Honestidad, Franqueza, Fidelidad Colaboración</Details>
      </Text>
      <FeatureDemo
        webmSrc="/videos/coding.mp4"
        mp4Src="/videos/coding.mp4"
        bumpLeft
        className="pink-blue"
        alt="Coding"
      />
    </FeatureSection>
  </>
  );
};
