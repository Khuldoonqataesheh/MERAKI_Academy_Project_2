body = $(".sigInPage");
body_1 = $(".signUpPage");
div = $('<div class="header" ></div>');
header = $('<div> <h1  class="h1">Meraki Platform</h1></div> ');
header_2 = $('<div><p class="h3">Sign up to join <span class = "h2">MERAKI</span> family .</p></div>');
email = $(
  ' <div><input type="text" placeholder="Email" class = "email"></div>'
);
displayName = $(
  ' <div><input class = "displayName" type="text" placeholder="Display Name"></div>'
);
password = $(
  ' <div><input type="password" placeholder="Password" class = "password"></div>'
);
signUp = $(' <div><button class="signUp" > Sign Up</button></div>');
agreement = $(
  '<div> <p class="agreement" >By signing up, you agree to our Terms ,<br> Data Policy and Cookies Policy .</p></div>'
);
signIn = $(
  ' <div class ="signIn"><p id="agreement" >Have an account? <a class="sign" href="#contact"> SignIn</a></p> </div>'
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

div_2 = $('<div class="header" ></div>');
header_2 = $('<div> <h1  class="h1">Meraki Platform</h1></div> ');
displayName_2 = $(
  ' <div><input class = "displayName_2" type="text" placeholder="Email or Display Name"></div>'
);
password_2 = $(
  ' <div><input type="password" placeholder="Password" class = "password_2"></div>'
);
signIn_2 = $(' <div><button class="signIn_2"> SignIn</button></div>');
signIn = $(
  ' <div class ="signIn"><p id="agreement" >Do not have an account? <button class = "SignUp"> SignUp</button></p> </div>'
);
body.append(div_2);
div_2.append(header_2);
div_2.append(displayName_2);
div_2.append(password_2);
div_2.append(signIn_2);
body.append(signIn);

$(".sign").on("click", () => {
  $(".signUpPage").css({
    display: "none",
  });
  $(".sigInPage").css({
    display: "block",
  });
});
$(".SignUp").on("click", () => {
  $(".signUpPage").css({
    display: "block",
  });
  $(".sigInPage").css({
    display: "none",
  });
});
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
arr = [];

let text = $(".displayName");
let mail = $(".email");
let pass = $(".password");
const signUpClick = $(".signUp");
signUpClick.on("click", () => {
  obj = {};
  for (let i = 0; i < displayNameForUsers.length; i++) {
    if (displayNameForUsers[i].toLowerCase() === text.val().toLowerCase()) {
      obj.displayName = displayNameForUsers[i];
      text.val("");
    }
  }
  if (obj.displayName === undefined) {
    text.val("wrong display name");
  }

  if (
    mail.val().length <= 6 ||
    !mail.val().includes("@") ||
    !mail.val().includes(".com")
  ) {
    mail.val("email must be at least 6 characters long");
  }
  if (pass.val().length < 8) {
    pass.val("password must be at least 8 characters long");
  }
  if (mail.val().length > 6 && pass.val().length >= 8 && obj.displayName) {
    if (mail.val().includes("@") && mail.val().includes(".com")) {
      {
        obj.email = mail.val();
        obj.pass = pass.val();
        arr.push(obj);
        mail.val("");
        pass.val("");
        console.log(arr);
        $(".signUpPage").css({
          display: "none",
        });
        $(".mainpage").css({
          display: "block",
        });
      }
    }
  }
});

let text_2 = $(".displayName_2");
let pass_2 = $(".password_2");
const signInClick = $(".signIn_2");
signInClick.on("click", () => {
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].displayName.toLowerCase() === text_2.val().toLowerCase() ||
      (arr[i].email.toLowerCase() === text_2.val().toLowerCase() &&
        arr[i].pass === pass_2.val())
    ) {
      text_2.val("");
      pass_2.val("");
      console.log(arr[i]);
      $(".sigInPage").css({
        display: "none",
      });
      $(".mainpage").css({
        display: "block",
      });
    }
  }
});

$(".logout").on("click", () => {
  $(".mainpage").css({
    display: "none",
  });
  $(".sigInPage").css({
    display: "block",
  });
});
$(".plus").on("click", () => {
  $(".posts").css({
    display: "block",
  });
});
