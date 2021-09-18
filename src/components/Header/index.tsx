import { ContainerHeader } from './styles';

function Header() {
  return (
    <ContainerHeader className='noselect'>
        {'</> DevSH' }
        <span>
            The easiest way to a clean start.
        </span>
        <br>
        </br>
        <span>
            Choose the applications and download a shell script to install all <br></br>
            the dev tools you need for your debian system!
        </span>
    </ContainerHeader>
  );
}

export default Header;
