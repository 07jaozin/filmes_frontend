import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { Fetch_comentarios_filme, Excluir_comentario, Fetch_up_comentario } from "../../services/ComentariosServices";




export function useComentarios_filme(id){
    return useQuery({
        queryKey: ["comentarios", id],
        queryFn: () => Fetch_comentarios_filme(id),
        enabled: !!id
    })
}

export function useExcluirComentario() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({id, id_filme}) => Excluir_comentario(id, id_filme),
        onSuccess: (_, {id_filme}) => {
            queryClient.invalidateQueries(["comentarios", id_filme]);
        }
    });
}

export function useUpComentario() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ dados, id_filme }) => Fetch_up_comentario(dados, id_filme),
        onSuccess: (_, { id_filme }) => {
            queryClient.invalidateQueries(["comentarios", id_filme]);
            queryClient.invalidateQueries(["filme", id_filme]);
        }
    });
}

