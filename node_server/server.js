import express from "express";
import { promises as fs } from 'fs';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const mongoUrl = process.env.MONGO_DB_URL;
const flaskUrl = process.env.ML_SERVER_URL
const dbName = process.env.MONGO_DB;

const client = await MongoClient.connect(mongoUrl);
const db = client.db(dbName);

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/api', async (req, res) => {
    try {
        const ml_response = await fetch(flaskUrl);
        const json_response = await ml_response.json()
        res.json(json_response);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Can't connect to ML server");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

process.on('SIGINT', function() {
  console.log('Shutting down the server.');
  client.close();
  process.exit();
});

