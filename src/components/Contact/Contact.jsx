import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { useForm } from "react-hook-form";
import illustration from "../../assets/animation/animation";
import email from "../../assets/lottie/email.json";
import DisplayLottie from "../displayLottie/DisplayLottie";
import { PaperPlaneIcon, CheckIcon , Envelope } from "../Icons/Icon";
import axios from "axios";
import config from "../../config/config";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // console.log(register);
  console.log("backendUrl12", typeof config.backendUrl);

  const onSubmit = async (data) => {
    console.log(data);

    setIsSubmitted(true);
    if (isSubmitted) {
      try {
        const response = await axios.post(
          `${config?.backendUrl}/api/contact/info`,
          {
            name: data.name,
            email: data.email,
            message: data.message,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    //   if (isSubmitted) {
    //   try {
    //     const response = await axios.post( axios.post(`${backendUrl}/api/contact/info`,
    //       {
    //         name: e.target.name.value,
    //         email: e.target.email.value,
    //         message: e.target.message.value,
    //       }
    //     ));
    //     console.log(response);

    //   } catch (error) {

    //   }

    // }
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
            <Col md={6} style={{ paddingTop: " 46px", paddingBottom: "50px" }}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Get In <strong className="purple"> Touch.</strong>
              </h1>
              <p className="mb-0">Thanks for taking the time to reach out.</p>
              <p className="mb-0">Have a question or want to work together?</p>
            </Col>
            <Col md={6} style={{ paddingTop: " 46px", paddingBottom: "50px" }}>
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
              
                
                <div className="contact_info mt-3">
                  <div className="contact_card">
                   
                    <Envelope className="contact_card-icon" />
                    <h3 className="contact_card-title">Email</h3>
                    <span className="contact_card-data">
                      aindrilam18@gmail.com
                    </span>
                    <a
                      href="mailto:aindrilam18@gmail.com"
                      className="contact_link"
                      target="_blank"
                    >
                    Send Message
                     
                    </a>
                  </div>
                   <div className="contact_card">
                   
                    <Envelope className="contact_card-icon" />
                    <h3 className="contact_card-title">Linkedin</h3>
                    
                    <a
                      href='https://www.linkedin.com/in/aindrila015/'
                      className="contact_link"
                      target="_blank"
                    >
                    Send Message
                     
                    </a>
                  </div>
                   <div className="contact_card">
                   
                    <Envelope className="contact_card-icon" />
                    <h3 className="contact_card-title">WhatsApp</h3>
                    <span className="contact_card-data">
                     +91 8240XXXXXX
                    </span>
                    <a
                      href='https://wa.me/918240329607?text=Hello%2C%20I%27m%20contacting%20you%20from%20your%20website%21'
                      className="contact_link"
                      target="_blank"
                    >
                    Send Message
                     
                    </a>
                  </div>
                  
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
                      placeholder=""
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
                      placeholder=""
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
                      placeholder=""
                      {...register("message", {
                        required: "Message is required ",
                        maxLength: 180,
                      })}
                    ></textarea>
                    <label htmlFor="message" className="message_label">
                      Message
                    </label>
                  </div>

                  {errors.message && (
                    <p className="text-danger">{errors.message.message}</p>
                  )}
                </div>

                <button type="submit" className="mb-4 submit_btn">
                  {isSent ? "Done" : "Submit"}
                  {isSent ? (
                    <CheckIcon className="fade" />
                  ) : (
                    <>
                      <PaperPlaneIcon
                        className={`replace ${isSending ? "hidden" : ""}`}
                      />
                      <PaperPlaneIcon
                        className={`plane fa-lg ${
                          isSending ? "fly visible" : "hidden"
                        }`}
                      />
                    </>
                  )}
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
