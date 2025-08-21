# Literaria
An Interactive and Adaptive Reading Literacy Platform for Student Engagement and Comprehension


## **Setup Flask**

**Step 1: Install Python**
   - Go to Python's official website: https://www.python.org/downloads/
   - Download Python vith a version Python 3.x
   - Run the isntaller and check ✅ "Add Python to PATH"
   - Verify installion (Open the command Line and type: python --version)
  
**Step 2: Install extensions inside VS Code:**
   - Python Debugger (Microsoft)
<img width="712" height="235" alt="Screenshot 2025-08-21 174223" src="https://github.com/user-attachments/assets/cf362ec3-f6b3-4842-8859-3427fc5a9fbe" />


   - Pylance (Microsoft)
<img width="679" height="214" alt="Screenshot 2025-08-21 174420" src="https://github.com/user-attachments/assets/cd31a0a0-c57e-46c7-b2a0-d210076b4724" />

**Step 3: Create Project Folder**
   - Create Literaria Folder
        - backend                (Folder)
        - javascript             (Folder)
           - navigation.js       
        - static                 (Folder)
           - css                 (Folder)
             - style.css
           - images              (Folder)
        - template               (Folder)
           - auth                (Folder)
             - student_login.html
             - student_signup.html
             - teacher_login.html
             - teacher_set_acc.html
             - teacher_signup.html
           - homepage            (Folder)
              - index.html
              - aboutus.html
              - contactus.html
           - role                (Folder)
              - role_select.html
           - student             (Folder)  
           - teacher             (Folder)  
        - main.py                (python file)

**Step 4: Set Up Virtual Environment**
1. Open VS Code terminal
2. Navigate Project Folder
   - Type and Enter: ```cd Literaria```
3. Create a vitual environment
   - Type and Enter: ```python -m venv venv```

**Step 5: Install Flask
**1. Inside the virtual environment or the CMD
   - Enter this command: ```pip install flask```
     (if pip is not recognized, check if pip is installed by using this command: ```python -m pip --version```)
     (Make sure that you selected to Add Python to Path upon installation, it is to prevent this type of error)
     (Then you try again the ```pip install flask```)

**Step 6: Create a Flask File
**1. Inside the Literaria Folder, create a python file ```main.py```
2. Next is to follow the code in the  ```main.py```
3. Follow the rest of the codes in the the ```Template``` folder

**Step 7: Run the Flask File**
1. In the terminal
   Enter this command: ```python main.py```
2. You should see something like this: ```* Running on http://127.0.0.1:5000```
3. Open your browser and enter the link ```http://127.0.0.1:5000```



