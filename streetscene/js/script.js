$(function(){$(".spot").click(function(){$('.spotDropdown').toggleClass("show")});$(".category").click(function(){$('.categoryDropdown').toggleClass("hide")})});$(function(){$(".skateboard").hover(function(){$(".skateboarder").addClass("line-growth")},function(){$(".skateboarder").removeClass("line-growth")});$(".bmx").hover(function(){$(".bmx-rider").addClass("line-growth")},function(){$(".bmx-rider").removeClass("line-growth")});$(".trail-bike").hover(function(){$(".trail-rider").addClass("line-growth")},function(){$(".trail-rider").removeClass("line-growth")})});$(window).ready(function(){$(".mainPannel").hover(function(){$('#logoAnim-pannel').removeClass('logoWrap').addClass('seperate');$(".gm-style div img").addClass("toggle")},function(){$('#logoAnim-pannel').removeClass('seperate').addClass('logoWrap');$(".gm-style div img").removeClass("toggle")})});$(function(){$('.mblNav button[name="burger"]').click(function(){if($(".mblNav .account").hasClass("toggle")){$(".mblNav .account").toggleClass("toggle");$(".mblNav .dropdown").toggleClass("toggle")}else{$(".mblNav .dropdown").toggleClass("toggle")}});$('button[name="profile"]').click(function(){if($(".mblNav .dropdown").hasClass("toggle")){$(".mblNav .dropdown").toggleClass("toggle");$(".account").toggleClass("toggle")}else{$(".account").toggleClass("toggle")};setInterval(function(){$('* #breakerAnim').removeClass('breaker').addClass('lines')},1000)});$(".mainContent").hover(function(){$(".account").removeClass("toggle")});$(".register #switch").click(function(){$(".register .signupWrap").toggleClass("hide");$(".register .loginWrap").toggleClass("hide")});$(".openbtn, .closebtn").click(function(){$("#spotMenu").toggleClass('toggle')});$(".openbtn, .closebtn").click(function(){$(".openbtn").toggleClass("invisible");$(".closebtn").toggleClass("visible")});$("#mtb").click(function(){if($("#skatepark").hasClass("white")){$("#skatepark").removeClass("white");$("#mtb").addClass("white")}else{$("#mtb").addClass("white")}});$("#skatepark").click(function(){if($("#mtb").hasClass("white")){$("#mtb").removeClass("white");$("#skatepark").addClass("white")}else{$("#skatepark").addClass("white")}});$(".driving").click(function(){$("#selected").removeAttr("id");$(".driving").attr("id","selected")});$(".transit").click(function(){$("#selected").removeAttr("id");$(".transit").attr("id","selected")});$(".bicycling").click(function(){$("#selected").removeAttr("id");$(".bicycling").attr("id","selected")});$(".walking").click(function(){$("#selected").removeAttr("id");$(".walking").attr("id","selected")})});$(document).on("click",".show-more, .show-less",function(e){let $parent=$(this).closest(".card");$parent.toggleClass("card--small card--medium").find(".show-more, .show-less").toggleClass("hide")});$(document).on("click",".readmr",function(e){let $parent=$(this).closest(".card");$parent.find(".reviews").toggleClass("height")});$(document).on("click",".share",function(e){let $parent=$(this).closest(".card");$parent.find(".card__action-bar .social").toggleClass("toggle");$parent.find(".card__button").toggleClass("toggle")});$(document).on("click",".card__action-bar .social a",function(e){let $parent=$(this).closest(".card");$parent.find(".card__action-bar .social").toggleClass("toggle");$parent.find(".card__button").toggleClass("toggle")});(function($,window,document,undefined){"use strict";var $ripple=$(".js-ripple");$ripple.on("click.ui.ripple",function(e){var $this=$(this);var $offset=$this.parent().offset();var $circle=$this.find(".c-ripple__circle");var x=e.pageX-$offset.left;var y=e.pageY-$offset.top;$circle.css({top:y+"px",left:x+"px"});$this.addClass("is-active")});$ripple.on("animationend webkitAnimationEnd oanimationend MSAnimationEnd",function(e){$(this).removeClass("is-active")})})(jQuery,window,document);var map,infoWindow;var markers=[];var renderObjects=[];var searches=[];function initMap(){var directionsDisplay=new google.maps.DirectionsRenderer();map=new google.maps.Map(document.getElementById('map'),{center:{lat:-34.397,lng:150.644},zoom:10,mapTypeControl:!0,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.HORIZONTAL_BAR,position:google.maps.ControlPosition.BOTTOM_CENTER},zoomControl:!1,scaleControl:!0,streetViewControl:!1,fullscreenControl:!1,styles:[{"featureType":"all","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"visibility":"on"},{"weight":"4"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#b4985a"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#b4985a"},{"lightness":"-20"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":"07"},{"color":"#2b2b2b"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#528249"},{"lightness":"-60"},{"saturation":"-2"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"},{"invert_lightness":!0}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#b4985a"},{"lightness":"-40"},{"saturation":"-20"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"invert_lightness":!0},{"color":"#2b2b2b"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"},{"saturation":"-100"},{"lightness":"-60"},{"gamma":"2"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"invert_lightness":!0}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"invert_lightness":!0}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#3f3f3f"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"-77"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#222222"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"lightness":"-10"}]}],});infoWindow=new google.maps.InfoWindow();if(navigator.geolocation){navigator.geolocation.getCurrentPosition(function success(position){var pos;document.getElementById("searchButton").onclick=searchLocations;function searchLocations(){var address=document.getElementById("addressInput").value;var geocoder=new google.maps.Geocoder();geocoder.geocode({'address':address},function(results,status){if(status==='OK'){clearSearches();pos={lat:results[0].geometry.location.lat(),lng:results[0].geometry.location.lng()};var marker=new google.maps.Marker({map:map,position:results[0].geometry.location,title:'Searched location: '+address});map.setCenter(results[0].geometry.location);map.setZoom(10);searches.push(marker)}else{alert('Geocode was not successful for the following reason: '+status)}})}
document.getElementById("geo").onclick=function(){clearSearches();pos={lat:position.coords.latitude,lng:position.coords.longitude};var marker=new google.maps.Marker({position:pos,map:map,title:'You\'re here',icon:'https://image.ibb.co/c6V6X7/mapPin3.png'});infoWindow.setPosition(pos);map.setCenter(pos);map.setZoom(10)};pos={lat:position.coords.latitude,lng:position.coords.longitude};var marker=new google.maps.Marker({position:pos,map:map,title:'You\'re here',icon:'https://image.ibb.co/c6V6X7/mapPin3.png'});infowindow=new google.maps.InfoWindow();var service=new google.maps.places.PlacesService(map);infoWindow.setPosition(pos);map.setCenter(pos);if(document.URL.indexOf("spots.html#skateparks")>=0){$("#skatepark").addClass("white");service.nearbySearch({location:pos,radius:25000,keyword:'skate park',},callback);service.nearbySearch({location:pos,radius:25000,keyword:'bmx park',},callback)}
var skateparks=document.getElementById('skatepark');skateparks.addEventListener("click",function(e){deleteMarkers();clearRenderObjects();service.nearbySearch({location:pos,radius:25000,keyword:'skate park',},callback);service.nearbySearch({location:pos,radius:25000,keyword:'bmx park',},callback);infoWindow.setPosition(pos);map.setCenter(pos);map.setZoom(10);$("#places").html("");$("#matrix").html("")},!1);if(document.URL.indexOf("spots.html#mtb")>=0){$("#mtb").addClass("white");service.nearbySearch({location:pos,radius:25000,keyword:'mtb trail',},callback);service.nearbySearch({location:pos,radius:25000,keyword:'bmx track',},callback);service.nearbySearch({location:pos,radius:25000,keyword:'pump track',},callback)}
var mtbtrails=document.getElementById('mtb');mtbtrails.addEventListener("click",function(e){deleteMarkers();clearRenderObjects();service.nearbySearch({location:pos,radius:25000,keyword:'mtb trail',},callback);service.nearbySearch({location:pos,radius:25000,keyword:'bmx track',},callback);service.nearbySearch({location:pos,radius:25000,keyword:'pump track',},callback);infoWindow.setPosition(pos);map.setCenter(pos);map.setZoom(10);$("#places").html("");$("#matrix").html("")},!1);function handleLocationError(browserHasGeolocation,infoWindow,pos){infoWindow.setPosition(pos);infoWindow.setContent(browserHasGeolocation?'Error: The Geolocation service failed.':'Error: Your browser doesn\'t support geolocation.');infoWindow.open(map)}
function callback(results,status){if(status===google.maps.places.PlacesServiceStatus.OK){for(var i=0;i<results.length;i++){createMarker(results[i])}}}
function setMapOnAll(map){for(var i=0;i<markers.length;i++){markers[i].setMap(map)}}
function setMapOnAllSearches(map){for(var i=0;i<searches.length;i++){searches[i].setMap(map)}}
function createMarker(place){var placeLoc=place.geometry.location;var marker=new google.maps.Marker({map:map,position:place.geometry.location,animation:google.maps.Animation.DROP,icon:'https://image.ibb.co/dmrDC7/mapPin.png',});markers.push(marker);var service=new google.maps.places.PlacesService(map);var request={reference:place.reference};google.maps.event.addListener(marker,'mouseover',function(){service.getDetails(request,function(details,status){infowindow.setContent(['<strong>'+details.name+'</strong>',details.formatted_address,'Rating:&nbsp;'+'<strong>'+details.rating+'</strong>',].join("<br />"));infowindow.open(map,marker);google.maps.event.addListener(marker,'mouseout',function(){infowindow.close(map,marker)})})});setTimeout(function createCards(){service.getDetails(request,function(details,status){if(status!=='OK'){setTimeout(function(){createCards()},(1000*3))}
var placesList=document.getElementById('places');if(typeof place.photos!=='undefined'){placesList.innerHTML+='<div class="card card--small"><div class="card__image" style="background-image: url('+place.photos[0].getUrl({'maxWidth':1000})+');"></div><h2 class="card__title">'+details.name+'</h2><span class="card__subtitle link"><a href="https://www.google.co.uk/maps/search/'+details.name+'" target="_Blank">Open in Google Maps</a></span><div class="card__text"><p>'+details.formatted_address+'</p>'+(function(rs,fx){var list=document.createElement('ul');rs.forEach(function(r){list.appendChild(fx(r))});return'<ul>'+list.innerHTML+'</ul>'}(details.reviews,function(r){var item=document.createElement('li'),review=item.appendChild(document.createElement('ul'));item.appendChild(document.createElement('p')).classList.add('reviews');item.lastChild.appendChild(document.createTextNode(r.text));return item}))+'<button class="readmr">...</button></div><div class="card__action-bar"><div class="social"><a class="facebookBtn" href="https://www.facebook.com/sharer/sharer.php?u=callumcolley.github.io/streetscene&quote=Check%20out%20this%20awesome%20spot%20at%20'+details.name+'" target="_blank"></a><a class="twitterBtn" href="https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20spot%20at%20'+details.name+'%20@streetscene" target="_blank"></a><a class="pinterestBtn" href="https://www.pinterest.com/pin/create/button/?url=callumcolley.github.io/streetscene&media='+place.photos[0].getUrl({'maxWidth':1000})+'&description=Check%20out%20this%20awesome%20spot%20at%20'+details.name+'" target="_blank"></a></div><button class="card__button share">SHARE</button><button class="card__button show-more">LEARN MORE</button><button class="card__button show-less hide">SHOW LESS</button></div></div>'}else if(typeof place.photos=='undefined'&&typeof details.rs!=='undefined'){placesList.innerHTML+='<div class="card card--small"><div class="card__image" style="display:flex"><p>No Image Available</p></div><h2 class="card__title">'+details.name+'</h2><span class="card__subtitle link"><a href="https://www.google.co.uk/maps/search/'+details.name+'" target="_Blank">Open in Google Maps</a></span><div class="card__text"><p>'+details.formatted_address+'</p>'+(function(rs,fx){var list=document.createElement('ul');rs.forEach(function(r){list.appendChild(fx(r))});return'<ul>'+list.innerHTML+'</ul>'}(details.reviews,function(r){var item=document.createElement('li'),review=item.appendChild(document.createElement('ul'));item.appendChild(document.createElement('p')).classList.add('reviews');item.lastChild.appendChild(document.createTextNode(r.text));return item}))+'<button class="readmr">...</button></div><div class="card__action-bar"><div class="social"><a class="facebookBtn" href="https://www.facebook.com/sharer/sharer.php?u=callumcolley.github.io/streetscene&quote=Check%20out%20this%20awesome%20spot%20at%20'+details.name+'" target="_blank"></a><a class="twitterBtn" href="https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20spot%20at%20'+details.name+'%20@streetscene" target="_blank"></a><a class="pinterestBtn" href="https://www.pinterest.com/pin/create/button/?url=callumcolley.github.io/streetscene&media=&description=Check%20out%20this%20awesome%20spot%20at%20'+details.name+'" target="_blank"></a></div><button class="card__button share">SHARE</button><button class="card__button show-more">LEARN MORE</button><button class="card__button show-less hide">SHOW LESS</button></div></div>'}else if(typeof details.rs=='undefined'){placesList.innerHTML+='<div class="card card--small"><div class="card__image" style="display:flex"><p>No Image Available</p></div><h2 class="card__title">'+details.name+'</h2><span class="card__subtitle link"><a href="https://www.google.co.uk/maps/search/'+details.name+'" target="_Blank">Open in Google Maps</a></span><div class="card__text"><p>'+details.formatted_address+'</p><p>No Reviews Available :(</p></div><div class="card__action-bar"><div class="social"><a class="facebookBtn" href="https://www.facebook.com/sharer/sharer.php?u=callumcolley.github.io/streetscene&quote=Check%20out%20this%20awesome%20spot%20at%20'+details.name+'" target="_blank"></a><a class="twitterBtn" href="https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20spot%20at%20'+details.name+'%20@streetscene" target="_blank"></a><a class="pinterestBtn" href="https://www.pinterest.com/pin/create/button/?url=callumcolley.github.io/streetscene&media=&description=Check%20out%20this%20awesome%20spot%20at%20'+details.name+'" target="_blank"></a></div><button class="card__button share">SHARE</button><button class="card__button show-more">LEARN MORE</button><button class="card__button show-less hide">SHOW LESS</button></div></div>'}})},0);var directionsService=new google.maps.DirectionsService();directionsDisplay.setMap(map);directionsDisplay.setOptions({suppressMarkers:!0,});google.maps.event.addListener(marker,'click',function(){calculateAndDisplayRoute(directionsService,directionsDisplay);renderObjects.push(directionsDisplay);var service=new google.maps.DistanceMatrixService();var selectedMode=document.getElementById("selected").value;$("#matrix").html("");service.getDistanceMatrix({origins:[pos],destinations:[marker.getPosition()],travelMode:google.maps.TravelMode[selectedMode],unitSystem:google.maps.UnitSystem.IMPERIAL,avoidHighways:!1,avoidTolls:!1},function(response,status){if(status!==google.maps.DistanceMatrixStatus.OK){alert('Error was: '+status)}else{var origins=response.originAddresses;var destinations=response.destinationAddresses;for(var i=0;i<origins.length;i++){var results=response.rows[i].elements;for(var j=0;j<results.length;j++){var element=results[j];var distance=element.distance.text;var duration=element.duration.text;var from=origins[i];var to=destinations[j];var label=document.getElementById("matrix");label.innerHTML+='<div id="matrixLabel"><div class="head"><img src="img/icons/'+selectedMode+'.png"</img><strong>'+duration+'</strong></div><br><div style="padding-left:4px">'+distance+'</div></div>'}}}})});function calculateAndDisplayRoute(directionsService,directionsDisplay,place){var selectedMode=document.getElementById("selected").value;directionsService.route({origin:pos,destination:marker.getPosition(),travelMode:google.maps.TravelMode[selectedMode]},function(response,status){if(status==='OK'){directionsDisplay.setDirections(response)}else{window.alert('Directions request failed due to '+status)}})}}
function clearMarkers(){setMapOnAll(null)}
function clearSearches(){setMapOnAllSearches(null)}
function deleteMarkers(){clearMarkers();markers=[]}
function clearRenderObjects(){for(var i in renderObjects){renderObjects[i].setMap(null)}}})}else{handleLocationError(!1,infoWindow,map.getCenter())}}
