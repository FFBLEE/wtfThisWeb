import React from "react";
import "./Detail.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
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
import cover11 from "../../assets/imgs/11.jpeg";

const MangaDisplay = ({ mangaData }) => {
  return (
    <div>
      <div className="manga-display">
        <div className="title-container">
          <h1 className="title">{mangaData.title}</h1>
        </div>
        <div className="cover-container">
          <img src={mangaData.img} alt={mangaData.img} className="cover" />
        </div>
        <div className="descrption">
          <p className="author">
            โดย&nbsp;
            <span style={{ color: "#00bf6c" }}>{mangaData.author}</span>
          </p>
          <p className="Publisher">
            สำนักพิมพ์&nbsp;
            <span style={{ color: "#00bf6c" }}>{mangaData.Publisher}</span>
          </p>
          <p className="category">
            หมวดหมู่&nbsp;
            <span style={{ color: "#00bf6c" }}>{mangaData.category}</span>
          </p>
          <div className="botton">
            <button className="read">
              <span> ทดลองอ่าน </span>
            </button>
            <button className="btn_buy">
              <span> ซื้อ {mangaData.price} </span>
            </button>
          </div>
          <div className="list">
            <i class="fa-solid fa-bag-shopping">
              <p className="list-text">อยากได้</p>
            </i>
            <i class="fa-solid fa-gift">
              <p className="list-text">ซื้อเป็นของขวัญ</p>
            </i>
            <i class="fa-solid fa-circle-plus">
              <p className="list-text">ติดตาม</p>
            </i>
            <i class="fa-solid fa-share-nodes">
              <p className="list-text">แชร์</p>
            </i>
          </div>

          <div className="detail-container">
            <p className="series-text">
              ซีรีส์{" "}
              <div className="mangaData">
                <span className="series-name">{mangaData.Series}</span>
              </div>
            </p>

            <p className="file-text">
              ประเภทไฟล์{" "}
              <div className="mangaData">
                <span className="file-name">{mangaData.filetype}</span>
              </div>
            </p>

            <p className="date-text">
              วันที่วางขาย{" "}
              <div className="mangaData">
                <span className="date-data">{mangaData.date}</span>
              </div>
            </p>

            <p className="pages-text">
              จำนวนหน้า{" "}
              <div className="mangaData">
                <span className="pages-data">{mangaData.pages}</span>
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="brief-story">
        <span className="story">{mangaData.briefStory}</span>
      </div>
    </div>
  );
};
const manga = {
  img: cover11,
  title: "[Oshi no Ko] เกิดใหม่เป็นลูกโอชิ ",
  author: "AKA AKASAKA, MENGO YOKOYARI",
  Publisher: "LUCKPIM Publishing",
  category: "การ์ตูนทั่วไป",
  price: "100 ฿",
  Series: "[Oshi no Ko] เกิดใหม่เป็นลูกโอชิ",
  filetype: "PDF",
  date: "19 มกราคม 2566",
  pages: "200 หน้า",
  briefStory:
    "'ในวงการนี้น่ะคำโกหกก็คืออาวุธนั่นแหละ' อควอกับรูบี้ฝาแฝดชายหญิงต่างสู้ยิบตาในวงการบันเทิง!! 'B โคมาจิ' ยุคใหม่ที่รูบี้สังกัดอยู่ได้ขึ้นแสดงคอนเสิร์ตเป็นครั้งแรก และคาดหมายว่าจะได้งานอย่างอื่นมากยิ่งขึ้นไป อีกด้านหนึ่งงานต่อไปอควอได้รับก็คือ 'ละครเวที 2.5 มิติ'!! โดยในละครเวทีครั้งนี้ คุโรคาวะ อากาเนะที่เล่นเรียลลิตี้โชว์จีบสาวจนได้เป็น 'แฟน' กัน และอาริมะ คานะผู้หลงรักควออยู่ก็ร่วมแสดงด้วย... งานนี้ท่าจะส่อแววอิรุงตุงนังครั้งใหญ่!?",
};

const Detail = () => {
  return (
    <div className="manga">
      <MangaDisplay mangaData={manga} />
    </div>
  );
};

export default Detail;
