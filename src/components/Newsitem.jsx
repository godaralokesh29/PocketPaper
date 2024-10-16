import image from "../assets/download.jpg"
import React from 'react'
const Newsitem=({url,description,title,src})=> {
  return  <div className="card bg-dark text-light mb-3 d-inline-block px-2 py-2 mx-2 my-2"  style={{maxWidth:"345px"}}>
  <img src={src?src:image} style={{height:"250px", width:"300px"}} className="card-img-top" alt="..."/>
  <div className="card-body " >
    <h5 className="card-title">{title?title.slice(0,50):"Click read More "}</h5>
    <p className="card-text">{description}</p>
    <a href={url} target="_blank" className="btn btn-primary">Read News</a>
  </div>
</div>
        
}

export default Newsitem;
