
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import avatar from '../resources/avatar.png'  
import homeimg from '../resources/image183 - Copy.png'  

// import About from "./Home";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,

} from "react-icons/di";


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
        <div>
             <div class="wave"></div>
        </div>
    <div class="row">
    <div class="column1">
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
    <div class="column2"><img class="avatar" src={avatar} alt="" width="300" height="280"></img></div>
     </div>
    <div class="row">
    <div class="column3 ">
    <img src={homeimg} class="homeimage"  alt="" width="500px" height="400px"></img>
     </div>
     <div class="column4">
     <div class="Introduce">
      <section class ="sectiontext">
     <strong><h1 class="skill">INTRODUCE</h1></strong>
        <p >I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>

        <p>I am fluent in classics like Java .</p>
        <p>Since I was a kid, I have loved and excelled in programming, mathematics, and problem solving.</p>

<p> I am experienced in programming languages including C,Java, Python, JavaScript, and MySQL.</p>


     </section>
     </div>
      </div>
    </div>
    <br></br>
     <div class="Professional">
     <h1 class="skill">Professional <strong>Skillset</strong> </h1>
     <section id="skills">
          <Row style={{ justifyContent: "center", paddingBottom: "50px", color: "#dee2e6"}}>
      <Col xs={4} md={2} className="tech-icons">
        C
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          Java
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        JQuery
      </Col>
    </Row>
     </section>
     </div>
      </>
     
    );
  }

  export default BasicProfile;
  
