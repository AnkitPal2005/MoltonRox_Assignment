const express=require('express');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json());

const products=[
  {
    id: 1,
    title: "Pioneer Events - Premium Service",
    price: 2999,
    description:
      "High-quality event planning and execution services by Pioneer Events.",
    image:
      "https://pioneereventshq.com/wp-content/uploads/2024/06/Back-Drop-10-1-800x600.jpg",
    highlights: [
      "Trusted by 500+ clients",
      "Customizable packages",
      "On-time delivery",
      "24/7 support",
    ],
  },
  {
    id: 2,
    title: "Wedding Event Package",
    price: 4999,
    description:
      "Complete wedding planning and decoration services with premium arrangements.",
    image:
      "https://pioneereventshq.com/wp-content/uploads/2024/06/Back-Drop-9-1-800x600.jpg",
    highlights: [
      "Full venue decoration",
      "Professional photography",
      "Catering services",
      "Entertainment arrangements",
    ],
  },
  {
    id: 3,
    title: "Corporate Event Management",
    price: 3499,
    description:
      "Professional corporate event planning for conferences, seminars, and meetings.",
    image:
      "https://pioneereventshq.com/wp-content/uploads/2024/06/Back-Drop-8-1-800x600.jpg",
    highlights: [
      "Audio-visual setup",
      "Stage management",
      "Guest coordination",
      "Technical support",
    ],
  },
  {
    id: 4,
    title: "Birthday Party Special",
    price: 1999,
    description:
      "Fun and memorable birthday party planning with themed decorations.",
    image:
      "https://pioneereventshq.com/wp-content/uploads/2024/06/Back-Drop-7-1-800x1067.jpg",
    highlights: [
      "Themed decorations",
      "Entertainment for kids",
      "Cake and catering",
      "Photography included",
    ],
  },
  {
    id: 5,
    title: "Anniversary Celebration Package",
    price: 2499,
    description:
      "Romantic anniversary celebration planning with elegant arrangements.",
    image:
      "https://pioneereventshq.com/wp-content/uploads/2024/06/Back-Drop-4-1-800x600.jpg",
    highlights: [
      "Romantic ambiance setup",
      "Floral arrangements",
      "Music and entertainment",
      "Special dining arrangements",
    ],
  },
  {
    id: 6,
    title: "Engagement Ceremony Package",
    price: 3999,
    description:
      "Beautiful engagement ceremony planning with stunning decorations and arrangements.",
    image:
      "https://pioneereventshq.com/wp-content/uploads/2024/06/Back-Drop-3-1-800x600.jpg",
    highlights: [
      "Stage decoration",
      "Lighting arrangements",
      "Photography & videography",
      "Guest seating arrangements",
    ],
  },
  {
    id: 7,
    title: "Baby Shower Celebration",
    price: 1799,
    description:
      "Adorable baby shower planning with cute themes and decorations.",
    image:
      "https://pioneereventshq.com/wp-content/uploads/2024/06/BAck-Drop-2-1-800x600.jpg",
    highlights: [
      "Theme-based decoration",
      "Games and activities",
      "Catering services",
      "Gift arrangements",
    ],
  },
  {
    id: 8,
    title: "Graduation Party Package",
    price: 2199,
    description:
      "Celebrate your achievement with a memorable graduation party setup.",
    image:
      "https://pioneereventshq.com/wp-content/uploads/2024/06/Back-Drop-1-1-800x600.jpg",
    highlights: [
      "Custom banners & posters",
      "Photo booth setup",
      "Music and DJ",
      "Food and beverages",
    ],
  },
];

const faqs=[
    {
        question: "What services does Pioneer Events offer?",
        answer: "Pioneer Events offers comprehensive event planning and execution services, including venue selection, catering, entertainment, and logistics management."
    },
    {
        question: "How can I customize my event package?",
        answer: "You can customize your event package by contacting our support team to discuss your specific needs and preferences."
    },
    {
        question: "What is the payment process?",
        answer: "We offer flexible payment options, including upfront payments and installment plans. Detailed payment information will be provided during the booking process."
    },
    {
        question: "What is your service area?",
        answer: "Pioneer Events primarily serves clients in the metropolitan area, but we are open to discussing events in other locations based on client needs."
    }
];

app.get('/api/products',(req,res)=>{
    res.json(products);
});
app.get('/api/faqs',(req,res)=>{
    res.json(faqs);
});
app.get('/api/health',(req,res)=>{
    res.json({status:'OK'});
});

const PORT=5000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));