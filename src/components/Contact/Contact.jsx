import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

const Contact = () => {
    return (
        <Container fluid className="about-section">
        <Particle />
        <Container>
            <Row  style={{ justifyContent: "start", padding: "10px" }}>
            <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Get In <strong className="purple"> Touch.</strong>
            </h1>
           
          </Col>
            </Row>
        </Container>
        </Container>
    )
};


export default Contact;
