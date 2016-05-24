$(document).ready(function() {
  $("form").submit(function(event) {
    var nameInput = $("input#nameInput").val();
    var address1Input = $("input#address1Input").val();
    var address2Input = $("input#address2Input").val();
    var cityInput = $("input#cityInput").val();
    var zipInput = $("input#zipInput").val();

    $(".nameInput").text(nameInput);
    $(".address1Input").text(address1Input);
    $(".address2Input").text(address2Input);
    $(".cityInput").text(cityInput);
    $(".zipInput").text(zipInput);

    $("#receipt").show();

    event.preventDefault();
  });
});
