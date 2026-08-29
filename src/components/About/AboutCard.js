import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Varun S</span> from{" "}
            <span className="purple">Kerala, India</span>.
            <br />
            I’m currently working as a{" "}
            {/* <span className="purple">Mobile Application Developer</span> at{" "}
            <span className="purple">TicketsQue Solutions</span>. */}
            <span className="purple">Front End Developer</span> at{" "}
            <span className="purple">EQUAL ERP Pvt Ltd</span>.
            <br />I completed my Bachelor's in{" "}
            {/* <span className="purple">Mechanical Engineering</span> from{" "} */}
            <span className="purple">KTU University</span>, and later
            specialized in{" "}
            <span className="purple">
              Web and Mobile Application Development
            </span>
            .
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Focus on what you’re doing. Get better at it. Everything else is
            just noise."{" "}
          </p>

          <footer className="blockquote-footer">Varun</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
