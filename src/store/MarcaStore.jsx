import { create } from "zustand";
import {
  BuscarMarca,
  MostrarMarca,
  EliminarMarca,
  EditarMarca,
  InsertarMarca,
} from "../supabase/crudMarca";

export const useMarcaStore = create((set, get) => ({
  buscador: "",
  setBuscador: (p) => {
    set({ buscador: p });
  },
  datamarca: [],
  marcaItemSelect: [],
  parametros: {},
  mostrarMarca: async (p) => {
    const response = await MostrarMarca(p);
    set({ parametros: p });
    set({ datamarca: response });
    set({ marcaItemSelect: response[0] });
    return response;
  },
  selectMarca: (p) => {
    set({ marcaItemSelect: p });
  },
  insertarMarca: async (p, file) => {
    await InsertarMarca(p, file);
    const { mostrarMarca } = get();
    const { parametros } = get();
    set(mostrarMarca(parametros));
  },
  eliminarMarca: async (p) => {
    await EliminarMarca(p);
    const { mostrarMarca } = get();
    const { parametros } = get();
    set(mostrarMarca(parametros));
  },
  editarMarca: async (p) => {
    await EditarMarca(p);
    const { mostrarMarca } = get();
    const { parametros } = get();
    set(mostrarMarca(parametros));
  },
  buscarMarcas: async (p) => {
    const response = await BuscarMarca(p);
    set({ datamarca: response });
    return response;
  },
}));
