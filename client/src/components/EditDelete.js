import React from 'react';

const EditDelete = ({index, deletePost, deleteComment}) => {
    // deletePost = ()=>{
    //     function handleClickDelete() {
    //     alert("delete");
    // }
    // }


    return (
        <div className={""}>
            <button className={"btn edit"} >Edit</button>
            <button className={"btn delete"} onClick={deletePost}>Delete</button>
        </div>
    );
};

export default EditDelete;