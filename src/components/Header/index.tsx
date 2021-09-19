import React from "react";
import { ContainerHeader } from "./styles";

const Header: React.FC = () => {
  return (
    <ContainerHeader>
      {"</> DevSH"}
      <span>The easiest way to a clean start.</span>
      <br />
      <span>
        {"Choose the applications and download a shell script to install all "}
        <br />
        the dev tools you need for your debian system!
      </span>
    </ContainerHeader>
  );
};

export default Header;
