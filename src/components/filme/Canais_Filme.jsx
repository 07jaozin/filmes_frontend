import React from "react";
import { useParams } from 'react-router-dom';
import { useCanail_id } from "../../hooks/useCanais";
import { Canais_row } from "./Canais_linha";

export function Canais_Filme({canais}) {

    const { id } = useParams();

    

    console.log(canais);

    return (
        <>
            <div className="heading container">
                <h2 className="heading-title">Onde assistir</h2>
            </div>

            
            
            <div className="movies-content container">
                {canais.length > 0 ? (
                    canais.map((canal) => (
                        <Canais_row canal={canal} key={canal.id} />
                    ))
                ) : (
                <p>Nenhum canal disponível</p>
                )}
            </div>
            

        </>
    );
}
