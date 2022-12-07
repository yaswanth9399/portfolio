
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
// import About from "./Home";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
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
    const [job, setJob] = useState("Asst System123 Engineer");
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
    <div class="column2"><img src="avatar.png" alt="" width="300" height="280"></img></div>
     </div>
    <div class="row">
    <div class="column3">
    <img src="image183 - Copy.png" alt="" width="500px" height="400px"></img>
     </div>
     <div class="column4">
     <div class="Introduce">
      <section>
     <strong><h1 class="skill">INTRODUCE</h1></strong>
        <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>

        <p>I am fluent in classics like C++, Javascript and Python.</p>

        <p>My field of Interest's are building new  Web Technologies </p>
     </section>
     </div>
      </div>
    </div>
     
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
     <footer>
     <div class="footer-content">
    <p class="text"><strong>FIND ME ON 🤝🏻 </strong> </p>
<ul class="socials">
    <li> <a
                  href="https://github.com/yaswanth9399/portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                ><AiFillGithub/></a></li>
    <li> <a
                  href="https://github.com/yaswanth9399/portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                ><AiOutlineTwitter/></a></li>
    <li><a
                  href="https://github.com/yaswanth9399/portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                ><AiFillInstagram/></a></li>
    <li><a
                  href="https://www.linkedin.com/in/yaswanth-potnuru-709425167"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                ><FaLinkedinIn/></a></li>
    <li><a
                  href="https://github.com/yaswanth9399/portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                ><AiOutlineMail/></a></li>
 </ul>
</div>
     </footer>

      </>
     
    );
  }

  export default BasicProfile;
  
