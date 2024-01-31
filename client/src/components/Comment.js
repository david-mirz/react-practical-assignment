import React from 'react';
import NewPost from "./NewPost";
import Username from "./Username";
import Timestamp from "./Timestamp";
import LikeDislike from "./LikeDislike";
import EditDelete from "./EditDelete";
import CommentText from "./CommentText";

const Comment = ({index, children, deleteComment}) => {
    const handleDeleteComment = () => deleteComment(index)

    return (
        <div className={"comments-card"}>
            {/*<CommentText/>*/}
            <div>{children}</div>

            <div className={"post-footer"}>
                <div className={"buttons"}>
                    <div>
                        <button className={"btn like"}>Like</button>
                        <button className={"btn dislike"}>Dislike</button>
                    </div>
                    <div className={""}>
                        <button className={"btn edit"} >Edit</button>
                        <button className={"btn delete"} onClick={handleDeleteComment}>Delete</button>
                    </div>
                </div>
                <div className={"username-timestamp"}>
                    <Username/>
                    <Timestamp/>
                </div>
            </div>

        </div>
    );
};

export default Comment;