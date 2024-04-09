import cover6 from "../../assets/imgs/6.jpeg";
import cover7 from "../../assets/imgs/7.jpeg";
import cover8 from "../../assets/imgs/8.jpeg";
import cover9 from "../../assets/imgs/9.jpeg";
import cover10 from "../../assets/imgs/10.jpeg";

import "./Content2.css";
function Contents2() {
  return (
    <section id="content">
      <section id="the-cards">
        <div className="card">
          <div className="-thumb">
            <img src={cover6} alt="Cover 1" />
          </div>
          <div className="-about">
            <div className="-title">บูรณะมันวุ่นวาย ขายชาติเลยแล้วกัน</div>
            <div className="-detail">โดย โทรุ โทบะ</div>
            <div className="-view">
              {" "}
              <span>
                {" "}
                <i class="fa-solid fa-eye"></i>{" "}
              </span>
              113k
            </div>
            {/* <div> <Heart /> </div> */}
          </div>
        </div>
        <div className="card">
          <div className="-thumb">
            <img src={cover7} alt="Cover 1" />
          </div>
          <div className="-about">
            <div className="-title">สอนหมากหนูที คุณพี่จ้าวมังกร!</div>
            <div className="-detail">โดย ชิโร่ ชิราโทริ</div>
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
            <img src={cover8} alt="Cover 1" />
          </div>
          <div className="-about">
            <div className="-title">
              ช่างมันเถอะ! อีกไม่กี่ปีเราก็เป็นเถ้าธุลีกันหมดแล้ว{" "}
            </div>
            <div className="-detail">โดย ฟุจิโนะ โทโมยะ/ กมลวรรณ เพ็ญ</div>
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
            <img src={cover9} alt="Cover 1" />
          </div>
          <div className="-about">
            <div className="-title">How to live a good life</div>
            <div className="-detail">โดย นิ้วกลม</div>
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
            <img src={cover10} alt="Cover 1" />
          </div>
          <div className="-about">
            <div className="-title">คำอธิษฐานในวันที่จากลา FRIEREN</div>
            <div className="-detail">โดย Kanehito YAMADA / Tsukasa Abe</div>
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

export default Contents2;
