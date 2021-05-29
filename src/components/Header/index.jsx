import logo from '../../assets/logo.jpg';
import { Container, Content } from './styles';


export function Header({onPropsNewServiceModal}){


  return(
    <Container>
      <Content>
        <img src={logo} alt="bc" />
        <button 
          type="button"
          onClick={onPropsNewServiceModal}
        >
          Novo serviço
        </button>

       
      </Content>
    </Container>
  )
}