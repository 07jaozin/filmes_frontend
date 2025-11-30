import React, { useEffect, useState } from "react";
import styles from "../../perfil.module.css";
import { Fetch_email_esqueci_senha } from "../../../services/UsuarioServices";

export function ModalEditarPerfil({dados, usuario, setDados, setShowEditar, setModalCodigo, setCodigo }) {
    


    useEffect(() => {
        setDados({
            nome: usuario?.nome || "",
            email: usuario?.email || "",
            senha: "",
            foto: null
        });
        
    }, [usuario, setDados]);

    const atualizaChange = (e) => {
        const { name, value } = e.target;

        setDados((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFotoChange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

      
        setDados((prev) => ({
            ...prev,
            foto: file
        }));

      
    };

    return (
        <div className={`${styles.modalEditar}`} id="modal-editar">
            <div className={styles.modalConteudo}>
                <h2>Editar Perfil</h2>

                <form onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                        const response = await Fetch_email_esqueci_senha(dados?.email)
                        console.log("response:",response)
                        
                        setShowEditar(false)
                        setCodigo(response)
                        setModalCodigo(true)
                    } catch (err) {
                     console.log(err)
                    }
                }} id="editar-perfil-form">

                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={dados?.nome}
                        onChange={atualizaChange}
                        required
                        className={styles.input}
                    />

                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={dados?.email}
                        onChange={atualizaChange}
                        required
                        className={styles.input}
                    />

                    <label>Senha:</label>
                    <input
                        type="password"
                        name="senha"
                        placeholder="Deixe em branco caso não for mudar"
                        onChange={atualizaChange}
                        className={styles.input}
                    />

                    <label>Foto de perfil (Opcional)</label>
                    <input
                        type="file"
                        name="foto"
                        accept="image/*"
                        onChange={handleFotoChange}
                        className={styles.input}
                    />

                    <br />
                    <br />

                    <button type="submit" className={styles.btnSalvar}>
                        Salvar alterações
                    </button>

                    <br />
                    <br />

                    <button onClick={() => setShowEditar(false)} type="button" id="fechar-editar" className={styles.btnCancelar}>
                        Cancelar
                    </button>
                </form>
            </div>
        </div>
    );
}
