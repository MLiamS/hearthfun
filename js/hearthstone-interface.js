var hearthstoneCard = require('./../js/hearthstone.js').hearthstoneModule;


$(function() {
  console.log("things are looking up");
  var hearthCard = new hearthstoneCard();
  console.log(hearthCard);
  $("#here").click(function() {
    hearthCard.getImg();

  });
});
