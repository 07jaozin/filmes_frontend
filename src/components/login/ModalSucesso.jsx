import React from "react";
import styles from "../../login.module.css";

export default function ModalSucesso({setSucesso, setIsRegistering, editar}) {
    return (
        <div
            id="modal-sucesso"
            className={`${styles["modal-sucesso"]}`}
        >
            <div className={styles["modal-content"]}>
                <i className='bx bx-check-circle'></i>

                <h2>{editar ? "Cadastro realizado com sucesso!" : "Dados Atualizados com sucesso!"}</h2>
                <p>{!editar && "Agora você pode fazer login com sua conta."}</p>

                <button onClick={() => {

                    if(!editar) setIsRegistering(false);
                    setSucesso(false)
                }}
                 className={styles.btn} id="fechar-modal">
                    OK
                </button>
            </div>
        </div>
    );
}
