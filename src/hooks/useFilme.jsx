import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { listaFilmes, getFilme, FetchListaPesquisa, Fetch_up_filme, Fetch_excluir_filme } from "../../services/FilmesServices";


export function useFilmes() {
  return useQuery({
    queryKey: ["filmes"],
    queryFn: listaFilmes
  });
}
export function perfilFilme(id) {
  return useQuery({
    queryKey: ["filme", id],   // importante para cache individual
    queryFn: () => getFilme(id), // função que EXECUTA o getFilme
    enabled: !!id 
  });
}
export function usePesquisaFilme(dados){
  console.log(dados)
  return useQuery({
    queryKey:["filmes_pesquisa", dados],
    queryFn: () => FetchListaPesquisa(dados)
  })
}

export function useUpFilme(){
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dados) => Fetch_up_filme(dados),
    onSuccess:(_, dados) => {
      queryClient.invalidateQueries(["filmes"])
      queryClient.invalidateQueries({ queryKey: ["canais"], exact: false });
      queryClient.invalidateQueries(["filme", dados.id]);
    }
  })
}

export function useExcluirFilme() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({id}) => Fetch_excluir_filme(id),
        onSuccess: () => {
            queryClient.invalidateQueries(["filmes"]);
        }
    });
}