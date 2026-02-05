import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/proj/myShow.png";
import emotion from "../../Assets/img/linkedin.png";
import editor from "../../Assets/proj/TqPart.png";
import chatify from "../../Assets/proj/tqCust.png";
import suicide from "../../Assets/img/cat.png";
import bitsOfCode from "../../Assets/proj/engege.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={true}
              title="TicketsQue"
              description="This application is used in pub and restaurants to validate
the ticket and redeeming the tickets by scanning the ticket
QR code.
Developed by using react native cli, live in playstore and
app store.
Tech Stacks : react native, java-script , redux, react native
paper."
              ghLink="https://play.google.com/store/apps/details?id=com.ticketsque.customer"
              demoLink="https://play.google.com/store/apps/details?id=com.ticketsque.customer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={true}
              title="EngageQue"
              description="This application is used in pub and restaurants to creation
of tickets of particular events and by this app itself it can
validate that ticket
Developed by using react native cli, app is available in both
playstore and app store.
Tech Stacks : react native, java-script , redux, react native
paper."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://play.google.com/store/search?q=engageque&c=apps"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={true}
              title="TicketsQue Partner"
              description="This application is used for purchasing tickets from
pubs and restaurants , (like BookMyShow app).
Developed by using react native cli, live in playstore and
app store.
Tech Stacks : react native, java-script , redux, react
native paper, raysorpay, short.io"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://play.google.com/store/apps/details?id=com.ticketsque.partner"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="BookMyShow Clone"
              description="A BookMyShow Clone Application built using React Native CLI, replicating the core UI layout and design patterns of the official BookMyShow app.
This project focuses on delivering a modern, responsive, and user-friendly mobile interface."
              ghLink="https://github.com/svarunnair/project-70"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI image generation App"
              description="Built a fun AI-powered side project using React Native – a Text-to-Image Generator App!
This project was my way of exploring AI models while learning something new and having some fun along the way.
Type your own prompt or click the to generate a random one
Choose from 6 AI models (powered by Hugging Face)
Select image aspect ratios like 9:16
View, download to gallery or share directly to other apps
Works on both iOS and Android devices"
              ghLink="https://github.com/svarunnair/imageGenerator"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Linked-In Clone"
              description="A LinkedIn Clone Application developed using React Native CLI, replicating the core UI and layout of the official LinkedIn mobile app.
This project demonstrates modern mobile UI development with reusable components and responsive design."
              ghLink="https://github.com/svarunnair/project-72"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
