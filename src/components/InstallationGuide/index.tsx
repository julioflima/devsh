import React, { MouseEvent } from "react";
import { H2 } from "../UI/styles";
import { commands } from "./data";
import {
  Command,
  Container,
  Content,
  IconCopy,
  Instruction,
  Separator,
} from "./styles";

const InstallationGuide: React.FC = () => {
  const handleCopy = (e: MouseEvent): void => {
    const value = String(e.currentTarget.getAttribute("data-value"));
    navigator.clipboard.writeText(value);
  };

  return (
    <Container>
      <H2>Installation Guide:</H2>
      <Content>
        <div>
          {commands.map((command, index) => (
            <Command key={command}>
              <Instruction>
                <span>{command}</span>
                <IconCopy onClick={handleCopy} data-value={command} />
              </Instruction>
              {index !== commands.length - 1 && <Separator>or</Separator>}
            </Command>
          ))}
        </div>
      </Content>
    </Container>
  );
};

export default InstallationGuide;
