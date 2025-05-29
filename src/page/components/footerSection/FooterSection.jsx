import React from "react";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import footerLogo from "../../../assets/images/footerSection/footerLogo.png";
import iconOne from "../../../assets/images/footerSection/iconOne.png";
import iconFive from "../../../assets/images/footerSection/iconFive.png";
import iconSix from "../../../assets/images/footerSection/iconSix.png";
import iconSeven from "../../../assets/images/footerSection/iconSeven.png";
import iconEight from "../../../assets/images/footerSection/iconEight.png";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
// } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className={`container-xxl p-4 p-sm-5 ${styles.topDiv}`}>
        <div>
          <Image src={footerLogo} className={styles.footerLogo} />
        </div>
        <Row className="mb-4">
          <Col md={6} className="">
            <Row>
              {[1, 2, 3].map((group, idx) => (
                <Col key={idx}>
                  <h6 className={`mb-4 ${styles.linkHeading}`}>相關連結</h6>
                  <ListGroup variant="flush">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <ListGroup.Item key={i} className={`${styles.listGroup}`}>
                        Lorem Ipsum
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
              ))}
            </Row>
          </Col>
          <Col
            md={6}
            className={`d-flex flex-column justify-content-center text-start text-md-center ${styles.colRight}`}
          >
            <div>
              <h6 className={`${styles.linkHeadingTwo}`}>聯絡</h6>

              <div className="d-flex mt-4 justify-content-start justify-content-md-center">
                <Image src={iconOne} className={`${styles.footerIcon}`} />
                <p className={`mx-2 ${styles.footerPara}`}>
                  地址: 中國某城市
                  <br /> 4樓 03室-1958
                  <br /> 某社 Incomoda 1140室
                  <br /> 某材料 - 某商住証
                </p>
              </div>

              <div className="d-flex mt-4 justify-content-start justify-content-md-center">
                <Image src={iconOne} className={`${styles.footerIcon}`} />
                <p className={`mx-2  ${styles.footerPara}`}>
                  {" "}
                  (xx) (x) xxx xx xx{" "}
                </p>
              </div>

              <div className="d-flex mt-4 justify-content-start justify-content-md-center">
                <Image src={iconOne} className={`${styles.footerIcon}`} />
                <p className={`mx-2 ${styles.footerPara}`}>
                  contacto@directhome.com
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Social Icons */}
        <Row className="mb-5 mt-5">
          <Col>
            <div className="d-flex gap-3">
              <Image src={iconFive} />
              <Image src={iconSix} />
              <Image src={iconSeven} />
              <Image src={iconEight} />
            </div>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <Row className={`pt-3 ${styles.bottomRow}`}>
          <Col md={6}>
            <small style={{ color: "#FFFFFF" }}>
              © 2025 DirectHome 版權所有
            </small>
          </Col>
          <Col md={6} className="text-md-end" style={{ color: "#FFFFFF" }}>
            <small>使用條款 | 隱私政策</small>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
