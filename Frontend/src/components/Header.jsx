export default function Header() {
  return (
    <header style={{background:'#fff',padding:'15px 20px',borderBottom:'1px solid #ddd',position:'sticky',top:0,zIndex:1000}}>
      <div style={{maxWidth:'1200px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div>
          <img src="https://pioneereventshq.com/wp-content/uploads/2024/05/WHOLESALE_WEDDING_DECOR__1_-removebg-preview-e1738877458254.png" alt="Pioneer Events" style={{height:'50px'}}/>
        </div>
        <nav style={{display:'flex',alignItems:'center'}}>
          <a href="#" style={{color:'#ff7f00',textDecoration:'none',margin:'0 15px',fontSize:'16px',fontWeight:'500'}}>HOME</a>
          <a href="#" style={{color:'#333',textDecoration:'none',margin:'0 15px',fontSize:'16px',fontWeight:'500'}}>ALL PRODUCTS</a>
          <a href="#" style={{color:'#333',textDecoration:'none',margin:'0 15px',fontSize:'16px',fontWeight:'500'}}>CATEGORIES</a>
          <a href="#" style={{color:'#333',textDecoration:'none',margin:'0 15px',fontSize:'16px',fontWeight:'500'}}>CONTACT US</a>
        </nav>
        <div style={{display:'flex',alignItems:'center'}}>
          <div style={{border:'1px solid #333',padding:'8px 15px',margin:'0 10px',borderRadius:'4px',fontSize:'14px',fontWeight:'500'}}>+1(778)564-0016</div>
          <div style={{border:'1px solid #333',padding:'8px 15px',borderRadius:'4px',fontSize:'14px',fontWeight:'500'}}>hello@pioneereventstabs.com</div>
        </div>
      </div>
    </header>
  );
}
