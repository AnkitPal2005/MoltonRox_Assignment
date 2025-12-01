import "./Highlights.css";

export default function Highlights({highlights}) { 
  return (
    <div className="highlights-container">
      <h2>Product Highlights</h2>
      <ul>
        {highlights.map((item,i)=>(<li key={i}>✔ {item}</li>))}
      </ul>
    </div>
  );
}