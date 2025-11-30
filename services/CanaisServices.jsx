const API_BASE = "http://127.0.0.1:5000/canais/"


export async function Fetch_buscar_canal_id(id){
    const canaisRes = await fetch(`${API_BASE}buscar_canal_id/${id}`);
    if (!canaisRes.ok) throw new Error("Erro ao buscar canais");
    return canaisRes.json();

}

export async function Fetch_listar_canais() {
    const canaisRes = await fetch(`${API_BASE}getCanais`);
    if (!canaisRes.ok) throw new Error("Erro ao buscar canais");
    return canaisRes.json();
} 