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
      <Row>
        <Col
          md={6}
          lg={6}
          xl={6}
          xxl={6}
          className={`p-5 d-flex flex-column align-items-center ${styles.leftColumn}`}
        >
          <Col xs={12} xxl={8}>
            <Image src={homeLogo} className="mt-5" />
            <div className={`${styles.formDiv}`}>
              <Form className="mt-4 p-4">
                {/* <div className="d-flex justify-content-center mt-3 mb-4">
                  <div
                    className="px-3 py-2 rounded-1 w-100"
                    style={{ background: "#F5F5F5" }}
                  >
                    <ToggleButtonGroup
                      className="w-full"
                      type="checkbox"
                      value={"aa"}
                    >
                      <ToggleButton
                        size="lg"
                        variant="light"
                        id="tbg-btn-1"
                        value={1}
                        className="px-5 me-3"
                      >
                        Login
                      </ToggleButton>
                      <ToggleButton
                        id="tbg-btn-2"
                        variant="light"
                        value={2}
                        className="px-5 me-2"
                        as={Link}
                        to="/register"
                      >
                        <Link
                          to="/register"
                          className="text-black text-decoration-none fs-5"
                        >
                          Register
                        </Link>
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                </div> */}
                <div className="d-flex justify-content-center mt-3 mb-4">
                  <div
                    className="px-3 py-2 rounded-1 w-100"
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
                        className="w-50 me-2"
                      >
                        Login
                      </ToggleButton>

                      <ToggleButton
                        as={Link}
                        to="/register"
                        id="tbg-btn-2"
                        variant="light"
                        value={2}
                        className="w-50 text-black fs-5"
                      >
                        <Link
                          to="/register"
                          className="text-black text-decoration-none fs-5"
                        >
                          Register
                        </Link>{" "}
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
                <button className={`w-100 mt-3 ${styles.customButtonOne}`}>
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
        <Col md={6} lg={6} xl={6} xxl={6} className="p-0">
          <Image
            src={rigthColumnImage}
            alt="Responsive"
            // fluid
            style={{
              objectPosition: "bottom",
              objectFit: "cover",
              height: "100vh",
              width: "100%",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Signin;
