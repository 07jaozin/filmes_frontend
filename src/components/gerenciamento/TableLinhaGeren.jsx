import React from "react";
import { useExcluirFilme } from "../../hooks/UseFilme";

export default function TabelaLinha({ f , setFormFilme, setShowModal}) {
   
    function formatarDataUTC(gmtString) {
        const d = new Date(gmtString);
        const dia = String(d.getUTCDate()).padStart(2, "0");
        const mes = String(d.getUTCMonth() + 1).padStart(2, "0");
        const ano = d.getUTCFullYear();
        return `${dia}/${mes}/${ano}`;
    }   

    const { mutate: excluir, isPending } = useExcluirFilme();



    const dataFormatada = formatarDataUTC(f.lancamento);

    return (
         <tr>
          <td>{f.id}</td>
          <td>{f.titulo}</td>
          <td>{f.categoria}</td>
          <td>{dataFormatada}</td>
          <td>{f.genero}</td>
          <td>
            <button
              onClick={() => {
                console.log(f)
                setFormFilme({
                  id: f.id ?? "",
                  titulo: f.titulo ?? "",
                  genero: f.genero ?? "",
                  categoria: f.categoria ?? "",
                  data:dataFormatada ? dataFormatada : "",
                  descricao: f.descricao ?? "",
                  canais: Array.isArray(f.canais) ? f.canais : [],
                  foto: undefined,
                  video: undefined,
                });
                setShowModal(true);
              }}
              className="edit-btn"
            >
              Editar
            </button>

            <button disabled={isPending}
            onClick={() => excluir({
                id: f.id
            })}
             className="delete-btn" >Excluir</button>
          </td>
        </tr>
    );
}