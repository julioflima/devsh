import { IoCopyOutline } from 'react-icons/io5';
import { ContainerHeader, FooterNote, HelpPost, Instruction } from './styles';

function Footer() {
  return (
    <ContainerHeader>
      <span className="noselect">Installation Guide :</span>
      <br></br>
      <Instruction>
        <span>chmod +x ./Downloads/install.sh</span>
        <IoCopyOutline />
      </Instruction>
      <Instruction>
        <span>./Downloads/install.sh</span>
        <IoCopyOutline />
      </Instruction>

      <HelpPost className="noselect">
        Does not find something you like?
        <a href="www.google.com" target="_blank" className="logo">
          Help us!
        </a>
      </HelpPost>

      <FooterNote className="noselect">
        <span>
          Made with ❤️ by{' '}
          <a href="https://github.com/MelisseCabral" target="_blank">
            Melisse Cabral
          </a>
        </span>
      </FooterNote>
    </ContainerHeader>
  );
}

export default Footer;
