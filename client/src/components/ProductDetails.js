import React from 'react';
import { useParams  } from 'react-router-dom';
import '../styles.css';
import { useDispatch, useSelector } from 'react-redux';

 

function ProductDetails() {
  const { id } = useParams();
 
   
  
  const product =useSelector(state=>state.products)
  const c = [...product]
  console.log("c",c);

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{c.name}</h2>
      <p>{product.description}</p>
      <p>Prix : {product.price} €</p>
      <button className="btn-add-to-cart">Ajouter au panier</button>
    </div>
  );
}

export default ProductDetails;
