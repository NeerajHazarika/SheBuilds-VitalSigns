from flask import Flask
import pymongo
app = Flask(__name__)

client = pymongo.MongoClient('mongodb://localhost:27017')
db = client['VitalSignsDB']

from api import forms
from api import patient
