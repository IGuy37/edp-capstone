import pandas as pd 
import pickle
import pyarrow.parquet as pq
from flask import Flask, jsonify, request

from sklearn.tree import DecisionTreeClassifier

app = Flask(__name__)
#MODEL_FILENAME = "trained_model.pkl"
#with open(MODEL_FILENAME, 'rb') as file:
#    model : DecisionTreeClassifier = pickle.load(file)

@app.route('/')
def say_hello():
    return jsonify({"prediction" : "Hello, World!"})

@app.route('/predict',methods=["POST"])
def predict():
    data = request.get_json()
    job_title = data.get('job_title')
    location = data.get('location')
    print(job_title, " ", location)
    return jsonify({"salary" : 86000})

def main():
    app.run()

if(__name__ == "__main__"):  
    main()