import { MongoClient } from "mongodb";
import dotenv from 'dotenv'

dotenv.config()

const mongoClient = new MongoClient(process.env.DATABASE_URL)

let db;

try {
    await mongoClient.connect()
    const db = mongoClient.db("bookland-database")
} catch (error) {
    
}

export default db