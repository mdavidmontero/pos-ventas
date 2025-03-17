import styled from "styled-components";
import { useAuthStore } from "../../store/AuthStore";
import { UserAuth } from "../../context/AuthContext";

export default function HomeTemplate() {
  const cerrarSesion = useAuthStore((state) => state.cerrarSesion);
  const { user } = UserAuth();
  console.log(user);
  return (
    <Container>
      HomeTemplate
      <button onClick={cerrarSesion}>Cerrar Sesion</button>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
