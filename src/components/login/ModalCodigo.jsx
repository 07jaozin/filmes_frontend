import React, { useState } from "react";
import styles from "../../login.module.css";
import { Fetch_codigo_verifica, Fetch_cadastro_usuario, Fetch_edit } from "../../../services/UsuarioServices";


export default function ModalCodigo({setDados, dados, codigoVerifica, setModalCodigo, setSucesso, editar, setUsuario }) {
    
    const [codigo, setCodigo] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [erro, setErro] = useState(false);

    const verificar = async () => {
        try {
            
            console.log(codigoVerifica)
            console.log(codigo)
            if (parseInt(codigoVerifica) != codigo) {
                setMensagem("Codigo Invalido!")
                setErro(true);
                return;
            }
            if(dados.verificacao){
                console.log("ok!")
                setModalCodigo(false)
                return
            }

            if(editar){
                console.log("editar:", dados)
                await Fetch_edit(dados)
                setModalCodigo(false)
                setSucesso(true)
                
                return
            }
            setSucesso(true);
            const cadastro = await Fetch_cadastro_usuario(dados)

            
            if (!cadastro) {
                setMensagem("Erro ao cadastrar");
                setErro(true);
            } else {
                setDados({})
                setModalCodigo(false);
            }

            

        } catch (e) {
            setErro(true);
        }
    };

    return (
        <div id="modal-codigo" className={styles.modal}>
            <div className={styles["modal-content"]}>
                <h2>Verificar Código</h2>
                <p>Insira o código enviado:</p>

                <input
                    type="text"
                    id="codigo-digitado"
                    maxLength="4"
                    placeholder="0000"
                    required
                    onChange={(e) => setCodigo(e.target.value)}
                />

                <button onClick={verificar} id="verificar-codigo">
                    Verificar
                </button>

                {erro && (
                    <p id="erro-verificacao" className={styles.erro}>
                        {mensagem}
                    </p>
                )}

                <span
                    onClick={() => setModalCodigo(false)}
                    className={styles.close}
                >
                    &times;
                </span>
            </div>
        </div>
    );
}
