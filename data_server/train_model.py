import pandas as pd 
import numpy as np
import matplotlib.pyplot as plt
import pickle
from sklearn.metrics import accuracy_score
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import json
FILENAME = "employee_data.json"

with open(FILENAME,'r') as file:
    data = json.load(file)

dataframe = pd.DataFrame(data)

X = pd.get_dummies(dataframe[['job_role','location']])
y=dataframe['salary']


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = LinearRegression()
model.fit(X_train,y_train)

#create pickle file
filename = "model.pkl"
with open(filename, 'wb') as file:
    pickle.dump(model, file)

filename = "header_columns.pkl"
with open(filename, 'wb') as file:
    pickle.dump(X.columns, file)





