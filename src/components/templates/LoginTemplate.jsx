import styled from "styled-components";
import { Title } from "../atomos/Title";
import { InputText2 } from "../organismos/formularios/InputText2";
import { Btnsave } from "../moleculas/BtnSave";
import { Linea } from "../atomos/Linea";
import { v } from "../../styles/variables";
import { Device } from "../../styles/breakpoints";
import { Footer } from "../organismos/Footer";
import { useAuthStore } from "../../store/AuthStore";

export default function LoginTemplate() {
  const loginGoogle = useAuthStore((state) => state.loginGoogle);
  return (
    <Container>
      <div className="card">
        <ContentLogo>
          <img src={v.logo} />
          <span>ada369 3.0 d.10 - POS VENTAS</span>
        </ContentLogo>
        <Title $paddingbottom="40px">Ingresar</Title>
        <form>
          <InputText2>
            <input className="form__field" type="text" placeholder="email" />
          </InputText2>
          <InputText2>
            <input
              className="form__field"
              type="password"
              placeholder="password"
            />
          </InputText2>
          <Btnsave
            titulo="Ingresar"
            bgcolor="#1cb0f6"
            color="255,255,255"
            width="100%"
          />
        </form>
        <Linea>
          <span>O</span>
        </Linea>
        <Btnsave
          funcion={loginGoogle}
          titulo="Google"
          bgcolor="#fff"
          icono={<v.iconogoogle />}
          width="100%"
        />
      </div>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 0 10px;
  color: ${({ theme }) => theme.text};

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin: 20px;
    @media ${Device.tablet} {
      width: 400px;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;
const ContentLogo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  span {
    font-weight: 700;
  }
  img {
    width: 10%;
  }
`;
