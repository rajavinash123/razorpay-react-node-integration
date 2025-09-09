import app  from "./app.js";
import dotenv from "dotenv";
dotenv.config();
import Razorpay from "razorpay";

// Razorpay instance
export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET_KEY,
});



app.get('/',(req,res)=>{
    res.send("payment gatway integration working  fine");
})


const  PORT=process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});