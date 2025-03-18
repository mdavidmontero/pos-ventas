import { useQuery } from "@tanstack/react-query";
import MarcaTemplate from "../components/templates/MarcaTemplate";
import { useEmpresaStore } from "../store/EmpresaStore";
import { useMarcaStore } from "../store/MarcaStore";
import Spinner1 from "../components/moleculas/Spinner1";

export default function Marca() {
  const mostrarMarca = useMarcaStore((state) => state.mostrarMarca);
  const buscarMarcas = useMarcaStore((state) => state.buscarMarcas);
  const buscador = useMarcaStore((state) => state.buscador);
  const dataempresa = useEmpresaStore((state) => state.dataempresa);
  const { isLoading, error } = useQuery({
    queryKey: ["mostrar marca", dataempresa?.id],
    queryFn: () => mostrarMarca({ id_empresa: dataempresa?.id }),
    enabled: !!dataempresa,
    refetchOnWindowFocus: false,
  });

  useQuery({
    queryKey: ["buscar marca", buscador],
    queryFn: () =>
      buscarMarcas({ id_empresa: dataempresa?.id, marca: buscador }),
    enabled: !!dataempresa,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <Spinner1 />;
  }
  if (error) {
    return <span>error...</span>;
  }
  return <MarcaTemplate />;
}
