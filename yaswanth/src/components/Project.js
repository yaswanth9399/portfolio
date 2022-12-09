import React from 'react';
import Card from 'react-bootstrap/Card' 
import { Col } from "react-bootstrap";
import { Container} from "react-bootstrap";
import img1 from '../resources/Gaming-bro.png'; 
import img2 from '../resources/Webinar-pana.svg'  
import img3 from '../resources/Hand coding-amico.png'  
function ProjectNames() {  
    return (  
      <div className="App">  
    <Container className='p-4 cards'>  
    <div class="row cardrow">
      
      <Col md="4"> 
    <div class="card-colour">
    <Card>  
    <Card.Img variant="top" src={img1} class="cardimg " />  
    <Card.Body>  
      <Card.Title><strong>Churn Prediction in Telecom Industry</strong></Card.Title>  
      <Card.Text>  
      The main objective being to learn how to use various data mining techniques on the dataset and analyze the situation<br></br>
      I have taken a dataset that contains customer details of a Phone connection and showed predicted churn value 
using Naive Bayes classification algorithm.
      </Card.Text>  
      {/* <Button variant="primary">Read More</Button>   */}
    </Card.Body>  
    </Card>  
    </div> 
      </Col>  

      <Col md="4">  
    <div class="card-colour">
    <Card>  
    <Card.Img variant="top" src={img2} />  
    <br></br>
    <Card.Body>  
      <Card.Title><strong>Employee Information System</strong></Card.Title> 
      {/* <Card.Body>---Web Technologies, Aug - Nov 2019</Card.Body>  */}
      <Card.Text>  
        Created a web-app using HTML CSS and JavaScript for the Front end development and JDBC is 
used for the backend to connect to the database<br>
</br>To help us to store employee related information in website and get to access information whenever we needed.
      </Card.Text>  
      {/* <Button variant="primary">Read More</Button>   */}
    </Card.Body>  
  </Card>  
  </div>
      </Col>  

      <Col md="4">  
    <div class="card-colour">
    <Card>  
    <Card.Img variant="top" src={img3} />  
    <Card.Body>  
      <Card.Title><strong>Static Website </strong></Card.Title>  
      <Card.Text> 
        You can go and watch it on my Github 
      </Card.Text>  
      {/* <Button variant="primary">Read More</Button>   */}
    </Card.Body>  
  </Card>  
  </div>
      </Col>  
      </div>
  </Container>  

  <br></br>
      </div>  
    );  
  }  
  export default ProjectNames;  