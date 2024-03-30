import { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import "./carouselbutton.css";
import { AngleLeftIcon, AngleRightIcon } from "../../asset/icon/icon";

function CarouselButton({ text }) {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);
  const checkRightLeftButton = (text) => {
    if (text === "Left") {
      return isFirstItemVisible ? (
        <></>
      ) : (
        <div className="carousel-bt-prev" onClick={() => scrollPrev()}>
          <i><AngleLeftIcon/></i>
        </div>
      );
    } else {
      return isLastItemVisible ? (
        <></>
      ) : (
        <div className="carousel-bt-next" onClick={() => scrollNext()}>
          <i><AngleRightIcon/></i>
        </div>
      );
    }
  };
  return <>{checkRightLeftButton(text)}</>;
}

export default CarouselButton;
