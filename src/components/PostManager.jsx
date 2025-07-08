import { useState } from "react";
import PostForm from "./PostForm";
import PostItem from "./PostItem";

const PostManager = () => {
    const [lista, setLista] = useState([]); 

    const addPost = (postit) => {
        const existe = lista.some(t => postit.titulo === t.titulo )
        if(existe){
            alert('Titulo ya existe')
            return
        }
        setLista([...lista, postit]);

        alert('Bien hecho')
    };

    const deletePostit = (id) => {
        const nueva_lista = lista.filter((t) => t.id !== id);
        setLista(nueva_lista);
    };

    return (
    <>
        <PostForm addPost={addPost} />
        <div className="row">
            {lista.map((t) => (
            <PostItem
                postit={t}
                key={t.id}

                deletePostit={deletePostit}
            />
            ))}
        </div>
    </>
);
};

export default PostManager;