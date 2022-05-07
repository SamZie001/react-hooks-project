import './App.css';
import MovieList from './components/MovieList';
import {useState} from 'react'

function App() {
  const [newTitle, setNewTitle] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [newRating, setNewRating] = useState('')
  const [newUrl, setNewUrl] = useState('')


  const [list, setList] = useState([
    {
      id: '1',
      title: 'Uncharted 4',
      description: 'Always looking for treasure, the Drake brothers go on what would be their most dangerous adventure yet; trying to acquire the heart of anubis.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMWFiY2I0MTItZDFmZi00YWFmLTliYzYtM2NmMzQxZjQ2NDBiXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
      rating: '5',
  },
  {
      id: '2',
      title: 'Doctor Strange',
      description: 'Dive deep into the mind of doctor strange and discover the secrets of the multi-verse.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNHzvskf368qjPl1cV6BQdu5QjtDNPc7St6Q&usqp=CAU',
      rating: '5',
  },
  ])

  return (
    <div className="App">
      <h1 className='head'>My Movies</h1>
      <MovieList list={list}/> 
      
      <form onSubmit={e=>{
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
                <input onChange={(e)=>setNewTitle(e.target.value)} type="text" placeholder='title'/>
            </label>
            <br />
            <label>
                Description:-
                <input onChange={(e)=>setNewDesc(e.target.value)} type="text" placeholder='description'/>
            </label>
            <br />
            <label>
                Rating:-
                <input onChange={(e)=>setNewRating(e.target.value)} type="number" placeholder='1-5'/>
            </label>
            <br />
            <label>
                URL:-
                <input onChange={(e)=>setNewUrl(e.target.value)} type="text" placeholder='image url'/>
            </label>
            <button type='submit'>Add Movie</button>
        </form>
    </div>
  );
}

export default App;
