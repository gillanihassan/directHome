import { Button, Col, Image, Row } from "react-bootstrap";
import imgOne from "../../../assets/images/authenticProperties/imgOne.png";
import checkCircle from "../../../assets/images/authenticProperties/checkCircle.png";
import styles from "./styles.module.css";

function AuthenticProperties() {
  return (
    <div
      className={`container-xxl pt-4 px-3 p-md-5 ${styles.mainDiv}`}
      style={{ backgroundColor: "#004F59", borderRadius: "28px" }}
    >
      <Button className={`${styles.customButton} mb-3`}>
        幫你查冊，唔怕假盤！
      </Button>

      <h2 className={`mt-0 mb-4 ${styles.customHeading}`}>
        買樓遇假盤？怕遇人不熟？DirectHome 已經查冊認證所有放盤，
        幫你過濾風險，睇樓安心無煩惱。
      </h2>

      <Row className="g-4 align-items-center">
        <Col xs={12} md={12} lg={6} xl={6} xxl={6}>
          <Image src={imgOne} fluid className={`w-100  ${styles.customImg}`} />
        </Col>

        <Col xs={12} md={12} lg={6} xl={6} xxl={6}>
          <Row className="g-4">
            {[1, 2].map((_, idx) => (
              <Col xs={12} md={6} key={idx}>
                <div
                  style={{
                    backgroundColor: idx === 0 ? "#E3F3F3" : "#FFFFFF",
                    borderRadius: "15px",
                    height: "100%",
                    padding: "1rem",
                    color: "white",
                  }}
                >
                  <h3 className={` mt-1 p-2 ${styles.columnHeading}`}>
                    {idx === 0 ? "DirectHome 平台" : "傳統地產代理"}
                  </h3>

                  {(idx === 0
                    ? [
                        "$0 佣金 / 無隱藏收費",
                        "自助放盤，簡單快捷",
                        "與買家/租客直接溝通",
                        "透明交易、實名認證",
                        "隨時 make offer，流程簡單清晰",
                        "有人幫手， 有系統教你行晒置業流程",
                      ]
                    : [
                        "高佣金 + 額外服務費",
                        "需依賴經紀處理",
                        "需透過經紀聯絡，過程繁複",
                        "資訊不對稱，風險較高",
                        "多重轉介，流程拖延",
                        "缺乏清晰支援，靠經驗摸索",
                      ]
                  ).map((item, index) => (
                    <Row className="align-items-start mb-3 " key={index}>
                      <Col xs={1} xxl={1}>
                        <Image
                          src={checkCircle}
                          style={{ width: "20px", height: "20px" }}
                        />
                      </Col>
                      <Col xs={11} xxl={10}>
                        <p className={`${styles.leftColPara} mb-0 mx-2`}>
                          {item}
                        </p>
                      </Col>
                    </Row>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default AuthenticProperties;
