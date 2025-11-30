import React from "react";
import styles from "../../perfil.module.css";

export function Usuario_dados({setShowEditar ,usuario}) {
    return (
        <div className={styles.card} id="perfil-card">
            <img src={`http://127.0.0.1:5000/static/img/${usuario?.foto}`} alt="" className={styles.img} id="perfil-foto" />

            <br />

            <a
                href=""
                className={styles.removerFoto}
                id="remover-foto"
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

            <a className={`${styles.btn} ${styles.excluir}`} id="excluir-conta">
                Excluir conta
            </a>
        </div>
    );
}
