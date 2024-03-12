import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../components/hooks/useFetching";
import postService from "../API/PostService";
import Loader from "../UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById,isPostLoading,error] = useFetching(async ()=>{
        const response = await postService.getById(params.id)
        setPost(response.data)
    })
    const [fetchComments,isComLoading,comerror] = useFetching(async ()=>{
    const response = await postService.getCommentsById(params.id)

        setComments(response.data)

    })
    useEffect(() => {
    fetchPostById()
        fetchComments()

    }, []);
    return (
        <div>
            <h1>Страница поста id={params.id}</h1>
            {
                isPostLoading && isComLoading
                    ?
                    <Loader/>
                    : <div>
                        <h1>
                            Коментарии
                        </h1>
                        <div>{post.id}. {post.title}</div>
                        {comments.map(item =>
                            <div style={{marginTop: '15px'}}>
                                <h5>{item.email}</h5>
                                <div>{item.body}</div>
                            </div>
                        )}
                    </div>

            }

        </div>
    );
};

export default PostIdPage;