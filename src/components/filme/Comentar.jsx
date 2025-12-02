import React, { useRef, useEffect, useState } from "react";

export function Comentar({ setComentar, comentario, onSubmit }) {
  const modalRef = useRef(null);

  // Estado do usuário
  const [usuario, setUsuario] = useState(null);

  // Carrega o usuario do localStorage ao iniciar
  useEffect(() => {
    try {
      const u = JSON.parse(localStorage.getItem("usuario"));
      setUsuario(u);
      console.log("LocalStorage:", u);
    } catch {
      setUsuario(null);
    }
  }, []);

  // Formulário
  const [formData, setFormData] = useState({
    id_usuario: null,
    id: comentario.id || null,
    comentario: comentario.comentario || "",
    avaliacao: comentario.avaliacao || "5",
  });

  
  useEffect(() => {
    if (usuario) {
      setFormData((prev) => ({
        ...prev,
        id_usuario: usuario.id,
      }));
    }
  }, [usuario]);

  
  function atualizaData(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  
  useEffect(() => {
    function cliqueFora(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setComentar(false);
      }
    }

    document.addEventListener("mousedown", cliqueFora);

    return () => {
      document.removeEventListener("mousedown", cliqueFora);
    };
  }, []);

  return (
    <>
      <div id="comentario-overlay" className="comentario-overlay">
        <div ref={modalRef} className="comentario-bar">
          <button
            id="fechar-comentario"
            onClick={() => setComentar(false)}
            className="close-btn"
          >
            <i className="bx bx-x"></i>
          </button>

          <input
            type="text"
            name="comentario"
            value={formData.comentario}
            onChange={atualizaData}
            id="texto-comentario"
            placeholder="Escreva seu comentário..."
          />

          <select
            id="avaliacao"
            name="avaliacao"
            value={formData.avaliacao}
            onChange={atualizaData}
          >
            <option value="5">5 estrelas</option>
            <option value="4">4 estrelas</option>
            <option value="3">3 estrelas</option>
            <option value="2">2 estrelas</option>
            <option value="1">1 estrela</option>
            <option value="0">0 estrelas</option>
          </select>

          <button
            id="enviar-comentario"
            className="send-btn"
            onClick={(e) => {
              e.preventDefault();
              onSubmit(formData);
              setComentar(false);
            }}
          >
            <i className="bx bx-send"></i>
          </button>
        </div>
      </div>
    </>
  );
}
