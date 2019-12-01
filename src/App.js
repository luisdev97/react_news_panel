import React, { Component } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';

class App extends Component {

  state = {
    news: []
  }

  componentDidMount(){
    this.getNews();
  }


  getNews = async() =>  {
    //const API_KEI = '7f5ac1bdfaa64bfa958bc1fb7d0e1636'
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7f5ac1bdfaa64bfa958bc1fb7d0e1636`;
    const response = await fetch(url);
    const news =  await response.json();
    this.setState({ news: news.articles });
  }

  render() {
    return (
      <>
        <Header title='React News'/>
        <div className="container white contenedor-noticias">
          <NewsList news={ this.state.news }/>
        </div>
      </>
    );
  }

}

export default App;
