var hearthstoneCard = require('./../js/hearthstone.js').hearthstoneModule;

var insertImg = function(src) {
  return "<img src='"+src+"'/>";
};

function shuffleArray(array) {
  console.log(array.length);
    for(var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        console.log("im inside shuffle function");
        array[i] = array[j];
        array[j] = temp;
    }
    console.log("truffle shuffle", array);
    return array;
  }

$(function() {
  var hiddenImg = "http://media-hearth.cursecdn.com/attachments/39/684/cardback_20.png";

  for (var i = 0; i < 10; i++) {
    $("#card"+i).html(insertImg(hiddenImg));
    $("#card"+i).attr("data-index", i);
    $("#card"+i).click(function() {
      console.log("click");
      reveal($(this).attr("data-index"));
    });
    }

  var hearthCard = new hearthstoneCard();
  var cards = hearthCard.getImg();
  var shuffledCards = shuffleArray(cards);
  console.log("shuffled", shuffledCards);
  // var cards;
  // setTimeout(function() {
  //   cards = hearthCard.cards;
  // }, 1000)
  //  = hearthCard.getImg();
  console.log("not shuffled", cards);


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
      console.log(index);
      $("#card"+(index)).html((cards[index])); //THIS THE ONE
      console.log("2", index);
  } else if (clicks.length <5) {
      clicks.push(index);
    } if (cards[clicks[0]] === cards[index]) {
        $("#card"+(index)).html((cards[index]));
        $("#card"+(index)).off("click");
        $("#card"+(clicks[0])).off("click");
        correctGuesses += 2;
        // if (correctGuesses === cards.length) {
        //   var won = setTimeout(function() {
        //     alert("you WOn");
        //   }, 100);
        // }
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
