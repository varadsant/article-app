import React from 'react';
import articleContent from './article-content';
import {Link} from 'react-router-dom';

const ArticleList = () => {
    return(
        <>
        <h1>Article List</h1>
        {articleContent.map((article,key) => (
            <Link style= {{"textDecoration" : "none", "color":"black"}} key={key} to={`/articlepage/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0,150)}...</p> <hr/>           
            </Link>
        ))}

        </>

    )
}


export default ArticleList;