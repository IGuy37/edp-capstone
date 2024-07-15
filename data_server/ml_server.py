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


COLUMN_HEADERS_FILENAME = "header_columns.pkl"
with open(COLUMN_HEADERS_FILENAME, 'rb') as file:
  X_columns = pickle.load(file)

@app.route('/')
def say_hello():
    return jsonify({"prediction" : "Hello, World!"})

@app.route('/predict',methods=["POST"])
def predict():
    data = request.get_json()
    print(data)
    #print(X_columns)
    df = pd.DataFrame(0, index=[0], columns=X_columns)

    #TODO: Make it not ignore location/job_role if not found somehow
    job_role_col_name = 'job_role_' + data['job_role']
    if job_role_col_name in X_columns:
        df[job_role_col_name] = 1
    
    location_col_name = 'location_' + data['location']
    if location_col_name in X_columns:
        df[location_col_name] = 1
    #print(df)
    #X_test = pd.get_dummies(df)#[['job_role','location']])
    # X_test = X_test[X_columns]
    # missing_cols =set(X_columns) -set(X_test.columns)
    # for col in missing_cols:
    #     X_test[col]=0
    prediction =  model.predict(df)
    print(prediction)
    return jsonify({"salary" : round(prediction[0], 2)})


def main():
    app.run()

if(__name__ == "__main__"):  
    main()