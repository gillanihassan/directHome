import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import styles from "./styles.module.css";
import imgOne from "../../../assets/images/overviewSection/imgOne.png";
import imgTwo from "../../../assets/images/overviewSection/imgTwo.png";

const OverviewSection = () => {
  return (
    <div className={`container-xxl py-5 ${styles.mainDiv}`}>
      <div className="text-center mb-5">
        <h2 className={`${styles.topHeading}`}>這是一段隨機的文本</h2>
        <p className={`mt-4 ${styles.topPara}`}>
          這是一段隨機的文本，用於填充頁面或展示設計
        </p>
      </div>

      {/* Cards Section */}
      <Row className="mb-5">
        <Col md={6}>
          <Card className={`${styles.card}`}>
            <Card.Img src={imgOne} alt="image1" />

            {/* Gradient Overlay */}
            <div className={styles.overLayDiv} />
            <Card.ImgOverlay
              className="d-flex flex-column justify-content-end"
              style={{ zIndex: 2 }}
            >
              <Card.Title className={`${styles.cardTitle}`}>
                這是一段隨機的文本，用於填充頁面或展示設計的格式。設計師通常
              </Card.Title>
              <Card.Text className={`mt-2 ${styles.cardText}`}>
                這是一段隨機的文本 →
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>

        <Col md={6}>
          <Card
            className="position-relative text-white"
            style={{ borderRadius: "23px" }}
          >
            <Card.Img src={imgTwo} alt="image1" />

            {/* Gradient Overlay */}
            <div className={styles.overLayDiv} />

            {/* Text Content on top of gradient */}
            <Card.ImgOverlay
              className="d-flex flex-column justify-content-end"
              style={{ zIndex: 2 }}
            >
              <Card.Title className={`${styles.cardTitle}`}>
                這是一段隨機的文本，用於填充頁面或展示設計的格式。設計師通常
              </Card.Title>
              <Card.Text className={`mt-2 ${styles.cardText}`}>
                這是一段隨機的文本 →
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>

      {/* Subscription Box */}
      <div className={`p-4 ${styles.bottomDiv}`}>
        <Row className="align-items-center">
          <Col md={6}>
            <h4 className={`${styles.bottomHeading}`}>訂閱更新</h4>
            <p className={`${styles.bottomPara}`}>
              輸入電郵，即可接收最新發布、報告及平台資訊
            </p>
          </Col>
          <Col md={6}>
            <InputGroup>
              <Form.Control type="text" placeholder="請輸入您的電子郵件" />
              <InputGroup.Text
                className={`d-flex justify-content-center align-items-center ${styles.inputGroupText}`}
              >
                訂閱
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OverviewSection;
