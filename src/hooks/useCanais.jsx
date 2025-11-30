import { useQuery } from "@tanstack/react-query";
import { Fetch_buscar_canal_id, Fetch_listar_canais } from "../../services/CanaisServices";

export function useCanail_id(id){
   return useQuery({
        queryKey: ["Canais", id],
        queryFn: () => Fetch_buscar_canal_id(id),
        enabled: !!id
    })
}

export function useCanais(){
   return useQuery({
        queryKey: ["Canais"],
        queryFn: Fetch_listar_canais
    })
}