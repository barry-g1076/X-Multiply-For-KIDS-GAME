var PlayerData=[];
var t_count=0, cor_count=0;
/*
function updateProgressBar(progressBar, value) {
  value = Math.round(value);
  progressBar.querySelector(".progress__fill").style.width = value;
  progressBar.querySelector(".progress__text").textContent = value;
}*/
const myProgressBar = document.querySelector(".progress");

function Register() {
var name = document.forms["RegForm"]["FName"];
var lname = document.forms["RegForm"]["LName"];
var email = document.forms["RegForm"]["EMail"];
var userinput= document.forms["RegForm"]["date"];  
if (name.value == "") {
window.alert("Please enter your First Name.");
name.focus();
return false;
}
if (lname.value == "") {
window.alert("Please enter your Last Name.");
name.focus();
return false;
}
if(userinput==null || userinput=='') {
                 window.alert("Please enter your Date of Birth.");
 return false;  
}
if (email.value == "") {
window.alert("Please enter a valid e-mail address.");
email.focus();
return false;
}
if(document.getElementById("dot-1").checked==false &&document.getElementById("dot-2").checked==false){
window.alert("Please Select a Gender!!");
return false;
}
Disableform();
AddData();
return true;
}
function AddData(){
var name = document.getElementById("FName").value;
var lname =document.getElementById("LName").value;
var email = document.getElementById("EMail").value;
var dob = document.getElementById("date").value;
PlayerData.push("First Name:"+name);
PlayerData.push("Last Name:"+lname);
PlayerData.push("Age:"+ageCalculator());
PlayerData.push(dob);
PlayerData.push(email);
if(document.getElementById("dot-1").checked==true) {
PlayerData.push("male");

}else if(document.getElementById("dot-2").checked==true){
PlayerData.push("female");

}

console.log(PlayerData);
}
function ageCalculator() {
var dobb = document.getElementById("date").value;  
var dob = new Date(dobb);

//calculate month difference from current date in time  
var month_diff = Date.now() - dob.getTime();  
 
//convert the calculated difference in date format  
var age_dt = new Date(month_diff);  
 
//extract year from date      
var year = age_dt.getUTCFullYear();  
 
//now calculate the age of the user  
var age = Math.abs(year - 1970);  
 
//display the calculated age
document.getElementById("age").innerHTML = age;  
//give the id an value
return age;
}
function Disableform(){
document.getElementById('register').disabled =true;
document.getElementById('FName').disabled=true;
                document.getElementById('LName').disabled=true;
document.getElementById('date').disabled=true;
                document.getElementById('EMail').disabled=true;
                document.getElementById('dot-1').disabled=true;
                document.getElementById('dot-2').disabled=true;
document.getElementById('playarea').disabled=false;
                document.getElementById('next').disabled=false;
                document.getElementById('accept').disabled=false;
document.getElementById('end').disabled=false;
document.getElementById('score').disabled=false;
            }
function formEnable(){
document.getElementById("RegForm").reset();
document.getElementById('register').disabled =false;
document.getElementById('FName').disabled=false;
                document.getElementById('LName').disabled=false;
document.getElementById('date').disabled=false;
                document.getElementById('EMail').disabled=false;
                document.getElementById('dot-1').disabled=false;
                document.getElementById('dot-2').disabled=false;
document.getElementById('playarea').disabled=true;
                document.getElementById('next').disabled=true;
                document.getElementById('accept').disabled=true;
document.getElementById('end').disabled=true;
document.getElementById('score').disabled=true;
            }
//Code for Play Area Begins
function PlayGame() {
   document.getElementById("num1").innerHTML = Math.floor(Math.random() * (10 - 1)) + 1;
            document.getElementById("num2").innerHTML = Math.floor(Math.random() * (6 - 1)) + 1;

        }
        function clearInput(){
            document.getElementById('user').value = " ";    
            document.getElementById('check').innerHTML = "...";
        }
function CheckAnswer() {
            var value1, value2, ans, user; count=0;
            value1 = document.getElementById('num1').innerHTML;
            value2 = document.getElementById('num2').innerHTML;

            ans = value1 * value2;
t_count++;
            user =document.getElementById('user').value;

            if(ans==user){
                message="Correct!";
PlayerData.push(value1+" x "+value2+ " = "+user+" "+ message);
cor_count++;
            }
           if(user==""){
                alert("Please enter a value !!");
message="????";
            } else if(ans != user){
                message="Incorrect!!";
PlayerData.push(value1+" x "+value2+ " = "+user+" "+ message);
            }
                document.getElementById('check').innerHTML = message;
console.log(PlayerData);
showallplayers();
            }
       
            function enablePlayArea(){
                document.getElementById('num1').disabled=true;
                document.getElementById('num2').disabled=true;
                document.getElementById('user').disabled=false;
                document.getElementById('accept').disabled=false;
                document.getElementById('next').disabled = false;
PlayGame();
            }// results function
            function findPercentageScore(){
                var fName, lName, perentage;
                var today = new Date();  
var day=today.getDate();  
var month=today.getMonth()+1;  
var year=today.getFullYear();

                fName = document.getElementById('FName').value;
                lName = document.getElementById('LName').value;

                percentage = (cor_count / t_count) * 100; //Score percentage calculation

                document.getElementById('showpercentage').innerHTML = " ";
                document.getElementById('showpercentage').innerHTML = "Player's Name: "+fName +" "+ lName + "\nTotal Questions: "+t_count +
                "\nCorrect Answers: " + cor_count + "\nScore Percentage: " + percentage.toFixed(1) + "%\nDate: " + day+"/"+month+"/"+year;
//updateProgressBar(myProgressBar, 72);
PlayerData.push(percentage.toFixed(1));
console.log(PlayerData);
showallplayers();
            }



function showallplayers(){
var i;
document.getElementById('showallplayers').innerHTML = "";
for (i=0;i<3;i++){
document.getElementById("showallplayers").innerHTML += PlayerData[i]+", " ;
}
//if (PlayerData.length>6){
for (i=6;i<PlayerData.length;i++){
document.getElementById("showallplayers").innerHTML += PlayerData[i]+",\n " ;
}  
for (i=9;i<3;i++){
document.getElementById("showallplayers").innerHTML += PlayerData[i]+",\n " ;
}
//}
}

function feedval() {
var name = document.forms["FeedBack"]["yourname"];
var email = document.forms["FeedBack"]["email"];
var mess = document.forms["FeedBack"]["message"];
if (name.value == "") {
window.alert("Please enter your Name.");
name.focus();
return false;
}
if (email.value == "") {
window.alert("Please enter a valid e-mail address.");
email.focus();
return false;
}
if (mess.value == "") {
window.alert("Please enter your FeedBack.");
mess.focus();
return false;
}
alert("Thanks for your response");
return true;
}