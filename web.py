from flask import Flask, render_template  #request, jsonify
import requests
#from markupsafe import escape
#from werkzeug import datastructures

app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/visit', methods=['GET'])
def visit():
    url = 'https://fanyi.baidu.com/v2transapi' #need api link
    myobj = 'need input'  #The type of input the API accepts
    x = requests.post(url, data = myobj)
    print(x.text)
    return myobj #for testing purpose


# Depending on your API design,
# you may want to create JSON responses for types other than dict.
# In that case, use the jsonify() function, which will serialize any supported JSON data type.
# Or look into Flask community extensions that support more complex applications.
# @app.route("/users")
# def users_api():
#     users = get_all_users()
#     return jsonify([user.to_json() for user in users])

if __name__ == '__main__':
    app.run(debug=True)
