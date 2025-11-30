const API_BASE = "http://127.0.0.1:5000/comentario/"

export async function Fetch_comentarios_filme(id) {
    const comentariosRes = await fetch(`${API_BASE}${id}`);
    if (!comentariosRes.ok) throw new Error("Erro ao buscar comentários");
    return comentariosRes.json();
}

export async function Excluir_comentario(id, id_filme){
    const response = await fetch(`${API_BASE}${id}/${id_filme}`, {
        method: "DELETE"
    })

    if(!response.ok) throw new Error("Erro ao excluir comentário");

    return true
}

export async function Fetch_up_comentario(dataComentario, id_filme){
    console.log(dataComentario)
    console.log(id_filme)
    const formData = new FormData()
    formData.append("id_usuario", dataComentario.id_usuario)
    formData.append("comentario", dataComentario.comentario)
    formData.append("avaliacao", dataComentario.avaliacao)

    if(dataComentario.id){
        const response = await fetch(`${API_BASE}${dataComentario.id}/${id_filme}`, {
        method: "PUT",
        body: formData
        })

        if(!response.ok) throw new Error("Erro ao editar");

        return true


    }
    const response = await fetch(`${API_BASE}${id_filme}`, {
        method: "POST",
        body: formData
    })

    if(!response.ok) throw new Error(response);
    console.log(response)

    return true
}