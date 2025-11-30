import React, { useState, useEffect } from "react";
import styles from "../login.module.css";

import LoginForm from "../components/login/LoginForm";
import RegisterForm from "../components/login/RegisterForm";
import ToggleBox from "../components/login/ToggleBox";

import ModalSucesso from "../components/login/ModalSucesso";
import ModalErro from "../components/login/ModalErro";
import ModalForgot from "../components/login/ModalForgot";
import ModalCodigo from "../components/login/ModalCodigo";


export default function Login() {
    const[dados, setDados] = useState({})

    const [isRegistering, setIsRegistering] = useState(false);
    const[modalCodigo, setModalCodigo] = useState(false)
    const[modalSucesso, setSucesso] = useState(false)
    const[modalForgot, setForgot] = useState(false)
    const[codigo, setCodigo] = useState("")

    
    useEffect(() => {
        document.body.classList.add(styles.body);
        return () => document.body.classList.remove(styles.body);
    }, []);



    return (
        <>
            <div className={`${styles.container} ${isRegistering ? styles.active : ""}`}> 

                <div className={`${styles["form-box"]} ${styles.login}`}>
                    <LoginForm setForgot={setForgot}/>
                </div>

                <div className={`${styles["form-box"]} ${styles.register}`}>
                    <RegisterForm setDados={setDados} setModalCodigo={setModalCodigo} setCodigo={setCodigo} />
                </div>

                <ToggleBox setIsRegistering={setIsRegistering} />
            </div>

            {modalCodigo && (
                         <ModalCodigo
                          setDados={setDados}
                          dados={dados} 
                          codigoVerifica={codigo} 
                          setModalCodigo={setModalCodigo} 
                          setSucesso={setSucesso}></ModalCodigo>
            )}

            {modalSucesso && (
                <ModalSucesso dados={dados} setSucesso={setSucesso} setIsRegistering={setIsRegistering}></ModalSucesso>
            )}

            {modalForgot && (
                <ModalForgot setDados={setDados} setForgot={setForgot} setCodigo={setCodigo} setModalCodigo={setModalCodigo}></ModalForgot>
            )}

        </>
    );
}
