import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"


const Posts = ({ posts, loading }) => {

    if (loading) {
        return (<h1>loading...</h1>)
    }
    return (
        <div className="container bg-light ">
            <table className="table table-hover table-sm table-striped table-bordered  mt-5 ">
                <thead>
                    <tr className="bg-dark text-white">
                        <th>Id</th>
                        <th>userId</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ul className>

            </ul>
        </div>
    )
}
export default Posts