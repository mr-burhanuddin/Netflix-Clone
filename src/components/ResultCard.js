import React from 'react'
import "./ResultCard.css"

function ResultCard( {result}) {
    const base_url = "https://image.tmdb.org/t/p/original/";
    return (
       <div className="result-card">
           <div className="poster-wrapper">
               {result.poster_path ? (
                   <img src={`${base_url}${result.poster_path}`} alt={result.id} />
               ) : (
                   <div className="filler-poster"></div>
               )}
           </div>
           <div className="info">
               <div className="header">
                    <h3 className="title">{result.title}</h3>
                    <h4 className="release-date">{result.release_date ? result.release_date : "-"}</h4>
               </div>
               <div className="controls">
                   <button className="btn" >Add To watchList</button>
               </div>
           </div>
       </div>
    )
}

export default ResultCard
