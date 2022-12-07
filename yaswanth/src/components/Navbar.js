import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import {
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
  } from "react-icons/ai";
function Navbar1(){
  return (
    <Navbar  >
    <Container>
      <Nav className="header">
        <Nav.Link  as={Link} to="/" className="header-icon" href="#Home"><FaHome /> HOME</Nav.Link>
        <Nav.Link  as={Link} to="/about" className="header-icon"><AiOutlineUser/> ABOUT</Nav.Link>
        <Nav.Link  as={Link} to="/resume" className="header-icon" href="#Resume"><CgFileDocument/> RESUME</Nav.Link>
        <Nav.Link  as={Link} to="/projects" className="header-icon" href="#Projects"><AiOutlineFundProjectionScreen/>PROJECTS</Nav.Link>
      </Nav>
    </Container>
  </Navbar> 
  );
  }

 export default Navbar1;