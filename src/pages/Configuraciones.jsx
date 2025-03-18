import { useQuery } from "@tanstack/react-query";
import { ConfiguracionesTemplate } from "../components/templates/ConfiguracionesTemplate";
import { useModulosStore } from "../store/ModulosStore";
import Spinner1 from "../components/moleculas/Spinner1";

export default function Configuraciones() {
  const mostrarModulos = useModulosStore((state) => state.mostrarModulos);
  const { isLoading, error } = useQuery({
    queryKey: ["mostrar modulos"],
    queryFn: mostrarModulos,
  });
  if (isLoading) {
    return <Spinner1 />;
  }
  if (error) {
    return <span>error...</span>;
  }
  return <ConfiguracionesTemplate />;
}
