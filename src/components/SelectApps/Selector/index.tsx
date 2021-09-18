import React from "react";
import { IApp } from "./ISelector";
import { Container } from "./styles";

const Selector: React.FC<{ app: IApp }> = ({ app }) => (
  <Container>
    <input
      width={30}
      height={30}
      type="checkbox"
      name={app.name?.toString()}
      defaultChecked={app.defaultCheck}
      disabled
    />
    {app.icon && <img src={app.icon} alt={app.name} />}
    <span>{app.name}</span>
  </Container>
);

export default Selector;
