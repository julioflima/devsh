import React from "react";
import { IoCopyOutline } from "react-icons/io5";
import { Container, Instruction } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <span className="noselect">Installation Guide :</span>
      <br />
      <Instruction>
        <span>chmod +x ./Downloads/install.sh</span>
        <IoCopyOutline />
      </Instruction>
      <Instruction>
        <span>./Downloads/install.sh</span>
        <IoCopyOutline />
      </Instruction>
    </Container>
  );
};

export default Footer;
