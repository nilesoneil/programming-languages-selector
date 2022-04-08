$(document).ready(function() {
  $("#surveyForm").submit(function(event) {
    const name = $("#userName").val();
    const dob = $("#born").val();
    const interests = $("#interests").val();
    const weather = $("#weather").val();
    const pet = $("input:radio[name=animal]:checked").val()

  event.preventDefault();
  });
});