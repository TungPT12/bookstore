import { useState } from "react";
import { getProductDetailById } from "../../services/querydatabae";

function HomePage() {
  const [name, setName] = useState("");

  const getAll = () => {
    getProductDetailById(1).then(data => {
      if(data) {
        setName(data)
      } else {
        console.log('tung: ',data)
      }
    })
  }
  getAll();
  return (
    <>
      <h2>Home</h2>
      <h2 dangerouslySetInnerHTML={{__html: name.description}}></h2>
    </>
  );
}

export default HomePage;
