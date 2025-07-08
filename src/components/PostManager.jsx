import { useState } from "react";
import PostForm from "./PostForm";

const PostManager = () => {
    const [lista, setLista] = useState([]);

    return(
        <>
            <PostForm/>
        </>
    )
}

export default PostManager;