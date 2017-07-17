//business logic
function Tasks (task, date, time, location, status) {
  this.task = task;
  this.date = date;
  this.time = time;
  this.location = location;
  this.status = status;
}

// Tasks.prototype.currentStatus = function() {
//   if (inputStatus === "2") {
//      this.status = "Task Done";
//   } else {
//      this.status = "Task is pending";
//   }
// }


// user interface logic
$(document).ready(function() {
  $("form#tasks").submit(function(event) {
    event.preventDefault();
    var inputTask = $("input#task").val();
    var inputDate = $("input#date").val();
    var inputTime = $("input#time").val();
    var inputLocation = $("input#location").val();
    var inputStatus = $("#status").val();
    



    var toDoList = new Tasks(inputTask, inputDate, inputTime, inputLocation, inputStatus);

    $("#List").append("<li><span class='taskName'>" + toDoList.task + "</span></li>");

    $(".taskName").last().click(function() {
      $("#task-details").show();
      $("#show-destinations h2").text(toDoList.task);
      $(".task1").text(toDoList.task);
      $(".date1").text(toDoList.date);
      $(".time1").text(toDoList.time);
      $(".location1").text(toDoList.location);
      $(".status1").text(toDoList.status);

    });

    $("input#task").val("");
    $("input#date").val("");
    $("input#time").val("");
    $("input#location").val("");
    $("input#status").val("");
  });
});
