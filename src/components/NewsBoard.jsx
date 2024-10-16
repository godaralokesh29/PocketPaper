import { useEffect, useState } from "react"
import Newsitem from "./Newsitem";


const NewsBoard=({category})=> {
    const [articles,setArticle]=useState([]);
    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=819a4f278473419494fa21aa4f4dd722`;
        fetch(url, {
          mode: 'cors', 
      }).then(response => response.json()).then(data => setArticle(data.articles))
        .catch(error => console.error(error));
    },[category])
    
  return (
    <div>
        

        
        {articles.map((news,index)=>{
          return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        
        })}
       

      
    </div>
  )
}
export default NewsBoard;
