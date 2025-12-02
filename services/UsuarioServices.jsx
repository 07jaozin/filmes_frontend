const API_BASE = "http://127.0.0.1:5000/user"

export async function Fetch_usuario_session(){
    const fetchSession = await fetch(`${API_BASE}/session`);

    if (!fetchSession.ok) throw new Error("Erro session usuario");

    const id = await fetchSession.json();

    if(id === "nao logado") return 0

    return id
}

export async function Fetch_email(email) {
  const res = await fetch(`${API_BASE}/verificar_email_cadastro`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  });

  if (!res.ok) {
    throw new Error("Erro ao verificar email");
  }

  const data = await res.json(); 
  if(data.mensagem){
    return data.mensagem
  }
  console.log(data.codigo)
  return data.codigo;
}

export async function Fetch_codigo_verifica(codigo) {
    const res = await fetch(`${API_BASE}/verificar_codigo`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({codigo})
        });

    const data = await res.json()

    if(!data.sucesso) return false

    return true

}

export async function Fetch_cadastro_usuario(obj) {
    const formData = new FormData()
    console.log(obj.nome)
    console.log(obj.email)
    console.log(obj.senha)
    formData.append("nome", obj.nome)
    formData.append("email", obj.email)
    formData.append("senha", obj.senha)
    
    

    const res = await fetch(`${API_BASE}/cadastro`,{
        method:'POST',
        body: formData
    })

    if(!res.ok) throw new Error ("erro no cadastro!")

    return true
}

export async function Fetch_email_esqueci_senha(email) {
    const res = await fetch(`${API_BASE}/verificar_email`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({email})
        });

    const data = await res.json()

    if(!data.sucesso) return false

    return data.codigo
}

export async function Fetch_login(obj) {
    const formData = new FormData()

    console.log(obj.email)
    console.log(obj.senha)
    formData.append("email", obj.email)
    formData.append("senha", obj.senha)

    const res = await fetch(`${API_BASE}/login`,{
        method:'POST',
        body: formData
    })

    if(!res.ok)  return false

    const data = await res.json()

    localStorage.removeItem("usuario")

    localStorage.setItem("usuario",JSON.stringify(data))

    console.log(JSON.parse(localStorage.getItem("usuario")))

    return true

}
export async function Fetch_edit(obj) {
    const formData = new FormData()

    console.log(obj.email)
    console.log(obj.senha)
    formData.append("nome", obj.nome)
    formData.append("email", obj.email)
    formData.append("senha", obj.senha)
    formData.append("foto", obj.foto)

    console.log("form", formData)

    const usuario = JSON.parse(localStorage.getItem("usuario"))

    const res = await fetch(`${API_BASE}/${usuario.id}`,{
        method:'PUT',
        body: formData
    })

    if(!res.ok)  return false

    const data = await res.json()

    localStorage.removeItem("usuario")

    localStorage.setItem("usuario",JSON.stringify(data))

    console.log(JSON.parse(localStorage.getItem("usuario")))

    return true

}

export async function Fetch_remover_foto(id) {
    const res = await fetch(`${API_BASE}/foto/${id}`,{
        method:'DELETE'
    })

    if(!res.ok)  return false

    const data = await res.json()

    const usuario = JSON.parse(localStorage.getItem("usuario"))

    usuario.foto = "padrao.jpg"

    localStorage.setItem("usuario", JSON.stringify(usuario))

    return true
}

export async function Fetch_excluir_usuario(id) {
    const res = await fetch(`${API_BASE}/${id}`,{
        method:'DELETE'
    })

    if(!res.ok)  return false

    const data = await res.json()

    localStorage.removeItem("usuario")

    return true
}
