import React from 'react'
import {Link} from "react-router-dom"

import "./PageNum.css"

const PageNum = ({postsPerPage, totalPost, paginate}) => {
    const pageNumber = []
    for(let i = 1; i< totalPost/postsPerPage; i++){
        pageNumber.push(i)
    }
    return (
        <div>
               <ul className="pagination">
                   {pageNumber.map((number)=>(
                       <li key = {number} className= "PageNoBox"> 
                       <Link activeClassName="num"  onClick={()=>paginate(number)} className="pageNo"> {number} </Link>
                       </li>
                   ))}
               </ul>
        </div>
    )
}

export default PageNum
