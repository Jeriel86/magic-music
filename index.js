let bg = $("#particles-js");

$(document).keydown(function (event) {
    $(bg).css("background-color", getRandomColor);
    //let key = event.key;
});


$(".img").on("click", function () {

    let name = $(this).attr("name");
    const initiale = name.charAt(0).toUpperCase();
    const nameCapitalized = initiale + name.slice(1);

    $("#titre").text(nameCapitalized);

    $(this).toggleClass("flash");

    //Play Music

    let music = $(this).attr("name") + ".mp3";

    playMusic(music);
});

$('#btn').click(function () {

    let artist = $("#input").val();
    let music = artist + ".mp3";

    playMusic(music);


});


function playMusic(music) {
    let audio = new Audio(music);
    audio.play();
}


function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color = color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}