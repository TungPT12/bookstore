import { Link } from "react-router-dom";
import '../../style/general.css'
import './card.css'
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
          <Link className="black-text">
          I Don't Need Ther
          </Link>
        </h3>
        <p className="author">
          <span itemscope="Lucy Score">
            <Link className="black-text">
              <span>Lucy Score</span>
            </Link>
          </span>
        </p>
        <div className="rating-wrap">
          <div className="stars">
            <span className="star full-star">dd</span>
            <span className="star full-star">d</span>
            <span className="star full-star">d</span>
            <span className="star half-star">d</span>
          </div>
        </div>
        <div className="price-wrap ">
          <p className="price">
            <span className="sale-price">US$18.92</span>
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
