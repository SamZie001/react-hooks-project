import React, { useState } from 'react'
import MovieCard from './MovieCard'

function MovieList({list}) {


  return (
    <div>
        {
            list.map((movie)=>(
                <div key={movie.id} className='mapped'>
                    <img className='image' src={movie.posterURL} alt='img' />
                    <h5 className='mov'>{movie.id}. {movie.title}</h5>
                    <h4><h5> Desc - {movie.description}</h5></h4>
                    <h4><h5>Rating - {movie.rating}</h5></h4>
                    
                </div>
            ))
        }
    </div>
  )
}

export default MovieList