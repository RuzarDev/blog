import React from 'react';
import '../scss/app.scss'
import {useEffect, useMemo, useState} from "react";
import postService from "../API/PostService";
import MyButton from "../UI/Button/MyButton";
import MyModal from "../UI/Mymodal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../UI/Loader/Loader";
import PostList from "../components/PostList";
import {useFetching} from "../components/hooks/useFetching";
import {getPageCount} from "../utils/pages";
import {usePosts} from "../components/hooks/usePosts";
import Pagination from "../components/Pagination";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postText, setPostText] = useState({title:'',body:''})
    const [postFilter, setPostFilter] = useState({query:'',sort:''})
    const sortedAndSearchedPosts = usePosts(posts,postFilter.sort,postFilter.query);
    const [modal, setModal] = useState()
    const [totalPages, setTotalPages] = useState()
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [fetchPosts,isPostsLoading,postError,] = useFetching(async ()=>{
        const [posts,Count] = await postService.getAll(limit,page)
        setPosts(posts)
        setTotalPages(getPageCount(Count,limit))
    })

    useEffect(() => {
        fetchPosts()

    }, [page]);
    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)}>
                Создать заметку
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm setVisible={setModal} posts={posts} setPosts={setPosts} postText={postText}
                          setPostText={setPostText}/>

            </MyModal>
            <PostFilter postFilter={postFilter} setPostFilter={setPostFilter}/>
            {
                isPostsLoading
                    ?
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
                    :
                    <PostList posts={sortedAndSearchedPosts} setPosts={setPosts}/>
            }
            <Pagination page={page} totalPages={totalPages} setPage={setPage}/>

        </div>
    );
};

export default Posts;
