import React, {useState, useEffect} from "react";
import { Header } from "../components/Header";
import { Usuario_dados } from "../components/perfil/usuario";
import { ModalEditarPerfil } from "../components/perfil/EditarPerfil";
import ModalCodigo from "../components/login/ModalCodigo";
import ModalSucesso from "../components/login/ModalSucesso";
import styles from "../perfil.module.css";

export function Perfil(){
     const [usuario, setUsuario] = useState(null);
     const[modalCodigo, setModalCodigo] = useState(false)
     const[modalSucesso, setSucesso] = useState(false)
     const [dados, setDados] = useState({})
     const [showEditar, setShowEditar] = useState(false)
     const[codigo, setCodigo] = useState("")
    
    useEffect(() => {
            document.body.classList.add(styles.body);
            return () => document.body.classList.remove(styles.body);
      }, []);

      useEffect(() => {
        try {
          const u = JSON.parse(localStorage.getItem("usuario"));
          console.log(u)
          setUsuario(u);
        } catch {
          setUsuario(null);
        }
      }, [modalSucesso]);

    return(
    <>
        <Header></Header>
        <br />
        <br />
        <br />
        <Usuario_dados setShowEditar={setShowEditar} usuario={usuario}></Usuario_dados>
        {showEditar && (
            <ModalEditarPerfil dados={dados} setCodigo={setCodigo} setShowEditar={setShowEditar} setModalCodigo={setModalCodigo} setDados={setDados} usuario={usuario}></ModalEditarPerfil>
        )}
        {modalCodigo && (
                <ModalCodigo
                 editar={true}
                 setUsuario={setUsuario}
                 setDados={setDados}
                 dados={dados} 
                 codigoVerifica={codigo} 
                 setModalCodigo={setModalCodigo} 
                 setSucesso={setSucesso}></ModalCodigo>
        )}
        
        {modalSucesso && (
            <ModalSucesso dados={dados} editar={true} setSucesso={setSucesso}></ModalSucesso>
        )}
    </>)
}