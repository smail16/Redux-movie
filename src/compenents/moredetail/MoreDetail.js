import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './MoreDetail.css'

const MoreDetail = ({el}) => {
    const {moviedata}=useSelector((state)=>state)
    const params=useParams();
    console.log(params)
    console.log(moviedata)
  const movie =moviedata.find(el=> el.id=== Number(params.id))
  return (
    <div className='all'>
        <h1>{movie.title}</h1>
        
      <div className='hello'>
      <img className="logo borderall"src={movie.posteurl} alt=''/>
      <iframe className='video borderall' width="600" height="380" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <h1>Movie description :</h1>
      <center>
      <p className='para borderall'>{movie.description}</p>
      </center>


    </div>
  )
}

export default MoreDetail