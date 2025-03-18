import { useQuery } from "@tanstack/react-query";
import CategoriasTemplate from "../components/templates/CategoriasTemplate";
import { useCategoriasStore } from "../store/CategoriasStore";
import { useEmpresaStore } from "../store/EmpresaStore";
import Spinner1 from "../components/moleculas/Spinner1";

export default function Categorias() {
  const mostrarCategorias = useCategoriasStore(
    (state) => state.mostrarCategorias
  );
  const buscarCategorias = useCategoriasStore(
    (state) => state.buscarCategorias
  );
  const buscador = useCategoriasStore((state) => state.buscador);
  const dataempresa = useEmpresaStore((state) => state.dataempresa);
  const { isLoading, error } = useQuery({
    queryKey: ["mostrar categorias", dataempresa?.id],
    queryFn: () => mostrarCategorias({ id_empresa: dataempresa?.id }),
    enabled: !!dataempresa,
    refetchOnWindowFocus: false,
  });

  useQuery({
    queryKey: ["buscar categorias", buscador],
    queryFn: () =>
      buscarCategorias({ id_empresa: dataempresa?.id, descripcion: buscador }),
    enabled: !!dataempresa,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <Spinner1 />;
  }
  if (error) {
    return <span>error...</span>;
  }
  return <CategoriasTemplate />;
}
