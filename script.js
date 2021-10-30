const sound_joygo = new Audio();
sound_joygo.src = "sound/joygo.flac";
const sound_ong = new Audio();
sound_ong.src = "sound/ong.mp3";

const image_nose = document.getElementById("kane_nose_image");
var image_nose_width = 27;
var image_nose_height = 26;

function noseFuncion() {
  if (image_nose_width > 50) {
    image_nose_width = 27;
    image_nose_height = 26;

    sound_joygo.play();
  } else {
    image_nose_width += 10;
    image_nose_height += 10;

    sound_ong.play();
  }

  image_nose.style.width = image_nose_width + "px";
  image_nose.style.height = image_nose_height + "px";
}
