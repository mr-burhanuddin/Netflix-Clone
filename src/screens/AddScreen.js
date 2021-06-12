import React, { useState } from 'react'
import requests from '../components/Request'
import ResultCard from '../components/ResultCard';
import "./AddScreen.css"

function AddScreen() {
    const [search ,setSearch] = useState("");
    const [results, setResults] = useState([]);
    
    const fireSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        fetch(`https://api.themoviedb.org/3${requests.fetchSearch}&query=${e.target.value}`).then((res)=> res.json()).then((data) => {
            if(!data.errors) {
                setResults(data.results);
            } else {
                setResults([]);
            }
        });
    }

    return (
      <div className="addscreen">
          <div className="addscreen__container">
              <div className="addscreen__content">
                  <div className="addscreen__inputWrapper">
                      <form>
                      <input value={search} type="text" placeholder="Search Content" onChange={fireSearch} />
                        
                     </form>
                  </div>
                  
                        {results.length > 0 && (
                            <ul className="results">
                            {results.map((result) => (
                               <ResultCard result={result} /> 
                            ))}
                        </ul>
                    )} 
              </div>
          </div>
         
      </div>
    )
}

export default AddScreen
