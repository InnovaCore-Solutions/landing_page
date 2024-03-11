import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useEffectOnce, useEventListener } from "usehooks-ts";

import { Button } from "../components/Button";
import { LinkButton } from "../components/LinkButton";
import { Moon, Sun } from "../svg/DarkModeIcons";


export const Header = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const [top, setTop] = useState(true);
  const [nextSection, setNextSection] = useState(false);
  const [reloaded, setReloaded] = useState(false);

  // Handle scrolling logic
  const handleScroll = () => {
    setTop(window.pageYOffset <= 10);
    setNextSection(window.pageYOffset > window.innerHeight);
  };
  useEventListener("scroll", handleScroll);

  // Clean up stale dark mode
  useEffectOnce(() => setReloaded(true));

  const goToContact = () => {
    const footerHeight = 1100; // Altura del footer en píxeles
    const scrollToPosition = (document.documentElement.scrollHeight - footerHeight);
    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });
  };


  const Logo = ({ isDarkMode }: { isDarkMode: boolean }) => (
    <Link href="/">
      <div className="items-center block gap-1 row">
        <Image
          src={isDarkMode ? "/landing_page/images/logo_lblanco.png" : "/landing_page/images/logo_lnegro.png"}
          alt="ICS logo"
          height="130"
          
          width="130"
        />
      </div>
    </Link>
  );

  const Navigation = () => (
    <nav>
      <ul className="items-center gap-2 row">
        <li>
          <LinkButton href="#hero">Home</LinkButton>
        </li>
        <li>
          <LinkButton href="#about" >Nosotros</LinkButton>
        </li>
        <li>
          <LinkButton href="#services">Servicios</LinkButton>
        </li>
        <li>
          <LinkButton href="#team">Equipo</LinkButton>
        </li>
        <li>
          <LinkButton href="#contact">Contacta</LinkButton>
        </li>
        {reloaded ? ( // Only show after first reload
          <li>
            <LinkButton
              button
              onClick={toggleDarkMode}
              title="Toggle dark mode"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Moon /> : <Sun />}
            </LinkButton>
          </li>
        ) : null}
        {/* <li className={`transition ${!nextSection && "hidden"}`}>
          <Button onClick={goToEmail}>Contacta</Button>
        </li> */}
      </ul>
    </nav>
  );

  return (
    // Colors must be set explicitly since opacity and blur don't work together
    <header
      className={`fixed w-full z-30 transition duration-300 ${
        !top && "bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg"
      }`}
    >
      {/* Header Content */}
      <div className="items-center justify-between h-16 px-5 mx-auto row md:h-20 max-w-7xl sm:px-6">
        <Logo isDarkMode={isDarkMode} />
        <Navigation />
      </div>
    </header>
  );
};
