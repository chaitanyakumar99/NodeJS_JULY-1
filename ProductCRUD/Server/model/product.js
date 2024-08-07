import mongoose from "mongoose";

let productSchema = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true },
    info: { type: String, required: true }
})


let product = mongoose.model("products", productSchema)


export default product