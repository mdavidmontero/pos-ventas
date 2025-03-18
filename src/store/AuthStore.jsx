import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";
import { MostrarUsuarios } from "../supabase/crudUsuarios";

export const useAuthStore = create((set) => ({
  loginGoogle: async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  },
  cerrarSesion: async () => {
    await supabase.auth.signOut();
  },
}));
