/* eslint-disable react/no-unescaped-entities */
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aindrila Mukherjee </span>
            from <span className="purple"> Kolkata , West Bengal , India.</span>
            <br />
            I have completed Bachelor Of Technology (B.Tech) in Electronics and Communication Engineering at Bengal Institute Of Technology (MAKAUT).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Table Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155, 126, 172)" }}>
             "Create with purpose, build with impact, and leave a lasting mark!"
          </p>
          <footer className="blockquote-footer">Aindrila</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
