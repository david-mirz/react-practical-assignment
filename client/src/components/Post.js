import React from 'react';
import Comment from "./Comment";
import NewPost from "./NewPost";
import CommentSection from "./CommentSection";
import EditDelete from "./EditDelete";
import LikeDislike from "./LikeDislike";
import PostText from "./PostText";
import Username from "./Username";
import Timestamp from "./Timestamp";

const Post = ({index, children, deletePost}) => {

    const handleDeletePost = () => deletePost(index);

    return (
        <div className={"post-card"}>

            <div style={{"display":"flex"}}>
                <div>{children}</div>
            </div>

            <div className={"post-footer"}>
                <div className={"buttons"}>
                    <div>
                        <button className={"btn like"}>Like</button>
                        <button className={"btn dislike"}>Dislike</button>
                    </div>
                    <div className={""}>
                        <button className={"btn edit"} >Edit</button>
                        <button className={"btn delete"} onClick={handleDeletePost}>Delete</button>
                    </div>
                </div>
                <div className={"username-timestamp"}>
                    <Username/>
                    <Timestamp/>
                </div>
            </div>

            <CommentSection/>

        </div>
    );
};

export default Post;