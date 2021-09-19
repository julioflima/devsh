import React from "react";
import { Container, FooterNote, HelpPost } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <HelpPost className="noselect">
        Does not find something you like?
        <a
          href="https://github.com/MelisseCabral/devsh"
          target="_blank"
          className="logo"
          rel="noreferrer"
        >
          Help us!
        </a>
      </HelpPost>

      <FooterNote className="noselect">
        <span>
          {" Made with ❤️ by "}
          <a
            href="https://github.com/MelisseCabral"
            target="_blank"
            rel="noreferrer"
          >
            Melisse Cabral
          </a>
        </span>
      </FooterNote>
    </Container>
  );
};

export default Footer;
