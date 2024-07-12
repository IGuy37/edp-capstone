import pandas as pd 
import pickle
import pyarrow.parquet as pq
from flask import Flask, jsonify, request
import joblib
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

app = Flask(__name__)
MODEL_FILENAME = "model.pkl"
with open(MODEL_FILENAME, 'rb') as file:
   model : DecisionTreeClassifier = pickle.load(file)

@app.route('/')
def say_hello():
    return jsonify({"prediction" : "Hello, World!"})

@app.route('/predict',methods=["POST"])
def predict():
    data = request.get_json()
    print(data)
    df = pd.DataFrame(data, index=[0])
    X_test = pd.get_dummies(df[['job_role','location']])
    prediction =  model.predict(X_test)
    print(prediction)
    return jsonify({"salary" : prediction[0]})


def main():
    app.run()

if(__name__ == "__main__"):  
    main()