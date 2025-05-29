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

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import img from "../../../assets/images/medalSection/img.png";

// const MedalCard = () => {
//   return (
//     <Container className="py-5">
//       <Row className="g-4 justify-content-center">
//         {[1, 2, 3].map((_, index) => (
//           <Col key={index} xs={12} md={4}>
//             <div
//               className="d-flex align-items-center p-3"
//               style={{
//                 borderRadius: "10px",
//                 background:
//                   "linear-gradient(to right, #E3F3F3 40%, #00828233 100%)",
//               }}
//             >
//               <img
//                 src={img}
//                 alt="Medal"
//                 style={{
//                   width: "80px",
//                   height: "80px",
//                   marginRight: "15px",
//                 }}
//               />
//               <div>
//                 <h5 className="fw-bold mb-1">段隨機的文本</h5>
//                 <p className="mb-0 text-muted" style={{ fontSize: "14px" }}>
//                   這是一段隨 <span style={{ fontSize: "16px" }}>→</span>
//                 </p>
//               </div>
//             </div>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default MedalCard;
