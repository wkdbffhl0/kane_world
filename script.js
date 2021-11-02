const sound_joygo = new Audio();
sound_joygo.src = "sound/sfx/gayjoygo.flac";
const sound_ong = new Audio();
sound_ong.src = "sound/sfx/ong.mp3";

const image_nose = document.getElementById("kane_nose_image");  // got nose tag
var image_nose_width = 27;
var image_nose_height = 26;

const roach_video = document.getElementById("meme_kane_roach_gif"); // got roach tag

function noseFuncion() {
  if (image_nose_width > 50 && sound_joygo.paused && sound_ong.paused) {
    image_nose_width = 27;
    image_nose_height = 26;

    sound_joygo.play();
  } else if(sound_ong.paused) {
    image_nose_width += 11;
    image_nose_height += 11;

    sound_ong.play();
  }

  image_nose.style.width = image_nose_width + "px";
  image_nose.style.height = image_nose_height + "px";
}

///

roach_video.addEventListener("mouseover", function()
{
  roach_video.play();
})

roach_video.addEventListener("mouseout", function()
{
  roach_video.pause();
})

function volume_up()
{
  roach_video.muted = false;
}