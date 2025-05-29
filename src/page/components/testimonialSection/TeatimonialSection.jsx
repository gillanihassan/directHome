import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import manPhoto from "../../../assets/images/testimonial/manPhoto.png";
import stars from "../../../assets/images/testimonial/stars.png";

const TestimonialSection = () => {
  return (
    <div className={`container-xxl ${styles.mainDiv}`}>
      <Row>
        <Col md={7} className="text-center ">
          <h4 className={`mb-5 ${styles.topHeading}`}>真實用家點講？</h4>
          <Image src={manPhoto} className={`${styles.customImage}`} />
        </Col>

        <Col md={5}>
          <div className={`mb-4 ${styles.contentDiv}`}>
            <div>
              <Image src={stars} className="mb-4" />
            </div>
            <p className={`mt-2 ${styles.customPara}`}>
              這是一段隨機的文本，用於填充頁面或顯示設計的樣式。設計師通常會使用這種文本來模擬實際的內容，幫助客戶更直觀地理解在真實情況的結構，而不受文本內容本身的影響。這些文本本身不會承載任何實際的意圖或意圖，而只是為了呈現視覺效果。
            </p>
          </div>
          <div className="mt-5">
            <div>
              <Image src={stars} className="mb-4" />
            </div>
            <p className={`mt-2 ${styles.customPara}`}>
              這是一段隨機的文本，用於填充頁面或顯示設計的樣式。設計師通常會使用這種文本來模擬實際的內容，幫助客戶更直觀地理解在真實情況的結構，而不受文本內容本身的影響。這些文本本身不會承載任何實際的意圖或意圖，而只是為了呈現視覺效果。
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TestimonialSection;
