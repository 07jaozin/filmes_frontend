import React from "react";
import styles from "../../login.module.css";

export default function ModalSucesso({setSucesso, setIsRegistering}) {
    return (
        <div
            id="modal-sucesso"
            className={`${styles["modal-sucesso"]}`}
        >
            <div className={styles["modal-content"]}>
                <i className='bx bx-check-circle'></i>

                <h2>Cadastro realizado com sucesso!</h2>
                <p>Agora você pode fazer login com sua conta.</p>

                <button onClick={() => {
                    setIsRegistering(false)
                    setSucesso(false)
                }}
                 className={styles.btn} id="fechar-modal">
                    OK
                </button>
            </div>
        </div>
    );
}
