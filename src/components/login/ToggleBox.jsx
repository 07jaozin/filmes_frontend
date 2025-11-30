import React from "react";
import styles from "../../login.module.css";

export default function ToggleBox({isRegistering ,setIsRegistering }) {
    return (
        <div className={styles["toggle-box"]}>
            
            <div className={`${styles["toggle-panel"]} ${styles["toggle-left"]}`}>
                <h1>Ola, Seja bem vindo</h1>
                <p>Ainda não possui uma conta?</p>

                <button
                    className={`${styles.btn} ${styles["register-btn"]}`}
                    onClick={() => setIsRegistering(true)}
                >
                    Cadastrar
                </button>
            </div>
          
            
            
            <div className={`${styles["toggle-panel"]} ${styles["toggle-right"]} `}>
                <h1>Bem vindo!</h1>
                <p>Ja fez seu cadastro?</p>

                <button
                    className={`${styles.btn} ${styles["login-btn"]}`}
                    onClick={() => setIsRegistering(false)}
                >
                    Entrar
                </button>
            </div>
          
            

        </div>
    );
}
