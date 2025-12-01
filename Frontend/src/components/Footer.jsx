export default function Footer() {
  return (
    <footer style={{background:'#222',color:'#fff',padding:'30px 20px',marginTop:'50px'}}>
      <div style={{maxWidth:'1200px',margin:'0 auto'}}>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',marginBottom:'25px'}}>
          <div style={{width:'300px',margin:'10px'}}>
            <img src="https://pioneereventshq.com/wp-content/uploads/2024/05/WHOLESALE_WEDDING_DECOR__1_-removebg-preview-e1738877458254.png" alt="Pioneer Events" style={{height:'45px',marginBottom:'12px'}}/>
            <p style={{fontSize:'14px',lineHeight:'1.5',color:'#bbb'}}>
              Pioneer Events provides premium event planning and execution services. We make your special moments memorable.
            </p>
          </div>
          <div style={{width:'180px',margin:'10px'}}>
            <h3 style={{fontSize:'17px',marginBottom:'12px'}}>Quick Links</h3>
            <a href="#" style={{color:'#bbb',textDecoration:'none',display:'block',margin:'6px 0',fontSize:'14px'}}>Home</a>
            <a href="#" style={{color:'#bbb',textDecoration:'none',display:'block',margin:'6px 0',fontSize:'14px'}}>All Products</a>
            <a href="#" style={{color:'#bbb',textDecoration:'none',display:'block',margin:'6px 0',fontSize:'14px'}}>Categories</a>
            <a href="#" style={{color:'#bbb',textDecoration:'none',display:'block',margin:'6px 0',fontSize:'14px'}}>About Us</a>
          </div>
          <div style={{width:'240px',margin:'10px'}}>
            <h3 style={{fontSize:'17px',marginBottom:'12px'}}>Contact Us</h3>
            <p style={{fontSize:'14px',margin:'6px 0',color:'#bbb'}}>📞 +1(778)564-0016</p>
            <p style={{fontSize:'14px',margin:'6px 0',color:'#bbb'}}>✉️ hello@pioneereventstabs.com</p>
            <p style={{fontSize:'14px',margin:'6px 0',color:'#bbb'}}>📍 Metropolitan Area</p>
          </div>
        </div>
        <div style={{borderTop:'1px solid #444',paddingTop:'15px',textAlign:'center',fontSize:'13px',color:'#888'}}>
          <p>© 2024 Pioneer Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
