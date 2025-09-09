import { instance } from "../server.js";

export const processPayment= async(req,res)=>{
    const options={
        amount:Number(req.body.amount*100),//amoutn in the sammallest currency unit
        currency:"INR"
    }
    const order=await instance.orders.create(options)
 res.status(200).json({
        sucess:true,
        message:"payment gatway integrstion working",
        order
    });
}
export const getKey=async(req,res)=>{
    res.status(200).json({
        key:process.env.RAZORPAY_API_KEY,
        message:"key got sucessfully"
    })
}
