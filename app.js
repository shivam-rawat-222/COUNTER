// count will be equal to 0
let count = 0;

// setting the html code in a variable
const counter = document.getElementById("digit");
const back = document.getElementsByClassName("qwerty1");
// event targeting 


function backward() {
    count--;
    digit.textContent = count;
    if (count > 0) {
        digit.style.color = "red";
    }
    else if (count < 0) {
        digit.style.color = "blue";
    }


}
function reseting() {
    count = 0;
    digit.textContent = count;
    digit.style.color = "black";

}
function forward() {
    count++;
    digit.textContent = count;
    if (count > 0) {
        digit.style.color = "red";
    }
    else if (count < 0) {
        digit.style.color = "blue";
    }




}


