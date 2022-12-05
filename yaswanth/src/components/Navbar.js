import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
        <Nav.Link className="header-icon" href="#Home"><FaHome /> HOME</Nav.Link>
        <Nav.Link className="header-icon" href="#"><AiOutlineUser/> ABOUT</Nav.Link>
        <Nav.Link className="header-icon" href="#"><CgFileDocument/> RESUME</Nav.Link>
        <Nav.Link className="header-icon" href="#Projects"><AiOutlineFundProjectionScreen/>PROJECTS</Nav.Link>
      </Nav>
    </Container>
  </Navbar> 
  );
  }

 export default Navbar1;