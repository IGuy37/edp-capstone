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

prediction = model.predict(X_test)

#create pickle file
filename = "model.pkl"
with open(filename, 'wb') as file:
    pickle.dump(model, file)

filename = "header_columns.pkl"
with open(filename, 'wb') as file:
    pickle.dump(X.columns, file)

new_data = pd.DataFrame([['Software Engineer','Hartford']],columns=['job_role','location'])
new_data_encoded = pd.get_dummies(new_data)

missing_cols =set(X.columns) -set(new_data_encoded.columns)
for col in missing_cols:
    new_data_encoded[col]=0

new_data_encoded = new_data_encoded[X.columns]

# predict_salary = model.predict(new_data_encoded)

# print(predict_salary)





#df = pd.DataFrame([['CEO','Hartford']],columns=['job_role','location'])
#preds = model.predict(df)
#print(preds)
#print(df)





