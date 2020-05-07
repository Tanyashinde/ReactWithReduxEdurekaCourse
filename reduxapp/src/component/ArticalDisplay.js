import React from 'react';

const ArticalDisplay=(props)=>{

    const renderArticles=({adata}) =>{
        if(adata){
            return adata.map((item)=>{
                return(
                    <div key={item.id}>
                    <div className="right">
                        <h3>{item.title}</h3>
                        <div className="category-tag">
                            {item.category}
                        </div>
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye">
                                    {item.views}
                                </i>
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up">
                                    {item.likes[0]}
                                </i>
                            </span>
                            <span>
                                <i className="fa fa-thumbs-down">
                                    {item.likes[1]}
                                </i>
                            </span>
                        </div>
                    </div>
                </div>
                )
            })
        }
    }

    return(
        <div className="other-news">
            <h1>Article News</h1>
            <div className="other-news-items">
                {renderArticles(props)}
            </div>
        </div>
    )
}

export default ArticalDisplay;