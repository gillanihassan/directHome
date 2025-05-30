import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import img from "../../../assets/images/estateProcess/img.png";
import check from "../../../assets/images/estateProcess/check.png";

function EstateProcess() {
  return (
    <div className={`container-xxl mt-5 ${styles.mainDIv}`}>
      <Row>
        <Col md={7} className="order-2 order-md-1">
          <Image src={img} className={`${styles.customImage}`} />
        </Col>
        <Col md={5} className="mt-5 order-1 order-md-2">
          <h2 className={`${styles.customHeading}`}>
            買賣流程清晰透明，一站式平台搞掂哂!
          </h2>
          <Row className="mt-5">
            <Col xs={1} sm={1} md={1}>
              <Image src={check} />
            </Col>
            <Col xs={11} sm={11} md={11}>
              <p className={` ${styles.customPara}`}>
                傾好 deal 唔知點？我哋教你簽約，唔使怕。
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={1} sm={1} md={1}>
              <Image src={check} />
            </Col>
            <Col xs={11} sm={11} md={11}>
              <p className={`mt-1 ${styles.customPara}`}>
                律師、按揭、裝修資訊一應俱全，全部搵到。
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={1} sm={1} md={1}>
              <Image src={check} />
            </Col>
            <Col xs={11} sm={11} md={11}>
              <p className={`mt-1 ${styles.customPara}`}>
                唔洗再打俾 agent 問來問去，自己搞得掂。
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={1} sm={1} md={1}>
              <Image src={check} />
            </Col>
            <Col xs={11} sm={11} md={11}>
              <p className={`mt-1 ${styles.customPara}`}>
                慳返佣金同時間，買樓更快更方便。
              </p>
            </Col>
          </Row>
          <div className="mt-4">
            <Button className={`${styles.btnOne}`}>顯示更多</Button>
            <Button className={`mx-2 ${styles.btnTwo}`}>註冊</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default EstateProcess;
