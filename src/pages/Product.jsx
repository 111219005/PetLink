import { useParams } from "react-router";
import dogData from "../json/dog.json";
import catData from "../json/cat.json";
import PetDetail from "../components/PetDetail/PetDetail.jsx"
import Footer from "../components/Footer/Footer.jsx";

export default function Product() {
  const { productSpecies, productId } = useParams();
  const productData = productSpecies === "dog" ? dogData : catData;
  const product = productData.find((item) => item.id === parseInt(productId, 10));

  if (!product) {
    return <div>找不到對應的商品資料</div>;
  }

  return (
    <>
      {/*<h1>Product：{product.id}</h1>*/}
        <PetDetail product={product}/>
    </>
  );
}
