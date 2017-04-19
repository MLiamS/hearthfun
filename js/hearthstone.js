var unirest = require('unirest');

function hearthstoneCard() {
 this.cards = [];
}





hearthstoneCard.prototype.getCards = function() {

  return shuffleArray(this.cards);
};

hearthstoneCard.prototype.getImg = function() {
  // var number = (Math.floor(Math.random() * 192)+1);
  var cards = [];
  // var self = this;
  var shuffledCards;
  unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/qualities/Epic")
.header("X-Mashape-Key", "rWHfwQgzLMmshxTdrypY3GZNpimop1Wg51mjsnFotWj6HoCmAN")
.header("Accept", "application/json")
.end(function (result) {
  // console.log(result.body[number], result.body[number].name);
  // console.log(result);
  for (var i = 1; i <= 5; i++) {
    var number = (Math.floor(Math.random() * 192)+1);
    cards.push("<img src='"+result.body[number].imgGold+"'>");
    cards.push("<img src='"+result.body[number].imgGold+"'>");
  }
  //shuffle should run here. This is the function callback.
  //call frontend function to update UI from here?
});
  return cards;
};





exports.hearthstoneModule = hearthstoneCard;
