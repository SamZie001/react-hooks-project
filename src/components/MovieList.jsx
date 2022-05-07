import React from 'react'

function MovieList({list}) {

  return (
    <div>
      {
        list.map((movie)=>(
            <div key={movie.id} className='mapped'>
              
              <img className='image' src={movie.posterURL} alt='img' />
              <h5 className='mov'><span>{movie.id}</span>.{movie.title}</h5>
              
              <h5 className='dd' > <span>Description</span>: {movie.description}</h5>
              <h5 className='dd'> <span>Rating</span>: {movie.rating}</h5>

            </div>
        ))
      }
    </div>
  )
}

export default MovieList