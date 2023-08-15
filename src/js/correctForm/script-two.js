$(function () {
  // drag -- drop listner on Drag & Drop

  //reset all
  $("#reset").click(() => {
    window.location.reload();
  });
  $("#next_button").click(() => {
    var value_one = $(".answerarea1").val().trim().replace(/\s/g, '');
    var value_two = $(".answerarea2").val().trim().replace(/\s/g, '');
    var value_three = $(".answerarea3").val().trim().replace(/\s/g, '');
    var value_four = $(".answerarea4").val().trim().replace(/\s/g, '');
    if (
      (value_one == "Theywillwatchamovie.") &&
      (value_two == "Wow!Ican'tbelieveIranintoyouhere.") &&
      (value_three == "Whatisyourname?") &&
      (value_four == "AhmedrunsfasterthanAli.")
    ) {
      location.replace("../lastScreen/index.html");
    } else {
      var audio1 = new Audio("../../sounds/buz.wav");
      audio1.play();
    }
  });
});

