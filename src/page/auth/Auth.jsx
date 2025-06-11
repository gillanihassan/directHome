import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import rigthColumnImage from "../../assets/images/signin/rigthColumnImage.png";
import homeLogo from "../../assets/images/signin/homeLogo.png";
import paraLogo from "../../assets/images/signin/paraLogo.png";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Auth() {
  const [activePage, setActivePage] = useState("login");
  return (
    <Container fluid>
      <Row className="" style={{ height: "100vh" }}>
        <Col
          md={6}
          lg={6}
          xl={6}
          xxl={6}
          className={`p-3 p-md-5 d-flex flex-column align-items-center justify-content-center   ${styles.leftColumn}`}
          style={{ minHeight: "100vh" }}
        >
          <Col xs={12} xxl={7}>
            <Image src={homeLogo} className="mb-2 mb-md-4" />
            <div className={`mt-0 mt-md-5 ${styles.formDiv}`}>
              <div className="mt-4 p-4">
                <div className="d-flex justify-content-center mt-3 mb-4">
                  <div
                    className="px-1 py-1 rounded-1 w-100"
                    style={{ background: "#F5F5F5" }}
                  >
                    <ToggleButtonGroup
                      type="checkbox"
                      value={"aa"}
                      className="d-flex w-100"
                    >
                      <ToggleButton
                        size="lg"
                        variant="light"
                        id="tbg-btn-1"
                        value={1}
                        className={`w-50 me-2 ${styles.loginBtn}`}
                        onClick={() => setActivePage("login")}
                      >
                        Login
                      </ToggleButton>

                      <ToggleButton
                        id="tbg-btn-2"
                        variant="li"
                        value={2}
                        onClick={() => setActivePage("register")}
                        className="w-50"
                      >
                        Register
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                </div>

                {activePage === "login" && (
                  <Form>
                    <h1 className={`mb-4 ${styles.customHeading}`}>
                      Welcome back
                    </h1>
                    <Form.Group className="mb-4">
                      <Form.Label className={` ${styles.formLabel}`}>
                        Username
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your username"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-4 mt-1"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className={` ${styles.formLabel}`}>
                        Password
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </Form.Group>
                    <button className={`w-100 mt-1 ${styles.customButtonOne}`}>
                      Login
                    </button>
                    <button className={`w-100 mt-3 ${styles.customButtonTwo}`}>
                      <Image src={paraLogo} alt="icon" className="me-2" /> Login
                      with iAMSmart
                    </button>
                    <p className={`text-center mt-4 ${styles.footerPara}`}>
                      Don’t have an account?{" "}
                      <span className={styles.footerSpan}>Register now</span>
                    </p>
                  </Form>
                )}

                {activePage === "register" && (
                  <Form className="p-1 ">
                    <h1 className={`mb-4 ${styles.customHeading}`}>
                      Create an account
                    </h1>

                    <Form.Group className="mb-4">
                      <Form.Label className={`${styles.formLabel}`}>
                        Full name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4 mt-1">
                      <Form.Label className={`${styles.formLabel}`}>
                        Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                      />
                    </Form.Group>

                    <Row className="mb-4">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className={styles.formLabel}>
                            Username
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your Username"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className={styles.formLabel}>
                            Phone Number
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your phone number"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4 mt-1">
                      <Form.Label className={styles.formLabel}>
                        I am a
                      </Form.Label>
                      <Form.Select
                        disabled
                        style={{ backgroundColor: "white" }}
                      >
                        <option value="">Buyer</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-4 mt-1">
                      <Form.Label className={`${styles.formLabel}`}>
                        Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4 mt-1">
                      <Form.Label className={`${styles.formLabel}`}>
                        Confirm Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm your password"
                      />
                    </Form.Group>

                    <button className={`w-100 mt-1 ${styles.customButtonOne}`}>
                      Register
                    </button>

                    <p className={`text-center mt-4 ${styles.footerPara}`}>
                      Don’t have an account?{" "}
                      <span className={styles.footerSpan}>Register now</span>
                    </p>
                  </Form>
                )}
              </div>
            </div>
          </Col>
        </Col>
        <Col
          md={6}
          lg={6}
          xl={6}
          xxl={6}
          className="p-0"
          style={activePage === "login" ? { height: "100%" } : {}}
        >
          <div style={activePage === "login" ? { height: "100%" } : {}}>
            <Image
              src={rigthColumnImage}
              alt="Responsive"
              className="fluid"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Auth;
