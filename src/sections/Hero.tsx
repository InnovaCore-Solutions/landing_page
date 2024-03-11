import { ScatteredSpheres } from "../svg/ScatteredSpheres";
import { Title } from "../components/Title";
import { Details } from "../components/Details";
import { Demo } from "../components/Demo";
import { Section } from "../components/Section";
import { GradientText } from "../components/GradientText";


const Background = () => (
  <div
    className="absolute inset-0 translate-y-32 pointer-events-none dark:invert dark:brightness-90"
    aria-hidden="true"
  >
    <ScatteredSpheres />
  </div>
);

export const Hero = () => {
  return (
    <Section
      id="hero"
      gradients
      className="z-20 items-center justify-center min-h-screen 2xl:min-h-[1000px] h-fit gap-16 col md:flex-row"
    >
      <Background />
      {/* Text */}
      <div className="z-10 gap-4 text-center col md:text-left">
        <Title size="lg">
        InnovaCore <GradientText className="purple-teal">Solutions.</GradientText>
        </Title>
        <br/>
        <Details>
        Desde servicios de consultoría estratégica hasta
        tecnologías de vanguardia, desarrollamos experiencias que transforman organizaciones, revolucionan industrias y dan forma a una sociedad mejor para todos.
        </Details>
        <br/>
        {/* <WaitlistForm
          id="hero-waitlist"
          data-aos="zoom-y-out"
          data-aos-delay="300"
        /> */}
      </div>
      {/* Image */}
      <Demo
        data-aos="fade-left"
        webmSrc="/landing_page/videos/multiplatform.mp4" //total.webm
        mp4Src="/landing_page/videos/multiplatform.mp4"   //total.mp4
        alt="A video showing ICS's functionality"
      />
    </Section>
  );
};
