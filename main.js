body = $(".signInPage");
body_1 = $(".signUpPage");
div = $('<div class="header" ></div>');
header = $('<div> <h1  class="h1">Meraki Platform</h1></div> ');
header_2 = $('<div><h2 class="h2">Meraki Platform</h2></div>');
email = $(' <div><input type="text" placeholder="Email"></div>');
displayName = $(' <div><input class = "displayName" type="text" placeholder="display Name"></div>');
password = $(' <div><input type="password" placeholder="Password"></div>');
signUp = $(' <div><button class="signUp"> Sign Up</button></div>');
agreement = $(
  '<div> <p id="agreement" >By signing up, you agree to our Terms ,<br> Data Policy and Cookies Policy .</p></div>'
);
signIn = $(
  ' <div class ="signIn"><p id="agreement" >Have an account? <a href="file:///D:/MERAKI/Projects/MERAKI_Academy_Project_2/MERAKI_Academy_Project_2/index_2.html"> SignIn</a></p> </div>'
);
body_1.append(div);
div.append(header);
div.append(header_2);
div.append(displayName);
div.append(email);
div.append(password);
div.append(signUp);
div.append(agreement);
body_1.append(signIn);
const signInClick = $("a");
signUpPage = $(".signUpPage");
let a = false;
signInClick.on("click", () => {
  return display_2();
});

div_2 = $('<div class="header" ></div>');
header_2 = $('<div> <h1  class="h1">Meraki Platform</h1></div> ');
email_2 = $(' <div><input type="text" placeholder="Email"></div>');
password_2 = $(' <div><input type="password" placeholder="Password"></div>');
signIn_2 = $(' <div><button class="signIn_2"> SignIn</button></div>');
signIn = $(
  ' <div class ="signIn"><p id="agreement" >Do not have an account? <a href="file:///D:/MERAKI/Projects/MERAKI_Academy_Project_2/MERAKI_Academy_Project_2/index.html#contact"> SignUp</a></p> </div>'
);
body.append(div_2);
div_2.append(header_2);
div_2.append(email_2);
div_2.append(password_2);
div_2.append(signIn_2);
body.append(signIn);
displayNameForUsers = [
  "A01_Abdalafo",
  "A03_Ahmad",
  "A04_Ala",
  "A05_Amina",
  "A06_Asma",
  "A07_Bushra",
  "A08_Deyaa",
  "A09_Duaa",
  "A10_Hashem",
  "A11_Ibrahim",
  "A12_Khuldoon",
  "A14_Loay",
  "A15_Manaf",
  "A17_Jamal",
  "A18_Obaidat",
  "A19_Noof",
  "A20_Roaa",
  "A21_Yazan",
  "A22_Yousef",
  "A23_Nisreen",
  "A24_Arafeh",
  "A25_Tariq",
  "A26_Abedalnabi",
  "B02_Abdalgani",
  "B03_Ahmed",
  "B04_Alaa",
  "B05_Aref",
  "B06_Bayan",
  "B07_Ghaidaa",
  "B08_Mohammad",
  "B09_Al_Jalamneh",
  "B10_MustafaH",
  "B13_Ruaa",
  "B14_Malak",
  "C05_Basem",
  "C06_Bayan",
  "C08_Farid",
  "C09_Fawzi",
  "C10_Firas",
  "C11_Heba",
  "C13_Jadallah",
  "C14_Abukhamees",
  "C15_Khaled",
  "C18_Maisaa",
  "C21_Mohannad",
  "C22_Obada",
  "C23_Omar",
  "C27_Al_Araj",
  "C28_Hussain",
  "C31_Tawfeeq",
];
obj = {}
let text = $('.displayName')
const signUpClick = $(".signUp");
signUpClick.on("click",  (username, password) => {
  for(let i = 0 ;i<displayNameForUsers.length;i++) {
       if (displayNameForUsers[i]===text.val()) {
     obj.displayName = displayNameForUsers[i]
     text.val("")
    }
    
  
   /* if (password.length <= 8) {
      return "password must be at least 8 characters long";
    }
  
    if (username.toLowerCase() === "john_doe") {
      if (password === "koljgwEA") {
        return "login successful";
      }
    } else if (username.toLowerCase() === "jane_doe") {
      if (password === "12345678") {
        return "login successful";
      }
    } else {
      return "username doesn't exist";
    }
  
    return "wrong password";
  };*/
  }
  console.log(obj)
});
