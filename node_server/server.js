import express from "express";
import { promises as fs } from 'fs';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
//const mongoUrl = process.env.MONGO_DB_URL;
const flaskUrl = process.env.ML_SERVER_URL
console.log(flaskUrl)
//const dbName = process.env.MONGO_DB;

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    try {
        const ml_response = await fetch(flaskUrl);
        console.log(ml_response.body)
        res.json(ml_response.body);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Can't connect to ML server");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

