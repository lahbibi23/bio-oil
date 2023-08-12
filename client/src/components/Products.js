import React from 'react';
import '../styles.css';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {findProduct} from "../redux/ProductSlice"
function Products() {
  const navigate =useNavigate()
  const dispatch=useDispatch()
  const products =useSelector(state=>state.products)
  console.log(products);

     
   
  return (
    <section className="products">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} style={{width:100 ,height:100  }} />
          <h3>{product.name}</h3>
          <p className='product-description'> descirption: {product.descirption} </p>
          <button onClick={()=>{dispatch(findProduct)
      navigate(`/products/${product.id}`)}}>
        More details
    </button>
        </div>
      ))}
    </section>
  );
}

export default Products;
