import styles from "../../gerenciamento.module.css";
import { useState, useEffect } from "react";
import { useCanais } from "../../hooks/useCanais";

export default function ModalForm({ setShowModal, setFormFilme, formFilme, onSubmit }) {
  
  const {
    data: Canais = [], 
    isLoading,
    error
  } = useCanais();

 
    function formatDateISO(dateString) {
          if (!dateString) return "";
          let d = new Date(dateString);
          if (isNaN(d)) {
           
            const fixed = dateString.replace(" GM", " GMT");
            d = new Date(fixed);
          }
          if (isNaN(d)) return ""; 
          return d.toISOString().split("T")[0];
        }

  
  useEffect(() => {
    console.log(formFilme)
    if (formFilme?.data) {
      setFormFilme((prev) => ({
        ...prev,
        data: formatDateISO(prev.data)
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFilme((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  const handleCheckboxCanais = (e) => {
    const id = Number(e.target.value);

    setFormFilme((prev) => {
      const atual = prev.canais || [];

      const existe = atual.some(c => c[0] === id);

      return {
        ...prev,
        canais: existe
          ? atual.filter(c => c[0] !== id)
          : [...atual, [id]]
      };
    });
  };


  const handleFileChange = (e) => {
    const { name, files } = e.target;

    setFormFilme((prev) => ({
      ...prev,
      [name]: files[0] || null
    }));
  };

  return (
    <div id="modal-editar" className={styles.modal}>
      <div className={styles.modalContent}>
        
        <span className={styles.close} onClick={() => setShowModal(false)} id="fechar-editar">
          &times;
        </span>

        <h3 className={styles.modalTitle}>Editar Filme</h3>

        <form
          id="form-editar-filme"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(formFilme)
            onSubmit(formFilme);
            setShowModal(false)
            
          }}
          encType="multipart/form-data"
        >
          <input type="hidden" name="id" value={formFilme?.id || ""} />

          <label htmlFor="editar-titulo">Título:</label>
          <input
            type="text"
            id="editar-titulo"
            name="titulo"
            value={formFilme.titulo || ""}
            onChange={handleChange}
            required
          />

        
          <label htmlFor="editar-genero">Gênero:</label>
          <input
            type="text"
            id="editar-genero"
            name="genero"
            value={formFilme.genero || ""}
            onChange={handleChange}
            required
          />

         
          <label htmlFor="editar-categoria">Categoria:</label>
          <select
            id="editar-categoria"
            name="categoria"
            value={formFilme.categoria || ""}
            onChange={handleChange}
            required
          >
            <option value="home">Home</option>
            <option value="popular">Popular</option>
            <option value="show">Show</option>
          </select>

          
          <label htmlFor="editar-data">Data:</label>
          <input
            type="date"
            id="editar-data"
            name="data"
            value={formFilme.data || ""}
            onChange={handleChange}
            required
          />

         
          <label htmlFor="editar-descricao">Descrição:</label>
          <textarea
            id="editar-descricao"
            name="descricao"
            rows="3"
            value={formFilme.descricao || ""}
            onChange={handleChange}
            required
          />

         
          <label>Onde assistir</label>
          <div className={styles.checkboxGroup}>
            {Canais.map((canal) => (
              <label key={canal.id} className={styles.checkboxInline}>
                <input
                  type="checkbox"
                  value={canal.id}
                  checked={formFilme.canais?.some(c => c[0] === canal.id) ?? false}
                  onChange={handleCheckboxCanais}
                />
                {canal.nome}
              </label>
            ))}
          </div>

       
          <label htmlFor="editar-foto">Foto:</label>
          <input
            type="file"
            id="editar-foto"
            accept="image/*"
            name="foto"
            onChange={handleFileChange}
          />

          <label htmlFor="editar-video">Vídeo:</label>
          <input
            type="file"
            id="editar-video"
            accept="video/*"
            name="video"
            onChange={handleFileChange}
          />

          <div className={styles.modalButtons}>
            <button type="submit" id="btn-atualizar" className={styles.confirmBtn}>
              Enviar
            </button>
            <button
              type="button"
              id="btn-cancelar"
              className={styles.cancelBtn}
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
