from pymongo import MongoClient
from faker import Faker
import random

fake = Faker()
client = MongoClient('mongodb://localhost:27017/')
db = client['company']
collection = db['employees']

job_roles = ['Software Enginer', 'CyberSecurity engineer', 'Manager', 'Sales','HR','CEO']

employee_data = []
for _ in range(20):
    job_role = random.choice(job_roles)
    is_manager = job_role == 'Manager'
    is_ceo = job_role =='CEO'

    employee = {
        'name':fake.name(),
        'phone_number':fake.phone_number(),
        'job_role':job_role,
        'work_location':fake.address(),
        'boss': None if is_ceo else random.choice(employee_data)['name'] if employee_data else None,
        'subordinates':[] if is_manager or is_ceo else None
    }
    employee_data.append(employee)

for employee in employee_data:
    if employee['job_role'] == 'Manager':
        for emp in employee_data:
            if emp['boss'] == employee['name']:
                employee['subordinates'].append(emp['name'])

collection.insert_many(employee_data)

print("sucessful")


def generate_data():
    pass

if(__name__ == "__main__"):
    generate_data()