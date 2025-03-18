import styled from "styled-components";
import { Title } from "../atomos/Title";
import { Btn1 } from "../moleculas/Btn1";
import { v } from "../../styles/variables";
import Buscador from "../organismos/Buscador";
import { useCategoriasStore } from "../../store/CategoriasStore";
import { TablaCategorias } from "../organismos/tablas/TablaCategorias";
import { useState } from "react";
import { RegistrarCategorias } from "../organismos/formularios/RegistrarCategorias";
import ConfettiExplosion from "react-confetti-explosion";

export default function CategoriasTemplate() {
  const [openRegistro, setOpenRegistro] = useState(false);
  const [accion, setAccion] = useState("");
  const [dataSelect, setDataSelect] = useState([]);
  const [isExploding, setIsExploding] = useState(false);
  const datacategorias = useCategoriasStore((state) => state.datacategorias);
  const setBuscador = useCategoriasStore((state) => state.setBuscador);
  function nuevoRegistro() {
    setOpenRegistro(true);
    setAccion("Nuevo");
    setDataSelect([]);
    setIsExploding(false);
  }
  return (
    <Container>
      {openRegistro && (
        <RegistrarCategorias
          setIsExploding={setIsExploding}
          onClose={() => setOpenRegistro(!openRegistro)}
          accion={accion}
          dataSelect={dataSelect}
        />
      )}
      <section className="area1">
        <Title>Categorias</Title>
        <Btn1
          bgcolor={v.colorPrincipal}
          titulo="Nuevo"
          icono={<v.iconoagregar />}
          funcion={nuevoRegistro}
        />
      </section>
      <section className="area2">
        <Buscador setBuscador={setBuscador} />
      </section>

      <section className="main">
        {isExploding && <ConfettiExplosion />}
        <TablaCategorias
          data={datacategorias}
          SetopenRegistro={setOpenRegistro}
          setdataSelect={setDataSelect}
          setAccion={setAccion}
        />
      </section>
    </Container>
  );
}

const Container = styled.div`
  height: calc(100vh - 30px);
  padding: 15px;
  display: grid;
  grid-template:
    "area1" 60px
    "area2" 60px
    "main" auto;
  .area1 {
    grid-area: area1;
    /* background-color: #3195c7; */
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 15px;
  }
  .area2 {
    grid-area: area2;
    /* background-color: #4ecab7; */
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .main {
    grid-area: main;
    /* background-color: #6514ac; */
  }
`;

// import styled from "styled-components";

// export default function CategoriasTemplate() {
//   return (
//     <Container>
//       <h1>Categorias</h1>
//     </Container>
//   )
// }

// const Container = styled.div``;
