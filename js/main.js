function getAkanName () {
    let YOB = document.getElementById("yearId").value;
    let MOB = Number(document.getElementById("monthId").value);
    let DOB = Number(document.getElementById("dayId").value);
    let genders = document.getElementsByName("genderId");
}
  //creating arrays of Akan names for males and females
  let mNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kwaku", "Yaw", "Kofi", "Kwame"
  ];

  let fNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
  ];
   // function to get gender
   function getGender () {
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
      }
    }
  }

  let genderValue = getGender();

  console.log(genderValue);
  
