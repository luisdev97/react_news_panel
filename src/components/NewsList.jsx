import React from 'react';
import New from './New';


const mapNews = news =>{
    { return news.map(report => (
        <New  key={report.url} report={report}/>
    ))}
}

const NewsList = ({ news }) => (
        <div className="row">   
            { mapNews(news) }
        </div>
);
export default NewsList;