import React from "react";
import { Header } from "../components/Header";
import { BarraPesquisa } from "../components/pesquisar/BarraPesquisa";
import { ListaPesquisa } from "../components/pesquisar/ListaPesquisa";
import { ModalFiltrar } from "../components/pesquisar/ModalFiltrar";
import { useState } from "react";

export function Pesquisar(){
    const[modalFiltar, setModalFiltrar] = useState(false)
    const[dados, setDados] = useState({
            campo: "",
            data_inicio: "",
            data_fim: "",
            avaliacao: "",
            categoria: ""
        })
    return (
        <>
            <Header setModalFiltrar={setModalFiltrar} setDados={setDados} pesquisar={true}></Header>
            <ListaPesquisa dados={dados}></ListaPesquisa>
            {modalFiltar && <ModalFiltrar setDados={setDados} setModalFiltrar={setModalFiltrar}></ModalFiltrar>}
            
        </>
    )
}