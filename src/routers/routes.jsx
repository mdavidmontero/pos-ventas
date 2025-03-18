import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { ProtectedRoute } from "../hooks/ProtectedRoute";
import { UserAuth } from "../context/AuthContext";
import Configuraciones from "../pages/Configuraciones";
import Categorias from "../pages/Categorias";
import { useUsuariosStore } from "../store/UsuariosStore";
import { useQuery } from "@tanstack/react-query";
import Spinner1 from "../components/moleculas/Spinner1";
import { useEmpresaStore } from "../store/EmpresaStore";

export function MyRoutes() {
  const { user } = UserAuth();
  const datausuarios = useUsuariosStore((state) => state.datausuarios);
  const mostrarusuarios = useUsuariosStore((state) => state.mostrarusuarios);
  const mostrarempresa = useEmpresaStore((state) => state.mostrarempresa);

  const { isLoading, error } = useQuery({
    queryKey: ["mostrar usuarios"],
    queryFn: mostrarusuarios,
    refetchOnWindowFocus: false,
  });
  const { data: dataempresa } = useQuery({
    queryKey: ["mostrar empresa", datausuarios?.id],
    queryFn: () => mostrarempresa({ _id_usuario: datausuarios?.id }),
    enabled: !!datausuarios,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <Spinner1 />;
  }
  if (error) {
    return <span>error...</span>;
  }

  return (
    <Routes>
      <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
        <Route path="/" element={<Home />} />
        <Route path="/configuracion" element={<Configuraciones />} />
        <Route path="/configuracion/categorias" element={<Categorias />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
