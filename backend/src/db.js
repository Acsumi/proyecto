import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
        await mongoose.connect("mongodb+srv://PBOO:DELunoAL7conDEmayuscula@cluster0.ijzsw6v.mongodb.net/test-PBOO");
        console.log(">>>>>>>>>>>>Estás conectado con éxito a tu base de datos");
    } catch (error) {
        console.log(error);
    }
};