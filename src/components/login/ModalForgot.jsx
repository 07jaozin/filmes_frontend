import React, {useState} from "react";
import styles from "../../login.module.css";
import { Fetch_email_esqueci_senha } from "../../../services/UsuarioServices";

export default function ModalForgot({ setDados,setForgot, setCodigo, setModalCodigo}) {

    const [mensagem, setMensagem] = useState(false)

    const [email, setEmail] = useState("")

    const envia_email = async () => {
        const res = await Fetch_email_esqueci_senha(email)

        console.log(res)

        if(!res){
            setMensagem(true)
            return
        }
        setDados({
            verificacao:true
        })
        setCodigo(res)
        setModalCodigo(true)
        setForgot(false)
        
    }



    return (
        <div className={styles["modal"]} id="modal-forgot">
            <div className={styles["modal-content"]}>
                <h2>Recuperar Senha</h2>
                <p>Digite seu e-mail para receber o código:</p>

                <input
                    type="email"
                    id="email-verificar"
                    placeholder="Seu e-mail"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    required
                />

                <button onClick={() => envia_email()} id="enviar-codigo" className={styles.btn}> 
                    Enviar Código
                </button>

                { mensagem && (<p id="erro-recuperacao" className={styles.erro}>Digite um email valido</p>)}

                <span onClick={() => setForgot(false)} className={styles.close}>&times;</span>
            </div>
        </div>
    );
}
