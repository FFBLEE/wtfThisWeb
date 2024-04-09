import Nav from "../components/Nav/Nav.jsx";
import SlidePicture from "../components/SlidePicture/SlidePicture.jsx";
import Content from "../components/Contents/Contents.jsx";

function Mainlayout() {
  return (
    <section>
      <Nav />
      <SlidePicture />
      <Content />
    </section>
  );
}

export default Mainlayout;
