import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import productPhoto from "../../../assets/images/productSection/productPhoto.png";
import hurtLogo from "../../../assets/images/productSection/hurtLogo.png";
import mapPin from "../../../assets/images/productSection/mapPin.png";
import logoOne from "../../../assets/images/productSection/logoOne.png";
import logoTwo from "../../../assets/images/productSection/logoTwo.png";
import logoThree from "../../../assets/images/productSection/logoThree.png";
import logoFour from "../../../assets/images/productSection/logoFour.png";

// 👉 Property card data
const productList = [
  {
    id: 1,
    title: "物業名稱在此",
    price: "$XX,XXX,XXX",
    location: "XXXXXX",
    features: [
      { icon: logoOne, text: "X 房" },
      { icon: logoTwo, text: "X 浴室" },
      { icon: logoThree, text: "建築" },
      { icon: logoFour, text: "實用" },
    ],
  },
  {
    id: 2,
    title: "物業名稱在此",
    price: "$XX,XXX,XXX",
    location: "XXXXXX",
    features: [
      { icon: logoOne, text: "X 房" },
      { icon: logoTwo, text: "X 浴室" },
      { icon: logoThree, text: "建築" },
      { icon: logoFour, text: "實用" },
    ],
  },
  {
    id: 3,
    title: "物業名稱在此",
    price: "$XX,XXX,XXX",
    location: "XXXXXX",
    features: [
      { icon: logoOne, text: "X 房" },
      { icon: logoTwo, text: "X 浴室" },
      { icon: logoThree, text: "建築" },
      { icon: logoFour, text: "實用" },
    ],
  },
  {
    id: 4,
    title: "物業名稱在此",
    price: "$XX,XXX,XXX",
    location: "XXXXXX",
    features: [
      { icon: logoOne, text: "X 房" },
      { icon: logoTwo, text: "X 浴室" },
      { icon: logoThree, text: "建築" },
      { icon: logoFour, text: "實用" },
    ],
  },
  {
    id: 5,
    title: "物業名稱在此",
    price: "$XX,XXX,XXX",
    location: "XXXXXX",
    features: [
      { icon: logoOne, text: "X 房" },
      { icon: logoTwo, text: "X 浴室" },
      { icon: logoThree, text: "建築" },
      { icon: logoFour, text: "實用" },
    ],
  },
  {
    id: 6,
    title: "物業名稱在此",
    price: "$XX,XXX,XXX",
    location: "XXXXXX",
    features: [
      { icon: logoOne, text: "X 房" },
      { icon: logoTwo, text: "X 浴室" },
      { icon: logoThree, text: "建築" },
      { icon: logoFour, text: "實用" },
    ],
  },
  {
    id: 7,
    title: "物業名稱在此",
    price: "$XX,XXX,XXX",
    location: "XXXXXX",
    features: [
      { icon: logoOne, text: "X 房" },
      { icon: logoTwo, text: "X 浴室" },
      { icon: logoThree, text: "建築" },
      { icon: logoFour, text: "實用" },
    ],
  },
  {
    id: 8,
    title: "物業名稱在此",
    price: "$XX,XXX,XXX",
    location: "XXXXXX",
    features: [
      { icon: logoOne, text: "X 房" },
      { icon: logoTwo, text: "X 浴室" },
      { icon: logoThree, text: "建築" },
      { icon: logoFour, text: "實用" },
    ],
  },
  {
    id: 9,
    title: "物業名稱在此",
    price: "$XX,XXX,XXX",
    location: "XXXXXX",
    features: [
      { icon: logoOne, text: "X 房" },
      { icon: logoTwo, text: "X 浴室" },
      { icon: logoThree, text: "建築" },
      { icon: logoFour, text: "實用" },
    ],
  },
];

function ProductionSection() {
  return (
    <div className={`container-xxl  ${styles.mainDiv}`}>
      <div className="d-flex justify-content-center mb-4">
        <h2>
          <span className={styles.greenText}>最新售盤及即走盤</span>
          <span className={`mx-4 me-4 ${styles.greenPipe}`}>|</span>
          <span className={styles.grayText}>最新租盤及即走盤</span>
        </h2>
      </div>

      <Row>
        {productList.map((product) => (
          <Col
            key={product.id}
            md={4}
            className="d-flex justify-content-center gy-4"
          >
            <Card className={` ${styles.mainCard}`}>
              <Card.Img variant="top" src={productPhoto} />
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Title className={`${styles.productTitle}`}>
                    {product.title}
                  </Card.Title>
                  <Image src={hurtLogo} />
                </div>
                <Card.Text className={`${styles.productPrice}`}>
                  {product.price}
                </Card.Text>
                <Card.Text>
                  <Image src={mapPin} />
                  <span className={`${styles.productLocation}`}>
                    {product.location}
                  </span>
                </Card.Text>
              </Card.Body>
              <div className="d-flex px-3 pb-3">
                {product.features.map((item, index) => (
                  <div className="mx-2 d-flex align-items-center" key={index}>
                    <Image src={item.icon} />
                    <span className={`mx-2 ${styles.productText}`}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-center mt-5">
        <Button className={`${styles.customBtn}`}>顯示更多</Button>
      </div>
    </div>
  );
}

export default ProductionSection;
