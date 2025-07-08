import { useState } from "react";
import PostForm from "./PostForm";


const TaskManager = () => {
    const [tareas, setTareas] = useState([]); 

    const addTarea = (tarea) => {
        const esta = tareas.some(t => tarea.titulo === t.titulo )
        if(esta){
            alert('Titulo ya existe')
            return
        }
        setTareas([...tareas, tarea]);

        alert('Bien hecho!')
    };

    

    return (
    <>
        <PostForm addTarea={addTarea} />
        
    </>
);
};

export default PostManager;