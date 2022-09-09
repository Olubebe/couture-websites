import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import { BsStarFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux/es/exports';
import './Product.css';
import { addCart } from '../redux/action';

const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    
    const dispatch = useDispatch();
    const addProduct = (product) => {
      dispatch(addCart(product))
    }

    useEffect(() =>{
        const getProduct =  async () => {
          setLoading(true);
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
            
        
        }
        getProduct();
        }, [id]);

        const Loading = () => {
            return (
              <div className='loading'>
           Loading...
              </div>
            )
          }
          
    
          
          const ShowProduct = () => {
            return(
              <>
             <div className="col">
              <img src={product.image} alt={product.title} />
             </div>
             <div className="col">
              <span>{product.category}</span>
              <h2>{product.title}</h2>
              <p>Rating: {product.rating && product.rating.rate} <BsStarFill/><BsStarFill/></p>
              <p>{product.description}</p>
              <h1>${product.price}</h1>
              <Link to="/cart">
              <button onClick={() => addProduct(product)} className='add'>Add to cart</button>
              </Link>
             </div>
              
      
              </>
            )
          }
        
  return (
    <div className='container product'>
        <div className="row">
            {loading ? <Loading/> : <ShowProduct/>}
        </div>
        
    </div>
  )
}

export default Product