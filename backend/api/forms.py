from api import app, db
from flask import request
from flask import jsonify

patientsDB = db['PatientsDB']
#doctorDB = db['DoctorDB']


@app.route('/test')
def test():
    return jsonify(dict({'message': 'test'}))


@app.route('/signUpAsPatient', methods=['POST'])
def signUpAsPatient():
    email = request.args.get('email')
    password = request.args.get('password')
    name = request.args.get('name')
    aadhar = request.args.get('aadhar_no')
    phone = request.args.get('phone')
    gender = request.args.get('gender')
    height = request.args.get('height')
    weight = request.args.get('weight')
    blood_group = request.args.get('bloodGroup')
    allergies = request.args.get('allergies')
    dob=request.args.get('dob')
    country=request.args.get('country')
    state=request.args.get('state')
    city=request.args.get('city')

    # Validate the entered information
    if not email or not password or not name or not aadhar or not dob or not country or not state or not city:
        return jsonify({'error': 'All fields are required'}), 400

    if len(aadhar) != 12:
        return jsonify({'error': 'Enter Valid Aadhar'}), 400

    existing_user = None
    existing_user = patientsDB.find_one({'email': email})
    if existing_user:
        return jsonify({'error': 'Email is already in use'}), 400

    # Create a new user if the email is available
    patientsDB.insert_one({'email': email, 'password': password, 'name': name,
                           'aadhar': aadhar, 'phone': phone, 'gender': gender, 'height': height, 'weight': weight,
                           'bloodGroup': blood_group, 'allergies': allergies})
    return jsonify({'message': 'Sign up successful'})



@app.route('/loginAsPatient', methods=['GET'])
def loginAsPatient():
    email=request.args.get('email')
    password = request.args.get('password')
    existing_user = patientsDB.find_one({'email': email})
    if existing_user:
        if existing_user['password']==password:
            return jsonify({'message': 'success'})
        else:
            return jsonify({'error': 'Enter correct credentials'}), 400
    else:
        return jsonify({'error': 'User does not exist'}), 400


# @app.route('/loginAsHCP', methods=['GET'])
# def loginAsHCP():
#     email=request.args.get('email')
#     password = request.args.get('password')
#     existing_user = hcpDB.find_one({'email': email})
#     if existing_user:
#         if existing_user['password']==password:
#             return jsonify({'id_': str(existing_user['_id'])})
#         else:
#             return jsonify({'error': 'Enter correct credentials'}), 400
#     else:
#         return jsonify({'error': 'User does not exist'}), 400

