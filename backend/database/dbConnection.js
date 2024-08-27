import mongoose from "mongoose";

export const dbConnection =()=>{

    mongoose.connect("mongodb+srv://priyanshukushwaha311:wQnciDoTKLHTFgpu@cluster0.ryyi8gt.mongodb.net/",  {
        dbName:"food_order",
    }).then(()=>{
        console.log("Database Connected Successfully");
    }).catch(err=>{
        console.log("Not connected  ", err);
    })
   
}