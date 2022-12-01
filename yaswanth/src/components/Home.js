
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
// import About from "./Home";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
  integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
  crossorigin="anonymous"
/>

function CurrentWorking() {
    const [job, setJob] = useState("Asst System Engineer");
    return(<><h1>{job}! </h1><button
    onClick={() => setJob("SFCC Developer")}
  >Working as</button> </>);
}

function BasicProfile() {
    return (
      <>
        <Navbar sticky="top" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#Home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#Projects">Projects</Nav.Link>
              <Nav.Link href="#Resume">Resume</Nav.Link>
            </Nav>
          </Container>
        </Navbar> 
        <br />
        <div>
             <div class="wave"></div>
        </div>
      <div class="row">
    <div class="column">
        <h1 style={{ paddingBottom: 15 }}>
                Hi There!
                <span role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1>
                I'M
                <strong className="main-name"> YASWANTH POTNURU</strong>
                <CurrentWorking />
        </h1>
    </div>
    <div class="column"><img src="yash.jpg" alt="" width="400" height="400"></img></div>
     </div>
     
      </>
     
    );
  }

  export default BasicProfile;
  
