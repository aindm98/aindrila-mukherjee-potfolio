import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { useForm } from "react-hook-form";
import illustration from "../../assets/animation/animation";
import email from "../../assets/lottie/email.json";
import DisplayLottie from "../displayLottie/DisplayLottie";

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <>
      <Container fluid className="contact-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={6} style={{ paddingTop: "120px", paddingBottom: "50px" }}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Get In <strong className="purple"> Touch.</strong>
              </h1>
              <p className="mb-0">Thanks for taking the time to reach out.</p>
              <p className="mb-0">Have a question or want to work together?</p>
            </Col>
            <Col md={6}>
              <div className="contact-image">
                {illustration.animated ? (
                  <DisplayLottie animationData={email} className="image" />
                ) : (
                  <img
                    alt="Man working"
                    src={"../../assets/images/contactMailDark.svg"}
                  ></img>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
              <div className="contact-info">
                <h2 className="mb-4">Contact Information</h2>
                <p className="mb-4">
                  <strong>Email:</strong>
                </p>
              </div>
            </Col>
            <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
              <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                  <div className="floating_input">
                    <input
                      type="text"
                      id="name"
                      autoComplete="off"
                      {...register("name", {
                        required: "Name is required",
                        maxLength: 80,
                      })}
                    />
                    <label htmlFor="name">Name</label>
                  </div>
                  {errors.name && (
                    <p className="text-danger">{errors.name.message}</p>
                  )}
                </div>

                <div className="input-group">
                  <div className="floating_input">
                    <input
                      type="email"
                      id="email"
                      autoComplete="off"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: " Sorry, invalid email address format",
                        },
                      })}
                    />
                    <label htmlFor="email">Email</label>
                  </div>

                  {errors.email && (
                    <p className="text-danger">{errors.email.message}</p>
                  )}
                </div>
                <div className="input-group">
                  <div className="floating_input">
                  <textarea
                      type="text"
                      autoComplete="off"
                      rows="6"
                      id="message"
                      {...register("message", {
                        required: "Message is required ",
                        maxLength: 180,
                      })}
                    ></textarea>
                    <label htmlFor="message" className="message_label">Message</label>
                  </div>

                  {errors.message && (
                      <p className="text-danger">{errors.message.message}</p>
                    )}
                </div>
                {/* <div className="input-group ">
                  <div className="floating_input">
                    <textarea
                      type="text"
                      autoComplete="off"
                      rows="6"
                      id="message"
                      {...register("message", {
                        required: "Message is required ",
                        maxLength: 180,
                      })}
                    ></textarea>
                    <label htmlFor="message" className="message_label">
                      Message
                    </label>
                    {errors.message && (
                      <p className="text-danger">{errors.message.message}</p>
                    )}
                  </div>
                </div> */}
                <button type="submit" className="mb-4 submit_btn">
                  Submit
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Contact;
