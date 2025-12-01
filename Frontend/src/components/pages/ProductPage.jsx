import {useState,useEffect} from "react";
import Header from "../Header";
import AnnouncementBar from "../AnnouncementBar";
import ProductSection from "../ProductSection";
import Highlights from "../Highlights";
import FAQ from "../FAQ";
import StickyBar from "../StickyBar";
import Footer from "../Footer";

export default function ProductPage() { 
  const [products,setProducts]=useState([]);
  const [faqs,setFaqs]=useState([]);
  const [selectedProduct,setSelectedProduct]=useState(null);
    
  useEffect(()=>{
    const API_URL=import.meta.env.VITE_API_URL||'http://localhost:5000';
    fetch(`${API_URL}/api/products`)
      .then(res=>res.json())
      .then(data=>{
        setProducts(data);
        setSelectedProduct(data[0]);
      })
      .catch(console.error);
    fetch(`${API_URL}/api/faqs`)
      .then(res=>res.json())
      .then(data=>setFaqs(data))
      .catch(console.error);
  },[]);
    
  if(!selectedProduct) return <h2 style={{padding:40}}>Loading...</h2>;
  
  return (
    <>
      <Header/>
      <AnnouncementBar/>
      <div style={{maxWidth:'1100px',margin:'40px auto',padding:'0 20px'}}>
        <h2 style={{fontSize:'28px',marginBottom:'30px',color:'#333'}}>Our Services</h2>
        <div style={{display:'flex',flexWrap:'wrap',marginBottom:'40px'}}>
          {products.map(product=>(
            <div key={product.id} onClick={()=>setSelectedProduct(product)} style={{width:'220px',border:selectedProduct.id===product.id?'3px solid #ff7f00':'1px solid #ddd',borderRadius:'8px',padding:'15px',margin:'10px',cursor:'pointer',background:'#fff'}}>
              <img src={product.image} alt={product.title} style={{width:'100%',height:'150px',borderRadius:'8px',marginBottom:'10px'}}/>
              <h3 style={{fontSize:'16px',margin:'10px 0',color:'#333'}}>{product.title}</h3>
              <p style={{color:'#ff7f00',fontSize:'20px',fontWeight:'bold',margin:0}}>₹{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <ProductSection product={selectedProduct}/>
      <Highlights highlights={selectedProduct.highlights}/>
      <FAQ faqs={faqs}/>
      <Footer/>
      <StickyBar product={selectedProduct}/>
    </>
  );
}