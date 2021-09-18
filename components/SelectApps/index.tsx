import React from "react";
import { apps } from "../../data/apps";
import { ICategory } from "./ISelectApps";
import Selector from "./Selector";
import {
  ButtonDownload,
  CategorySection,
  Container,
  ContainerCategories,
  Title,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <Title>Choose your Apps :</Title>
      <ContainerCategories>
        {apps.map((category: ICategory) => (
          <CategorySection>
            {category.name}
            {category.apps.map((app) => (
              <Selector app={app} />
            ))}
          </CategorySection>
        ))}
      </ContainerCategories>

      <ButtonDownload href="./install.sh" download>
        Download
      </ButtonDownload>
    </Container>
  );
};

export default Footer;
