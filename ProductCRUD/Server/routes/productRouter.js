import express from 'express'
import product from '../model/product.js';

let router = express.Router();

router.get("/", (req, resp) => {

    resp.json({ "msg": "Product -Root Request" })

});

router.get("/read", async (req, resp) => {

    try {
        let products = await product.find()
        return resp.status(200).json(products)
    }
    catch (err) {
        return resp.status(401).json({"msg":err.message})
    }
})



export default router