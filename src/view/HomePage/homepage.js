import "./homepage.css";
import "../../style/general.css";
import SliderAutoImg from "../../components/SliderAutoImg/sliderautoimg";
import Carousel from "../../components/Carousel/carousel";
 
function HomePage() {
  return (
    <div className="wrapper-home">
      <div className="wrapper-home_content flex-row">
        <div className="slidebar_homepage">
          <div className="sliderimg_homepage">
            <SliderAutoImg/>
          </div>
        </div>
        <div className="main-content_homepage">
          <Carousel/>
          <Carousel/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
