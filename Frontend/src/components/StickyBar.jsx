import "./StickyBar.css";

export default function StickyBar({product}) { 
  const handleAdd=()=>{
    alert(`${product.title} added to cart!`);
  };
  return (
    <div className="sticky-bar">
      <button onClick={handleAdd}>Add to Cart - ₹{product.price}</button>
    </div>
  );
}