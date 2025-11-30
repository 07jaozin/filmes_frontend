import { useQuery } from "@tanstack/react-query";
import { Fetch_usuario_session } from "../../services/UsuarioServices";

export function useSession(){
    useQuery({
        queryKey: Fetch_usuario_session
    })
}