import styled from "styled-components";
import { Title } from "../atomos/Title";
import { InputText2 } from "../organismos/formularios/InputText2";
import { Btnsave } from "../moleculas/BtnSave";
import { Linea } from "../atomos/Linea";
import { v } from "../../styles/variables";
import { Device } from "../../styles/breakpoints";

export default function LoginTemplate() {
  return (
    <Container>
      <div className="card">
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
          titulo="Google"
          bgcolor="#fff"
          icono={<v.iconogoogle />}
          width="100%"
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

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
  }
`;
