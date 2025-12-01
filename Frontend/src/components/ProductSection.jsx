import "./ProductSection.css";

export default function ProductSection({product}) { 
  return (
    <div className="product-container">
      <div className="product-left">
        <img src={product.image} alt={product.title}/>
      </div>
      <div className="product-right">
        <h1>{product.title}</h1>
        <h2 className="price">₹{product.price}</h2>
        <p className="desc">{product.description}</p>
      </div>
    </div>
  );
}