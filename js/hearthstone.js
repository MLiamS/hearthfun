var unirest = require('unirest');

function hearthstoneCard() {

}

hearthstoneCard.prototype.getCards = function(size) {

  return shuffleArray(cards);
};

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

hearthstoneCard.prototype.getImg = function() {
  // var number = (Math.floor(Math.random() * 192)+1);
  var cards = [];
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
});
  return cards;

};

exports.hearthstoneModule = hearthstoneCard;
