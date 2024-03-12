import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts,setPosts}) => {
    const removePost =(id)=>setPosts([...posts].filter(item=>item.id !==id))
    return (
        <div className="posts">
            {posts.map((post,index) =>
                <PostItem id={post.id} post={post} removePost={removePost}/>)}
        </div>
    );
};

export default PostList;