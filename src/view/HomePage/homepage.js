import "./homepage.css";
import "../../style/general.css";
import SliderAutoImg from "../../components/SliderAutoImg/sliderautoimg";
import Carousel from "../../components/Carousel/carousel";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { insertData, queryAllData } from "../../services/querydatabae";
import axiosInstance from "../../config/axios";
function HomePage() {
  const [id, setId] = useState(1);
  const [data, setData] = useState();
  // const insertProduct = () => {
  //   axiosInstance.get('/productType.json').then((response) => {
  //     let productTypes = [];
  //     const data = response.data
  //     for (let key in data) {
  //       productTypes.push({
  //         id: key,
  //         name: data[key].name
  //       })
  //     }
  //     return productTypes;
  //   }).then((productTypes) => {
  //     console.log(productTypes)
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // }
  const insertProduct = () => {
    axiosInstance.post('/product.json', {
      name: "Thần số học thay đổi cuộc sống",
      image: "https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/ea/63/08/382b8351042ddd4eef0d56d5f2679239.jpg",
      price: 173000,
      rating: 4.8,
      sold: 30,
      publishingCompany: "NXB Kim Đồng",
      author: "Lê Đỗ Quỳnh Hương",
      pages: 200,
      coverForm: "Bìa mềm",
      productTypeId: "-NnEx9yUd6W0HjdbxaFt",
      description: "Cuốn sách Thay đổi cuộc sống với Nhân số học là tác phẩm được chị Lê Đỗ Quỳnh Hương phát triển từ tác phẩm gốc “The Complete Book of Numerology” của tiến sỹ David A. Phillips, khiến bộ môn Nhân số học khởi nguồn từ nhà toán học Pythagoras trở nên gần gũi, dễ hiểu hơn với độc giả Việt Nam."
    })
  }
  // const queryAllProduct = () => {
  //   queryAllData("product").then((data) => {
  //     setData(data);
  //     console.log(data)
  //   })
  // }
  useEffect(() => {
    // queryAllProduct();
    insertProduct();
  }, []);
  // insertProduct();

  return (
    <div className="wrapper-home">
      <Link to={`/product/productDetail?product=${id}`} state={id} >product</Link>
      <div className="wrapper-home_content flex-row">
        <div className="slidebar_homepage">
          <div className="sliderimg_homepage">
            <SliderAutoImg />
          </div>
        </div>
        <div className="main-content_homepage">
          <Carousel title={"Top rating"} />
          <Carousel title={"Top sales"} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
