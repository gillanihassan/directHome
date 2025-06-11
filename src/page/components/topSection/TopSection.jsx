import styles from "./styles.module.css";
import { Col, Container, Row } from "react-bootstrap";

function TopSection() {
  return (
    <div className="container-xxl">
      <Row>
        <p className={` px-4 py-1 text-center ${styles.topPara}`}>
          廣泛用作展示排版效果的工具。這段文字是以模擬文章內容的方式呈現，用以幫助設計師與開發者視覺化最終產品的樣貌，而不受實際內容干擾。我們提供的這段文字為模擬用途，意在展現版面配置、字型
        </p>
      </Row>
    </div>
  );
}

export default TopSection;
