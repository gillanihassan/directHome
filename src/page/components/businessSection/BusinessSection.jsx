import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import imgOne from "../../../assets/images/businessSection/imgOne.png";
import imgTwo from "../../../assets/images/businessSection/imgTwo.png";
import imgThree from "../../../assets/images/businessSection/imgThree.png";
import imgFour from "../../../assets/images/businessSection/imgFour.png";
import imgFive from "../../../assets/images/businessSection/imgFive.png";

function BusinessSection() {
  return (
    <div className={`container-xxl mt-5 mb-5 p-4  ${styles.mainDiv}`}>
      <Row className="justify-content-center gx-5">
        <Col xs={5} sm={5} md={2} lg={2} xl={2} xxl={2}>
          <Image src={imgOne} />
          <h5 className={`mt-3 ${styles.customHeading}`}>放盤即送物業報告</h5>
          <p className={`${styles.customParaTop}`}>
            專業分析單位質素，睇樓前先知底細
          </p>
          <p className={`${styles.customParaTwo}`}>查看放盤流程</p>
        </Col>
        <Col xs={5} sm={5} md={2} lg={2} xl={2} xxl={2}>
          <Image src={imgTwo} />
          <h5 className={`mt-3 ${styles.customHeading}`}>放盤即送物業報告</h5>
          <p className={`${styles.customParaTop}`}>
            專業分析單位質素，睇樓前先知底細
          </p>
          <p className={`${styles.customParaTwo}`}>查看放盤流程</p>
        </Col>
        <Col xs={5} sm={5} md={2} lg={2} xl={2} xxl={2}>
          <Image src={imgThree} />
          <h5 className={`mt-3 ${styles.customHeading}`}>放盤即送物業報告</h5>
          <p className={`${styles.customParaTop}`}>
            專業分析單位質素，睇樓前先知底細
          </p>
          <p className={`${styles.customParaTwo}`}>查看放盤流程</p>
        </Col>
        <Col xs={5} sm={5} md={2} lg={2} xl={2} xxl={2}>
          <Image src={imgFour} />
          <h5 className={`mt-3 ${styles.customHeading}`}>放盤即送物業報告</h5>
          <p className={`${styles.customParaTop}`}>
            專業分析單位質素，睇樓前先知底細
          </p>
          <p className={`${styles.customParaTwo}`}>查看放盤流程</p>
        </Col>
        <Col xs={5} sm={5} md={2} lg={2} xl={2} xxl={2}>
          <Image src={imgFive} />
          <h5 className={`mt-3 ${styles.customHeading}`}>放盤即送物業報告</h5>
          <p className={`${styles.customParaTop}`}>
            專業分析單位質素，睇樓前先知底細
          </p>
          <p className={`${styles.customParaTwo}`}>查看放盤流程</p>
        </Col>
      </Row>
    </div>
  );
}

export default BusinessSection;
