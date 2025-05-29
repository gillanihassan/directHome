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
// import paraLogo from "../../../assets/images/signin/paraLogo.png";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <Container fluid>
      <Row>
        <Col
          md={6}
          lg={6}
          xl={6}
          xxl={6}
          className={`p-3 p-sm-5 d-flex flex-column align-items-center justify-content-start ${styles.leftColumn}`}
        >
          <Col xs={12} xxl={8}>
            <Image src={homeLogo} className="mb-4" />
            <div className={`${styles.formDiv}`}>
              <Form className=" p-4">
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
                        size="lg"
                        variant="lig"
                        id="tbg-btn-1"
                        value={1}
                        className="w-50 me-2"
                        // as={Link}
                        // to="/"
                        href="/"
                      >
                        Login
                      </ToggleButton>
                      <ToggleButton
                        id="tbg-btn-2"
                        variant="light"
                        value={2}
                        className="w-50"
                      >
                        Register
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                </div>
                <h1 className={`mb-4 ${styles.customHeading}`}>
                  Create an account
                </h1>
                <Form.Group className="mb-4">
                  <Form.Label className={` ${styles.formLabel}`}>
                    Full name
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your  full name"
                  />
                </Form.Group>
                <Form.Group className="mb-4 mt-1">
                  <Form.Label className={` ${styles.formLabel}`}>
                    Email
                  </Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Row className="mb-4">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className={styles.formLabel}>
                        Username
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Username "
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className={styles.formLabel}>
                        Phone Number
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your  phone number "
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-4 mt-1">
                  <Form.Label className={styles.formLabel}>I am a</Form.Label>
                  <Form.Select disabled style={{ backgroundColor: "white" }}>
                    <option value="">Buyer</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-4 mt-1">
                  <Form.Label className={` ${styles.formLabel}`}>
                    Password
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your Password"
                  />
                </Form.Group>
                <Form.Group className="mb-4 mt-1">
                  <Form.Label className={` ${styles.formLabel}`}>
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Confirm your password"
                  />
                </Form.Group>
                <button className={`w-100 mt-3 ${styles.customButtonOne}`}>
                  Register
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
              minHeight: "100vh",
              width: "100%",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
