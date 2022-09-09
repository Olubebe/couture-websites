import React, {useState, useEffect} from 'react'
import { addCart } from '../redux/action'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import './Product.css'

const Products = () => {
const [data, setData] = useState([]);
const [filter, setFilter] = useState(data);
const [loading, setLoading] = useState(false)
let componentMounted = true;


const dispatch = useDispatch();
const addProduct = (product) => {
  dispatch(addCart(product))
}

useEffect(() =>{
const getProducts =  async () => {
  setLoading(true);
  const response = await fetch("https://fakestoreapi.com/products");
  if(componentMounted){
    setData(await response.clone().json());
    setFilter(await response.json());
    setLoading(false);
    console.log(filter);
  }
  return () => {
    componentMounted = false;
  }
}
getProducts();
}, [])

const Loading = () => {
  return (
    <div>
 Loading...
    </div>
  )
}

const filterProduct = (cat) =>{
  const updatedList = data.filter((x) => x.category === cat);
  setFilter(updatedList);
}

const ShowProducts = () => {
  return(
    <>
  <div className="buttons">
    <button className="btn"  onClick={() => setFilter(data)}>All</button>
    <button className="btn"  onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
    <button className="btn"  onClick={ () =>filterProduct("women's clothing") }>Women's Clothing</button>
    <button className="btn"  onClick={() => filterProduct("jewelery") }>Jewelery</button>
    <button className="btn"  onClick={() => filterProduct("electronics") }>Electronics</button>
  </div>
  <div className="cards">
  {filter.map((product) =>{
    return(
     <>
     <div className="product-card">
     <div className="card" key={product.id} >
      <Link to={`/products/${product.id}`}  className="">
      <div className="card-header">
<img src={product.image} className="card-img" alt={product.title} />
      </div>
  <div className="card-body">
    <h5 className="">{product.title.substring(0,15)}...</h5>
    <span className="card-text ">${product.price}</span>
      </div>
      </Link>
  <button onClick={() => addProduct(product)} className="card-btn">
    Add To Cart
  </button>
  
</div>
     </div>
     </>
    )
  })}
  </div>
    </>
  )
}

  return (
    <div>
   <div className="products">
    <div className="container">
      <div className="row rowTitle">
        <div className="col">
        <h1 className='title'>Latest Product</h1>
        <hr />
        </div>
      </div>
    </div>
    <div className="row productsRow">
      <div className="col">
      {loading ? <Loading/>: <ShowProducts/>}
      </div>
    </div>
   </div>
    </div>
  )
}


export default Products