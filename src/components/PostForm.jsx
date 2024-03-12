import React from 'react';
import MyButton from "../UI/Button/MyButton";
import MyInput from "../UI/Input/MyInput";

const PostForm = ({postText,setPostText,posts,setPosts,setVisible}) => {

    const createPost = (e)=>{
        e.preventDefault()
        const newPost = [...posts,{id:Date.now(),title:postText.title,body:postText.body}]
        setPosts(newPost)
        setPostText({title:'',body:''})
        setVisible(false)
    }
    return (
        <form action="">
            <MyInput value={postText.title} onChange={(e)=>setPostText({...postText,title:e.target.value})} type="text" placeholder='Название поста'/>
            <MyInput value={postText.body} onChange={(e)=>setPostText({...postText,body:e.target.value})} type="text" placeholder="Описание поста"/>
            <MyButton onClick={createPost} >Создать пост</MyButton>
        </form>
    );
};

export default PostForm;