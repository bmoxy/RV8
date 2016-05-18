var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#bgpause button");

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

// Video Pause Button//
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

// Nav Bar Click Selector//
$(function(){
	$('.navbar-inverse .navbar-nav>li').on('click',function(){
		$('.navbar-inverse .navbar-nav>li').removeClass('active');
			$(this).addClass('active');
			})
});

//Google Maps//
$(function(){
function initialize (){
  var mapProp = {center:new google.maps.LatLng(37.5245782, -77.6333459), 

    zoom: 10, 
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
  
  var UR=new google.maps.LatLng(7.5739607,-77.5418024);
  var Bryan=new google.maps.LatLng(37.5961435,-77.4742985);

  var marker=new google.maps.Marker({
    position:UR,
    });
  var marker2=new google.maps.Marker({
    position:Bryan,
    });

  marker.setMap(map);
  marker2.setMap(map);

}
google.maps.event.addDomListener(window, 'load', initialize);
});