var hearthstoneCard = require('./../js/hearthstone.js').hearthstoneModule;

var insertImg = function(src) {
  return "<img src='"+src+"'/>";
};


$(function() {
  var hiddenImg = "http://media-hearth.cursecdn.com/attachments/39/684/cardback_20.png";

  for (var i = 0; i < 10; i++) {   //makes the board
    $("#card"+i).html(insertImg(hiddenImg));
    $("#card"+i).attr("data-index", i);

    $("#card"+i).click(function() {
      console.log("click");
      reveal($(this).attr("data-index"));
    });
    }


  var hearthCard = new hearthstoneCard();
  var cards = hearthCard.getImg();


  var correctGuesses = 0;
  var clicks = [];

  var reveal = function(index) {
    console.log(clicks , "first step in reveal");
    if (clicks.length === 0) {
      clicks.push(index);
      console.log("index", index);
      $("#card"+(index)).html((cards[index])); //THIS THE ONE
      console.log(clicks, "clicks part 1");
  } else if (clicks.length === 1) {
      clicks.push(index);
      console.log(clicks , "clicks");
    } if (cards[clicks[0]] === cards[index]) {
        console.log(clicks, "clicks step 2");
        $("#card"+(index)).html((cards[index]));
        $("#card"+(index)).off("click");
        $("#card"+(clicks[0])).off("click");
        correctGuesses += 2;
        clicks = [];
      } else {
        $("#card"+(index)).html((cards[index]));
        var reset = setTimeout(function() {
          $("#card"+(index)).html((hiddenImg));
          $("#card"+(clicks[0])).html((hiddenImg));
          clicks = [];
        }, 1000);
      }
    };



});
