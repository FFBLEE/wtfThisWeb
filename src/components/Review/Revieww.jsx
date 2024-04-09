import cover1 from "../../assets/imgs/1.png";
import cover2 from "../../assets/imgs/2.png";
import cover3 from "../../assets/imgs/3.jpeg";
import cover4 from "../../assets/imgs/4.jpeg";
import cover5 from "../../assets/imgs/5.jpeg";
import cover6 from "../../assets/imgs/6.jpeg";
import cover7 from "../../assets/imgs/7.jpeg";
import cover8 from "../../assets/imgs/8.jpeg";
import cover9 from "../../assets/imgs/9.jpeg";
import cover10 from "../../assets/imgs/10.jpeg";

import React from "react";
import "./Review.css";

const Review = ({ reviewData }) => {
  return (
    <div className="review-card">
      <div className="contents">
        <p className="review-content"> {reviewData.review}</p>
        <p className="review-comment">
          <em>{reviewData.comment}</em>
        </p>

        <div className="review-username">
          <p>รีวิวจาก</p>
          <p className="uname">{reviewData.username}</p>
        </div>
      </div>

      <div className="review-header">
        <div>
          <p className="bname">{reviewData.bname}</p>
          <p className="baname">{reviewData.baname}</p>
        </div>
        <img
          src={reviewData.thumbnail}
          alt="Review thumbnail"
          className="review-thumbnail"
        />
      </div>
    </div>
  );
};

const laundry99Review = {
  bname: "คำอธิษฐานในวันที่จากลา FRIEREN",
  baname: "โดย Kanehito YAMADA / Tsukasa Abe",
  username: "Laundry99",
  review:
    "ดีอ้ะะะะ คือเนื้อเรื่องไม่ได้มีอะไรหวือหวามาก เน้นดราม่าหนักไปทางความสัมพันธ์ของทั้งสองคน",
  comment: "อ่านต่อ",
  thumbnail: cover10,
};

const ririReview = {
  bname: "ขาดคุณนางฟ้าข้างห้องไป ผมคงมีชีวิตต่อไปไม่ได้อีกแล้ว",
  baname: "โดย โดย ซาเอกิซัง",
  username: "riri",
  review:
    "เนื้อเรื่องดีค่ะ มีหลายมิติให้ได้คิดให้ได้มอง ตอนแรกนึกว่าแนวปล่อยจอย แต่ไม่จ้าาาาดีพอยู่นะ สนุกๆ คุ้มมากกกกกก ใครชอบลายเส้นคลีนจัดเลยค่ะ",
  comment: "อ่านต่อ",
  thumbnail: cover5,
};

const saicharotReview = {
  bname: "[Oshi no Ko] เกิดใหม่เป็นลูกโอชิ ",
  baname: "โดย AKA AKASAKA, MENGO YOKOYARI",
  username: "saichaot",
  review:
    "เซตติ้งโลกใหม่สมเหตุสมผล ตัวละคนน่าสนใจจ  มีมุกตลกบ้างไม่เครียด และวาดภาพสวยมาก เนื้อเรื่องแน่น ซื้อเลยไม่ผิดหวัง ขอเล่มต่อ",
  comment: "อ่านต่อ",
  thumbnail: cover3,
};

const Revieww = () => {
  return (
    <div className="Revieww">
      <Review reviewData={laundry99Review} />
      <Review reviewData={ririReview} />
      <Review reviewData={saicharotReview} />
    </div>
  );
};

export default Revieww;
