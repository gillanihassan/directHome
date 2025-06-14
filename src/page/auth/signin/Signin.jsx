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
import rigthColumnImage from "../../../assets/images/signin/rigthColumnImage.png";
import homeLogo from "../../../assets/images/signin/homeLogo.png";
import paraLogo from "../../../assets/images/signin/paraLogo.png";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <Container fluid>
      <Row className="" style={{ height: "100vh" }}>
        <Col
          md={6}
          lg={6}
          xl={6}
          xxl={6}
          className={`p-3 p-md-5 d-flex flex-column align-items-center justify-content-center   ${styles.leftColumn}`}
          style={{ height: "100%" }}
        >
          <Col xs={12} xxl={7}>
            <Image src={homeLogo} className="mb-2 mb-md-4" />
            <div className={`mt-0 mt-md-5 ${styles.formDiv}`}>
              <Form className="mt-4 p-4">
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
                        as={Link}
                        to="/"
                        size="lg"
                        variant="light"
                        id="tbg-btn-1"
                        value={1}
                        className={`w-50 me-2 ${styles.loginBtn}`}
                      >
                        Login
                      </ToggleButton>

                      <ToggleButton
                        as={Link}
                        to="/register"
                        id="tbg-btn-2"
                        variant="li"
                        value={2}
                        className="w-50"
                      >
                        <Link
                          to="/register"
                          className={`text-decoration-none ${styles.registerBtn}`}
                        >
                          Register
                        </Link>
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                </div>
                <h1 className={`mb-4 ${styles.customHeading}`}>Welcome back</h1>
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
                  <Form.Control type="email" placeholder="name@example.com" />
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
            </div>
          </Col>
        </Col>
        <Col
          md={6}
          lg={6}
          xl={6}
          xxl={6}
          className="p-0 "
          style={{ height: "100%" }}
        >
          <div style={{ height: "100%" }}>
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

export default Signin;
