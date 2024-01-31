import React, {useState} from 'react';
import Comment from "./Comment";

const CommentSection = () => {

    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');


    const handleClickComment = () => {
        const temp = [...comments];
        temp.push(commentText);
        setComments(temp);
    };

    const deleteComment = (index) => {
        const temp = [...comments];
        temp.splice(index, 1);
        setComments(temp);
    }

    return (
        <div className={"comments-section"}>
            <div className={"post-new"}>
                <input type={"text"}
                       className={"post-text"}
                       onChange={e => setCommentText(e.target.value)}
                       placeholder={"New comment"}/>
                <button type="button"
                        onClick={handleClickComment}
                        className={"btn post"}>Comment
                </button>
            </div>
            {comments.map((commentText, index) =>
                <Comment id={index} index={index} deleteComment={deleteComment}>
                    {commentText}
                </Comment>
            )}
        </div>
    );
};

export default CommentSection;