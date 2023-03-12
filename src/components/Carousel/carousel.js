import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import CardBook from '../Card/card';
import '../../style/general.css'
import CarouselButton from '../CarouselButton/carouselbutton';
import './carousel.css'
function Carousel() {
  return (
    <div className="carousel-container">
      <div id="Related to items you've viewed" className="carousel-title">
        <h2>Related to items you've viewed</h2>
      </div>
        <div className="carousel-wrap carousel-begin carousel-active">
          <div className="tab">
            <ScrollMenu 
                noPolyfill
                itemClassName='card-item'
                scrollContainerClassName="hidden"
                LeftArrow={<CarouselButton text='Left'/>} 
                RightArrow={<CarouselButton text='Right'/>
            }>
              <CardBook src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/3997/9781399713740.jpg"/>
              <CardBook src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8049/9781804990926.jpg"/>
              <CardBook src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/3997/9781399713740.jpg"/>
              <CardBook src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/7610/9781761067693.jpg"/>
              <CardBook src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/3997/9781399713740.jpg"/>
              <CardBook src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/3997/9781399713740.jpg"/>
              <CardBook src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/3997/9781399713740.jpg"/>
              <CardBook src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/3997/9781399713740.jpg"/>
              <CardBook src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/6489/9780648910602.jpg"/>
              <CardBook src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/3997/9781399713740.jpg"/>
              <CardBook src="https://salt.tikicdn.com/cache/750x750/ts/product/07/eb/f7/3981688dabb62f9c71b4daccc85fa1af.jpg.webp"/>
              <CardBook src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/3997/9781399713740.jpg"/>
              <CardBook src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/3997/9781399713740.jpg"/>
              <CardBook src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/3997/9781399713740.jpg"/>
              <CardBook src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/3997/9781399713740.jpg"/>
              <CardBook src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/3997/9781399713740.jpg"/>
              <CardBook src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/3997/9781399713740.jpg"/>
              <CardBook src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/3997/9781399713740.jpg"/>
              <CardBook src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/3494/9780349433479.jpg"/>
              <CardBook src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/2920/9781292014913.jpg"/>


            </ScrollMenu>
          </div>
      </div>
    </div>
  );
}

// icon-chevron-right icon-chevron-left

export default Carousel;
