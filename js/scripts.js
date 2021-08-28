var time = moment();
$("#today").text(`${time.format("dddd, MMMM Do YYYY")}`);
$("#today-time").text(`${time.format('hh:mm a')}`);

$(".saveBtn").on("click", function() {
    var timeBlock = $(this).parent().attr("id");
    var plannerText = $(this).siblings(".description").val();
    localStorage.setItem(timeBlock, plannerText);
    console.log(`Time: ${timeBlock}  |  Plans: ${plannerText}`);
});
saveScheduler = () => {
    $(".time-block").each(function() {
        var id = $(this).attr("id");
        var text = localStorage.getItem(id);
        if (text !== null) {
            $(this).children(".description").val(text);
        }
    })
    
};

saveScheduler();

setColorTimer = () => {
    var currentHour = time.toObject().hours;
    $(".time-block").each(function() {
        var thisHour = parseInt($(this).attr("id"));
        if (thisHour < currentHour) {
            $(this).addClass("past")
        } else if (thisHour === currentHour) {
            $(this).addClass("present")
        } else {
            $(this).addClass("future")
        };
    })
};

setColorTimer();