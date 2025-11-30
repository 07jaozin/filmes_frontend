import React, { useEffect, useState } from "react";
import { BarraPesquisa } from "./pesquisar/BarraPesquisa";

export function Header({setModalFiltrar, setComentar, pesquisar, setDados }) {
  const [usuario, setUsuario] = useState(null);


  useEffect(() => {
    try {
      const u = JSON.parse(localStorage.getItem("usuario"));
      console.log(u)
      setUsuario(u);
    } catch {
      setUsuario(null);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("usuario");
    setUsuario(null);
    window.location.href = "/"; 
  };

  return (
    <header>
      <div className="nav container">
        <a className="logo">
          {setComentar && usuario?.id ? (
            <>
              AVALIE<span onClick={() => setComentar(true)}>TAMBEM</span>
            </>
          ) : (
            <>
              Movie<span>PY</span>
            </>
          )}
        </a>
          {usuario && (
              <a href="" id="user-link" class="user">
                <img id="user-img" src={`http://127.0.0.1:5000/static/img/${usuario.foto}`} alt="" class="user-img" />
              </a>
          )}
        

        {pesquisar && <BarraPesquisa setModalFiltrar={setModalFiltrar} setDados={setDados} />}

        <div className="navbar">
          <a href="/home" className="nav-link nav-active">
            <i className="bx bx-home"></i>
            <div className="nav-link-title">Inicio</div>
          </a>

          <a href="/pesquisa" className="nav-link">
            <i className="bx bx-compass"></i>
            <div className="nav-link-title">Explore</div>
          </a>

          {usuario?.tipo === "adm" && (
            <a href="/filme/gerenciamento" className="nav-link">
              <i className="bx bx-tv"></i>
              <div className="nav-link-title">Gerenciamento</div>
            </a>
          )}

          {usuario?.id && (
            <button onClick={logout} className="nav-link sair" style={{ background: "none", border: "none" }}>
              <i className="bx bx-exit"></i>
              <div className="nav-link-title">Sair</div>
            </button>
          )}

          <a href="/user/login" className="nav-link">
            <i className="bx bx-user"></i>
            <div className="nav-link-title">
              {usuario ? "Perfil" : "Logar"}
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
