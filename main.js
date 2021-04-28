body = $('body')
div = $('<div class="header" ></div>')
header = $('<div> <h1  class="h1">Meraki Platform</h1></div> ')
header_2=$('<div><h2 class="h2">Meraki Platform</h2></div>')
email = $(' <div><input type="text" placeholder="Email"></div>')
fullName = $(' <div><input type="text" placeholder="Full Name"></div>')
userName = $(' <div><input type="text" placeholder="Username"></div>')
password = $(' <div><input type="password" placeholder="Password"></div>')
signUp = $(' <div><button class="Button"> Sign Up</button></div>')
agreement = $('<div> <p id="agreement" >By signing up, you agree to our Terms ,<br> Data Policy and Cookies Policy .</p></div>')
signIn = $(' <div class ="signIn"><p id="agreement" >Have an account? <a href="#signIn"> SignIn</a></p> </div>')
body.append(div)
div.append(header)
div.append(header_2)
div.append(email)
div.append(fullName)
div.append(userName)
div.append(password)
div.append(signUp)
div.append(agreement)
body.append(signIn)





















