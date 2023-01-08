from flask import jsonify
from flask import request

from api import app, db

patientsDB = db['PatientsDB']
#doctorDB = db['DoctorDB']


@app.route('/getDetails', methods=['GET'])
def getDetails():
    email=request.args.get('email')
    existing_user = patientsDB.find_one({'email': email})
    if existing_user:
        name = existing_user.get('name')
        height = existing_user.get('height')
        weight = existing_user.get('weight')
        age = existing_user.get('age')
        avoid = existing_user.get('avoid')
        appointments = existing_user.get('appointments')
        hg = existing_user.get('healthGoals')
        bloodGroup = existing_user.get('bloodGroup')
        pfp=existing_user.get('pfp')
        
        response= jsonify({'name': name,
                        'age': age,
                        'height': height,
                        'weight': weight,
                        'avoid': avoid,
                        'appointments': appointments,
                        'healthGoals': hg,
                         'bloodGroup': bloodGroup,
                        'pfp': pfp})
        response.headers['Access-Control-Allow-Origin'] = '*'
        return response
    else:
        return jsonify({'error': 'User does not exsit'})

@app.route('/addPfp', methods=['POST'])
def addpfp():
    email = request.args.get('email')
    pfpurl=request.args.get('url')
    query={'email': email}
    newval={'$set': {'pfp': pfpurl}}
    patientsDB.update_one(query, newval)
    return {'message':'success'}

@app.route('/addAppointment', methods=['POST'])
def addAppointment():
    email = request.args.get('email')
    date = request.args.get('date')
    time = request.args.get('time')
    key=date+'_'+time
    doc = request.args.get('doctor')
    query = {'email': email}
    existing_user = patientsDB.find_one({'email': email})
    appointments = existing_user.get('appointments')
    if not appointments:
        appointments={key: doc}
    else:
        appointments.update({key: doc})
    newval = {'$set': {'appointments': appointments}}
    patientsDB.update_one(query, newval)
    return {'message': 'success'}

