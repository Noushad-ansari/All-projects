import React, { useState, useEffect } from 'react';

import axios from "axios";
import Posts from "../Posts/Posts"
import PageNum from "../PageNum/PageNum"
import "bootstrap/dist/css/bootstrap.min.css"



const Pagination = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setpostsPerPage] = useState(5)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(false)
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(res.data)
            setLoading(false)
        }

        fetchPosts()
    }, [])
    // console.log(posts)

    //get current post
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

    //Changing Page Number
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    return (
        <div>
            {/* <h1 className="bg-danger">pagination</h1> */}
            <Posts posts={currentPost} loading={loading} />
            <PageNum postsPerPage={postsPerPage} totalPost={posts.length} paginate={paginate} />
        </div>
    )
}
export default Pagination
