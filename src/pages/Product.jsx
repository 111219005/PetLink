import { useParams } from "react-router";
import PetDetail from "../components/PetDetail/PetDetail";

export default function Product() {
    const { productSpecies, productId } = useParams();
    const productData = productSpecies === "dog" ? require("../json/dog.json") : require("../json/cat.json");
    const product = productData.find((item) => item.id === parseInt(productId, 10));

    if (!product) {
        return <div>找不到對應的商品資料</div>;
    }

    return (
        <>
            <PetDetail product={product} />
        </>
    );
}
