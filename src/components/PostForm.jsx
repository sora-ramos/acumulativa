import { useState } from "react"; 
import { v4 as uuid } from "uuid";

const PostForm = ({addPost}) => {
    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [importante, setImportante] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validaciones
        if(!titulo.trim() || !descripcion.trim()){
            alert("Los campos no deben estar vacíos!")
            return
        }

        const postit = {
            id: uuid(),
            titulo,
            descripcion,
            importante
        };
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setTitulo(e.target.value)} type="text" placeholder="Escribe el titulo..." />
            <input onChange={(e) => setDescripcion(e.target.value)}  type="text" placeholder="Escribe el contenido..." />
            <span>
                Importante
                <input onChange={(e) => setImportante(e.target.checked)} type="checkbox"/>
            </span>
            <button type="submit">Añadir Post it</button>
        </form>
    )

}

export default PostForm;