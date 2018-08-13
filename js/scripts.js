$(document).ready(function() {
$("#deckcards").submit(function(event) {
  event.preventDefault();
  var suits = [" of Clubs", " of Diamonds", " of Spades", " of Hearts"];
  var numbers = ["A", "2", "3", "4", "5", "6", "7" ,"8", "9", "10", "J", "Q", "K"];

  suits.forEach(function(suit) {
    numbers.forEach(function(number) {
      $(".deck").append('<li>'+number+suit+'</li>');
    })
  });
});
});
