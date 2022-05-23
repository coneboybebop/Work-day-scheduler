// variable for current day and date.
var today = moment().format("LLLL");

// dynamically add date and time to top of the page
document.getElementById("currentDay").innerHTML = today;


// variables for each hour of the work day
var nine = moment().set('hour', 9);
var ten = moment().set('hour', 10);
var eleven = moment().set('hour', 11)
var twelve = moment().set('hour', 12);
var one = moment().set('hour', 13);
var two = moment().set('hour', 14);
var three = moment().set('hour', 15);
var four = moment().set('hour', 16);
var five = moment().set('hour', 17);

var auditTime = function() {

    
}

// save tasks to local storage
$(".saveBtn").on("click", function () {

    
}

)

// retrieve from local storage on refresh
