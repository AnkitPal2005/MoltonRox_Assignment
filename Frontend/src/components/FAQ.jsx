import {useState} from "react";
import "./FAQ.css";

export default function FAQ({faqs}) { 
  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((item,i)=>(<FAQItem key={i} q={item.question} a={item.answer}/>))}
    </div>
  );
}

function FAQItem({q,a}) {
  const [open,setOpen]=useState(false);
  return (
    <div className="faq-item">
      <div onClick={()=>setOpen(!open)} className="faq-question">
        <span>{q}</span>
        <span>{open?"-":"+"}</span>
      </div>
      {open && <p className="faq-answer">{a}</p>}
    </div>
  );
}
