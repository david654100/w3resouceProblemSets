var today = new Date();
var  day = today.getDay();

var daysOfTheWeek = ["sunday","monday","tuesday","wednesday","thursday","friday","saterday"];

console.log("today is:"+daysOfTheWeek[day]);

var hour= today.getHours();
var timemodiferer;
if (hour > 12 ){
    hour=hour - 12;
    timemodiferer = "pm";
}
else {
    timemodiferer="am";
}

var min=today.getMinutes();
var sec = today.getSeconds();

console.log("current time is "+hour+" "+timemodiferer+" : "+min+" : "+sec);