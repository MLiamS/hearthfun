var unirest = require('unirest');

function hearthstoneCard() {
 this.cards = [];
}

function shuffleArray(array) {
  console.log(array.length);
    for(var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        console.log("im inside shuffle function");
        array[i] = array[j];
        array[j] = temp;
    }
    console.log("truffle shuffle1", array);
    return array;
  }




hearthstoneCard.prototype.getCards = function() {

  return shuffleArray(this.cards);
};

hearthstoneCard.prototype.getImg = function() {
  var cards = [];
  var shuffledCards;
  unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/qualities/Epic")
.header("X-Mashape-Key", "rWHfwQgzLMmshxTdrypY3GZNpimop1Wg51mjsnFotWj6HoCmAN")
.header("Accept", "application/json")
.end(function (result) {
  for (var i = 1; i <= 5; i++) {
    var number = (Math.floor(Math.random() * 192)+1);
    cards.push("<img src='"+result.body[number].imgGold+"'>");
    cards.push("<img src='"+result.body[number].imgGold+"'>");
  }

  shuffledCards = shuffleArray(cards);
  console.log(cards);
  //shuffle should run here. This is the function callback.
  //call frontend function to update UI from here?
});
  return cards;
};





exports.hearthstoneModule = hearthstoneCard;
