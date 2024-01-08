import './product_detail.css'
import '../../style/general.css';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { CartShopping } from '../../asset/icon/icon';
import { addToCart } from '../../store/actions/cart';
import { createSearchParams, useSearchParams } from "react-router-dom";
function ProductDetail() {
    const [searchParams, setSearchParams] = useSearchParams();//
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const productParam = searchParams.get("product");//
    const newProduct = { id: 2, name: "Sherlockhomles", quantity: 1, price: 50 }
    useEffect(() => {
        dispatch(addToCart({ id: 1, name: 'Tớ Chọn Người Mẹ Này (2+)', quantity: 2, price: 200 }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="product_detail-wrapper flex-row">
            <div className="product_detail-img flex-row center-column">
                <img src="https://salt.tikicdn.com/cache/750x750/ts/product/83/2e/c3/c5ae4fe0dab21acd452f4ac5e4a69128.jpg" alt="book" />
            </div>
            <div className="product_detail-content">
                <h1 className="product_detail-name max-width">Tớ Chọn Người Mẹ Này ({productParam}+)</h1>
                <div className="description_product-detail flex-row max-width">
                    <div className="max-width">
                        <p className="text-description__product-detail">Nhà xuất bản:
                            <span className="font-weight-700"> NXB Lao Động</span>
                        </p>
                        <p className="text-description__product-detail">Tác giả:
                            <span className="font-weight-700"> Nobumi</span>
                        </p>
                    </div>
                    <div className="max-width">
                        <p className="text-description__product-detail">Hình thức bìa:
                            <span className="font-weight-700"> Bìa Mềm</span>
                        </p>
                        <p className="text-description__product-detail">Số trang:
                            <span className="font-weight-700"> 200</span>
                        </p>
                    </div>
                </div>
                <p className="product-detail_price max-width">
                    <span>256.500 </span>
                    <span>đ</span>
                </p>
                <div data-view-id="pdp_main_change_address" className="delivery-zone">
                    <span>Giao đến </span><span className="address">Q. Tân Bình, P. 12, Hồ Chí Minh</span>
                    <span> - </span>
                    <span className="address-change">Đổi địa chỉ</span>
                </div>

                <div className='input-quantity'>
                    <p className="label">Số Lượng</p>
                    <div className='flex-row'>
                        <div className="set-quantity flex-row">
                            <button className='set-quantity_btn' disabled={true}>
                                +
                            </button>
                            <input
                                type='number'
                                name="textQuantity"
                                className='textbox-quantity'
                                value={quantity} onChange={(e) => {
                                    if (e.target.value > -1) {
                                        setQuantity(e.target.value)
                                    }
                                }}
                            />
                            <button className='set-quantity_btn'>-</button>
                        </div>
                    </div>
                </div>
                <div className='btn-add-buy flex-row'>
                    <button
                        title="Thêm vào giỏ hàng"
                        className="btn-cart-to-cart flex-row center-column center-row"
                        onClick={() => dispatch(addToCart(newProduct))}
                    >
                        <i className="fhs_icon_cart">
                            <CartShopping />
                        </i>
                        <span>Thêm vào giỏ hàng</span>
                    </button>
                    <button title="Thêm vào giỏ hàng" className="btn-buy-now" >
                        <span>Mua ngay</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;