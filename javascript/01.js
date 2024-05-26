let age = prompt("Enter your age");
age = parseInt(age);
if (age<0){
    console.error("please enter a valid age")
}
let runAgain=true
while(runAgain){

const canDrive = age >= 18 ? true : false;

if (canDrive) {
    alert("You can drive");
} else {
    alert("You cannot drive");
}
runAgain=confirm("do you want to play again")
}
