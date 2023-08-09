import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [items, setItems] = useState([]); 
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://imdb-api.projects.thetuhin.com/search?query=${searchQuery}`);
      setItems(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };


  const botaoPesquisar = (e) => {
    setSearchQuery(e.target.value);
  };

  const pesquisar = () => {
    fetchData();
  };

 

  return (
    <div>
      <div className="search-box">
        <input type="text" placeholder="Digite o filme a pesquisaer" className='search-button' value={searchQuery} onChange={botaoPesquisar} />
        <button onClick={pesquisar}>Pesquisar</button>
      </div>
      <div className="item-list">
        {items.map((item) => (
          <div className="item-card" key={item.id}>
            <h3 className="item-title">{item.title}</h3>
            <a href={`https://www.imdb.com/title/${item.id}`} target="_blank" rel="noopener noreferrer">
              <img className="item-image" src={item.image} alt={item.title} />
            </a>
          </div>
        ))}
      </div>
    </div>
  ); 
};

export default App
