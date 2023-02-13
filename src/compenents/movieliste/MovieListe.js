import { useSelector } from 'react-redux'
import MovieCard from '../moviecard/MovieCard'
import './MovieListe.css'

const MovieListe = () => {
    const {moviedata}=useSelector((state)=>state)
    // const[searchInput,setsearchInput]=useState("")
  return (
    <div className='liste'>{

        
        moviedata.map(el=><MovieCard key={el.id} el={el}/>)
        }
    </div>
    // moviedata.filter((el) =>
    // el.title.toLowerCase().includes(searchInput.toLowerCase())&& el.rate <=ratefil )
  )
}

export default MovieListe