import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link, useNavigate } from "react-router-dom"; 
import logo from "./AppLayout.IMG/hjflix.png"


const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault();
    // url을 바꿔주기
    navigate(`/movies?q=${keyword}`)
    setKeyword("");
  }

  return (
    <div>
      <Navbar expand="lg" variant="dark" className="bg-black p-3" >
        <Container fluid>
          <Navbar.Brand href="#"><img src={logo} width={100} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/" className="custom-nav-link">Home</Nav.Link>
              <Nav.Link as={Link} to="/movies" className="custom-nav-link">Movies</Nav.Link>           
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 bg-secondary form-click"
                aria-label="Search"
                value = {keyword} 
                onChange={ (event) => setKeyword(event.target.value) }                            
              />
              <Button variant="outline-danger" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* 라우터 안의 자손들을 가져오는 기능 */}
      <Outlet/>
    </div> 
  )
}

export default AppLayout