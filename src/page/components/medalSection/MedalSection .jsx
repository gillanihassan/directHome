import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import img from "../../../assets/images/medalSection/img.png";
import arrowRight from "../../../assets/images/medalSection/arrowRight.png";
import styles from "./styles.module.css";

function MedalSection() {
  return (
    <div className="container-xxl mt-5">
      <Row g={4} className="gy-4">
        <Col
          md={4}
          className={`d-flex align-items-center justify-content-center ${styles.col}`}
        >
          <Card className={`d-flex flex-row  ${styles.card}`}>
            <Image src={img} />
            <div className="d-flex flex-column justify-content-center align-items-center mx-4">
              <h3 className={`${styles.CardHeading}`}>段隨機的文本 </h3>
              <p className={`${styles.cardPara}`}>
                這是一段隨 <Image src={arrowRight} />
              </p>
            </div>
          </Card>
        </Col>
        <Col
          md={4}
          className={`d-flex align-items-center justify-content-center ${styles.col}`}
        >
          <Card className={`d-flex flex-row ${styles.card}`}>
            <Image src={img} />
            <div className="d-flex flex-column justify-content-center align-items-center mx-4">
              <h3 className={`${styles.CardHeading}`}>段隨機的文本 </h3>
              <p className={`${styles.cardPara}`}>
                這是一段隨 <Image src={arrowRight} />
              </p>
            </div>
          </Card>
        </Col>
        <Col
          md={4}
          className={`d-flex align-items-center justify-content-center ${styles.col}`}
        >
          <Card className={`d-flex flex-row ${styles.card}`}>
            <Image src={img} />
            <div className="d-flex flex-column justify-content-center align-items-center mx-4">
              <h3 className={`${styles.CardHeading}`}>段隨機的文本 </h3>
              <p className={`${styles.cardPara}`}>
                這是一段隨 <Image src={arrowRight} />
              </p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default MedalSection;
