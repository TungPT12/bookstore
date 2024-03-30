import Carousel from "../../components/Carousel/carousel";
import ProductDetail from "../../components/ProductDetail/productdetail";
import {  useLocation } from "react-router-dom";
import "../../style/general.css"
import './product_detail_page.css'
function ProductDetailPage() {
    const location = useLocation();
    let p = location.pathname.indexOf('productDetail/')
    let s = 'productDetail/';
    let l = s.length;

    // const id = location.state;
    return (
        <div className="flex-column center-row">
            <div className="product-detail-page_wrapper flex-column center-row">
                <ProductDetail productId={location.pathname.slice(l+p)} />
                <Carousel />
                <Carousel />
            </div>
        </div>
    );
}

export default ProductDetailPage;