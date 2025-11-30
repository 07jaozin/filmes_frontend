import React from "react";

export function ModalFiltrar({ setModalFiltrar, setDados }) {

    const atualiza_campo = (e) => {
        const { name, value } = e.target;

        setDados(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setModalFiltrar(false);
    };

    return (
        <>
            <div className="video-container">
                <div className="form-container">
                    <h2 className="h2">Filtrar Filmes</h2>

                    <form id="filtrar" onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label htmlFor="data_inicio">Data de Lançamento - Início</label>
                            <input onChange={atualiza_campo} type="date" id="data_inicio" name="data_inicio" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="data_fim">Data de Lançamento - Fim</label>
                            <input onChange={atualiza_campo} type="date" id="data_fim" name="data_fim" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="avaliacao">Avaliação Mínima</label>
                            <select onChange={atualiza_campo} id="avaliacao" name="avaliacao">
                                <option value="">Todas</option>
                                <option value="0">Sem avaliações</option>
                                <option value="1">1 estrela</option>
                                <option value="2">2 estrelas</option>
                                <option value="3">3 estrelas</option>
                                <option value="4">4 estrelas</option>
                                <option value="5">5 estrelas</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="categoria">Categoria</label>
                            <select onChange={atualiza_campo} id="categoria" name="categoria">
                                <option value="">Todas</option>
                                <option value="ação">Ação</option>
                                <option value="comédia">Comédia</option>
                                <option value="Ficção cientifica">Ficção cientifica</option>
                                <option value="drama">Drama</option>
                                <option value="terror">Terror</option>
                                <option value="suspense">Suspense</option>
                            </select>
                        </div>

                        <i onClick={() => setModalFiltrar(false)} className='bx bx-x close-video'></i>

                       
                    </form>

                </div>
            </div>
        </>
    );
}
