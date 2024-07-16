# Travelers EDP Capstone Project
The capstone project for the Travelers Engineering Development Program (EDP). This project implements a Searchable Enterprise Directory (SED) using the MERN stack and Python.

## Project Description
We created a web application to allow employees to search an enterprise-wide employee directory. Employees can find others' names, job titles, where they work, phone numbers, their boss, and who they report to. They can also see the salary of everyone if they work in HR and they can see the salary of themselves and their subordinates.

We also created a Linear Regression model to predict an employee's salary based on their work location and job role.

## Learning Goals
By completing this capstone project, we:
- Created a MERN stack application to implement the searching feature of the SED
    - Created a server in Node.js using the Express library
        - Used a rate limiter to help prevent DoS attacks on our server
        - Created a login system using mongoDB
        - Obfuscated the salary of employees the currently logged in user does not have authorization to see
    - Used Vite+React to create a frontend webpage
        - Used Bootstrap to improve the visuals of the webpage
- Created a Python web server to serve the Linear Regression model
    - Used `pandas` and `scikit-learn` to train the model
    - Used `pickle` to preserve the model and its column headers in a `.pkl` file
    - Used `Flask` to serve the model for the Node.js server to get a predicted salary
- Developed a website using requirements alone
    - Unlike the guided projects where we were given instructions on how to implement things, this project was a lot more like reality where we were just given requirements and told to implement them.

## How To Run
Ensure NPM, mongoDB, and Python are installed. If needed, also install `pandas` and `scikit-learn` using the Python package manager of your choice. To initialize dependencies in the Node.js server and React client, run `npm install` in their respective directories.

In your React client and Node.js server, create `.env` files. In the Node server's `.env` file, create the following environment variables:
```
ML_SERVER_URL = #URL to your running Flask application
MONGO_DB = #Name of your mongoDB database
MONGO_DB_URL = #The URL to your running mongoDB server
MONGO_DB_COLLECTION = #The name of your mongoDB collection
```
In the React Client's `.env` file, create the following environment variable:
```
VITE_API_URL = #URL to your running Node server, plus "/api" at the end
```
To run the Flask server, run in a terminal:
```bash
cd data_server
python ml_server.py
```

To run the node server in a separate terminal:
```bash
cd node_server
npm run start
```

To run the React Client in a separate terminal:
```bash
cd react_client
npm run dev
```
