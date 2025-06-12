import {
  Container,
  Row,
  Col,
  Card,
  Image,
  InputGroup,
  Form,
} from "react-bootstrap";
import styles from "./styles.module.css";
import circle from "../../../assets/images/threeStepGuide/circle.png";
import imgOne from "../../../assets/images/threeStepGuide/imgOne.png";
import checkCircle from "../../../assets/images/threeStepGuide/checkCircle.png";
import plusCircle from "../../../assets/images/threeStepGuide/plusCircle.png";
import send from "../../../assets/images/threeStepGuide/send.png";
import ManImg from "../../../assets/images/threeStepGuide/man.png";
import cross from "../../../assets/images/threeStepGuide/cross.png";
// import bgimage from "../../../assets/images/threeStepGuide/bgimage.png"

const ThreeStepFlow = () => {
  return (
    <div className="text-center py-5 container-xxl mt-5">
      <h2 className={`${styles.topHeading}`}>簡單三步，搞掂放盤買賣</h2>
      <p className={`mt-4 mb-5 ${styles.topPara}`}>
        從登記到成交，全都一步步清晰完成， 唔使煩惱記
      </p>

      <Row className={`g-4 ${styles.threeStepBgRow}`}>
        <Col sm={12} md={6} lg={4}>
          <Card className={`border-0 h-100`}>
            <Card.Body
              className={`shadow-sm rounded-2 py-5 px-3 px-md-5 d-flex justify-content-center align-items-center ${styles.cardOne}`}
            >
              <div
                className={`d-flex flex-column justify-content-center align-items-center shadow-md w-100 ${styles.cardDiv}`}
              >
                <div className="border rounded-circle d-flex justify-content-center align-items-center">
                  <Image src={circle} />
                </div>
                <h6 className={`mt-5 ${styles.cardPara}`}>
                  Upload new listing
                </h6>
              </div>
            </Card.Body>

            <Card.Footer className="border-0 mt-3">
              <h5 className={`${styles.footerHeading}`}>放盤登記</h5>
              <p className={`mt-3 mx-auto ${styles.footerPara}`}>
                只需少過5分鐘填寫資料，即可免費放盤
              </p>
            </Card.Footer>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <Card className={`border-0 h-100`}>
            <Card.Body
              className={`shadow-sm rounded-2 py-5 px-3 px-md-5 d-flex justify-content-center align-items-center ${styles.cardTwo}`}
            >
              <div
                className={`d-flex flex-column justify-content-start align-items-start p-4  shadow-md  ${styles.cardDiv}`}
              >
                <h5 className={`text-start mb-3 ${styles.cardTwoHeading}`}>
                  Verified Buyers & Sellers!
                </h5>

                <div className="d-flex mt-3">
                  <div>
                    <Image src={imgOne} alt="Img One " />
                  </div>
                  <div>
                    <p className={`ms-3 mb-0 ${styles.cardTwoPara}`}>
                      Kishor Webb
                    </p>
                    <p className={`text-start ms-3 ${styles.cardTwoImgPara}`}>
                      <Image src={checkCircle} className="mx-1" />
                      Buyer
                    </p>
                  </div>
                </div>

                <div className="d-flex mt-3">
                  <div>
                    <Image src={ManImg} alt="Image two" />
                  </div>
                  <div>
                    <p className={`ms-3 mb-0 ${styles.cardTwoPara}`}>
                      Kishor Webb
                    </p>
                    <p className={`text-start ms-3 ${styles.cardTwoImgPara}`}>
                      <Image src={checkCircle} className="mx-1" />
                      Buyer
                    </p>
                  </div>
                </div>

                <div className="d-flex mt-3">
                  <div>
                    <Image src={imgOne} />
                  </div>
                  <div>
                    <p className={`ms-3 mb-0 ${styles.cardTwoPara}`}>
                      Kishor Webb
                    </p>
                    <p className={`text-start ms-3 ${styles.cardTwoImgPara}`}>
                      <Image src={checkCircle} className="mx-1" />
                      Buyer
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>

            <Card.Footer className="border-0 mt-3">
              <h5 className={`${styles.footerHeading}`}>放盤登記</h5>
              <p className={`mx-auto ${styles.footerPara}`}>
                只需少過5分鐘填寫資料，即可免費放盤
              </p>
            </Card.Footer>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <Card className={`border-0 h-100`}>
            <Card.Body
              className={`shadow-sm rounded-2 py-5 px-3 px-md-5 d-flex justify-content-center align-items-center ${styles.cardOne}`}
            >
              <div
                className={`d-flex flex-column justify-content-start align-items-start p-4  shadow-md  ${styles.cardDiv}`}
              >
                <div className="bg-white w-100 rounded-3 px-3 py-2">
                  <div className="d-flex justify-content-between w-100">
                    <div className="d-flex justify-content-center align-items-center">
                      <Image src={imgOne} />
                      <p className="mb-0 ms-2">Kishor</p>
                      <Image className={imgOne} />
                    </div>
                    <div>
                      <Image src={cross} />
                    </div>
                  </div>
                  <div>
                    <p className={`mt-4 ${styles.cardTimePara}`}>Wed 6:55 AM</p>
                  </div>
                  <div className="text-start">
                    <p className={`${styles.cardParaThreeLeft}`}>
                      I would be glad to help
                    </p>
                  </div>
                  <div className="text-end mt-4">
                    <p className={`mt-5 ${styles.cardParaThreeRight}`}>
                      I would be glad to help
                    </p>
                  </div>
                  <div className="text-end mt-4">
                    <p className={`mt-5 ${styles.cardParaThreeRight}`}>
                      I would be glad to help
                    </p>
                  </div>
                  <div className="d-flex justify-content-between w-100 mt-4">
                    <div className="d-flex justify-content-center align-items-center mt-1">
                      <Image src={plusCircle} />
                      <Form className="mx-3  ">
                        <Form.Group>
                          <Form.Control
                            type="email"
                            placeholder="Aa"
                            className="rounded-3"
                          />
                        </Form.Group>
                      </Form>
                    </div>
                    <div>
                      <Image src={send} className="mt-2" />
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>

            <Card.Footer className="border-0 mt-3">
              <h5 className={`${styles.footerHeading}`}>放盤登記</h5>
              <p className={`mx-auto ${styles.footerPara}`}>
                只需少過5分鐘填寫資料，即可免費放盤
              </p>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ThreeStepFlow;
