
import React from "react";
import { Container} from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container>
    <div>
    <row>
        <div class="col1"><h1 class="heading1"><strong>Know Who <span class="highlet">I'M</span></strong></h1>
        <p class="about">I am Yaswanth ,currently working in TCS . 
          I loved to become a full stack developer because now a days most useful techonolgys are web developing(HTML,css,js,anyone backend technology)
          ,machine learning,deep learning and mysql these are minimum technologies to become a full stack developer.</p>
          <p class="about">I love to explore how a MACHINE is LEARNING and how can I use my adaptive problem-solving skills to help those ARTIFICAL brains boost their INTELLIGENCE. And yes, if you own a STARTUP or if you are HIRING, let's connect. 
            I love contributing to the success of these rising champions aka the startups!</p>
        </div>

        <div class="col2"><img src="Cross-platform software-amico.svg" alt="" width="400" height="400"></img></div>
    </row>
    </div>
<br></br>
<center><h1 class="education"><strong><span>EDUCATION : </span></strong></h1></center>
<div class="timeline">
  <div class="contain left">
    <div class="content">
      <h2>2017-2021</h2>
      <p>Vignan's Foundation for Science, Technology and Research－ Guntur, India <br>
      </br>(Bachelor of Technology) | Computer Science and Engineering [CGPA:9.18] </p>
    </div>
  </div>
  <div class="contain right">
    <div class="content">
      <h2>2015-2017</h2>
      <p>NARAYANA JUNIOR COLLEGE－Visakhapatnam, India<br>
      </br>Intermediate | Mathematics, Physics, Chemistry [Marks:981]</p>
    </div>
  </div>
  <div class="contain left">
    <div class="content">
      <h2>2015</h2>
      <p>RAVINDRA BHARATHI SCHOOL － Amadalavalasa, India<br>
      </br>Secondary School Certificate [CGPA :9.8]</p>
    </div>
  </div>
</div>

<br></br>
<div>
   <h1 class="heading2"><strong>Want to discuss anything ?</strong></h1> 
  <p class="about1">If you've opportunities for me, or have crazy product ideas to discuss, always feel free to reach me via email 
  here or click here.I'd be very happy to connect.</p>
</div>
    </Container>


  );
}

   export default Home2;
