var unirest = require('unirest');

function hearthstoneCard() {

}

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



hearthstoneCard.prototype.getCards = function(size) {

  return shuffleArray(cards);
};

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
    return shuffleArray(cards);

};

exports.hearthstoneModule = hearthstoneCard;
