const PostItem = ({ postit, deletePostit }) => {
    const { id, titulo, descripcion, importante } = postit;

    const handleClick = () => {
    deletePostit(id);
    };

    return (
        <div className="col-12 col-md-3 mb-4 mt-3 d-flex justify-content-center">
            <div 
                className="p-3 rounded position-relative h-100 mx-2"
                style={{
                    minHeight: "180px",
                    backgroundColor: importante ? "#EC7063" : "#FFFFCC",
                    wordBreak: "break-word"
                }}
            >
                <h5 className={importante ? "text-black" : ""}><strong>{titulo}</strong></h5>
                <p className={importante ? "text-black" : ""}>{descripcion}</p>
                <div style={{position:"absolute", top:0, right:0}}>
                    <button 
                        onClick={handleClick}
                        style={{
                            backgroundColor: importante ? "#EC7063" : "#FFFFCC", 
                            borderColor: importante ? "#EC7063" : "#FFFFCC",
                        }}
                        color="#000000"
                    >
                        <i className="bi bi-x">x</i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
