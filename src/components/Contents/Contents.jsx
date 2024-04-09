import cover1 from "../../assets/imgs/1.png";
import cover2 from "../../assets/imgs/2.png";
import cover3 from "../../assets/imgs/3.jpeg";
import cover4 from "../../assets/imgs/4.jpeg";
import cover5 from "../../assets/imgs/5.jpeg";

import "./ContentStyle.css";
import Heart from "../Heart/Heart.jsx";

function Contents() {
  return (
    <section id="content">
      <section id="the-cards">
        <div className="card">
          <div className="-thumb">
            <img src={cover1} alt="Cover 1" />
          </div>
          <div className="-about">
            <div className="-title">นางร้ายพันปี</div>
            <div className="-detail">ล้านปีแสง / AT NOVEL นิยายรักจีนโบราณ</div>
            <div className="-view">
              {" "}
              <span>
                {" "}
                <i class="fa-solid fa-eye"></i>{" "}
              </span>
              13k
            </div>
            {/* <div> <Heart /> </div> */}
          </div>
        </div>
        <div className="card">
          <div className="-thumb">
            <img src={cover2} alt="Cover 1" />
          </div>
          <div className="-about">
            <div className="-title">ปลอม</div>
            <div className="-detail">พราวพริ้ม (พลิ้วอ่อน) นิยายโรมานซ์</div>
            <div className="-view">
              <span>
                {" "}
                <i class="fa-solid fa-eye"></i>{" "}
              </span>
              9k
            </div>
            {/* <div className="-btn"><Heart /></div> */}
          </div>
        </div>

        <div className="card">
          <div className="-thumb">
            <img src={cover3} alt="Cover 1" />
          </div>
          <div className="-about">
            <div className="-title">[Oshi no Ko] เกิดใหม่เป็นลูกโอชิ </div>
            <div className="-detail">โดย AKA AKASAKA, MENGO YOKOYARI</div>
            <div className="-view">
              <span>
                {" "}
                <i class="fa-solid fa-eye"></i>{" "}
              </span>
              223k
            </div>
            {/* <div className="-btn"><Heart /></div> */}
          </div>
        </div>

        <div className="card">
          <div className="-thumb">
            <img src={cover4} alt="Cover 1" />
          </div>
          <div className="-about">
            <div className="-title">Mashle ศึกโลกเวทมนตร์คนพลังกล้าม</div>
            <div className="-detail">โดย Hajime Komoto</div>
            <div className="-view">
              <span>
                {" "}
                <i class="fa-solid fa-eye"></i>{" "}
              </span>
              102k
            </div>
            {/* <div className="-btn"><Heart /></div> */}
          </div>
        </div>

        <div className="card">
          <div className="-thumb">
            <img src={cover5} alt="Cover 1" />
          </div>
          <div className="-about">
            <div className="-title">
              ขาดคุณนางฟ้าข้างห้องไป ผมคงมีชีวิตต่อไปไม่ได้อีกแล้ว
            </div>
            <div className="-detail">โดย ซาเอกิซัง</div>
            <div className="-view">
              <span>
                {" "}
                <i class="fa-solid fa-eye"></i>{" "}
              </span>
              97k
            </div>
            {/* <div className="-btn"><Heart /></div> */}
          </div>
        </div>
      </section>
    </section>
  );
}

export default Contents;
