import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import BreadCrum from '../Components/BreadCrums/BreadCrum';


const Product = () => {
  const{all_produt} =useContext(ShopContext);
  const {productId} = useParams();
  const product = all_produt.find((e)=>e.id ===Number(productId));
  
  return (
    <div>
      <BreadCrum product={product}/>
    </div>
  )
}

export default Product