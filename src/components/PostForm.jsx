import { useState } from "react"; 
import { v4 } from "uuid";

const PostForm = ({}) => {
    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [importante, setImportante] = useState(false)

    return(
        <form>
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
