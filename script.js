function validate() {

  var firstname = document.getElementById('fname');
  var lastname = document.getElementById('lname');
  var dob = document.getElementById('date');
  var phone = document.getElementById('phone');
  var male = document.getElementById('m');
  var female = document.getElementById('f');
  var transgender = document.getElementById('t');
  var primary = document.getElementById('p');
  var secondary = document.getElementById('s');
  var bachelor = document.getElementById('b');
  var address = document.getElementById('address');
  var file = document.getElementById('file');
  var email = document.getElementById('email');
  var passwd = document.getElementById('password');
  var cpasswd = document.getElementById('cpassword');

  var letters = /^[A-Za-z]+$/;
  var numbers = /(\d)/;
  var fname_len = firstname.value.length;
  var lname_len = lastname.value.length;
  var phone_len = phone.value.length;
  var passwd_len = passwd.value.length;
  var pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  
  let text;
  let text1;
  let text3;
  let text4;
  let text5;
  let text6;
  let text7;
  let text8;
  let text9;
  let text10;
  let text11;
  let text12;
  let text13;
  
  //firstname

  if (firstname.value == "") {
    // alert("No blank values allowed");
    text="this field is required.";
  }
    else if (fname_len <= 2) {
      // alert("entered length is not valid");
      text="entered length is not valid";
    }

      else if (firstname.value.match(numbers)) {
        // alert("Please input alphabets characters only");
        text="please input alphabets characters only.";
      }
      else 
      {
        return true;
      }

      document.getElementById('demo').innerHTML = text;




    

  //lastname

  if (lastname.value == "") {
    // alert("No blank values allowed");
    text1="this field is required.";
  }
    else if (lname_len <= 2) {
      //alert("entered length is not valid");
      text1="entered length is not valid";
    }
      else if (lastname.value.match(numbers)) {
        //alert("Please input alphabets characters only");
        text1="please input alphabets characters only";
      }
      else 
      {
        return true;
      }
      document.getElementById('demo1').innerHTML = text1;





  //dob

  if (dob.value == "") {
    //alert("enter date of birth");
    text3 = "enter date of birth";
  }
  document.getElementById('demo3').innerHTML = text3;




  //phone code

  if (phone.value == "" || phone_len >= 11) {
    //alert("No blank values allowed/Please! enter valid number");
    text4 = "enter mobile number";

  }
  else if (phone.value.match(letters)) {
    //alert("Please input alphabets characters only");
    text4="enter valid number";
  }
  else if(phone.value.match(numbers) || phone_len == 10)
  {
    return true;
  }
  document.getElementById('demo4').innerHTML = text4;




  //gender

  if (!male.checked && !female.checked && !transgender.checked) {
   
    //alert("gender not selected");
     text5 = "gender not selected";
  }
  document.getElementById('demo5').innerHTML = text5;





  //education

 if (!primary.checked && !secondary.checked && !bachelor.checked) {
   
    //alert("education level not selected");
    text6 = "education level not selected";
  }
  document.getElementById('demo6').innerHTML = text6;



  //state

  if(document.myform.State.value == "")
  {
    //alert("Please select the state.!");
    text7 = "please select the state";
  }
  document.getElementById('demo7').innerHTML = text7;




//city

if(document.myform.City.value == ""){
  //alert("Please select the city.!");
  text8 ="please select the city";
}
document.getElementById('demo8').innerHTML = text8;




//address

if (address.value == "") {
  //alert("enter the address");
  text9 ="enter the address";
}
document.getElementById('demo9').innerHTML = text9;




//file upload

if (file.value == "") {
  //alert("Please upload the file");
  text10 ="please upload the file";
}
document.getElementById('demo10').innerHTML = text10;


//email code

if(email.value == "")
{
    //alert("Please enter the email");
    text11 = "please enter the email"
}
document.getElementById('demo11').innerHTML = text11;


//password

if(passwd.value == "")
{
    //alert("Please! enter the password.");
    text12 = "please! enter the password."
}
    else if(passwd_len < 8)
    {
        //alert("enter at least 8 characters");
       text12 = "enter at least 8 characters"; 
    }
    
    else if(!passwd.value.match(pattern))
    {
        //alert("enter the valid password pattern");
        text12 = "enter the valid password pattern";
    }
    else{
        return true;
    }
    document.getElementById('demo12').innerHTML = text12;



//cpassword

if(passwd != cpasswd)
{  
  //alert("password must be same!");
   text13 = "password must be same!"  
}  
document.getElementById('demo13').innerHTML = text13;

}


//selection function

function EnableDisableTextBox(State) {
  var selectedValue = State.options[State.selectedIndex].value;
  var text1 = document.getElementById("text1");
  text1.disabled = selectedValue == 1 ? false : true;
  if (!text1.disabled) {
      text1.focus();
  }else{
    selectedValue.show();
  }
}

function EnableDisableTextBox1(City) {
  var selectedValue = City.options[City.selectedIndex].value;
  var text2 = document.getElementById("text2");
  text2.disabled = selectedValue == 1 ? false : true;
  if (!text2.disabled) {
      text2.focus();
  }
}

   









