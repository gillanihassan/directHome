import React from "react";
import styles from "./styles.module.css";
import { Image } from "react-bootstrap";
import groupPhoto from "../../../assets/images/sellingSection/groupPhoto.png";

function SellingSection() {
  return (
    <div
      className={`container-xxl d-flex flex-column justify-content-between align-items-center ${styles.mainDiv}`}
      style={{ height: "720px" }}
    >
      {/* Top Text Section */}
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2 className={`text-center ${styles.topHeading}`}>
          為何要俾多啲？ 買賣物業，按你方式進行。
        </h2>
        <p className={`mt-4 text-center ${styles.customPara}`}>
          唔使搵經紀，唔使俾佣金 — DirectHome 由頭帶你去到尾，買賣自主又清晰。
        </p>
      </div>

      {/* Bottom Image Section */}
      <div className="mb-4">
        <Image src={groupPhoto} className={`${styles.customImg}`} />
      </div>
    </div>
  );
}

export default SellingSection;
