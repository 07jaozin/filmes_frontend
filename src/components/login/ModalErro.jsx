import React from "react";
import styles from "../../login.module.css";

export default function ModalErro() {
    return (
        <div className={`${styles["modal-erro"]} ${styles.hidden}`}>
            <div className={styles["modal-content-erro"]}>
                <i className='bx bxs-error'></i>
                <h2>Esse email já existe!</h2>
                <p>Você não pode cadastrar com um email já existente.</p>

                <button className={styles.btn} id="fechar-modal-erro">
                    OK
                </button>
            </div>
        </div>
    );
}
