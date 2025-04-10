import { NextResponse } from "next/server";

// Updated product list matching frontend data
const products = [
  {
    id: 1,
    name: "Smartphone",
    price: "₹84,999",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/d/4/-original-imaha9gqfarm6w2a.jpeg?q=70",
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    price: "₹2,499",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/h/g/r/-original-imah2pguxst5hacc.jpeg?q=70&crop=false",
  },
  {
    id: 3,
    name: "Laptop",
    price: "₹49,999",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ7ZlsEDJdyynQDsmerQiTs6EKJh9t8XXEccYu4Lfn5f0eNG-yOvXM0bWAmc4Lq6XuEfxapmHZ-66OgHn_YJ8NTc49V7IzAuMAOn6hJ1rw0",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: "₹3,999",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/n/o/z/-original-imah76jstup5zdww.jpeg?q=70",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: "₹1,999",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzO2aUkPx4r1SIu1Q6_GPnQu-XQG-1F8Pow&s",
  },
  {
    id: 6,
    name: "Gaming Mouse",
    price: "₹999",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRvSvyWPzLyAY8VGcwA-9rivSHAIMkc4TSlnF_lteSEr1-YQVd9CbqLaX7NQUirfFA08NRsoFLMtkZhZb5koEFLI_acVwMNlB5fWjEWctQ2W3WzpfZkq3b9p8M",
  },
];

export async function GET() {
  return NextResponse.json(products, { status: 200 });
}
