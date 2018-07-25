// This component render all articles list
import React from 'react';
import './ArticlesList.css';

const ArticlesList = props => {
    return (
        <section>
            {
                props.pages.map( item => {
                    return(
                        <div key={ item.pageid }
                             className='article'
                        >
                            <a href={`https://en.wikipedia.org/?curid=${item.pageid}`} target='_blank'>
                                <h2 className='articleTitle'>{ item.title }</h2>
                                <p className='articleText'>{ item.extract }</p>
                            </a>
                        </div>
                    )
                })
            }
        </section>
    )
};

export default ArticlesList;