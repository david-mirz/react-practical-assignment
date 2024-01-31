import React from 'react';

const NewComment = () => {
    return (
        <div className={"post-new"}>
            <input type={"text"} className={"post-text"} placeholder={"New comment"}/>
            <button type="button" className={"btn post"}>Comment</button>
        </div>
    );
};

export default NewComment;