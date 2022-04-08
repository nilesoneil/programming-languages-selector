$(document).ready(function() {
  $("#surveyForm").submit(function(event) {
    const name = $("#userName").val();
    const dob = $("#born").val();
    const interests = $("#interests").val();
    const weather = $("#weather").val();
    const pet = $("input:radio[name=animal]:checked").val()

    if (interests === "puzzles" && weather === "Sunny" && pet === "snake") {
      $("#ruby").hide();
      $("#javascript").show();
      $("#swift").hide();
    } else if (interests === "puzzles" && weather === "Rainy" && pet === "snake") {
      $("#ruby").hide();
      $("#javascript").show();
      $("#swift").hide();
    } else if (interests === "puzzles" && weather === "Overcast" && pet === "snake") {
      $("#ruby").hide();
      $("#javascript").show();
      $("#swift").hide();
    } else if (interests === "running" && weather === "Overcast" && pet === "dog") {
      $("#ruby").hide();
      $("#javascript").hide();
      $("#swift").show();
    } else if (interests === "running" && weather === "Sunny" && pet === "dog") {
      $("#ruby").hide();
      $("#javascript").hide();
      $("#swift").show();
    } else if (interests === "running" && weather === "Rainy" && pet === "dog") {
      $("#ruby").hide();
      $("#javascript").hide();
      $("#swift").show();
    } else if (interests === "mining" && weather === "Rainy" && pet === "cat") {
      $("#ruby").show();
      $("#javascript").hide();
      $("#swift").hide();
    } else if (interests === "mining" && weather === "Sunny" && pet === "cat") {
      $("#ruby").show();
      $("#javascript").hide();
      $("#swift").hide();
    } else
      $("#swift").show();
      $("#javascript").hide();
      $("#ruby").hide();

  event.preventDefault();
  });
});