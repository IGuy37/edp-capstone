import express, { query } from "express";
import { promises as fs } from 'fs';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';
import RateLimit from 'express-rate-limit';

dotenv.config();
const mongoUrl = process.env.MONGO_DB_URL;
const flaskUrl = process.env.ML_SERVER_URL
const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_DB_COLLECTION;


const client = await MongoClient.connect(mongoUrl);
const db = client.db(dbName);
const collection = db.collection(collectionName);

const PORT = 3001;
const app = express();

// set up rate limiter: maximum of 60 requests per minute
const maxRequests = 60;
const numSeconds = 60;
const limiter = RateLimit({
  windowMs: numSeconds * 1000, // 1000 milliseconds = 1 second
  max: maxRequests, 
});

let currently_logged_in_user = null;
let loggedInAsHR = false;

// apply rate limiter to all requests
app.use(limiter);

app.use(express.json());
app.use(cors());

app.get('/api', async (req, res) => {
    try {
        const ml_response = await fetch(`${flaskUrl}`);
        const json_response = await ml_response.json()
        res.json(json_response);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Can't connect to ML server");
    }
});

app.post('/api/search', async (req, res) => {
    try{
  //     if(!currently_logged_in_user){
  //         res.status(401).send("Please log in to search for employees.");
  //          return;
//}
        console.log(req.body);
        const resultArr = await collection.find(req.body).toArray();
        if(resultArr.length <= 0){
            res.status(404).send("User not found");
            return;
        }
        const result = resultArr[0];
        console.log(result);
        currently_logged_in_user = result.name
        //Obfuscate salary if user is unauthorized to see it
        const isBossOfLoggedInUser = !!result.boss && 
            (result.boss.toLowerCase() === currently_logged_in_user.toLowerCase());
        console.log(currently_logged_in_user)
        if (!isBossOfLoggedInUser &&
            !loggedInAsHR  &&
            result.name.toLowerCase() !== currently_logged_in_user.toLowerCase())
        {
            result.salary = "*****";
        }
        console.log(result)
        
        res.json(result);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Can't search right now.");
    }
});

app.post('/api/prediction', async (req, res) => {
    try {
        const ml_response = await fetch(`${flaskUrl}/predict`, {
            method : "POST",
            body : JSON.stringify(req.body),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const json_response = await ml_response.json();
        res.json(json_response);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Can't connect to ML server");
    }
});

app.post('/api/login', async (req, res) => {
    try{
        const {name, password} = req.body;
        //console.log(req.body)
        const result = await collection.find({name: name, password: password}).toArray();
        if(result.length <= 0){
            res.status(401).send("Incorrect username or password. Please try again.");
            return;
        }
        //console.log(result)
        loggedInAsHR = result[0].job_role.toUpperCase() === 'HR';
        currently_logged_in_user = name;
        res.json({
            ok: true,
            message: `Successfully logged in as ${currently_logged_in_user}`
        })
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Can't login right now.");
    }
})


app.put('/api/register', async (req, res) => {
    try{
        if(!req.name || !req.password){
            res.status(403).send("Please provide a name and password.");
            return;
        }
        const result = await collection.insertOne(req.body);
        console.log(`New document created with _id: ${result.insertedId}`);
        res.json(result)
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Can't register new user right now.");
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
    console.log('Shutting down the server.');
    client.close();
    process.exit();
});

