from crypt import methods
from flask import Flask,render_template,request,redirect,url_for,flash,jsonify
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)

app.config ['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:Taran@436@localhost/demoDB'
db = SQLAlchemy(app)

class Data(db.Model):
    __tablename__ = 'data'
    id = db.Column(db.Integer,primary_key=True)
    firstname = db.Column(db.String(20))
    lastname = db.Column(db.String(20)) 
    email = db.Column(db.String(20),unique=True)
    password = db.Column(db.String(20))

    def __init__(self,email,password,firstname,lastname):
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.password = password



@app.route('/')
def hello():
    return render_template('index.html')

#handle the home page
@app.route("/",methods=["post"])
def thankyou():
    if request.method =="POST":
        first_name = request.form["first_name"]
        last_name = request.form["last_name"]
        DOB = request.form["DOB"]
        email = request.form['email_name']  
        password = request.form['password_name']
    
    return render_template("thanyou.html")


@app.route('/about')
def aboutUs():
    return '<h1>About US! </h1>'
















