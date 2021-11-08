/* 변수 선언 */
const sfx_joygo = new Audio();
const sfx_ong = new Audio();
const sfx_sorry = new Audio();
const meme_kane_bignose = document.getElementById("kane_nose_image");  // got nose tag
const meme_roach_video = document.getElementById("meme_kane_roach_gif"); // got roach tag
const meme_sorry_sprite = document.getElementById("meme_kane_sorry"); // got sorry tag
var meme_kane_bignose_width = 27;
var meme_kane_bignose_height = 26;

/* 경로 선언 */
sfx_joygo.src = "sound/sfx/gayjoygo.flac";
sfx_ong.src = "sound/sfx/ong.mp3";
sfx_sorry.src = "sound/sfx/sorry.mp3";

// 코가 자유로운 나
function noseFuncion() {
  if (meme_kane_bignose_width > 50 && sfx_joygo.paused && sfx_ong.paused) {
    meme_kane_bignose_width = 27;
    meme_kane_bignose_height = 26;

    sfx_joygo.play();
  } else if(sfx_ong.paused) {
    meme_kane_bignose_width += 11;
    meme_kane_bignose_height += 11;

    sfx_ong.play();
  }

  meme_kane_bignose.style.width = meme_kane_bignose_width + "px";
  meme_kane_bignose.style.height = meme_kane_bignose_height + "px";
}
//

// 바선생을 뵈어서 기뻐하는 나
meme_roach_video.addEventListener("mouseover", function()
{
  meme_roach_video.play();
})

meme_roach_video.addEventListener("mouseout", function()
{
  meme_roach_video.pause();
})

function volume_change()
{
  meme_roach_video.muted ^= true;
}
//

// ㅈㅅㅎㄴㄷ
meme_sorry_sprite.addEventListener("mousemove", evt =>
{
  let y = evt.offsetY / innerHeight;
  var y_progress = y/0.22;
  var y_progress_int = Math.floor((y_progress * 10));

  //console.log("progress = " + y_progress);
  //console.log("y = " + Math.floor((y_progress * 10)));

  if(0 < y_progress_int && 11 > y_progress_int)
    meme_sorry_sprite.style.backgroundPositionX = (y_progress_int * 10).toString() + "%";
})

function meme_sorry_play()
{
  sfx_sorry.play();
}
//