import {collection, doc, setDoc, getDocs, deleteDoc} from "firebase/firestore"
import {db} from "../firebaseConfig";;
import cats from "../../json/cat.json"
import dogs from "../../json/dog.json";

const products = [...cats, ...dogs];
//REFERENCE COLLECTION
const productsCollection = collection(db, "pets");

//APIs
export const feedProducts = async () => {
    //DELETE ALL EXISTING DOCS
    const querySnapshot = await getDocs(productsCollection);
    querySnapshot.forEach(async(product) =>{
        await deleteDoc(doc(db, "pets", product.id));
    });
    //ADD NEW DOCS
    products.forEach(async (product)=>{
        const docRef = await doc(productsCollection);
        await setDoc(docRef, {...product, id: docRef.id});
    });
};