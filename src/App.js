import './style.css';
import React, { useEffect, useState,useRef } from 'react';


function App() {
  const [search, setSearch] = useState('');
  const [queries, setQueries] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try{
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=Hbmdx3l0uron0KM14HOgCdScLelDP860&q=${queries}&limit=25&offset=0&rating=pg&lang=en`);
        const json = await response.json();
    
        setResults(json.data.map(item => {
          return item.images.preview.mp4;
         })
        );

      }
      catch(err){}
    }

    fetchData();
  }, [queries])
  return (
    <div className="App">
      <form>

        <input value={search} type="text" onChange={event => { 
          setSearch(event.target.value);
         }}></input>

        <button type="submit" onClick={event => {
          event.preventDefault();
          setQueries(search);
          
        }}>Search</button>
      </form>
      {
        results.map(result => (
          <video autoplay loop key={result} src={result}/>

        ))
        
      }
    </div>

  );
}

export default App;
