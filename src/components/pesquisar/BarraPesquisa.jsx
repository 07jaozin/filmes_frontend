import React from "react";
import { useState, useEffect } from "react";
import { usePesquisaFilme } from "../../hooks/UseFilme";

export function BarraPesquisa({setModalFiltrar ,setDados}){
    

    const atualiza_campo = (e) => {
        const value = e.target.value;

        setDados(prev => ({
            ...prev,
            campo: value
        }))
    }
    
    return(
        <>
            <form id="pesquisa" onSubmit={(e) => e.preventDefault()} className="search-box">
                   <input type="search" onChange={atualiza_campo} name="campo" id="search-input" placeholder="search movie" />
            </form>
            <button className="btn" onClick={() => setModalFiltrar(true)}>Filtrar</button>
        </>

    )
}