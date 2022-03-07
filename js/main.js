var YOB
var MOB
var DOB
var genders
var WeekdayNumber
function getAkanName() {
     YOB = document.getElementById("year").value;
    MOB = Number(document.getElementById("month").value);
    DOB = Number(document.getElementById("date").value);
    genders = document.getElementsByName("gender");
    DOB = parseInt(DOB)
      MOB = parseInt(MOB)

    WeekdayNumber = Math.floor((((Number(YOB.slice(0,2))/4)-2*Number(YOB.slice(0,2))-1)+
              ((5*Number(YOB.slice(2,4))/4))+((26*(MOB+1)/10))+DOB)%7);

}
  //creating arrays of Akan names for males and females

  let mNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kwaku", "Yaw", "Kofi", "Kwame"
  ];

  let fNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
  ];

   // function to get gender

   function getGender() {
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
      }
    }
  }

 

  console.log(genderValue);

 // validation month function

    function monthValidator() {
      if (MOB < 1 || MOB > 12) {
        return false;
      } else {
        return true;
      }
    }

    // validation day function 

    function dayValidator() {
      DOB = parseInt(DOB)
      MOB = parseInt(MOB)
      YOB = parseInt(YOB)
      console.log (DOB + MOB + YOB)
      if (MOB == 2 && YOB % 4 == 0) {
        if(DOB < 1 && DOB > 29) {
          return false;
        } else{
          return true;
        }
      } else{
        if (DOB < 1 && DOB > 31) {
          return false;
        } else {
          return true;
        }
      }
      // if (MOB == 2 && Number(YOB)%4 == 0) {
      //   if (DOB > 28 || DOB < 1) {
      //     return false;
      //   } else if (MOB == 2 && DOB > 29) {
      //     return false;
      //   } else if (MOB == 2 && DOB < 1) {
      //     return false;
      //   } else {
      //     return true;
      //   }
      // } else if (DOB < 1 || DOB > 31){
      //   return false;
      // } else {
      //   return true;
      // }
    }
      //validation variables

     
      //formula to determine day of birth (Sunday = 1, Monday = 2)etc..

      
    
      
   //condition statement that validates input
  function genderValueBoth() {
    let Validmonth = monthValidator();
    let Validday = dayValidator();
  
    let genderValue = getGender();
    
   if (genderValue == "male" && Validmonth && Validday){
    switch (WeekdayNumber) {
      case 1:
        document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + mNames[0];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 2:
        document.getElementById('result').textContent = "You were born on a Monday: your Akan name is " + mNames[1];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 3:
        document.getElementById('result').textContent = "You were born on a Tuesday: your Akan name is " + mNames[2];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 4:
        document.getElementById('result').textContent = "You were born on a Wednesday: your Akan name is " + mNames[3];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 5:
        document.getElementById('result').textContent = "You were born on a Thursday: your Akan name is " + mNames[4];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 6:
        document.getElementById('result').textContent = "You were born on a Friday: your Akan name is " + mNames[5];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 7:
        document.getElementById('result').textContent = "You were born on a Saturday: your Akan name is " + mNames[6];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 0:
        document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + mNames[0];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      default:
        alert("mmh no Akan name for you");

    }
  } else if(genderValue == "female" && Validmonth && Validday) {
    switch (WeekdayNumber) {
      case 1:
        document.getElementById('result').innerText = "You were born on a Sunday: your Akan name is " + fNames[0];
        document.getElementById('display-name').innerText = "Here is your Akan name: ";
        return false;
        break;
      case 2:
        document.getElementById('result').textContent= "You were born on a Monday: your Akan name is " + fNames[1];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        alert("Kwadwo");
        break;
      case 3:
        document.getElementById('result').textContent = "You were born on a Tuesday: your Akan name is " + fNames[2];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 4:
        document.getElementById('result').textContent = "You were born on a Wednesday: your Akan name is " + fNames[3];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 5:
        document.getElementById('result').textContent = "You were born on a Thursday: your Akan name is " + fNames[4];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 6:
        document.getElementById('result').textContent = "You were born on a Friday: your Akan name is " + fNames[5];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 7:
        document.getElementById('result').textContent = "You were born on a Saturday: your Akan name is " + fNames[6];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 0:
        document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + fNames[0];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false; 
        break;
      default:
        alert("mmh no Akan name for you");
      }
    } else{
      alert("You entered invalid month or day");
    }
  }

function getName(){
  getAkanName()
  monthValidator();
  dayValidator();
  getGender();
  genderValueBoth();
}