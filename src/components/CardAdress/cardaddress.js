import "./cardaddress.css";
import "../../style/general.css";
import { Link } from "react-router-dom";
function CardAddress() {
  return (
    <div className="wrapper-address_card eEhtFa">
      <div className="right-inner">
        <div>
          <div className="flcp_container">
            <div className="Section__Container-sc-r6ysni-0 styles__StyledAddressBlock-sc-vgfrvy-0 bVA-DDf cTGPxG">
              <div className="block-header flex-row space-between-element">
                <h3 className="block-header__title">Giao tới</h3>
                <Link className="block-header__nav change-address_cart">
                  Thay đổi
                </Link>
              </div>
              <div className="customer_info flex-row">
                <p className="customer_info__name">Phạm Thanh Tùng</p>
                <i></i>
                <p className="customer_info__phone">0925215202</p>
              </div>
              <div className="address">
                <span className="address__type address__type--home">
                  Nhà
                </span>
                22/21 đường Bùi Thị Cội, Phường Tân Đông Hiệp, Thị xã Dĩ An, Bình Dương
              </div>
            </div>
          </div>
        </div>
        <div className="styles__StyledPriceSummary-sc-12mfsgy-0 iRKLRb">
          <ul className="prices__items">
            <li className="prices__item flex-row space-between-element">
              <div className="prices__text">Tạm tính</div>
              <div className="prices__value">0đ</div>
            </li>
          </ul>
          <div className="prices__total flex-row space-between-element">
            <span className="prices__text">Tổng tiền</span>
            <div className="prices__content flex-column">
              <span className="prices__value prices__value--final">402.000 ₫</span>
              <span className="prices__value--noted">(Đã bao gồm VAT nếu có)</span>
            </div>
          </div>
        </div>
        <button className="styles__StyledButton-sc-hokrdw-0 bsEPkA">
          Mua Hàng
        </button>
      </div>
    </div>
  );
}

export default CardAddress;