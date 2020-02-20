
import React, { useEffect, useState } from 'react';
import moment from 'moment';

function News() {
    const [news, setNews] = useState([]);



    useEffect(() => {
        fetch('http://newsapi.org/v2/top-headlines?country=us&apiKey=902b3c84850d4058ba2b72eed33e55bd')
            .then(response => response.json())
            .then(json =>
                setNews(json.articles));
    }, []);


    return (
        <div className='Stories'>
            <h3>News across the pond</h3>
            {
                news.slice(0, 5).map(story => {
                    const { url, title, description, publishedAt, urlToImage } = story

                    return (
                        <div key={url}>
                            <div className='image'>   <img width={300} height={190} src={urlToImage} alt='visualization of the news' /> </div>
                            <a href={url}>{title} </a>
                            <div>{description}</div> <div> {moment(publishedAt)
                                .format("hh:mm - DD.MM.YYYY")} </div>

                        </div>
                    )
                })
            }
            <h5>These news were provided by NewsAPI</h5>
        </div>

    )


}

export default News;









//902b3c84850d4058ba2b72eed33e55bd