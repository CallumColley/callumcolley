//index | pannel text animaiton
$(function() {
  $(".spot").click(function() {
    $('.spotDropdown').toggleClass("show");
  });
  $(".category").click(function() {
    $('.categoryDropdown').toggleClass("show");
  });
});
$(function() {
  $(".skateboard").hover(function() {
      $(".skateboarder").addClass("line-growth");
    },
    function() {
      $(".skateboarder").removeClass("line-growth")
    });
  $(".bmx").hover(function() {
      $(".bmx-rider").addClass("line-growth");
    },
    function() {
      $(".bmx-rider").removeClass("line-growth")
    });
  $(".trail-bike").hover(function() {
      $(".trail-rider").addClass("line-growth");
    },
    function() {
      $(".trail-rider").removeClass("line-growth")
    });
});
//Registration | logo animation
$(window).ready(function() {
  setInterval(function() {
    $('#logoAnim').removeClass('logoWrap').addClass('seperate');
    setInterval(function() {
      $('#breakerAnim').removeClass('breaker').addClass('lines');
    }, 1000);
  }, 2000);
});
//Main navigation expansion
$(function() {
  $("#burger").click(function() {
    $(".pannel").toggleClass("mainPannel bounceInLeft");
    $("#burger img").toggle();
    $(".smaller").toggleClass("ontop");
  });
  $("#category").click(function() {
    $(".pannel").toggleClass("mainPannel bounceInLeft");
    $(".categoryDropdown").toggleClass("show");
    $("#burger img").toggle();
    $(".smaller").toggleClass("ontop");
  });
  $("#spots").click(function() {
    $(".pannel").toggleClass("mainPannel bounceInLeft");
    $(".spotDropdown").toggleClass("show");
    $("#burger img").toggle();
    $(".smaller").toggleClass("ontop");
  });
  $(".mainContent").click(function() {
    if ($(".pannel").hasClass("mainPannel")) {

    } else {
      $(".pannel").toggleClass("mainPannel bounceInLeft");
      $("#burger img").toggle();
      $(".smaller").toggleClass("ontop");
    };
  });
});
//Spots | Side Menu
$(function() {
  $(".openbtn, .closebtn").click(function() {
    $(".openbtn").toggleClass("invisible");
    $(".closebtn").toggleClass("visible");
  })
});
//Location Cards
$(document).on("click", ".show-more, .show-less", function(e) {
  // Get parent based on click target
  let $parent = $(this).closest(".card");
  $parent
    .toggleClass("card--small card--medium")
    .find(".show-more, .show-less").toggleClass("hide");
});
//Ripple onClick animation
(function($, window, document, undefined) {
  "use strict";

  var $ripple = $(".js-ripple");

  $ripple.on("click.ui.ripple", function(e) {
    var $this = $(this);
    var $offset = $this.parent().offset();
    var $circle = $this.find(".c-ripple__circle");

    var x = e.pageX - $offset.left;
    var y = e.pageY - $offset.top;

    $circle.css({
      top: y + "px",
      left: x + "px"
    });

    $this.addClass("is-active");
  });

  $ripple.on(
    "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
    function(e) {
      $(this).removeClass("is-active");
    }
  );
})(jQuery, window, document);






//API | GoogleMaps
var map, infoWindow;
var resultList = "";
var markers = [];
var renderObjects = [];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 10,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.BOTTOM_CENTER
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER,
    },
    scaleControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    styles: [{
        "featureType": "all",
        "elementType": "labels",
        "stylers": [{
          "visibility": "on"
        }]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [{
            "saturation": 36
          },
          {
            "color": "#000000"
          },
          {
            "lightness": 40
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "on"
          },
          {
            "color": "#000000"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#000000"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#000000"
          },
          {
            "lightness": 17
          },
          {
            "weight": 1.2
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [{
            "visibility": "on"
          },
          {
            "weight": "4"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#b4985a"
        }]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#b4985a"
          },
          {
            "lightness": "-20"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "elementType": "labels",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "lightness": "07"
          },
          {
            "color": "#2b2b2b"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "on"
          },
          {
            "color": "#528249"
          },
          {
            "lightness": "-60"
          },
          {
            "saturation": "-2"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{
            "visibility": "on"
          },
          {
            "invert_lightness": true
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#b4985a"
          },
          {
            "lightness": "-40"
          },
          {
            "saturation": "-20"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "invert_lightness": true
          },
          {
            "color": "#2b2b2b"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [{
            "visibility": "simplified"
          },
          {
            "saturation": "-100"
          },
          {
            "lightness": "-60"
          },
          {
            "gamma": "2"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [{
          "invert_lightness": true
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "invert_lightness": true
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#3f3f3f"
        }]
      },
      {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [{
          "lightness": "-77"
        }]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#222222"
        }]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{
          "lightness": "-10"
        }]
      }
    ],
  });

  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function success(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'You\'re here',
        icon: '/home/callum/Desktop/callumcolley.github.io/streetscene/img/icons/mapPin3.png' //Will change
      });
      infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(map);

      infoWindow.setPosition(pos);
      map.setCenter(pos);

      // Skatepark Locations
      if (document.URL.indexOf("spots.html#skateparks") >= 0) {
        //Request One
        service.nearbySearch({
          location: pos,
          radius: 25000,
          keyword: 'skate park',
        }, callback);
        //Request Two
        service.nearbySearch({
          location: pos,
          radius: 25000,
          keyword: 'bmx park',
        }, callback);
      };
      var skateparks = document.getElementById('skatepark');
      skateparks.addEventListener("click", function(e) {
        deleteMarkers();
        clearRenderObjects();
        //Request One
        service.nearbySearch({
          location: pos,
          radius: 25000,
          keyword: 'skate park',
        }, callback);
        //Request Two
        service.nearbySearch({
          location: pos,
          radius: 25000,
          keyword: 'bmx park',
        }, callback);
        infoWindow.setPosition(pos);
        map.setCenter(pos);
        map.setZoom(10);
        //Removes generated html
        $("#places").html("");
      }, false);
      // End of BMX & Skateboard location request

      //MTB Locations
      if (document.URL.indexOf("spots.html#mtb") >= 0) {
        //Request One
        service.nearbySearch({
          location: pos,
          radius: 25000,
          keyword: 'mtb trail',
        }, callback);
        //Request Two
        service.nearbySearch({
          location: pos,
          radius: 25000,
          keyword: 'bmx track',
        }, callback);
        //Request Three
        service.nearbySearch({
          location: pos,
          radius: 25000,
          keyword: 'pump track',
        }, callback);
      };
      var mtbtrails = document.getElementById('mtb');
      mtbtrails.addEventListener("click", function(e) {
        deleteMarkers();
        clearRenderObjects();
        //Request One
        service.nearbySearch({
          location: pos,
          radius: 25000,
          keyword: 'mtb trail',
        }, callback);
        //Request Two
        service.nearbySearch({
          location: pos,
          radius: 25000,
          keyword: 'bmx track',
        }, callback);
        //Request Three
        service.nearbySearch({
          location: pos,
          radius: 25000,
          keyword: 'pump track',
        }, callback);
        infoWindow.setPosition(pos);
        map.setCenter(pos);
        map.setZoom(10);
        //Removes generated html
        $("#places").html("");
      }, false);
      // End of MTB location request








      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
          'Error: The Geolocation service failed.' :
          'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

      function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
      }
      // Sets the map on all markers in the array.
      function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }

      function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location,
          animation: google.maps.Animation.DROP,
          icon: '/home/callum/Desktop/callumcolley.github.io/streetscene/img/icons/mapPin.png', //Will change
        });
        markers.push(marker);

        google.maps.event.addListener(marker, 'mouseover', function() {
          var service = new google.maps.places.PlacesService(map);
          var request = {
            reference: place.reference
          };
          service.getDetails(request, function(details, status) {

            infowindow.setContent([
              '<strong>' + details.name + '</strong>',
              details.formatted_address,
              '<a href="https://www.google.co.uk/maps/place/' + details.formatted_address + '" target="_Blank">Open in Google Maps</a>',
              'Rating:&nbsp;' + '<strong>' + details.rating + '</strong>',
            ].join("<br />"));
            infowindow.open(map, marker);
          });
        });
        var service = new google.maps.places.PlacesService(map);
        var request = {
          reference: place.reference
        };

        setTimeout(function createCards() {
          service.getDetails(request, function(details, status) {
            if (status !== 'OK') {
              setTimeout(function() {
                createCards();
              }, (0));
            }
            var placesList = document.getElementById('places');
            placesList.innerHTML += '<div class="card card--small"><div class="card__image" style="background-image: url(' + place.photos[0].getUrl({maxWidth: 640}) + ');"></div><h2 class="card__title">' + details.name + '</h2><span class="card__subtitle link"><a href="https://www.google.co.uk/maps/place/' + details.formatted_address + '" target="_Blank">Open in Google Maps</a></span><div class="card__text"><p>' + details.formatted_address + '</p><p>' + details.formatted_address + '</p><p>' + details.formatted_address + '</p><p>' + details.formatted_address + '</p></div><div class="card__action-bar"><button class="card__button">SHARE</button><button class="card__button show-more">LEARN MORE</button><button class="card__button show-less hide">SHOW LESS</button></div></div>';
          });
          console.clear()
        }, 0);


        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;


        directionsDisplay.setMap(map);
        renderObjects.push(directionsDisplay);
        directionsDisplay.setOptions({
          suppressMarkers: true,
          polylineOptions: {
            strokeWeight: 4,
            strokeOpacity: 1,
            strokeColor: 'blue'
          }
        });

        var onChangeHandler = function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };
        google.maps.event.addListener(marker, 'click', onChangeHandler);




        function calculateAndDisplayRoute(directionsService, directionsDisplay, place) {
          directionsService.route({
            origin: pos,
            destination: marker.getPosition(),
            travelMode: 'DRIVING'
          }, function(response, status) {
            if (status === 'OK') {
              directionsDisplay.setDirections(response);
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });
        }







      }
      // Removes the markers from the map, but keeps them in the array.
      function clearMarkers() {
        setMapOnAll(null);
      }

      // Deletes all markers in the array by removing references to them.
      function deleteMarkers() {
        clearMarkers();
        markers = [];
      }

      // Removes directional routes
      function clearRenderObjects() {
        for(var i in renderObjects) {
          renderObjects[i].setMap(null);
        }
      }








    })
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  } // End of Geolocation
} // End of Initialisation
