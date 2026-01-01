// fun button action
function showMessage(){
  alert("Thanks for reaching out! 🚀 — From Madhu");
}

// email validator
function validateEmail(email){
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

// signup
function validateSignup(){
  if(sname.value==""||semail.value==""||spass.value==""){
    alert("All fields are required");
    return false;
  }
  if(!validateEmail(semail.value)){
    alert("Enter a valid email");
    return false;
  }
  if(spass.value.length<6){
    alert("Password must be 6+ characters");
    return false;
  }
  alert("Signup successful 🎉");
  return true;
}

// login
function validateLogin(){
  if(lemail.value==""||lpass.value==""){
    alert("Email & password required");
    return false;
  }
  alert("Login success 🔐");
  return true;
}

// contact
function validateContact(){
  if(cname.value==""||cemail.value==""||cmsg.value==""){
    alert("Please fill all fields");
    return false;
  }
  if(!validateEmail(cemail.value)){
    alert("Enter valid email");
    return false;
  }
  alert("Message sent 💌");
  return true;
}
