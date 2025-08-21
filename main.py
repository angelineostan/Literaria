from flask import Flask,  render_template

app = Flask(__name__, 
            template_folder='../template',
            static_folder='../static',
            static_url_path='/static')
app.secret_key = 'supersecretkey'

@app.route('/')
def home():
    return render_template('homepage/index.html')

@app.route('/about')
def about():
    return render_template('homepage/about.html')

@app.route('/contact')
def contact():
    return render_template('homepage/contact.html')

@app.route('/login')
def login():
    return render_template('auth/login.html')

@app.route('/role_select')
def role_select():
    return render_template('role/role_select.html')
    


if __name__ == '__main__':
    app.run(debug=True)