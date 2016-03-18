'use strict';

(function() {

class MainController {

  constructor($http, $scope, $firebaseObject, socket, $interval, $routeParams, uiGmapGoogleMapApi, uiGmapGmapUtil) {

    $scope.chartShow = false;
    $scope.mapShow = true;
    $scope.pieGraph1 = false;
    $scope.pieGraph2 = false;
    $scope.pieGraph3 = false;
    $scope.pieGraph4 = false;
    $scope.pieGraph5 = false;
    $scope.pieGraph6 = false;
    $scope.pieGraph7 = false;
    $scope.pieGraph8 = false;
    $scope.pieGraph9 = false;
    $scope.pieGraph10 = false;

    $scope.graphSelect = function(){
      $scope.chartShow = true;
      $scope.mapShow = false;
      $scope.pieGraph1 = false;
      $scope.pieGraph2 = false;
      $scope.pieGraph3 = false;
      $scope.pieGraph4 = false;
      $scope.pieGraph5 = false;
      $scope.pieGraph6 = false;
      $scope.pieGraph7 = false;
      $scope.pieGraph8 = false;
      $scope.pieGraph9 = false;
      $scope.pieGraph10 = false;
    };

    $scope.mapSelect = function(){
      $scope.chartShow = false;
      $scope.mapShow = true;
      $scope.pieGraph1 = false;
      $scope.pieGraph2 = false;
      $scope.pieGraph3 = false;
      $scope.pieGraph4 = false;
      $scope.pieGraph5 = false;
      $scope.pieGraph6 = false;
      $scope.pieGraph7 = false;
      $scope.pieGraph8 = false;
      $scope.pieGraph9 = false;
      $scope.pieGraph10 = false;
    };

    $scope.zona1 = function(){
      $scope.chartShow = false;
      $scope.mapShow = false;
      $scope.pieGraph1 = true;
      $scope.pieGraph2 = false;
      $scope.pieGraph3 = false;
      $scope.pieGraph4 = false;
      $scope.pieGraph5 = false;
      $scope.pieGraph6 = false;
      $scope.pieGraph7 = false;
      $scope.pieGraph8 = false;
      $scope.pieGraph9 = false;
      $scope.pieGraph10 = false;
    };
    $scope.zona2 = function(){
      $scope.chartShow = false;
      $scope.mapShow = false;
      $scope.pieGraph1 = false;
      $scope.pieGraph2 = true;
      $scope.pieGraph3 = false;
      $scope.pieGraph4 = false;
      $scope.pieGraph5 = false;
      $scope.pieGraph6 = false;
      $scope.pieGraph7 = false;
      $scope.pieGraph8 = false;
      $scope.pieGraph9 = false;
      $scope.pieGraph10 = false;
    };
    $scope.zona3 = function(){
      $scope.chartShow = false;
      $scope.mapShow = false;
      $scope.pieGraph1 = false;
      $scope.pieGraph2 = false;
      $scope.pieGraph3 = true;
      $scope.pieGraph4 = false;
      $scope.pieGraph5 = false;
      $scope.pieGraph6 = false;
      $scope.pieGraph7 = false;
      $scope.pieGraph8 = false;
      $scope.pieGraph9 = false;
      $scope.pieGraph10 = false;
    };
    $scope.zona4 = function(){
      $scope.chartShow = false;
      $scope.mapShow = false;
      $scope.pieGraph1 = false;
      $scope.pieGraph2 = false;
      $scope.pieGraph3 = false;
      $scope.pieGraph4 = true;
      $scope.pieGraph5 = false;
      $scope.pieGraph6 = false;
      $scope.pieGraph7 = false;
      $scope.pieGraph8 = false;
      $scope.pieGraph9 = false;
      $scope.pieGraph10 = false;
    };

    $scope.zona5 = function(){
      $scope.chartShow = false;
      $scope.mapShow = false;
      $scope.pieGraph1 = false;
      $scope.pieGraph2 = false;
      $scope.pieGraph3 = false;
      $scope.pieGraph4 = false;
      $scope.pieGraph5 = true;
      $scope.pieGraph6 = false;
      $scope.pieGraph7 = false;
      $scope.pieGraph8 = false;
      $scope.pieGraph9 = false;
      $scope.pieGraph10 = false;
    };

    $scope.zona6 = function(){
      $scope.chartShow = false;
      $scope.mapShow = false;
      $scope.pieGraph1 = false;
      $scope.pieGraph2 = false;
      $scope.pieGraph3 = false;
      $scope.pieGraph4 = false;
      $scope.pieGraph5 = false;
      $scope.pieGraph6 = true;
      $scope.pieGraph7 = false;
      $scope.pieGraph8 = false;
      $scope.pieGraph9 = false;
      $scope.pieGraph10 = false;
    };
    $scope.zona7 = function(){
      $scope.chartShow = false;
      $scope.mapShow = false;
      $scope.pieGraph1 = false;
      $scope.pieGraph2 = false;
      $scope.pieGraph3 = false;
      $scope.pieGraph4 = false;
      $scope.pieGraph5 = false;
      $scope.pieGraph6 = false;
      $scope.pieGraph7 = true;
      $scope.pieGraph8 = false;
      $scope.pieGraph9 = false;
      $scope.pieGraph10 = false;
    };
    $scope.zona8 = function(){
      $scope.chartShow = false;
      $scope.mapShow = false;
      $scope.pieGraph1 = false;
      $scope.pieGraph2 = false;
      $scope.pieGraph3 = false;
      $scope.pieGraph4 = false;
      $scope.pieGraph5 = false;
      $scope.pieGraph6 = false;
      $scope.pieGraph7 = false;
      $scope.pieGraph8 = true;
      $scope.pieGraph9 = false;
      $scope.pieGraph10 = false;
    };
    $scope.zona9 = function(){
      $scope.chartShow = false;
      $scope.mapShow = false;
      $scope.pieGraph1 = false;
      $scope.pieGraph2 = false;
      $scope.pieGraph3 = false;
      $scope.pieGraph4 = false;
      $scope.pieGraph5 = false;
      $scope.pieGraph6 = false;
      $scope.pieGraph7 = false;
      $scope.pieGraph8 = false;
      $scope.pieGraph9 = true;
      $scope.pieGraph10 = false;
    };
    $scope.zona10 = function(){
      $scope.chartShow = false;
      $scope.mapShow = false;
      $scope.pieGraph1 = false;
      $scope.pieGraph2 = false;
      $scope.pieGraph3 = false;
      $scope.pieGraph4 = false;
      $scope.pieGraph5 = false;
      $scope.pieGraph6 = false;
      $scope.pieGraph7 = false;
      $scope.pieGraph8 = false;
      $scope.pieGraph9 = false;
      $scope.pieGraph10 = true;
    };


    var ref = new Firebase('https://gubi.firebaseio.com');
    $scope.zone1 = $firebaseObject(ref.child('ITESM/ZoneI'));
    $scope.zone2 = $firebaseObject(ref.child('ITESM/ZoneJ'));
    $scope.zone3 = $firebaseObject(ref.child('ITESM/ZoneF'));
    $scope.zone4 = $firebaseObject(ref.child('ITESM/ZoneG'));
    $scope.zone5 = $firebaseObject(ref.child('ITESM/ZoneH'));
    $scope.zone6 = $firebaseObject(ref.child('ITESM/ZoneA'));
    $scope.zone7 = $firebaseObject(ref.child('ITESM/ZoneD'));
    $scope.zone8 = $firebaseObject(ref.child('ITESM/ZoneC'));
    $scope.zone9 = $firebaseObject(ref.child('ITESM/ZoneB'));
    $scope.zone10 = $firebaseObject(ref.child('ITESM/ZoneE'));

    function go() {
      $scope.z1[2].v = $scope.zone1.Busy;
      $scope.z1[1].v = $scope.zone1.Total - $scope.zone1.Busy;
      $scope.z2[2].v = $scope.zone2.Busy;
      $scope.z2[1].v = $scope.zone2.Total - $scope.zone2.Busy;
      $scope.z3[2].v = $scope.zone3.Busy;
      $scope.z3[1].v = $scope.zone3.Total - $scope.zone3.Busy;
      $scope.z4[2].v = $scope.zone4.Busy;
      $scope.z4[1].v = $scope.zone4.Total - $scope.zone4.Busy;

      $scope.z5[2].v = $scope.zone5.Busy;
      $scope.z5[1].v = $scope.zone5.Total - $scope.zone5.Busy;
      $scope.z6[2].v = $scope.zone6.Busy;
      $scope.z6[1].v = $scope.zone6.Total - $scope.zone6.Busy;
      $scope.z7[2].v = $scope.zone7.Busy;
      $scope.z7[1].v = $scope.zone7.Total - $scope.zone7.Busy;
      $scope.z8[2].v = $scope.zone8.Busy;
      $scope.z8[1].v = $scope.zone8.Total - $scope.zone8.Busy;
      $scope.z9[2].v = $scope.zone9.Busy;
      $scope.z9[1].v = $scope.zone9.Total - $scope.zone9.Busy;
      $scope.z10[2].v = $scope.zone10.Busy;
      $scope.z10[1].v = $scope.zone10.Total - $scope.zone10.Busy;

      $scope.p1[1].v = $scope.zone1.Busy;
      $scope.p11[1].v = $scope.zone1.Total - $scope.zone1.Busy;
      $scope.p2[1].v = $scope.zone2.Busy;
      $scope.p22[1].v = $scope.zone2.Total - $scope.zone2.Busy;
      $scope.p3[1].v = $scope.zone3.Busy;
      $scope.p33[1].v = $scope.zone3.Total - $scope.zone3.Busy;
      $scope.p4[1].v = $scope.zone4.Busy;
      $scope.p44[1].v = $scope.zone4.Total - $scope.zone4.Busy;

      $scope.p5[1].v = $scope.zone5.Busy;
      $scope.p55[1].v = $scope.zone5.Total - $scope.zone5.Busy;
      $scope.p6[1].v = $scope.zone6.Busy;
      $scope.p66[1].v = $scope.zone6.Total - $scope.zone6.Busy;
      $scope.p7[1].v = $scope.zone7.Busy;
      $scope.p77[1].v = $scope.zone7.Total - $scope.zone7.Busy;
      $scope.p8[1].v = $scope.zone8.Busy;
      $scope.p88[1].v = $scope.zone8.Total - $scope.zone8.Busy;
      $scope.p9[1].v = $scope.zone9.Busy;
      $scope.p99[1].v = $scope.zone9.Total - $scope.zone9.Busy;
      $scope.p10[1].v = $scope.zone10.Busy;
      $scope.p100[1].v = $scope.zone10.Total - $scope.zone10.Busy;
    }

    $interval(go, 1000);

    $scope.map = { center: { latitude: 20.734982, longitude: -103.454845 }, zoom: 17 };

    $scope.polywindow = {
      coords: {
        latitude: 53,
        longitude: 20
      },
      show: false
    };

    $scope.titles = '';
    $scope.position = 0;
    $scope.position2 = 0;

    $scope.polygons = [
      {
        id: 1,
        path: [
          { latitude: 20.732746, longitude: -103.453703 },
          { latitude: 20.732626, longitude: -103.453059 },
          { latitude: 20.733308, longitude: -103.452909 },
          { latitude: 20.733409, longitude: -103.453542 }
        ],
        stroke: {
          color: '#339966',
          weight: 3
        },
        events: {
          mouseover: function(gPoly, eventName, polyModel) {
            var bounds = new google.maps.LatLngBounds();
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng); });
            var gCenter = bounds.getCenter();
            $scope.polywindow.coords = {
              latitude: gCenter.lat(),
              longitude: gCenter.lng()
            };
            $scope.polywindow.show = true;
            $scope.titles = 'Aulas VI ';
            $scope.position = 'Available: ' + ($scope.zone1.Total - $scope.zone1.Busy);
            $scope.position2 = ' Busy: ' + $scope.zone1.Busy;
          },
          //mouseout: function(gPoly, eventName, polyModel) {
            //var bounds = new google.maps.LatLngBounds()
            //gPoly.getPath().forEach(function(latLng){bounds.extend(latLng); });
            //$scope.polywindow.show = false;
          //}
        },
        clickable: true,
        editable: true,
        draggable: true,
        geodesic: false,
        visible: true,
        fill: {
          color: '#339966',
          strokeOpacity: 0.8,
          strokeWeight: 2,
        }
      },
      {
        id: 2,
        path: [
          { latitude: 20.736650, longitude: -103.453102 },
          { latitude: 20.736539, longitude: -103.452319 },
          { latitude: 20.735867, longitude: -103.452415 },
          { latitude: 20.735977, longitude: -103.453209 }
        ],
        stroke: {
          color: '#6600CC',
          weight: 3
        },
        events: {
          mouseover: function(gPoly, eventName, polyModel) {
            var bounds = new google.maps.LatLngBounds();
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng); });
            var gCenter = bounds.getCenter();
            $scope.polywindow.coords = {
              latitude: gCenter.lat(),
              longitude: gCenter.lng()
            };
            $scope.polywindow.show = true;
            $scope.titles = 'Aulas V ';
            $scope.position = 'Available: ' + ($scope.zone2.Total - $scope.zone2.Busy);
            $scope.position2 = ' Busy: ' + $scope.zone2.Busy;
          },
         // mouseout: function(gPoly, eventName, polyModel) {
           // var bounds = new google.maps.LatLngBounds()
            //gPoly.getPath().forEach(function(latLng){bounds.extend(latLng); });
            //$scope.polywindow.show = false;
         // }
        },
        clickable: true,
        editable: true,
        draggable: true,
        geodesic: false,
        visible: true,
        fill: {
          color: '#6600CC',
          strokeOpacity: 0.8,
          strokeWeight: 2,
        }
      },
      {
        id: 3,
        path: [
          { latitude: 20.734101, longitude: -103.457801 },
          { latitude: 20.732485, longitude: -103.458005 },
          { latitude: 20.732415, longitude: -103.457587 },
          { latitude: 20.732596, longitude: -103.457404 },
          { latitude: 20.733077, longitude: -103.457329 },
          { latitude: 20.733088, longitude: -103.456932 },
          { latitude: 20.734011, longitude: -103.456932 }
        ],
        stroke: {
          color: '#FF9933',
          weight: 3
        },
        events: {
          mouseover: function(gPoly, eventName, polyModel) {
            var bounds = new google.maps.LatLngBounds();
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng); });
            var gCenter = bounds.getCenter();
            $scope.polywindow.coords = {
              latitude: gCenter.lat(),
              longitude: gCenter.lng()
            };
            $scope.polywindow.show = true;
            $scope.titles = 'Medicina ';
            $scope.position = 'Available: ' + ($scope.zone3.Total - $scope.zone3.Busy);
            $scope.position2 = ' Busy: ' + $scope.zone3.Busy;
          },
          //mouseout: function(gPoly, eventName, polyModel) {
            //var bounds = new google.maps.LatLngBounds()
            //gPoly.getPath().forEach(function(latLng){bounds.extend(latLng); });
            //$scope.polywindow.show = false;
          //}
        },
        clickable: true,
        editable: true,
        draggable: true,
        geodesic: false,
        visible: true,
        fill: {
          color: '#FF9933',
          strokeOpacity: 0.8,
          strokeWeight: 2,
        }
      },
      {
        id: 4,
        path: [
          { latitude: 20.732917, longitude: -103.457201 },
          { latitude: 20.732907, longitude: -103.456471 },
          { latitude: 20.732295, longitude: -103.456053 },
          { latitude: 20.732215, longitude: -103.456063 },
          { latitude: 20.732305, longitude: -103.457083 },
          { latitude: 20.732536, longitude: -103.457254 }
        ],
        stroke: {
          color: '#FF66FF',
          weight: 3
        },
        events: {
          mouseover: function(gPoly, eventName, polyModel) {
            var bounds = new google.maps.LatLngBounds();
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng); });
            var gCenter = bounds.getCenter();
            $scope.polywindow.coords = {
              latitude: gCenter.lat(),
              longitude: gCenter.lng()
            };
            $scope.polywindow.show = true;
            $scope.titles = 'Visitantes ';
            $scope.position = 'Available: ' + ($scope.zone4.Total - $scope.zone4.Busy);
            $scope.position2 = ' Busy: ' + $scope.zone4.Busy;
          },
          //mouseout: function(gPoly, eventName, polyModel) {
            //var bounds = new google.maps.LatLngBounds()
            //gPoly.getPath().forEach(function(latLng){bounds.extend(latLng); });
            //$scope.polywindow.show = false;
          //}
        },
        clickable: true,
        editable: true,
        draggable: true,
        geodesic: false,
        visible: true,
        fill: {
          color: '#FF66FF',
          strokeOpacity: 0.8,
          strokeWeight: 2,
        }
      },
      {
        id: 5,
        path: [
          { latitude: 20.732465, longitude: -103.455967 },
          { latitude: 20.732465, longitude: -103.455645 },
          { latitude: 20.732867, longitude: -103.455076 },
          { latitude: 20.732817, longitude: -103.454690 },
          { latitude: 20.732355, longitude: -103.454701 },
          { latitude: 20.731964, longitude: -103.455173 },
          { latitude: 20.732024, longitude: -103.455774 }
        ],
        stroke: {
          color: '#00CC99',
          weight: 3
        },
        events: {
          mouseover: function(gPoly, eventName, polyModel) {
            var bounds = new google.maps.LatLngBounds();
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng); });
            var gCenter = bounds.getCenter();
            $scope.polywindow.coords = {
              latitude: gCenter.lat(),
              longitude: gCenter.lng()
            };
            $scope.polywindow.show = true;
            $scope.titles = 'Cafeteria ';
            $scope.position = 'Available: ' + ($scope.zone5.Total - $scope.zone5.Busy);
            $scope.position2 = ' Busy: ' + $scope.zone5.Busy;
          },
          //mouseout: function(gPoly, eventName, polyModel) {
            //var bounds = new google.maps.LatLngBounds()
            //gPoly.getPath().forEach(function(latLng){bounds.extend(latLng); });
            //$scope.polywindow.show = false;
          //}
        },
        clickable: true,
        editable: true,
        draggable: true,
        geodesic: false,
        visible: true,
        fill: {
          color: '#00CC99',
          strokeOpacity: 0.8,
          strokeWeight: 2,
        }
      },
      {
        id: 6,
        path: [
          { latitude: 20.733298, longitude: -103.454390 },
          { latitude: 20.733248, longitude: -103.453778 },
          { latitude: 20.732114, longitude: -103.454003 },
          { latitude: 20.732194, longitude: -103.454465 }
        ],
        stroke: {
          color: '#0000FF',
          weight: 3
        },
        events: {
          mouseover: function(gPoly, eventName, polyModel) {
            var bounds = new google.maps.LatLngBounds();
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng); });
            var gCenter = bounds.getCenter();
            $scope.polywindow.coords = {
              latitude: gCenter.lat(),
              longitude: gCenter.lng()
            };
            $scope.polywindow.show = true;
            $scope.titles = 'Zona Azul ';
            $scope.position = 'Available: ' + ($scope.zone6.Total - $scope.zone6.Busy);
            $scope.position2 = ' Busy: ' + $scope.zone6.Busy;
          },
          //mouseout: function(gPoly, eventName, polyModel) {
            //var bounds = new google.maps.LatLngBounds()
            //gPoly.getPath().forEach(function(latLng){bounds.extend(latLng); });
            //$scope.polywindow.show = false;
          //}
        },
        clickable: true,
        editable: true,
        draggable: true,
        geodesic: false,
        visible: true,
        fill: {
          color: '#0000FF',
          strokeOpacity: 0.8,
          strokeWeight: 2,
        }
      },
      {
        id: 7,
        path: [
          { latitude: 20.734733, longitude: -103.454239 },
          { latitude: 20.733399, longitude: -103.454368 },
          { latitude: 20.733348, longitude: -103.453746 },
          { latitude: 20.734663, longitude: -103.453521 }
        ],
        stroke: {
          color: '#FFFF00',
          weight: 3
        },
        events: {
          mouseover: function(gPoly, eventName, polyModel) {
            var bounds = new google.maps.LatLngBounds();
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng); });
            var gCenter = bounds.getCenter();
            $scope.polywindow.coords = {
              latitude: gCenter.lat(),
              longitude: gCenter.lng()
            };
            $scope.polywindow.show = true;
            $scope.titles = 'Zona Amarilla ';
            $scope.position = 'Available: ' + ($scope.zone7.Total - $scope.zone7.Busy);
            $scope.position2 = ' Busy: ' + $scope.zone7.Busy;
          },
          //mouseout: function(gPoly, eventName, polyModel) {
            //var bounds = new google.maps.LatLngBounds()
            //gPoly.getPath().forEach(function(latLng){bounds.extend(latLng); });
            //$scope.polywindow.show = false;
          //}
        },
        clickable: true,
        editable: true,
        draggable: true,
        geodesic: false,
        visible: true,
        fill: {
          color: '#FFFF00',
          strokeOpacity: 0.8,
          strokeWeight: 2,
        }
      },
      {
        id: 8,
        path: [
          { latitude: 20.735245, longitude: -103.454196 },
          { latitude: 20.735205, longitude: -103.453478 },
          { latitude: 20.734733, longitude: -103.453531 },
          { latitude: 20.734803, longitude: -103.454229 }
        ],
        stroke: {
          color: '#FF0000',
          weight: 3
        },
        events: {
          mouseover: function(gPoly, eventName, polyModel) {
            var bounds = new google.maps.LatLngBounds();
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng); });
            var gCenter = bounds.getCenter();
            $scope.polywindow.coords = {
              latitude: gCenter.lat(),
              longitude: gCenter.lng()
            };
            $scope.polywindow.show = true;
            $scope.titles = 'Zona Roja ';
            $scope.position = 'Available: ' + ($scope.zone8.Total - $scope.zone8.Busy);
            $scope.position2 = ' Busy: ' + $scope.zone8.Busy;
          },
          //mouseout: function(gPoly, eventName, polyModel) {
            //var bounds = new google.maps.LatLngBounds()
            //gPoly.getPath().forEach(function(latLng){bounds.extend(latLng); });
            //$scope.polywindow.show = false;
          //}
        },
        clickable: true,
        editable: true,
        draggable: true,
        geodesic: false,
        visible: true,
        fill: {
          color: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
        }
      },
      {
        id: 9,
        path: [
          { latitude: 20.735335, longitude: -103.454186 },
          { latitude: 20.736148, longitude: -103.454121 },
          { latitude: 20.736098, longitude: -103.453327 },
          { latitude: 20.735295, longitude: -103.453445 }
        ],
        stroke: {
          color: '#00CC00',
          weight: 3
        },
        events: {
          mouseover: function(gPoly, eventName, polyModel) {
            var bounds = new google.maps.LatLngBounds();
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng); });
            var gCenter = bounds.getCenter();
            $scope.polywindow.coords = {
              latitude: gCenter.lat(),
              longitude: gCenter.lng()
            };
            $scope.polywindow.show = true;
            $scope.titles = 'Zona Verde ';
            $scope.position = 'Available: ' + ($scope.zone9.Total - $scope.zone9.Busy);
            $scope.position2 = ' Busy: ' + $scope.zone9.Busy;
          },
          //mouseout: function(gPoly, eventName, polyModel) {
            //var bounds = new google.maps.LatLngBounds()
            //gPoly.getPath().forEach(function(latLng){bounds.extend(latLng); });
            //$scope.polywindow.show = false;
          //}
        },
        clickable: true,
        editable: true,
        draggable: true,
        geodesic: false,
        visible: true,
        fill: {
          color: '#00CC00',
          strokeOpacity: 0.8,
          strokeWeight: 2,
        }
      },
      {
        id: 10,
        path: [
          { latitude: 20.737462, longitude: -103.453521 },
          { latitude: 20.737121, longitude: -103.453510 },
          { latitude: 20.737051, longitude: -103.453166 },
          { latitude: 20.736258, longitude: -103.453317 },
          { latitude: 20.736298, longitude: -103.454089 },
          { latitude: 20.737543, longitude: -103.453950 }
        ],
        stroke: {
          color: '#CC0066',
          weight: 3
        },
        events: {
          mouseover: function(gPoly, eventName, polyModel) {
            var bounds = new google.maps.LatLngBounds();
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng); });
            var gCenter = bounds.getCenter();
            $scope.polywindow.coords = {
              latitude: gCenter.lat(),
              longitude: gCenter.lng()
            };
            $scope.polywindow.show = true;
            $scope.titles = 'Zona Morada ';
            $scope.position = 'Available: ' + ($scope.zone10.Total - $scope.zone10.Busy);
            $scope.position2 = ' Busy: ' + $scope.zone10.Busy;
          },
          //mouseout: function(gPoly, eventName, polyModel) {
            //var bounds = new google.maps.LatLngBounds()
            //gPoly.getPath().forEach(function(latLng){bounds.extend(latLng); });
            //$scope.polywindow.show = false;
          //}
        },
        clickable: true,
        editable: true,
        draggable: true,
        geodesic: false,
        visible: true,
        fill: {
          color: '#CC0066',
          strokeOpacity: 0.8,
          strokeWeight: 2,
        }
      },
    ];

    $scope.z1 = [
      {v: 'Aulas VI'},
      {v: 0},
      {v: 0},
    ];
    $scope.z2 = [
      {v: 'Aulas V'},
      {v: 0},
      {v: 0},
    ];
    $scope.z3 = [
      {v: 'Medicina'},
      {v: 0},
      {v: 0},
    ];
    $scope.z4 = [
      {v: 'Visitantes'},
      {v: 0},
      {v: 0},
    ];
    $scope.z5 = [
      {v: 'Cafeteria'},
      {v: 0},
      {v: 0},
    ];
    $scope.z6 = [
      {v: 'Zona Azul'},
      {v: 0},
      {v: 0},
    ];
    $scope.z7 = [
      {v: 'Zona Amarilla'},
      {v: 0},
      {v: 0},
    ];
    $scope.z8 = [
      {v: ' Zona Roja'},
      {v: 0},
      {v: 0},
    ];
    $scope.z9 = [
      {v: 'Zona Verde'},
      {v: 0},
      {v: 0},
    ];
    $scope.z10 = [
      {v: 'Zona Morada'},
      {v: 0},
      {v: 0},
    ];

    $scope.chartObject = {};

    $scope.chartObject.type = 'ColumnChart';

    $scope.chartObject.data = {'cols': [
      {id: 't', label: 'Topping', type: 'string'},
      {id: 's', label: 'Available', type: 'number'},
      {id: 's', label: 'Busy', type: 'number'},
      //{id: 's', label: 'Car Pool', type: 'number'},
      //{id: 's', label: 'Busy', type: 'number'},
      //{id: 's', label: 'Wheel Chair', type: 'number'}

    ], 'rows': [
      {c: $scope.z1},
      {c: $scope.z2},
      {c: $scope.z3},
      {c: $scope.z4},
      {c: $scope.z5},
      {c: $scope.z6},
      {c: $scope.z7},
      {c: $scope.z8},
      {c: $scope.z9},
      {c: $scope.z10},
    ]};

    $scope.chartObject.options = {
      'title': 'Parking spaces statistics',
      isStacked: true,
      series: {
        0: { color: '#6600CC' },
        1: { color: '#FF0000' }
      }
    };


    $scope.p1 = [
      {v: 'Busy'},
      {v: 0},
    ];
    $scope.p11 = [
      {v: 'Available'},
      {v: 0},
    ];
    $scope.p2 = [
      {v: 'Busy'},
      {v: 0},
    ];
    $scope.p22 = [
      {v: 'Available'},
      {v: 0},
    ];
    $scope.p3 = [
      {v: 'Busy'},
      {v: 0},
    ];
    $scope.p33 = [
      {v: 'Available'},
      {v: 0},
    ];
    $scope.p4 = [
      {v: 'Busy'},
      {v: 0},
    ];
    $scope.p44 = [
      {v: 'Available'},
      {v: 0},
    ];
    $scope.p5 = [
      {v: 'Busy'},
      {v: 0},
    ];
    $scope.p55 = [
      {v: 'Available'},
      {v: 0},
    ];
    $scope.p6 = [
      {v: 'Busy'},
      {v: 0},
    ];
    $scope.p66 = [
      {v: 'Available'},
      {v: 0},
    ];
    $scope.p7 = [
      {v: 'Busy'},
      {v: 0},
    ];
    $scope.p77 = [
      {v: 'Available'},
      {v: 0},
    ];
    $scope.p8 = [
      {v: 'Busy'},
      {v: 0},
    ];
    $scope.p88 = [
      {v: 'Available'},
      {v: 0},
    ];
    $scope.p9 = [
      {v: 'Busy'},
      {v: 0},
    ];
    $scope.p99 = [
      {v: 'Available'},
      {v: 0},
    ];
    $scope.p10 = [
      {v: 'Busy'},
      {v: 0},
    ];
    $scope.p100 = [
      {v: 'Available'},
      {v: 0},
    ];

    //$scope.pies = [$scope.p1,$scope.p2,$scope.p3, $scope.p4];
    //$scope.piess = [$scope.p11,$scope.p22,$scope.p33, $scope.p44];
    //$scope.current = 0;

    $scope.pie1 = {};

    $scope.pie1.data = {'cols': [
      {id: 't', label: 'Topping', type: 'string'},
      {id: 's', label: 'Slices', type: 'number'}
    ], 'rows': [
      {c: $scope.p1},
      {c: $scope.p11}
    ]};

    $scope.pie1.type = 'PieChart';
    $scope.pie1.options = {
      'title': 'Available Spaces in Aulas VI',
      is3D: true,
      slices: {
        0: { color: '#CC0066' },
        1: { color: '#00CC00' }
      }
    };

    /*************************/

    $scope.pie2 = {};

    $scope.pie2.data = {'cols': [
      {id: 't', label: 'Topping', type: 'string'},
      {id: 's', label: 'Slices', type: 'number'}
    ], 'rows': [
      {c: $scope.p2},
      {c: $scope.p22}
    ]};

    $scope.pie2.type = 'PieChart';
    $scope.pie2.options = {
      'title': 'Available Spaces in Aulas V',
      is3D: true,
      slices: {
        0: { color: '#FF5050' },
        1: { color: '#6600CC' }
      }
    };

    /*************************/

    $scope.pie3 = {};

    $scope.pie3.data = {'cols': [
      {id: 't', label: 'Topping', type: 'string'},
      {id: 's', label: 'Slices', type: 'number'}
    ], 'rows': [
      {c: $scope.p3},
      {c: $scope.p33}
    ]};

    $scope.pie3.type = 'PieChart';
    $scope.pie3.options = {
      'title': 'Available Spaces in Medicina',
      is3D: true,
      slices: {
        0: { color: '#0000FF' },
        1: { color: '#00CC99' }
      }
    };

    /*************************/

    $scope.pie4 = {};

    $scope.pie4.data = {'cols': [
      {id: 't', label: 'Topping', type: 'string'},
      {id: 's', label: 'Slices', type: 'number'}
    ], 'rows': [
      {c: $scope.p4},
      {c: $scope.p44}
    ]};

    $scope.pie4.type = 'PieChart';
    $scope.pie4.options = {
      'title': 'Available Spaces in Visitantes',
      is3D: true,
      slices: {
        0: { color: '#FF66FF' },
        1: { color: '#FF9933' }
      }
    };

    /*************************/

    $scope.pie5 = {};

    $scope.pie5.data = {'cols': [
      {id: 't', label: 'Topping', type: 'string'},
      {id: 's', label: 'Slices', type: 'number'}
    ], 'rows': [
      {c: $scope.p5},
      {c: $scope.p55}
    ]};

    $scope.pie5.type = 'PieChart';
    $scope.pie5.options = {
      'title': 'Available Spaces in Cafeteria',
      is3D: true,
      slices: {
        0: { color: '#CC0066' },
        1: { color: '#00CC00' }
      }
    };

    /*************************/

    $scope.pie6 = {};

    $scope.pie6.data = {'cols': [
      {id: 't', label: 'Topping', type: 'string'},
      {id: 's', label: 'Slices', type: 'number'}
    ], 'rows': [
      {c: $scope.p6},
      {c: $scope.p66}
    ]};

    $scope.pie6.type = 'PieChart';
    $scope.pie6.options = {
      'title': 'Available Spaces in Zona Azul',
      is3D: true,
      slices: {
        0: { color: '#FF5050' },
        1: { color: '#6600CC' }
      }
    };

    /*************************/
    $scope.pie7 = {};

    $scope.pie7.data = {'cols': [
      {id: 't', label: 'Topping', type: 'string'},
      {id: 's', label: 'Slices', type: 'number'}
    ], 'rows': [
      {c: $scope.p7},
      {c: $scope.p77}
    ]};

    $scope.pie7.type = 'PieChart';
    $scope.pie7.options = {
      'title': 'Available Spaces in Zona Amarilla',
      is3D: true,
      slices: {
        0: { color: '#0000FF' },
        1: { color: '#00CC99' }
      }
    };

    /*************************/
    $scope.pie8 = {};

    $scope.pie8.data = {'cols': [
      {id: 't', label: 'Topping', type: 'string'},
      {id: 's', label: 'Slices', type: 'number'}
    ], 'rows': [
      {c: $scope.p8},
      {c: $scope.p88}
    ]};

    $scope.pie8.type = 'PieChart';
    $scope.pie8.options = {
      'title': 'Available Spaces in Zona Roja',
      is3D: true,
      slices: {
        0: { color: '#FF66FF' },
        1: { color: '#FF9933' }
      }
    };

    /*************************/
    $scope.pie9 = {};

    $scope.pie9.data = {'cols': [
      {id: 't', label: 'Topping', type: 'string'},
      {id: 's', label: 'Slices', type: 'number'}
    ], 'rows': [
      {c: $scope.p9},
      {c: $scope.p99}
    ]};

    $scope.pie9.type = 'PieChart';
    $scope.pie9.options = {
      'title': 'Available Spaces in Zona Verde',
      is3D: true,
      slices: {
        0: { color: '#CC0066' },
        1: { color: '#00CC00' }
      }
    };

    /*************************/
    $scope.pie10 = {};

    $scope.pie10.data = {'cols': [
      {id: 't', label: 'Topping', type: 'string'},
      {id: 's', label: 'Slices', type: 'number'}
    ], 'rows': [
      {c: $scope.p10},
      {c: $scope.p100}
    ]};

    $scope.pie10.type = 'PieChart';
    $scope.pie10.options = {
      'title': 'Available Spaces in Zona Morada',
      is3D: true,
      slices: {
        0: { color: '#FF5050' },
        1: { color: '#6600CC' }
      }
    };

    /*************************/
  }
}

angular.module('gubiParkingApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
