import { ReactNode } from "react";

import {
  ChartColumnIcon,
  LaptopCodeIcon,
  GearsIcon,
  DatabaseIcon,
  GlobeIcon,
  BriefcaseIcon,
} from "../svg/FeatureIcons";
import { Card } from "../components/Card";
import { Details } from "../components/Details";
import { GradientText } from "../components/GradientText";
import { Section } from "../components/Section";
import { Title } from "../components/Title";

const BlockTitle = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-xl font-bold text-strong">{children}</h3>;
};

const BlockText = ({ children }: { children: ReactNode }) => {
  return <p className="text-light">{children}</p>;
};

const Block = ({ children }: { children: ReactNode }) => {
  return (
    <Card grayer className="items-center gap-1 p-6 col">
      {children}
    </Card>
  );
};

export const FeatureBlocks = () => {
  return (
    <Section id="services" className="z-20 gap-16 text-center">
      {/* Header */}
      <div className="gap-4 col">
        <Title size="md">
          Nuestros{" "}
          <GradientText className="purple-teal">Servicios</GradientText>
        </Title>
        <Details>
        Aprovecha al máximo tu tiempo con InnovaCore Solutions. Hacemos que los desafíos técnicos sean más simples, permitiéndote enfocarte en impulsar el éxito de tu negocio.
        </Details>
      </div>
      {/* Blocks */}
      <div className="grid items-start gap-6 lg:grid-cols-3">
        {/* Block 1 */}
        <Block>
          <DatabaseIcon/>
          <BlockTitle>Servicios de Tecnología Avanzada</BlockTitle>
          <BlockText>
           
Implementación de soluciones de automatización de procesos y creación de  sistemas impulsados por inteligencia artificial y aprendizaje automático
          </BlockText>
        </Block>
        {/* Block 2 */}
        <Block>
          <GlobeIcon />
          <BlockTitle>Seguridad de la Información</BlockTitle>
          <BlockText>
          Evaluación de riesgos, implementación de medidas de seguridad, y cumplimiento normativo para proteger los datos y la infraestructura.
          </BlockText>
        </Block>
        {/* Block 3 */}
        <Block>
          <BriefcaseIcon />
          <BlockTitle>Consultoria</BlockTitle>
          <BlockText>
          Asesoramiento especializado en tecnologías emergentes, arquitectura de sistemas, integración de sistemas, y estrategias de desarrollo.
          </BlockText>
        </Block>
        {/* Block 4 */}
        <Block>
          <GearsIcon />
          <BlockTitle>Mantenimiento y Soporte</BlockTitle>
          <BlockText>
          Servicios de mantenimiento continuo, actualizaciones, parches de seguridad, y soporte técnico para aplicaciones existentes.
          </BlockText>
        </Block>
        {/* Block 5 */}
        <Block>
          <ChartColumnIcon />
          <BlockTitle>Análisis de Datos</BlockTitle>
          <BlockText>
           Extracción, transformación y análisis de datos para tomar decisiones empresariales informadas y estratégicas.
          </BlockText>
        </Block>
        {/* Block 6 */}
        <Block>
          <LaptopCodeIcon />
          <BlockTitle>Desarrollo de Software</BlockTitle>
          <BlockText>
            Creación de soluciones personalizadas de software para satisfacer las necesidades específicas de cada cliente.
          </BlockText>
        </Block>
      </div>
    </Section>
  );
};
