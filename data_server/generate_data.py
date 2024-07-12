from pymongo import MongoClient
from faker import Faker
import random
import json
# from dotenv import load_dotenv
# from os import getenv

def generate_data():
    fake = Faker()
    # load_dotenv()
    # MONGO_URL = getenv('MONGO_DB_URL')
    # DB_NAME = getenv('MONGO_DB')
    # COLLECTION_NAME = getenv('MONGO_COLLECTION')

    # client = MongoClient(MONGO_URL)
    # db = client[DB_NAME]
    # collection = db[COLLECTION_NAME]

    job_roles = ['Software Enginer', 'CyberSecurity engineer', 'Manager', 'Sales','HR','CEO']
    JSON_FILENAME = "employee_data.json"
    employee_data = []
    for id in range(20):
        job_role = random.choice(job_roles)
        is_manager = job_role == 'Manager'
        is_ceo = job_role =='CEO'

        employee = {
            'id' : id,
            'name':fake.name(),
            'phone_number':fake.phone_number(),
            'job_role':job_role,
            'work_location':fake.address(),
            'salary': random.randint(60000, 100000),
            'boss': None if is_ceo else random.choice(employee_data)['name'] if employee_data else None,
            'subordinates':[] if is_manager or is_ceo else None
        }
        employee_data.append(employee)

    for employee in employee_data:
        if employee['job_role'] == 'Manager':
            for emp in employee_data:
                if emp['boss'] == employee['name']:
                    employee['subordinates'].append(emp['name'])

    formatted_data = json.dumps(employee_data, indent=2)
    with(open(JSON_FILENAME, 'w')) as file:
        file.write(formatted_data)

    print("Sucessful")
    # client.close()

if(__name__ == "__main__"):
    generate_data()