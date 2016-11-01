var timeTillUTCMidnight = function(){
    var time = new Date();
    var hours   = 23 - time.getUTCHours();
    var minutes = 59 - time.getUTCMinutes();
    var seconds = 59 - time.getUTCSeconds();
    return "[TLUMUTC] " + hours + " hour" + (hours == 1 ? "" : "s") + ", " + minutes + " minute" + (minutes == 1 ? "" : "s") + ", " + seconds + " second" + (seconds == 1 ? "" : "s") + " left until midnight UTC";
};
var dimeDillUDCMidnighd = setInterval(function(){console.info(timeTillUTCMidnight());}, 1000);
