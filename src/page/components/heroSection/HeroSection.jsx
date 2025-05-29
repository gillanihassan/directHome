import { Carousel, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";
import Image from "react-bootstrap/Image";
import sliderOne from "../../../assets/images/heroSection/sliderOne.png";
import sliderTwo from "../../../assets/images/heroSection/sliderTwo.png";
import sliderThree from "../../../assets/images/heroSection/sliderThree.png";
import { Container, Form, Button, Tab, Nav, InputGroup } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className={`container-xxl mt-5 p-0 pt-5 ${styles.mainDiv}`}>
      <Carousel>
        {/* Slide 1 */}
        <Carousel.Item interval={2500}>
          <Row
            className="d-flex align-items-center"
            style={{ minHeight: "400px" }}
          >
            <Col md={6} className="p-5">
              <h2 className={`${styles.customHeading}`}>
                買賣放盤全免佣，買家賣家業主全部唔使畀錢!
              </h2>
              <p className={`mt-5 ${styles.customPara}`}>
                平台完全免費，無佣金、無服務費，買家賣家自己搞掂交易。自己放盤、自己報價，慳錢又透明，買賣過程簡單直接。
              </p>
            </Col>
            <Col md={6} className="p-0">
              <Image src={sliderOne} fluid />
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <Row
            className="d-flex align-items-center"
            style={{ minHeight: "400px" }}
          >
            <Col md={6} className="p-5">
              <h2 className={`${styles.customHeading}`}>
                買賣雙方即時對話，唔經中介直接出價講價!
              </h2>
              <p className={`mt-5 ${styles.customPara}`}>
                平台設有內建聊天室，買家同賣家可以即時溝通，出價、約睇樓都直接搞掂，唔洗中介轉來轉去，效率更高，對話更清晰。
              </p>
            </Col>
            <Col md={6} className="p-0">
              <Image src={sliderTwo} fluid />
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <Row
            className="d-flex align-items-center"
            style={{ minHeight: "400px" }}
          >
            <Col md={6} className="p-5">
              <h2 className={`${styles.customHeading}`}>
                平台+客服雙重支援，帶你一步步完成置業旅程!
              </h2>
              <p className={`mt-5 ${styles.customPara}`}>
                平台會根據你嘅情況建議下一步，配合實時客戶服務，無論你係新手定有經驗，整個流程都有人陪你走，唔怕唔識做。
              </p>
            </Col>
            <Col md={6} className="p-0">
              <Image
                src={sliderThree}
                fluid
                className=""
                style={{ marginBottom: "8rem" }}
              />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
      <Container fluid className="bg-light py-4">
        <Tab.Container defaultActiveKey="buy">
          <Row className="d-flex justify-content-center align-items-center gy-2">
            <Col md={4} className="d-">
              <Button className={`w-100 py-4 ${styles.bottomBtn}`}>
                我要買樓{" "}
              </Button>
            </Col>
            <Col md={4} className="">
              <Button className={`w-100 py-4 ${styles.bottomBtnTwo}`}>
                我要租樓
              </Button>
            </Col>
            <Col md={4} className="d-">
              <Button className={`w-100 py-4 ${styles.bottomBtnTwo}`}>
                業主
              </Button>
            </Col>
          </Row>

          <Tab.Content>
            <Tab.Pane eventKey="buy">
              <Container
                className=" rounded p-4 shadow-sm"
                style={{ backgroundColor: "#E3F3F3" }}
              >
                <Row
                  className="g-3"
                  style={{
                    backgroundColor: "#FFFFFF",
                    padding: "1.3rem",
                    borderRadius: "10px",
                  }}
                >
                  <Col md={3}>
                    <InputGroup>
                      <Form.Control placeholder="區域、地區、或分區" />
                    </InputGroup>
                  </Col>

                  <Col md={2}>
                    <Form.Select>
                      <option>物業類型</option>
                      <option>住宅</option>
                      <option>商業</option>
                    </Form.Select>
                  </Col>

                  <Col md={2}>
                    <Form.Select>
                      <option>價格</option>
                      <option>0-100萬</option>
                      <option>100萬以上</option>
                    </Form.Select>
                  </Col>

                  <Col md={2}>
                    <Form.Select>
                      <option>平方呎</option>
                      <option>500+</option>
                      <option>1000+</option>
                    </Form.Select>
                  </Col>

                  <Col md={2}>
                    <Button className={`w-50 ${styles.formBtn}`}>搜尋</Button>
                  </Col>
                </Row>
              </Container>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default HeroSection;
