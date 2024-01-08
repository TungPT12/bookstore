import { Link } from "react-router-dom";
import '../../style/general.css'
import './card.css'
import { StarIcon, StarHalfIcon } from "../../asset/icon/icon";
function CardBook({ src }) {
  return (
    <div className="book-item">
      <div className="item-img">
        <Link>
          <img className="img-book-item" alt="Things We Never Got Over" src={src} />
        </Link>
      </div>
      <div className="item-info">
        <h3 className="title">
          <Link to='/product/123' className="black-text">
            I Don't Need Ther
          </Link>
        </h3>
        <p className="author">
          <span>
            <Link className="black-text">
              <span>Lucy Score</span>
            </Link>
          </span>
        </p>
        <div className="rating-wrap ">
          <div className="stars flex-row center-row">
            <i className="star full-star"><StarIcon /></i>
            <i className="star full-star"><StarIcon /></i>
            <i className="star full-star"><StarIcon /></i>
            <i className="star full-star"><StarIcon /></i>
            <i className="star half-star"><StarHalfIcon /></i>
          </div>
        </div>
        <div className="price-wrap ">
          <p className="price">
            <span className="sale-price">$ 18.92</span>
          </p>
        </div>
      </div>

      <div className="item-actions">
        <div className="btn-wrap">
          <button className="btn-add-cart">Add to basket</button>
        </div>
      </div>
    </div>
  );
}

export default CardBook;
