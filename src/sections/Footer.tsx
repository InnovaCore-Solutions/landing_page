import Image from "next/image";
import { LinkButton } from "../components/LinkButton";
import { LinkedinButton } from "../components/LinkedinButton";

export const Footer = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <footer className={`bg-extra-strong ${isDarkMode ? "dark" : ""}`}>
      <div className="items-center justify-between px-10 py-4 mx-auto sm:px-6 row max-w-7xl">
        <div className="items-center gap-4 row">
          <Image
            src={isDarkMode ? "/images/logo_lblanco.png" : "/images/logo_lnegro.png"}
            alt="ICS Logo"
            height="100"
            width="100"
          />
          <div className={`text-sm ${isDarkMode ? "text-dark" : "text-light"}`}>&copy; InnovaCore Solutions, Inc. 2024</div>
        </div>
        <div className="ml-5">
          <LinkedinButton 
            isDarkMode={isDarkMode}
            href="https://www.linkedin.com/in/fran-martin-ag/"
            ariaLabel="LinkedIn"
          />
        </div>
      </div>
    </footer>
  );
};
