import React, {useState, useEffect} from "react";
import styles from "../../login.module.css"; 
import ModalCodigo from "./ModalCodigo";
import { Fetch_email } from "../../../services/UsuarioServices";

export default function RegisterForm({setDados, setModalCodigo, setCodigo}) {

    const[nome, setNome] = useState("")
    const[senha, setSenha] = useState("")
    const[email, setEmail] = useState("")
    const[disabled, setDisabled] = useState(true)
    const[mensagem, setMensagem] = useState(false)

    
    
    
    useEffect(() => {
        if(nome.length > 0 && senha.length > 0 && email.length > 0){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }, [nome, senha, email])

    

    return (
        <>
        <form onSubmit={async (e) => {
            e.preventDefault()

         try {
            const response = await Fetch_email(email)
            console.log("response:",response)
            if(response === "esse email ja existe!"){
                setMensagem(true)
                return
            }
            else{
            setMensagem(false)
            setCodigo(response)
            setDados({
                nome: nome,
                email: email,
                senha:senha
            }) }      
            setModalCodigo(true)
        } catch (err) {
         console.log(err)
        }

    }} id="cadastro-form">
            <h1 className={styles.title}>Cadastrar</h1>
            {mensagem && (
                <p className={styles.erro}>Esse email ja existe!</p>
            )}
            
            <div className={styles["input-box"]}>
                <input 
                    type="text" 
                    id="nome-cadastrar" 
                    placeholder="Nome" 
                    required 
                    onChange={(e) => setNome(e.target.value)}
                />
                <i className='bx bxs-user'></i>
            </div>

            <div className={styles["input-box"]}>
                <input 
                    type="password" 
                    id="senha-cadastrar" 
                    placeholder="Senha" 
                    required 
                    onChange={(e) => setSenha(e.target.value)}
                />
                <i className="ri-eye-line"></i>
            </div>

            <div className={styles["input-box"]}>
                <input 
                    type="email" 
                    id="email-cadastrar" 
                    placeholder="aaa@gmail.com" 
                    required 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <i className='bx bx-envelope'></i>
            </div>

            <button disabled={disabled} type="submit" className={`${styles.btn} ${styles.btns} ${ disabled && styles.desabilitado} `}>
                Cadastrar
            </button>
        </form>

        


        </>
    );
}
