import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://userAdmin:leopassword70139@cluster0.288uaks.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}

