// var vid = document.getElementById("bgvid");
//var pauseButton = document.querySelector("#bgpause button");

//function vidFade() {
//  vid.classList.add("stopfade");
//};

//vid.addEventListener('ended', function()
//{
// only functional if "loop" is removed 
//vid.pause();
// to capture IE10
//vidFade();
//}); 

// Video Pause Button//
//pauseButton.addEventListener("click", function() {
//  vid.classList.toggle("stopfade");
//  if (vid.paused) {
//    vid.play();
//    pauseButton.innerHTML = "Pause";
//  } else {
//    vid.pause();
//    pauseButton.innerHTML = "Play";
//  }
//});
//
// Nav Bar Click Selector//
$(function(){
	$('.navbar-inverse .navbar-nav>li').on('click',function(){
		$('.navbar-inverse .navbar-nav>li').removeClass('active');
			$(this).addClass('active');
			})
});

$('.nav a').on('click', function(){
   $('.btn-navbar').click(); //bootstrap 2.x
   $('.navbar-toggle').click() //bootstrap 3.x by Richard
});
 
//Google Maps//
$(function(){
function initialize (){
  var mapProp = {center:new google.maps.LatLng(37.522150, -77.411233), 

    zoom: 9, 
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
  
  var UR=new google.maps.LatLng(37.5739607,-77.5418024);
  var Bryan=new google.maps.LatLng(37.5961435,-77.4742985);
  var Hanover=new google.maps.LatLng(37.674480, -77.378415);
  var Pharaoh=new google.maps.LatLng(37.282974, -77.375132);
  var Ecoff=new google.maps.LatLng(37.361619, -77.459569);
  var Dorey=new google.maps.LatLng(37.460121, -77.339981);
  var Gillies=new google.maps.LatLng(37.522150, -77.411233);
  var Village=new google.maps.LatLng(37.7104029, -77.4693205);

  var marker=new google.maps.Marker({
    position:UR,
    });
  var marker2=new google.maps.Marker({
    position:Bryan,
    });
  var marker3=new google.maps.Marker({
    position:Hanover,
    });
  var marker4=new google.maps.Marker({
    position:Pharaoh,
    });
  var marker5=new google.maps.Marker({
    position:Ecoff,
    });
  var marker6=new google.maps.Marker({
    position:Dorey,
    });
  var marker7=new google.maps.Marker({
    position:Gillies,
    });
  var marker8=new google.maps.Marker({
    position:Village,
    });

  marker8.setMap(map);
  marker7.setMap(map);
  marker6.setMap(map);
  marker5.setMap(map);
  marker4.setMap(map);
  marker3.setMap(map);
	marker2.setMap(map);
	marker.setMap(map);

}
google.maps.event.addDomListener(window, 'load', initialize);
});