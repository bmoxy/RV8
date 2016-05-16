var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#bgpause button");
var menuitemsli = document.querySelector(".navbar-inverse .navbar-nav>li");

function vidFade() {
  vid.classList.add("stopfade");
};

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Play";
  }
});

$(document).ready(function(){
	$('.navbar-inverse .navbar-nav>li').on('click',function(){
		$('.navbar-inverse .navbar-nav>li').removeClass('active');
			$(this).addClass('active');
			})
});


