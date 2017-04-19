var hearthstoneCard = require('./../js/hearthstone.js').hearthstoneModule;

var insertImg = function(src) {
  return "<img src='"+src+"'/>";
};

function shuffleArray(array) {
    for(var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        console.log(i);
        console.log(j);
        var temp = array[i];
        console.log(temp);
        array[i] = array[j];
        array[j] = temp;
    }
    console.log("truffle shuffle", array);
    return array;
  }

$(function() {
  var hiddenImg = "http://media-hearth.cursecdn.com/attachments/39/684/cardback_20.png";
  var hearthCard = new hearthstoneCard();
  var cards = hearthCard.getImg();
    console.log("wow", cards);
    var shuffledCards = shuffleArray(cards);

    console.log("shuffled", shuffledCards);
  console.log("things are looking up 2");
  // console.log(hearthCard);
  // $("#there").click(function() {
  //   event.preventDefault();
  //   console.log("clicked");
  // });

  var correctGuesses = 0;
  var clicks = [];
  var reveal = function(index) {
    if (clicks.length === 0) {
      clicks.push(index);
      $("#card"+(index)).html((shuffledCards[index]));
    } else if (clicks.length === 1) {
      clicks.push(index);
    } if (shuffledCards[clicks[0]] === shuffledCards[index]) {
        $("#card"+(index)).html((shuffledCards[index]));
        $("#card"+(index)).off("click");
        $("#card"+(clicks[0])).off("click");
        correctGuesses += 2;
        // if (correctGuesses === shuffledCards.length) {
        //   var won = setTimeout(function() {
        //     alert("you WOn");
        //   }, 100);
        // }
        clicks = [];
      } else {
        $("#card"+(index)).html((shuffledCards[index]));
        var reset = setTimeout(function() {
          $("#card"+(index)).html((hiddenImg));
          $("#card"+(clicks[0])).html((hiddenImg));
          clicks = [];
        }, 1000);
      }
    };

for (var i = 0; i < 10; i++) {
  $("#card"+i).html(insertImg(hiddenImg));
  $("#card"+i).attr("data-index", i);
  $("#card"+i).click(function() {
    console.log("click");
    reveal($(this).attr("data-index"));
  });
  }


});
