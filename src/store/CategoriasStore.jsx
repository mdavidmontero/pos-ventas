import { create } from "zustand";
import {
  BuscarCategorias,
  EditarCategorias,
  EliminarCategorias,
  InsertarCategorias,
  MostrarCategorias,
} from "../supabase/crudCategorias";

export const useCategoriasStore = create((set, get) => ({
  buscador: "",
  setBuscador: (p) => {
    set({ buscador: p });
  },
  datacategorias: [],
  categoriasItemSelect: [],
  parametros: {},
  mostrarCategorias: async (p) => {
    const response = await MostrarCategorias(p);
    set({ parametros: p });
    set({ datacategorias: response });
    set({ categoriasItemSelect: response[0] });
    return response;
  },
  selectCategoria: (p) => {
    set({ categoriasItemSelect: p });
  },
  insertarCategorias: async (p, file) => {
    await InsertarCategorias(p, file);
    const { mostrarCategorias } = get();
    const { parametros } = get();
    set(mostrarCategorias(parametros));
  },
  eliminarCategoria: async (p) => {
    await EliminarCategorias(p);
    const { mostrarCategorias } = get();
    const { parametros } = get();
    set(mostrarCategorias(parametros));
  },
  editarCategoria: async (p, fileold, filenew) => {
    await EditarCategorias(p, fileold, filenew);
    const { mostrarCategorias } = get();
    const { parametros } = get();
    set(mostrarCategorias(parametros));
  },
  buscarCategorias: async (p) => {
    const response = await BuscarCategorias(p);
    set({ datacategorias: response });
    return response;
  },
}));
