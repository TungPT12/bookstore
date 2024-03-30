import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import CardBook from '../Card/card';
import '../../style/general.css'
import CarouselButton from '../CarouselButton/carouselbutton';
import './carousel.css'
function Carousel({ title }) {
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
            LeftArrow={<CarouselButton text='Left' />}
            RightArrow={<CarouselButton text='Right' />
            }>
            <CardBook src="https://salt.tikicdn.com/cache/750x750/ts/product/83/2e/c3/c5ae4fe0dab21acd452f4ac5e4a69128.jpg" />
            <CardBook src="https://salt.tikicdn.com/cache/750x750/ts/product/83/2e/c3/c5ae4fe0dab21acd452f4ac5e4a69128.jpg" />
            <CardBook src="https://salt.tikicdn.com/cache/750x750/ts/product/83/2e/c3/c5ae4fe0dab21acd452f4ac5e4a69128.jpg" />
            <CardBook src="https://salt.tikicdn.com/cache/750x750/ts/product/83/2e/c3/c5ae4fe0dab21acd452f4ac5e4a69128.jpg" />
            <CardBook src="https://salt.tikicdn.com/cache/750x750/ts/product/83/2e/c3/c5ae4fe0dab21acd452f4ac5e4a69128.jpg" />
            <CardBook src="https://salt.tikicdn.com/cache/750x750/ts/product/83/2e/c3/c5ae4fe0dab21acd452f4ac5e4a69128.jpg" />
            <CardBook src="https://salt.tikicdn.com/cache/750x750/ts/product/83/2e/c3/c5ae4fe0dab21acd452f4ac5e4a69128.jpg" />
            <CardBook src="https://salt.tikicdn.com/cache/750x750/ts/product/83/2e/c3/c5ae4fe0dab21acd452f4ac5e4a69128.jpg" />
            <CardBook src="https://salt.tikicdn.com/cache/750x750/ts/product/07/eb/f7/3981688dabb62f9c71b4daccc85fa1af.jpg" />
          </ScrollMenu>
        </div>
      </div>
    </div>
  );
}

// icon-chevron-right icon-chevron-left

export default Carousel;
