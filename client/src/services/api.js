const BASE_URL=import.meta.env.VITE_API_URL

export const getNotes=()=>{
    return fetch(`${BASE_URL}/notes`)
}

export const addNote=(text)=>{
    return fetch(`${BASE_URL}/notes`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            text
        })
    })
}

export const deleteNote=(id)=>{
    return fetch(`${BASE_URL}/notes/${id}`,{
      method:'DELETE'
    })
}

export const updateNote=(id,text)=>{
    return fetch(`${BASE_URL}/notes/${id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        text
      })

    })
}