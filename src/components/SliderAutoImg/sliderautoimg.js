import ImageSlider, { Slide } from "react-auto-image-slider";
import './sliderauto.css'
function SliderAutoImg() {
    return ( 
        <ImageSlider effectDelay={500} autoPlayDelay={2000}>
            <Slide>
              <img className="img-slider-auto" alt="img1" src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/content/Maame_SB.jpg" />
              {/* <p className="descrption-slider-auto">The bestselling debut of 2023</p> */}
            </Slide>
            <Slide>
              <img className="img-slider-auto" alt="img2" src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/content/emerald_book-depot_496x496px.png" />
              {/* <p className="descrption-slider-auto">Discover a whole new world with Emerald</p> */}
            </Slide>
            <Slide>
              <img className="img-slider-auto" alt="img2" src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/content/TOG_BD_246.jpeg" />
              {/* <p className="descrption-slider-auto">Discover a whole new world with Emerald</p> */}
            </Slide>
          </ImageSlider>
     );
}

export default SliderAutoImg;