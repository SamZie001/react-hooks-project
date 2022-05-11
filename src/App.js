import './App.css';
import MovieCard from './components/MovieCard';
import {useState} from 'react'
import Filter from './components/Filter';

function App() {
  const [newTitle, setNewTitle] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [newRating, setNewRating] = useState('')
  const [newUrl, setNewUrl] = useState('')


  const [list, setList] = useState([
    {
      id: '1',
      title: 'Uncharted IV',
      description: 'Always looking for treasure, the Drake brothers go on what would be their most dangerous adventure yet; trying to acquire the heart of anubis.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMWFiY2I0MTItZDFmZi00YWFmLTliYzYtM2NmMzQxZjQ2NDBiXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
      rating: '5',
  },
  {
      id: '2',
      title: 'Doctor Strange',
      description: 'Dive deep into the mind of doctor strange and discover the secrets of the multi-verse.',
      posterURL: 'data:image/jpeg;base64,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',
      rating: '4',
  },
  ])

  return (
    <div className="App">
      <div className="head">

      <h1>MOVIE CENTER </h1>
      
      <form className='add-movie-form' onSubmit={e=>{
          e.preventDefault()

          const final ={
            id: list.length+1,
            title: newTitle,
            description: newDesc,
            posterURL: newUrl,
            rating: newRating
          }

          setList(prev=> [...prev, final])
        }}>

            <label>
                Title:-
                <input onChange={(e)=>setNewTitle(e.target.value)} type="text" placeholder='Title....' required/>
            </label>
            <br />
            <label>
                Description:-
                <input onChange={(e)=>setNewDesc(e.target.value)} type="text" placeholder='description....' required/>
            </label>
            <br />
            <label>
                Rating:-
                <input onChange={(e)=>setNewRating(e.target.value)} type="number" max={5} min={1} placeholder='1-5'/>
            </label>
            <br />
            <label>
                URL:-
                <input onChange={(e)=>setNewUrl(e.target.value)} type="text" placeholder='Poster Url...'/>
            </label>
            <button type='submit'>Add Movie</button>
        </form>
      </div>


      <MovieCard list={list}/> 
    
    </div>
  )
}

export default App;
