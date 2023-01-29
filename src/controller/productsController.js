import { ObjectId } from "mongodb"
import db from "../database/database.js"



export async function getProducts(req, res){
    const categoria = req.params.categoria

    try {
    
    const products = await db.collection('products').find({categoria}).toArray()
    return res.status(200).send(products)
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

export async function getAllProducts(req, res){
    try {
    
        const allProducts = await db.collection('products').find().toArray()
        return res.status(200).send(allProducts)
            
     } catch (error) {
        return res.status(500).send(error.message)
    }
}

export async function getBook(req, res){
    const id = req.params.id

    try {
    
        const book = await db.collection('products').findOne({id})
        return res.status(200).send(book)
            
     } catch (error) {
        return res.status(500).send(error.message)
    }
}