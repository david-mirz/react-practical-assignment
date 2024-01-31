import React from 'react';

function handleClickPost() {
    alert("Post")
}

const NewPost = () => {
    return (
        <div className={"post-new"}>
            <input type={"text"} className={"post-text"} placeholder={"What do yu want to post today?"}/>
            <button type="button"
                    className={"btn post"}
                    onClick={handleClickPost}>Post</button>
        </div>
    );
};

export default NewPost;