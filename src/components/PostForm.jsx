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
        addPost(postit);

    }

    return (
        <form className="d-flex" onSubmit={handleSubmit}>
        <input

            class="form-control col me-3"
            onChange={(e) => setTitulo(e.target.value)}
            type="text"
            placeholder="Ingrese titulo tarea..."
        />
        <input
            class="form-control col me-3"
            onChange={(e) => setDescripcion(e.target.value)}
            type="text"
            placeholder="Ingrese descripcion tarea..."
        />
        <div class="col" className="form-check">
            <input 
            className="form-check-input" 
            type="checkbox" 
            checked={importante}
            onChange={(e) => setImportante(e.target.checked)}
            id="importante"
            />
            <label className="form-check-label me-3">
            Importante
            </label>
        </div>
        <button class="col"type="submit" style ={{backgroundColor:"#111", color: "white"}}>Agregar</button>
        </form>
    );
};
export default PostForm;