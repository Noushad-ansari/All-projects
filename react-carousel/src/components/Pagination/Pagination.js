import React,{useState, useEffect} from 'react';
import axios from "axios";
import Posts from "../Posts/Posts"


 const Pagination = () => {
    const [posts, setPosts]= useState([])
    const [loading, setLoading]=useState(false)
    const [currentPage, setCurrentPage]=useState(1)
    const [postsPerPage, setpostsPerPage]= useState(10)

    useEffect(()=>{
        const fetchPosts = async ()=>{
            setLoading(false)
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(res.data)
            setLoading(false)
        }

       fetchPosts()
    }, [])
    // console.log(posts)
    return (
        <div>
            <h1 className="bg-danger">MY Blog</h1>
         <Posts posts = {posts} loading = {loading}/>
        </div>
    )
}
export default Pagination
