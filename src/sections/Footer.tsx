import Image from "next/image";
import { LinkButton } from "../components/LinkButton";

// Built with Vivid (https://vivid.lol) ⚡️

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
        <LinkButton
          href="https://join.slack.com/t/vivid-jqa6824/shared_invite/zt-1f7tbxl86-wruO1aM7FYmEdNaOOnYCMQ"
          aria-label="Join Slack"
        >
          Join our Slack!
        </LinkButton>
      </div>
    </footer>
  );
};
