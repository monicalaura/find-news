import React,{useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import News from './components/News';


const App = () => {
 
  const API_KEY = '76e1ad147bbc465c98e03c376b7c62eb'

  //STATES
  const [news, setNews] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  //USE EFFECT
useEffect(() => {
  getNews()
 }, [query])
 

//FETCH

const getNews = async () => {
  const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${API_KEY}`)
  const data = await response.json()
  setNews(data.articles);
  console.log(data);

}

//get the value inputted by user in the search input
const updateSearch = e => {
  setSearch(e.target.value)
}

//get the final query which only runs onSubmit
const getQuery = e =>{
  e.preventDefault()
  setQuery(search)
  setSearch('')
}

  return (
    <div className="App">
    <Header />

    <form className = "search-form" onSubmit = {getQuery}>
    <input type = "text"
           className = "search-bar"
           placeholder = "Search for news..."
           value = {search}
           onChange ={updateSearch}   />
    <button type = "submit" className = "search-button">Search</button>
    </form>
    <div className="container news-cards">
  <div className="row">
   { news && news.map(item => (
     <div className="col-md-4">
      <News title={item.title} 
            image={item.urlToImage} 
            description={item.description} 
            key={item.title} // unique key
            date={item.publishedAt}
            link= {item.url} />
      </div>
    
            )
            )}
    </div>
    </div>
    
    </div>
  );
}

export default App;
