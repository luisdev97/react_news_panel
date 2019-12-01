import React from 'react';
import New from './New';
import PropTypes from 'prop-types';


const mapNews = news =>
    news.map(report => 
        <New  key={report.url} report={report}/>
    );


const NewsList = ({ news }) => (
        <div className="row">   
            { mapNews(news) }
        </div>
);

NewsList.propTypes = {
    news: PropTypes.array.isRequired
}
export default NewsList;