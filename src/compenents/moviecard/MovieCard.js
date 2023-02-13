import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { handelDelete } from '../../redux/action'
import EditMovie from '../editmovie/EditMovie'
import StartRating from '../starRating/StarRating'
import './MovieCard.css'

const MovieCard = ({el}) => {
    const dispatch=useDispatch()
  return (
    <div className='movie'>
        
        <Card style={{ width: '18rem' }}>
            <div className='img'>
      <Card.Img style={{ width: '18rem'}} variant="top" src={el.posteurl} />
            </div>
      <div className='detail'>
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
          <h5>Realease date :{el.date}</h5>
          <StartRating ratefil={el.rate}/>
        </Card.Text>
        <div className='btn'>
        <Link to={`/el/${el.id}`}>
            
        <Button variant="primary">More detail</Button>
        </Link>
        <Button onClick={()=>dispatch(handelDelete(el.id))}>Delete</Button>
        </div>
        <center>
        <EditMovie el={el}/>
        </center>
      </Card.Body>
      </div>
    </Card>
    </div>
  )
}

export default MovieCard