import styles from "../../gerenciamento.module.css"
import { useFilmes } from "../../hooks/UseFilme";
import TabelaLinha from "./TableLinhaGeren";
import { useState } from "react";
export function TabelaFilmes({setFormFilme, setShowModal}) {
    const{
            data: filmes = [],
            isLoading,
            error
        } = useFilmes();

    

  return (
    <div className={styles.tableContainer}>
        <br />
      <h1 className={styles.title}>Todos os filmes</h1>
      <center>
        <button onClick={() => {
                
                setFormFilme({
                  id: "",
                  titulo:"",
                  genero: "",
                  categoria:  "",
                  data: "",
                  descricao: "",
                  canais: [],
                  foto: undefined,
                  video: undefined,
                });
                setShowModal(true);
              }}>Adicionar</button>
      </center>
      <br />
      

      <table className={styles.menuTable}>
        <thead className={styles.tableHead}>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Categoria</th>
            <th>Lançamento</th>
            <th>Gênero</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody id="filmes-tbody" className={styles.tableBody}>
            {filmes ?(
                filmes.map(filme => (
                    <TabelaLinha setShowModal={setShowModal} setFormFilme={setFormFilme} key={filme.id} f={filme}></TabelaLinha>
                ))
            )
            : ("<p> Nenhum filme registrado!")}

        </tbody>
      </table>
    </div>
  );
}
