import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/img/hai.jpeg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
  <h1 style={{ fontSize: "2.6em" }}>
    LET ME <span className="purple"> INTRODUCE </span> MYSELF
  </h1>
  <p className="home-about-body">
    I am a <b className="purple">Software Engineer</b> specializing in 
    mobile ecosystems, with a passion for turning complex ideas into 
    high-performance, scalable products.
    <br />
    <br />
    My primary expertise lies in <b className="purple">React Native</b> for 
    building cross-platform mobile apps. I am also highly proficient in 
    <i>
      <b className="purple"> React.js, Next.js, and Node.js</b>
    </i>, 
    allowing me to build robust full-stack solutions.
    <br />
    <br />
    I thrive at the intersection of frontend and backend development—whether 
    it's crafting <i><b className="purple">intuitive user interfaces</b></i> or 
    architecting <i><b className="purple">reliable server-side systems</b></i>.
    <br />
    <br />
    Whenever possible, I channel my energy into building modern web and 
    mobile experiences using the <b className="purple">MERN stack</b> and 
    leveraging the power of <b className="purple">Next.js</b> and 
    <b className="purple"> React Native</b>.
  </p>
</Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
