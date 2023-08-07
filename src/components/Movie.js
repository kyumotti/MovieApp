import React from 'react'
import "../styles/Movie.css"

function Movie({propsimage, propstitle, propsyear,propsgenre, propssummary}) {
  return (
    <div className="movie">
      <img src={propsimage} alt="{movie_title}" title=""/>
      <div className = "movie_data">
        <h3 className='movie_title'>{propstitle}</h3>
        <h4 className='movie_year'>{propsyear}</h4>
        <ul className='movie_genres'>
          {propsgenre.map((genre,index)=> (
            <li className='movie_genre' key={index}>{genre}</li>
          ))
          }

        </ul>
        <p className='movie_summary'>{propssummary.slice(0,180)}...</p>
      </div>
    </div>
  )
}

export default Movie