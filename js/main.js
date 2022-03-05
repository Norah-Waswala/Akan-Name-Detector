gender = male, female, dayofweek;

const male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]

const female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

const weekday = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursdy", "Friday", "Saturday",]

var input = document.getElementById("User_result");

function dayofweek(d, m, y)
{
    let t = [ 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ];
    y -= (m < 3) ? 1 : 0;
    return ( y + y/4 - y/100 + y/400 + t[m-1] + d) % 7;
}

let day = dayofweek(input);
document.write(Math.round(day));