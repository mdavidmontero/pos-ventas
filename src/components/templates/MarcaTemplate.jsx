import styled from "styled-components";
import { Title } from "../atomos/Title";
import { Btn1 } from "../moleculas/Btn1";
import { v } from "../../styles/variables";
import Buscador from "../organismos/Buscador";
import { TablaCategorias } from "../organismos/tablas/TablaCategorias";
import { useState } from "react";
import { RegistrarCategorias } from "../organismos/formularios/RegistrarCategorias";
import ConfettiExplosion from "react-confetti-explosion";
import { useMarcaStore } from "../../store/MarcaStore";
import { TablaMarca } from "../organismos/tablas/TablaMarca";
import { RegistrarMarca } from "../organismos/formularios/RegistrarMarca";

export default function MarcaTemplate() {
  const [openRegistro, setOpenRegistro] = useState(false);
  const [accion, setAccion] = useState("");
  const [dataSelect, setDataSelect] = useState([]);
  const [isExploding, setIsExploding] = useState(false);
  const datamarca = useMarcaStore((state) => state.datamarca);
  const setBuscador = useMarcaStore((state) => state.setBuscador);
  function nuevoRegistro() {
    setOpenRegistro(true);
    setAccion("Nuevo");
    setDataSelect([]);
    setIsExploding(false);
  }
  return (
    <Container>
      {openRegistro && (
        <RegistrarMarca
          setIsExploding={setIsExploding}
          onClose={() => setOpenRegistro(!openRegistro)}
          accion={accion}
          dataSelect={dataSelect}
        />
      )}
      <section className="area1">
        <Title>Marcas</Title>
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
        <TablaMarca
          data={datamarca}
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
