import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Header } from '../components/Header';
import { TabelaFilmes } from '../components/gerenciamento/TableFilmesGeren';
import ModalForm from '../components/gerenciamento/ModalForm';
import { useUpFilme } from '../hooks/UseFilme';

export function Gerenciamento() {

    const [formFilme, setFormFilme] = useState({});
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const enviarDados = useUpFilme();

    useEffect(() => {
        const u = JSON.parse(localStorage.getItem("usuario"));

        if (!u || u.tipo !== "adm") {
            navigate("/", { replace: true });
        }
    }, [navigate]);

    return (
        <>
            <Header />
            <TabelaFilmes setFormFilme={setFormFilme} setShowModal={setShowModal} />

            {showModal && (
                <ModalForm
                    onSubmit={(formData) => enviarDados.mutate(formData)}
                    setShowModal={setShowModal}
                    formFilme={formFilme}
                    setFormFilme={setFormFilme}
                />
            )}
        </>
    );
}
