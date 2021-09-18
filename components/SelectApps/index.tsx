import apps from '../../../src/data/apps.json';
import { AppSelect, ButtonDownload, CategorySection, Container, ContainerCategories, Title } from './styles';

interface ICategory {
  name: string,
  apps: IApp[]
}

interface IApp {
  name: string,
  commands: string,
  icon: string,
  defaultCheck: boolean
}

function Footer() {

  function AppSelector(app: IApp){
    return (
      <AppSelect className="AppSelect">
        <input width={30} height={30} type="checkbox" name={app.name?.toString()} defaultChecked={app.defaultCheck} disabled={true}/>
        {app.icon && (
          <img src={app.icon} alt={app.name}/>
        )}
        <span>
          {app.name}
        </span>
      </AppSelect>
    )
  }
  return (
    <Container>
        <Title className="noselect">
            Choose your Apps :
        </Title>

        <ContainerCategories>
          {
            apps.map((category: ICategory) => {
              return (
                <CategorySection>
                  {category.name}
                  {category.apps.map((app: IApp) => 
                    AppSelector(app)
                  )}
                </CategorySection>
              )
            })
          }
        </ContainerCategories>

        <ButtonDownload href="./install.sh" download>
          Download
        </ButtonDownload>
    </Container>
  );
}

export default Footer;
