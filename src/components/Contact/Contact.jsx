import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

const Contact = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "start", padding: "10px" }}>
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
            <p className="mb-0" >Thanks for taking the time to reach out.</p>
            <p className="mb-0">Have a question or want to work together?</p>
          </Col>
          <Col sm={12} md={12} lg={6}>
          </Col>
          <Col sm={12} md={12} lg={6}>
            {/* <form className="contact-form">
          <div className="form-group ">
                <input id="form_name1" className="form-control" type="text"   required />
                <label htmlFor="form_name1">Name<span className="gl-form-asterisk"></span></label>
              </div>
              
              <div className="form-group mt-5">
                <input id="form_name2" className="form-control" type="text"  placeholder="" required />
                <label htmlFor="form_name2">Email<span className="gl-form-asterisk"></span></label>
              </div>  
          </form> */}
            <form className="contact-form">
              <div className="input-group">
                <input type="text" required />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-group">
                <input type="email" required />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-group">
              <textarea type="text" required rows="6"></textarea>
              <label htmlFor="message" className="message_label" >Message</label>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
