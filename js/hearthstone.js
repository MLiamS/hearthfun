var unirest = require('unirest');

function hearthstoneCard() {

}

hearthstoneCard.prototype.getImg = function() {
  console.log("Im inside the prototype!");

  unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/Leeroy%20Jenkins")
.header("X-Mashape-Key", "rWHfwQgzLMmshxTdrypY3GZNpimop1Wg51mjsnFotWj6HoCmAN")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.name);
  console.log(result.body[0].artist);
  // $("#solution").text(result.body.object.imgGold);
});
};

exports.hearthstoneModule = hearthstoneCard;
