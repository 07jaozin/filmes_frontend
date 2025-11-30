import React, { useState, useEffect, useRef } from 'react';
import { Header } from '../components/Header';
import { TabelaFilmes } from '../components/gerenciamento/TableFilmesGeren';
import ModalForm from '../components/gerenciamento/ModalForm';
import { useUpFilme } from '../hooks/UseFilme';

export function Gerenciamento() {
    const [formFilme, setFormFilme] = useState({})
    const [showModal, setShowModal] = useState(false)

    const enviarDados = useUpFilme();
    return(
        <>
            <Header></Header>
            <TabelaFilmes setFormFilme={setFormFilme} setShowModal={setShowModal}></TabelaFilmes>
            {showModal && (
                <ModalForm onSubmit={(formData) => {
                    enviarDados.mutate(formData)
                }} 
                setShowModal={setShowModal} formFilme={formFilme} setFormFilme={setFormFilme}></ModalForm>
            )}
           
        </>
    )

}

