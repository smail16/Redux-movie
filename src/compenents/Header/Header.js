import React, { useState } from 'react'
import {Container, Form, Nav, Navbar,} from 'react-bootstrap'
import StartRating from '../starRating/StarRating'

const Header = () => {
    const [ratefil, setRateFil]=useState(5)
    const handeleRating=(x)=>{
      setRateFil(x)
    }
  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <StartRating ratefil={ratefil} handeleRating={handeleRating}/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header