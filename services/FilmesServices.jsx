const API_BASE = "http://127.0.0.1:5000/filme";


export async function listaFilmes(){
    const fetchFilme = await fetch(`${API_BASE}/listaFilmes`);

    if(!fetchFilme.ok) throw new Error("Usuário não encontrado");

    return fetchFilme.json();
}

export async function getFilme(id){
    const fetchFilme = await fetch(`${API_BASE}/getFilme/${id}`);

    if(!fetchFilme.ok) throw new Error("Usuário não encontrado");

    return fetchFilme.json();
}

export async function FetchListaPesquisa(dados){
     const parametros = new URLSearchParams({
            campo: dados.campo,
            data_inicio: dados.data_inicio,
            data_fim: dados.data_fim,
            avaliacao: dados.avaliacao,
            categoria: dados.categoria
        });

        try {
            const response = await fetch(`${API_BASE}/lista_filmes_filtrados?${parametros.toString()}`);
            if (!response.ok) throw new Error("Erro ao buscar filmes");

            const data = await response.json();
            console.log(data)
       

            return data
        }
        catch (err) {
            console.error(err);
        }
    }

export async function Fetch_up_filme(dados) {
  
    const formData = new FormData();
    console.log(dados)
    formData.append("titulo", dados.titulo || "");
    formData.append("genero", dados.genero || "");
    formData.append("categoria", dados.categoria || "");
    formData.append("data", dados.data || "");
    formData.append("descricao", dados.descricao || "");
    formData.append("foto", dados.foto);
    formData.append("video", dados.video);
   
    if (Array.isArray(dados.canais)) {
    dados.canais.forEach((canal) => {
        const id = Array.isArray(canal) ? canal[0] : canal;
        formData.append("canais", id);
    });
}


    const isUpdate = dados.id !== null && dados.id !== "" && dados.id !== undefined;

    const url = isUpdate ? `${API_BASE}/${dados.id}` : API_BASE;

    const method = isUpdate ? "PUT" : "POST";

    const response = await fetch(url, {
        method,
        body: formData
    });


    const result = await response.json();
    return result;
}

export async function Fetch_excluir_filme(id) {
    const fetchFilme = await fetch(`${API_BASE}/${id}`, {
        method: 'DELETE'
    });

    if(!fetchFilme.ok) throw new Error("Usuário não encontrado");

    return fetchFilme.json();
}