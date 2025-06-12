import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import styles from "./styles.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const MarketIndex = () => {
  // Responsive barThickness setup
  const [barThickness, setBarThickness] = useState(
    window.innerWidth >= 768 ? 125 : 25
  );

  useEffect(() => {
    const handleResize = () => {
      setBarThickness(window.innerWidth >= 768 ? 110 : 40);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = {
    labels: [
      "志争花園",
      "南天海",
      "康怡",
      "太古城",
      "鯉景灣",
      "杏花邨",
      "大道",
    ],
    datasets: [
      {
        label: "Price",
        data: [600, 680, 600, 750, 720, 615, 1000],
        backgroundColor: "#e3f3f3",
        borderRadius: 10,
        barThickness: barThickness, // <-- dynamic
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className={`container-xxl  ${styles.mainDiv}`}>
      <Row className="mt-5">
        <Col md={6} className="px-4">
          <h4 className={`${styles.topHeading}`}>香港房地產市場指數</h4>
          <p className={`mt-5 ${styles.topPara}`}>
            這是一段隨機的文本，用於模擬實際內容。它可以幫助設計師和開發人員在佈局中預覽文本效果，而不受實際內容影響。請根據您的需求替換為最終內容。
          </p>
        </Col>
        <Col
          md={6}
          className=" d-flex align-items-center justify-content-evenly"
        >
          <div className={`${styles.colDiv}`}>
            <div>
              <h5 className={`${styles.colRightHeading}`}>房地產指數</h5>
            </div>
            <div>
              <p className={`mt-1 ${styles.colRightPara}`}>106.518</p>
            </div>
            <div>
              <p className={`${styles.colRightParaTwo}`}>
                <span className={`${styles.span}`}>↑</span> +0.97%
              </p>
            </div>
          </div>
          <div className={`${styles.colDiv}`}>
            <div>
              <h5 className={`${styles.colRightHeading}`}>房地產指數</h5>
            </div>
            <div>
              <p className={`mt-1 ${styles.colRightPara}`}>106.518</p>
            </div>
            <div>
              <p className={`${styles.colRightParaTwo}`}>
                <span className={`${styles.span}`}>↑</span> +0.97%
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <div className="px-5 pt-4">
        <Bar data={data} options={options} height={100} />
      </div>
    </div>
  );
};

export default MarketIndex;
