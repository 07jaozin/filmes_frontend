import React, {useState} from "react";
import styles from "../../login.module.css"
import { Fetch_login } from "../../../services/UsuarioServices";

export default function LoginForm({setForgot}) {

    const [mensagem, setMensagem] = useState(false)

    const [form, setForm] = useState({
        email: "",
        senha: ""
    })

    const atualiza_value = (e) => {
        const {name, value} = e.target

        setForm(prev => ({
            ... prev,
            [name]: value
        }))
    }
    return (
        <form onSubmit={ async (e) => {
            e.preventDefault()
            const res = await Fetch_login(form)

            if(res){
                window.location.href = "/"
                return
            }
            else{
                setMensagem(true)
            }
        }} 
        id="login-form">
            <h1>Login</h1>
            
            {mensagem && (<p className={styles.erro}>Dados incorretos</p>)}

            <div className={styles["input-box"]}>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="aaaa@gmail.com"
                    onChange={atualiza_value} 
                    required 
                />
                <i className='bx bxs-envelope'></i>
            </div>

            <div className={styles["input-box"]}>
                <input 
                    type="password" 
                    id="senha" 
                    name="senha" 
                    placeholder="senha" 
                    onChange={atualiza_value}
                    required 
                />
                <i className="ri-eye-line"></i>
            </div>

            <a href="#"
            onClick={() => setForgot(true)} className={styles.forgot} id="forgot-link">
                Esqueceu sua senha?
            </a>

            <button type="submit" className={`${styles.btn} ${styles.btns}`}>
                Login
            </button>
        </form>
    );
}
