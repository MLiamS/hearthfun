var hearthstoneCard = require('./../js/hearthstone.js').hearthstoneModule;

var insertImg = function(src) {
  return "<img src='"+src+"'/>";
};


$(function() {
  var hiddenImg = "http://media-hearth.cursecdn.com/attachments/39/684/cardback_20.png";
  var hearthCard = new hearthstoneCard();
  var cards = hearthCard.getImg();
  console.log(cards);
  console.log("things are looking up");
  // console.log(hearthCard);
  $("#there").click(function() {
    event.preventDefault();
    console.log("clicked");
  });

  var correctGuesses = 0;
  var clicks = [];
  var reveal = function(index) {
    if (clicks.length === 0) {
      clicks.push(index);
      $("#card"+(index)).html((cards[index]));
    } else if (clicks.length === 1) {
      clicks.push(index);
    } if (cards[clicks[0]] === cards[index]) {
        $("#card"+(index)).html((cards[index]));
        $("#card"+(index)).off("click");
        $("#card"+(clicks[0])).off("click");
        correctGuesses += 2;
        if (correctGuesses === cards.length) {
          var won = setTimeout(function() {
            alert("you WOn");
          }, 100);
        }
        clicks = [];
      } else {
        $("#card"+(index)).html((cards[index]));
        var reset = setTimeout(function() {
          $("#card"+(index)).html((hiddenImg));
          $("#card"+(clicks[0])).html((hiddenImg));
          clicks = [];
        }, 1000);
      }
    }

for (var i = 0; i < 10; i++) {
  $("#card"+i).html(insertImg(hiddenImg));
  $("#card"+i).attr("data-index", i);
  $("#card"+i).click(function() {
    reveal($(this).attr("data-index"));
  });
  }


});
