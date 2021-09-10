var time = moment();
var timeElement = $(".time-block")
$("#today").text(`${time.format("dddd, MMMM Do YYYY")}`);
$("#today-time").text(`${time.format('hh:mm a')}`);



$(".saveBtn").on("click", function() {
    var timeElem = $(this).parent().attr("class").split(" ")[2];
    var eventText = $(this).siblings(".description").val();
    var availibility = {
        time: timeElem,
        event: eventText
    }
    if (typeof window.localStorage.savedEvent === "string") {
        var tempArray = JSON.parse(window.localStorage.getItem("savedEvent"));
    } else {
        var tempArray = [];
    }
    tempArray.push(availibility);
    window.localStorage.setItem("savedEvent", JSON.stringify(tempArray));
});



saveScheduler = () => {
    var tempArray = JSON.parse(window.localStorage.getItem("savedEvent"));
    $(".time-block").each(function() {
        if (typeof window.localStorage.savedEvent === "string") {
            var tempArray = JSON.parse(window.localStorage.getItem("savedEvent"));
            $(`#${tempArray[0].time}`).siblings(".description").innerHTML = tempArray[0].event;
        }
    })
    const pushLocation = (obj) => {
        var flag = 0;
        for (let i=0; i<tempArray.length; i++) {
            if (tempArray[i].time == obj.classList[2]) {
                flag = 1;
                obj.children[1].innerHTML = tempArray[i].event;
            }
        }
        if (flag === 1) {
            return true;
        } else {
            return false;
        }
    }
    for (let i=0; i<timeElement.length; i++) {
        pushLocation(timeElement[i]);
    }
};



setColorTimer = () => {
    var currentHour = time.toObject().hours;
    $(".time-block").each(function() {
        var thisHour = parseInt($(this).attr("id"));
        if (thisHour < currentHour) {
            $(this).css("background-color", "hsla(0, 0%, 83%, 0.8)")
        } else if (thisHour === currentHour) {
            $(this).css("background-color", "hsla(5, 95%, 43%, 0.8)")
        } else {
            $(this).css("background-color", "hsla(151, 78%, 49%, 0.8)")
        };
    })
};



setColorTimer();
saveScheduler();