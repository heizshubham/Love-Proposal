//Made by Shubham @slaycount

$(document).ready(function () {
  $(".title").click(function () {
    $(".container").addClass("open");
  });

  $(".close").click(function () {
    $(".container").removeClass("open");
  });
});


alert ("click anywhere on the screen to play the song then click on the heart")
var a = new Audio(" https://dl.dropbox.com/s/fznyh5fg9rryveq/Arijit_Singh_Dil_Ko_Maine_Di_Kasam__Amaal_Malik__Asim_Riaz%2C_Himanshi_Khurana%28256k%29");

window.addEventListener('click',() => {
a.play();
});