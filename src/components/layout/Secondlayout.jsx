import LineWithTitle from "../components/LineWithTitle/LineWithTitle.jsx";
import Content2 from "../components/Contents/Contents2.jsx";
import Revieww from "../components/Review/Revieww.jsx";

function Secondlayout() {
  return (
    <section>
      <br />
      <br />
      <br />
      <br />
      <LineWithTitle
        title="Meb E-book Fair - สัปดาห์หนังสือที่บ้าน มี.ค.-เม.ย. 67"
        subtitle=" 🕒 เหลืออีก 13 วัน"
        marginTop="0"/>
      <div style={{ marginTop: "24px", paddingLeft: "2px" }}>
        <Content2 />
      </div>
      <LineWithTitle title="รีวิว" marginTop="128px" />
      <br />
      <Revieww />
    </section>
  );
}

export default Secondlayout;
