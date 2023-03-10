import "./homepage.css";
import "../../style/general.css";
import ImageSlider, { Slide } from "react-auto-image-slider";
function HomePage() {
  return (
    <div className="wrapper-home">
      <div className="wrapper-home_content flex-row">
        <div className="slidebar_homepage">
          <ImageSlider effectDelay={500} autoPlayDelay={2000}>
            <Slide>
              <img alt="img1" src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/content/Maame_SB.jpg" />
              <button>The bestselling debut of 2023</button>
            </Slide>
            <Slide>
              <img alt="img2" src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/content/emerald_book-depot_496x496px.png" />
              <p>Discover a whole new world with Emerald</p>
            </Slide>
            <Slide>
              <img alt="img2" src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/content/TOG_BD_246.jpeg" />
              <p>Discover a whole new world with Emerald</p>
            </Slide>
          </ImageSlider>
        </div>
        <div className="main-content_homepage">
        
        </div>
      </div>
    </div>
  );
}

export default HomePage;
