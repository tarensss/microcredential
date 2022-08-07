from flask import Flask,render_template, request
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)



app.config ['SQLALCHEMY_DATABASE_URI']='postgresql://DB_USER:PASSWORD@HOST/DATABASE'
db = SQLAlchemy(app)


class Data(db.Model):
    __tablename__ = 'data'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    email = db.Column(db.String(120))
    dob = db.Column(db.String(120))
    age = db.Column(db.Integer)

    def __init__(self, name, email, dob, age):
        self.name = name
        self.email = email
        self.dob = dob
        self.age = age

    def thankyou():
        if request.method == 'POST':
            email = request.form["email_name"]
            height = request.form["height_name"]
            weight = request.form["weight_name"]
            print(request.form)
            return render_template('thankyou.html')
            








@app.route("/")
def hello():
    return render_template('forms.html')

@app.route("/about")
def aboutUs():
    return "<h1>About Us!</h1>"

@app.route("/contact")

def contactUs():
    return "<h1>Contact Us!</h1>"

@app.route("/")
def index():
 return render_template('index.html')


@app.route('/', methods=['POST'])
def thankyou():
    # the methods that handle requests are called views, in flask
 # form is a dictionary like attribute that holds the form data
    if request.method == 'POST':
        email =request.form["email_name"]
    return render_template('thankyou.html')



if __name__=="__main__":
    app.run()
