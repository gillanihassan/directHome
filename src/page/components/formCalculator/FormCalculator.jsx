import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import styles from "./styles.module.css";

const FormCalculator = () => {
  return (
    <div
      className={`container-xxl   ${styles.mainDiv}`}
      style={{ backgroundColor: "" }}
    >
      <Row className="p-1 p-md-3">
        <Col md={6}>
          <h2 className={`${styles.mainHeading}`}>按揭計算</h2>
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div className={`  ${styles.formDiv}`}>
            <Form className="p-1 p-md-5">
              <Row className="mb-4">
                <Col>
                  <Form.Label className={`${styles.formLabel}`}>
                    物業價值
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="X,XXX,XXX"
                    className={`${styles.formControl}`}
                  />
                </Col>
                <Col>
                  <Form.Label className={`${styles.formLabel}`}>
                    按揭年息
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="X,XXX,XXX"
                      className={`${styles.formControl}`}
                    />
                    <InputGroup.Text className={`${styles.inputGroup}`}>
                      %
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Label className={`${styles.formLabel}`}>
                    貸款比率
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="X,XXX,XXX"
                      className={`${styles.formControl}`}
                    />
                    <InputGroup.Text className={`${styles.inputGroup}`}>
                      年
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
                <Col>
                  <Form.Label className={`${styles.formLabel}`}>
                    按揭還款期
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="X,XXX,XXX"
                      className={`${styles.formControl}`}
                    />
                    <InputGroup.Text className={`${styles.inputGroup}`}>
                      %
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </Row>

              <Button variant="dark" className={`w-100  ${styles.customBtn}`}>
                按揭計算
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FormCalculator;
