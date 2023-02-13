import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../redux/action';
import './AddFilm.css'


function AddFilm() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title,setTitle]=useState('')
    const [cover,setCover]=useState('')
    const [description,setDescription]=useState('')
    const [date,setDate]=useState('')
    const [rate, setRate]=useState('')
    const dispatch=useDispatch()

    const handelSubmit=(e)=>{
        console.log("string")
        e.preventDefault()
        const newMovie={id:Math.random(),posturl:cover,title:title,rate:rate,date:date,description:description}
        
        dispatch(addMovie(newMovie))
        
    }
  
    return (
      <>
       <div className='btn1'>
        <Button variant="primary" onClick={handleShow}>
         Add Movie
        </Button>
        </div>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>title</h4>
            <form action="" onSubmit={(e)=>handelSubmit(e)}>
                <input
                type="text"
                placeholder="Enter movie description"
                className='from-control'
                onChange={(e)=>setTitle(e.target.value)}
                value={title}>
                </input>
                <h4>movie cover</h4>
                <input
                type="text"
                placeholder="Enter movie description"
                className='from-control'
                onChange={(e)=>setCover(e.target.value)}
                value={cover}>
                </input>
                <h4>movie description</h4>
                <input
                type="text"
                placeholder="Enter movie description"
                className='from-control'
                onChange={(e)=>setDescription(e.target.value)}
                value={description}>
                </input>
                <h4>realse Date</h4>
                <input
                type="text"
                placeholder="Enter movie description"
                className='from-control'
                onChange={(e)=>setDate(e.target.value)}
                value={date}>
                </input>
                <h4>rate</h4>
                <input
                type="text"
                placeholder="Enter movie description"
                className='from-control'
                onChange={(e)=>setRate(e.target.value)}
                value={rate}>
                </input>
                <br></br>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              add new movie
            </Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            
          </Modal.Footer>
        </Modal>
      </>
    )}
    export default AddFilm