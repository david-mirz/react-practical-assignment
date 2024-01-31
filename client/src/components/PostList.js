import React, {useState} from 'react';
import Post from "./Post";

const PostList = () => {

    const [posts, setPosts] = useState([]);
    const [postText, setPostText] = useState('');


    const handleClickPost = () => {
        const temp = [...posts];
        temp.push(postText);
        setPosts(temp);
    }

    const deletePost = (index) => {
        const temp = [...posts];
        temp.splice(index, 1);
        setPosts(temp);
    }

    return (

        <div className={"post-list"}>
            <div className={"post-new"}>

            <input
                className={"post-text"}
                placeholder={"What do you want to post today?"}
                onChange={e => setPostText(e.target.value)}
            />
                    <button type="button"
                            className={"btn post"}
                            onClick={handleClickPost}>Post
                    </button>
            </div>

            {posts.map((postText, index) =>
                <Post id={index} index={index} deletePost={deletePost}>
                    {postText}
                </Post>
            )}
        </div>

    );
};

export default PostList;