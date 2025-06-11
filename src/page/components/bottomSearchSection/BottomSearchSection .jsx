import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Dropdown,
  DropdownButton,
  Tab,
  Image,
} from "react-bootstrap";
import styles from "./styles.module.css";
import mapPin from "../../../assets/images/bottomSection/mapPin.png";

const BottomSearchSection = () => {
  return (
    <div className="bg-transparent  container-xxl ">
      <div className="container-xxl " style={{ marginTop: "-80px" }}>
        <Tab.Container defaultActiveKey="buy">
          <Row className="d-flex justify-content-center align-items-center gy-2">
            <Col md={4}>
              <Button className={`w-100 py-4 ${styles.bottomBtn}`}>
                我要買樓
              </Button>
            </Col>
            <Col md={4}>
              <Button className={`w-100 py-4 ${styles.bottomBtnTwo}`}>
                我要租樓
              </Button>
            </Col>
            <Col md={4} className="mb-3 mb-md-0">
              <Button className={`w-100 py-4 ${styles.bottomBtnTwo}`}>
                業主
              </Button>
            </Col>
          </Row>

          <Tab.Content className="pb-5 ">
            <Tab.Pane eventKey="buy">
              <div
                className="rounded p-4 pb-5  container-xxl"
                style={{
                  backgroundColor: "#E3F3F3",
                  boxShadow: "0px 8px 10px -4px rgba(12, 13, 15, 0.2)",
                }}
              >
                <Row
                  className="g-0 d-flex justify-content-center align-items-center gap-4"
                  style={{
                    backgroundColor: "#FFFFFF",
                    padding: "1.3rem",
                    borderRadius: "10px",
                  }}
                >
                  <Col md={3}>
                    <Button
                      className={`p-1 w-100 d-flex justify-content-start align-items-start ${styles.formBtnLeft}`}
                    >
                      <Image
                        src={mapPin}
                        style={{ width: "32px", height: "32px" }}
                        className="mx-2"
                      />
                      區域、地區、或分區
                    </Button>
                  </Col>

                  <Col md={2}>
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-basic-button"
                        className={`w-100 d-flex justify-content-between align-items-center ${styles.formBtnLeft}`}
                      >
                        物業類型
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>

                  <Col md={2}>
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-basic-button"
                        className={`w-100 d-flex justify-content-between align-items-center ${styles.formBtnLeft}`}
                      >
                        價格
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <Col md={2}>
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-basic-button"
                        className={`w-100 d-flex justify-content-between align-items-center ${styles.formBtnLeft}`}
                      >
                        平方呎
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>

                  <Col md={2}>
                    <Button className={`p-2 w-50 ${styles.formBtn}`}>
                      搜尋
                    </Button>
                  </Col>
                </Row>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default BottomSearchSection;
