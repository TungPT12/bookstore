import CardAddress from '../../components/CardAdress/cardaddress';
import CartProductCard from '../../components/CartProductCard';
import '../../style/general.css';
import './cartpage.css';
function CartPage() {
  return (
    <div className="flex-row center-column">
      <div className="wrapper">
        <div className="hfMLFx flex-column">
          <div className="cart_page-title main-title">
            <h4>Giỏ Hàng</h4>
          </div>
          <div className="cart-content kXPYZZ flex-row">
            <div className="bvhHZE">
              <div className="wrapper-cart-product-title p-top-20">
                <div className="cart-product_title hPiRKp">
                  <label className="styles__StyledCheckbox-sc-kvz5pc-0 flex-row center-row">
                    <input type="checkbox" className="check-all_product" />
                    <span className="label">Tất cả (1 sản phẩm)</span>
                  </label>
                  <span>Đơn giá</span>
                  <span>Số lượng</span>
                  <span>Thành tiền</span>
                  <span className="remove-all flex-row center-row">
                    <img
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                      alt="deleted"
                    />
                  </span>
                </div>
              </div>
              <CartProductCard />
              <CartProductCard />
              <CartProductCard />
              <CartProductCard />
            </div>
           <div className="p-top-20 ">
           <CardAddress />
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
