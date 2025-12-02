import React from "react";
import styles from "../../perfil.module.css";
import { Fetch_remover_foto, Fetch_excluir_usuario } from "../../../services/UsuarioServices";

export function Usuario_dados({setShowEditar ,usuario}) {
    const remover_foto = async () => {
        const fetch = await Fetch_remover_foto(usuario?.id)

        if(fetch) return
    }

    return (
        <div className={styles.card} id="perfil-card">
            <img src={`http://127.0.0.1:5000/static/img/${usuario?.foto}`} alt="" className={styles.img} id="perfil-foto" />

            <br />

            <a
                href=""
                className={styles.removerFoto}
                id="remover-foto"
                onClick={(e) => {
                    e.preventDefault()
                    remover_foto()}}
            >
                Remover foto de perfil
            </a>

            <br />

            <h1 className={styles.name} id="perfil-nome">{usuario?.nome}</h1>
            <h1 className={styles.email} id="perfil-email">{usuario?.email}</h1>

            <br />

            <a onClick={() => setShowEditar(true)} className={styles.btn} id="editar-perfil-btn">
                Editar perfil
            </a>

            <a
                onClick={async () => {
                  if (window.confirm("Deseja realmente excluir sua conta?")) {
                    console.log("sim");
                    await Fetch_excluir_usuario(usuario.id)
                    window.location.href = '/';
                    
                  }
                }}
                className={`${styles.btn} ${styles.excluir}`}
                id="excluir-conta"
                >
                  Excluir conta
                </a>

        </div>
    );
}
