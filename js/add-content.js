// var today= new Date();
// var hourNow= today.getHours();
// var greeting;
var name = prompt("Lets starat to know each other we are Constructive & CO and you are ?");
var age = prompt("We welcom to all people on our site and we like to know your age ?");
var gender = prompt("We want to if you ar male or female to helb to cotact us ?");
var Msg; 

if (gender == male) {
    greeting = 'Good evening, Class!';
} else if  (hourNow > 12) {
    greeting = 'Good after noon, Class!';
}else if(hourNow >= 0) {
    greeting ='Good morning!';
} else {
    greeting = 'Something went wrong!';
} 
document.write('<h3>'+greeting+'</h3>');
