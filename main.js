body = $('.signInPage')

body_1 = $('.signUpPage')

div = $('<div class="header" ></div>')
header = $('<div> <h1  class="h1">Meraki Platform</h1></div> ')
header_2=$('<div><h2 class="h2">Meraki Platform</h2></div>')
email = $(' <div><input type="text" placeholder="Email"></div>')
fullName = $(' <div><input type="text" placeholder="Full Name"></div>')
userName = $(' <div><input type="text" placeholder="Username"></div>')
password = $(' <div><input type="password" placeholder="Password"></div>')
signUp = $(' <div><button class="Button"> Sign Up</button></div>')
agreement = $('<div> <p id="agreement" >By signing up, you agree to our Terms ,<br> Data Policy and Cookies Policy .</p></div>')
signIn = $(' <div class ="signIn"><p id="agreement" >Have an account? <a href="file:///D:/MERAKI/Projects/MERAKI_Academy_Project_2/MERAKI_Academy_Project_2/index_2.html"> SignIn</a></p> </div>')
body_1.append(div)
div.append(header)
div.append(header_2)
div.append(email)
div.append(fullName)
div.append(userName)
div.append(password)
div.append(signUp)
div.append(agreement)
body_1.append(signIn)
const signInClick = $("a");
signUpPage = $('.signUpPage')
let a = false
signInClick.on("click", () => {
  
       return display_2()
  });
  
  
      
    
        div_2 = $('<div class="header" ></div>')
        header_2 = $('<div> <h1  class="h1">Meraki Platform</h1></div> ')
        email_2 = $(' <div><input type="text" placeholder="Email"></div>')
        password_2 = $(' <div><input type="password" placeholder="Password"></div>')
        signIn_2 = $(' <div><button class="Button"> SignIn</button></div>')
        signIn = $(' <div class ="signIn"><p id="agreement" >Do not have an account? <a href="file:///D:/MERAKI/Projects/MERAKI_Academy_Project_2/MERAKI_Academy_Project_2/index.html#contact"> SignIn</a></p> </div>')
        body.append(div_2)
        div_2.append(header_2)
        div_2.append(email_2)
        div_2.append(password_2)
        div_2.append(signIn_2)
        body.append(signIn)
        
  


















