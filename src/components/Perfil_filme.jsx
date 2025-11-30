import { useState } from "react";


export function Perfil_filme({ filme }) {
  const [video, setVideo] = useState(false);

  const [pause, setPause] = useState(true);

  const gerarEstrelas = (avaliacao) => {
        const estrelas_cheias = Math.floor(avaliacao);
        const tem_meia =
          avaliacao - estrelas_cheias >= 0.25 &&
          avaliacao - estrelas_cheias < 0.75;
        const estrelas_vazias = 5 - estrelas_cheias - (tem_meia ? 1 : 0);

        const estrelas = [];

        // Estrelas cheias
        for (let i = 0; i < estrelas_cheias; i++) {
          estrelas.push(<i key={"c" + i} className="bx bxs-star"></i>);
        }
    
        // Meia estrela
        if (tem_meia) {
          estrelas.push(<i key="half" className="bx bxs-star-half"></i>);
        }
    
        // Estrelas vazias
        for (let i = 0; i < estrelas_vazias; i++) {
          estrelas.push(
            <i key={"v" + i} className="bx bx-star"></i>
          );
        }
    
        return estrelas;
    }


  return (
    <>
      <img
        src={`http://127.0.0.1:5000/static/img/${filme.foto}`}
        alt=""
        className="play-img"
      />

      <div className="play-text">
        <h2>{filme.titulo}</h2>
        <div className="rating">
          {new Date(filme.lancamento).toLocaleDateString("pt-BR")}
        </div>
        <div className="rating">{gerarEstrelas(filme.avaliacao)}</div>

        <div className="tags">
          <span>{filme.genero}</span>
          <span>4K</span>
        </div>
      </div>

      <i
        className="bx bx-right-arrow play-movie"
        onClick={() => {
          setVideo(true);
          setPause(false);
        }}
      ></i>

      {video && (
        <div className="video-container show-video">
          <div className="video-box">
            <video
              id="myvideo"
              onPause={() => setPause(true)}
              onPlay={() => setPause(false)}
              src={`http://127.0.0.1:5000/static/video/${filme.video}`}
              controls
            ></video>

            <i
              onClick={() => {
                setVideo(false);
                setPause(true);
              }}
              className="bx bx-x close-video"
            ></i>
          </div>
        </div>
        
      )}
      

    </>
  );
}
