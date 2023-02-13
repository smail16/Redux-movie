import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { movieEdit } from '../../redux/action';
import './EditMovie.css'


const EditMovie = ({el}) => {
    const  [etitle, setEtitle] = useState(el.title)
    const  [edate, setEdate] = useState(el.date)
    const  [erate, setErate] = useState(el.rate)
    const [etrailer, setEtrailer]=useState(el.trailer)
    const [edescription, setEdescription]= useState(el.description)
   
const [show, setShow] = useState(false);
const dispatch=useDispatch()
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const handelEdit=(e)=>{
    e.preventDefault();
    const editMovie={id:el.id, posteurl:el.posteurl, title:etitle, date:edate, rate:erate, trailer:etrailer, description:edescription}
    dispatch(movieEdit(editMovie))
    handleClose()
}
  return (
    <div>
        


  <>
    <Button variant="primary" onClick={handleShow}>
      edit movie
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit the movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handelEdit}>
            <h4>Title</h4>
            <input 
            type="text"
            value={etitle}
            onChange={(e)=>setEtitle(e.target.value)}/>
            <br></br>
            <h4>Release date</h4>
             <input 
            type="text"
            value={edate}
            onChange={(e)=>setEdate(e.target.value)}/>
            <br></br>
            <h4>Rate</h4>
             <input 
            type="text"
            value={erate}
            onChange={(e)=>setErate(e.target.value)}/>
            <br></br>
            <h4>Trailer</h4>
            <input 
            type="text"
            value={etrailer}
            onChange={(e)=>setEtrailer(e.target.value)}/>
            <br></br>
            <h4>Description</h4>
            <input 
            type="text"
            value={edescription}
            onChange={(e)=>setEdescription(e.target.value)}/>
            <br></br>
            
            <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type='submit'>
          Edit
        </Button>
        
        </form>
      </Modal.Body>
     
        
        
      
      
    </Modal>
    
  </>
    </div>
  )
}

export default EditMovie