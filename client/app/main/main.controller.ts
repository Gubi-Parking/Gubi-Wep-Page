'use strict';

(function() {

class MainController {

  constructor($http, $scope, $firebaseObject, socket, $log, $interval, $routeParams, uiGmapGoogleMapApi, uiGmapGmapUtil) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];

    $scope.chartShow = false;
    $scope.mapShow = true;
    $scope.pieGraph1 = false;
    $scope.pieGraph2 = false;
    $scope.pieGraph3 = false;
    $scope.pieGraph4 = false;

    $scope.graphSelect = function(){
      $scope.chartShow = true;
      $scope.mapShow = false;
      $scope.pieGraph1 = false;
      $scope.pieGraph2 = false;
      $scope.pieGraph3 = false;
      $scope.pieGraph4 = false;
    };

    $scope.mapSelect = function(){
      $scope.chartShow = false;
      $scope.mapShow = true;
      $scope.pieGraph1 = false;
      $scope.pieGraph2 = false;
      $scope.pieGraph3 = false;
      $scope.pieGraph4 = false;
    };

    $scope.zona1 = function(){
      $scope.chartShow = false;
      $scope.mapShow = false;
      $scope.pieGraph1 = true;
      $scope.pieGraph2 = false;
      $scope.pieGraph3 = false;
      $scope.pieGraph4 = false;
    };
    $scope.zona2 = function(){
      $scope.chartShow = false;
      $scope.mapShow = false;
      $scope.pieGraph1 = false;
      $scope.pieGraph2 = true;
      $scope.pieGraph3 = false;
      $scope.pieGraph4 = false;
    };
    $scope.zona3 = function(){
      $scope.chartShow = false;
      $scope.mapShow = false;
      $scope.pieGraph1 = false;
      $scope.pieGraph2 = false;
      $scope.pieGraph3 = true;
      $scope.pieGraph4 = false;
    };
    $scope.zona4 = function(){
      $scope.chartShow = false;
      $scope.mapShow = false;
      $scope.pieGraph1 = false;
      $scope.pieGraph2 = false;
      $scope.pieGraph3 = false;
      $scope.pieGraph4 = true;
    };


    var ref = new Firebase("https://gubi.firebaseio.com");
    $scope.zone1 = $firebaseObject(ref.child("ITESM/Zone1"));
    $scope.zone2 = $firebaseObject(ref.child("ITESM/Zone2"));
    $scope.zone3 = $firebaseObject(ref.child("ITESM/Zone3"));
    $scope.zone4 = $firebaseObject(ref.child("ITESM/Zone4"));

    function go() {
      $scope.z1[2].v = $scope.zone1.Busy;
      $scope.z1[1].v = $scope.zone1.Total-$scope.zone1.Busy;
      $scope.z2[2].v = $scope.zone2.Busy;
      $scope.z2[1].v = $scope.zone2.Total-$scope.zone2.Busy;
      $scope.z3[2].v = $scope.zone3.Busy;
      $scope.z3[1].v = $scope.zone3.Total-$scope.zone3.Busy;
      $scope.z4[2].v = $scope.zone4.Busy;
      $scope.z4[1].v = $scope.zone4.Total-$scope.zone4.Busy;

      $scope.p1[1].v = $scope.zone1.Busy;
      $scope.p11[1].v = $scope.zone1.Total-$scope.zone1.Busy;
      $scope.p2[1].v = $scope.zone2.Busy;
      $scope.p22[1].v = $scope.zone2.Total-$scope.zone2.Busy;
      $scope.p3[1].v = $scope.zone3.Busy;
      $scope.p33[1].v = $scope.zone3.Total-$scope.zone3.Busy;
      $scope.p4[1].v = $scope.zone4.Busy;
      $scope.p44[1].v = $scope.zone4.Total-$scope.zone4.Busy;
    }

    $interval(go, 1000);

    $scope.map = { center: { latitude: 20.734782, longitude: -103.454845 }, zoom: 17 };

    $scope.polywindow = {
      coords: {
        latitude: 53,
        longitude: 20
      },
      show: false
    };

    $scope.titles="";
    $scope.position=0;
    $scope.position2=0;

    $scope.polygons = [
      {
        id: 1,
        clickable: true,
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
            var bounds = new google.maps.LatLngBounds()
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng)});
            var gCenter = bounds.getCenter();
            $scope.polywindow.coords = {
              latitude:gCenter.lat(),
              longitude:gCenter.lng()
            };
            $scope.polywindow.show = true;
            $scope.titles="Aulas VI ";
            $scope.position = "Available: " + ($scope.zone1.Total - $scope.zone1.Busy);
            $scope.position2 = " Busy: " + $scope.zone1.Busy;
          },
          mouseout: function(gPoly, eventName, polyModel) {
            var bounds = new google.maps.LatLngBounds()
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng)});
            $scope.polywindow.show = false;
          }
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
            var bounds = new google.maps.LatLngBounds()
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng)});
            var gCenter = bounds.getCenter();
            $scope.polywindow.coords = {
              latitude:gCenter.lat(),
              longitude:gCenter.lng()
            };
            $scope.polywindow.show = true;
            $scope.titles="Aulas V ";
            $scope.position = "Available: " + ($scope.zone2.Total - $scope.zone2.Busy);
            $scope.position2 = " Busy: " + $scope.zone2.Busy;
          },
          mouseout: function(gPoly, eventName, polyModel) {
            var bounds = new google.maps.LatLngBounds()
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng)});
            $scope.polywindow.show = false;
          }
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
            var bounds = new google.maps.LatLngBounds()
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng)});
            var gCenter = bounds.getCenter();
            $scope.polywindow.coords = {
              latitude:gCenter.lat(),
              longitude:gCenter.lng()
            };
            $scope.polywindow.show = true;
            $scope.titles="Medicina ";
            $scope.position = "Available: " + ($scope.zone3.Total - $scope.zone3.Busy);
            $scope.position2 = " Busy: " + $scope.zone3.Busy;
          },
          mouseout: function(gPoly, eventName, polyModel) {
            var bounds = new google.maps.LatLngBounds()
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng)});
            $scope.polywindow.show = false;
          }
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
            var bounds = new google.maps.LatLngBounds()
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng)});
            var gCenter = bounds.getCenter();
            $scope.polywindow.coords = {
              latitude:gCenter.lat(),
              longitude:gCenter.lng()
            };
            $scope.polywindow.show = true;
            $scope.titles="Visitantes ";
            $scope.position = "Available: " + ($scope.zone4.Total - $scope.zone4.Busy);
            $scope.position2 = " Busy: " + $scope.zone4.Busy;
          },
          mouseout: function(gPoly, eventName, polyModel) {
            var bounds = new google.maps.LatLngBounds()
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng)});
            $scope.polywindow.show = false;
          }
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
            var bounds = new google.maps.LatLngBounds()
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng)});
            var gCenter = bounds.getCenter();
            $scope.polywindow.coords = {
              latitude:gCenter.lat(),
              longitude:gCenter.lng()
            };
            $scope.polywindow.show = true;
            $scope.titles="Cafeteria ";
            $scope.position = "Available: " + ($scope.zone1.Total - $scope.zone1.Busy);
            $scope.position2 = " Busy: " + $scope.zone1.Busy;
          },
          mouseout: function(gPoly, eventName, polyModel) {
            var bounds = new google.maps.LatLngBounds()
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng)});
            $scope.polywindow.show = false;
          }
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
            var bounds = new google.maps.LatLngBounds()
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng)});
            var gCenter = bounds.getCenter();
            $scope.polywindow.coords = {
              latitude:gCenter.lat(),
              longitude:gCenter.lng()
            };
            $scope.polywindow.show = true;
            $scope.titles="Zona Azul ";
            $scope.position = "Available: " + ($scope.zone1.Total - $scope.zone1.Busy);
            $scope.position2 = " Busy: " + $scope.zone1.Busy;
          },
          mouseout: function(gPoly, eventName, polyModel) {
            var bounds = new google.maps.LatLngBounds()
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng)});
            $scope.polywindow.show = false;
          }
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
            var bounds = new google.maps.LatLngBounds()
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng)});
            var gCenter = bounds.getCenter();
            $scope.polywindow.coords = {
              latitude:gCenter.lat(),
              longitude:gCenter.lng()
            };
            $scope.polywindow.show = true;
            $scope.titles="Zona Amarilla ";
            $scope.position = "Available: " + ($scope.zone1.Total - $scope.zone1.Busy);
            $scope.position2 = " Busy: " + $scope.zone1.Busy;
          },
          mouseout: function(gPoly, eventName, polyModel) {
            var bounds = new google.maps.LatLngBounds()
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng)});
            $scope.polywindow.show = false;
          }
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
            var bounds = new google.maps.LatLngBounds()
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng)});
            var gCenter = bounds.getCenter();
            $scope.polywindow.coords = {
              latitude:gCenter.lat(),
              longitude:gCenter.lng()
            };
            $scope.polywindow.show = true;
            $scope.titles="Zona Roja ";
            $scope.position = "Available: " + ($scope.zone1.Total - $scope.zone1.Busy);
            $scope.position2 = " Busy: " + $scope.zone1.Busy;
          },
          mouseout: function(gPoly, eventName, polyModel) {
            var bounds = new google.maps.LatLngBounds()
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng)});
            $scope.polywindow.show = false;
          }
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
            var bounds = new google.maps.LatLngBounds()
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng)});
            var gCenter = bounds.getCenter();
            $scope.polywindow.coords = {
              latitude:gCenter.lat(),
              longitude:gCenter.lng()
            };
            $scope.polywindow.show = true;
            $scope.titles="Zona Verde ";
            $scope.position = "Available: " + ($scope.zone1.Total - $scope.zone1.Busy);
            $scope.position2 = " Busy: " + $scope.zone1.Busy;
          },
          mouseout: function(gPoly, eventName, polyModel) {
            var bounds = new google.maps.LatLngBounds()
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng)});
            $scope.polywindow.show = false;
          }
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
            var bounds = new google.maps.LatLngBounds()
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng)});
            var gCenter = bounds.getCenter();
            $scope.polywindow.coords = {
              latitude:gCenter.lat(),
              longitude:gCenter.lng()
            };
            $scope.polywindow.show = true;
            $scope.titles="Zona Morada ";
            $scope.position = "Available: " + ($scope.zone1.Total - $scope.zone1.Busy);
            $scope.position2 = " Busy: " + $scope.zone1.Busy;
          },
          mouseout: function(gPoly, eventName, polyModel) {
            var bounds = new google.maps.LatLngBounds()
            gPoly.getPath().forEach(function(latLng){bounds.extend(latLng)});
            $scope.polywindow.show = false;
          }
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

    /*$scope.chart =
      [{
        "name": "Medicina",
        "timestamp": "",
        "available": "100",
        "total": 412,
        "used": "200"
      },
        {
          "name": "Visitantes",
          "timestamp": "",
          "available": "100",
          "total": 237,
          "used": "200",
        },
        {
          "name": "Cafeteria/Centro de congresos",
          "timestamp": "",
          "available": "100",
          "total": 288,
          "used": "200"
        },
        {
          "name": "Aulas VI/Residencias",
          "timestamp": "",
          "available": "100",
          "total": 230,
          "used": "200"
        },
        {
          "name": "Aulas V/Ingenieria Civil",
          "timestamp": "",
          "available": "100",
          "total": 291,
          "used": "200"
        },
        {
          "name": "Zona Azul",
          "timestamp": "",
          "available": "100",
          "total": 229,
          "used": "200"
        },
        {
          "name": "Zona Verde",
          "timestamp": "",
          "available": "100",
          "total": 270,
          "used": "200"
        },
        {
          "name": "Zona Naranja",
          "timestamp": "",
          "available": "100",
          "total": 269,
          "used": "200"
        },
        {
          "name": "Zona Amarilla",
          "timestamp": "",
          "available": "100",
          "total": 341,
          "used": "200"
        },
        {
          "name": "Zona Morada",
          "timestamp": "",
          "available": "100",
          "total": 446,
          "used": "200"
        }];

    $scope.available = [200,100,123,234,109,187,99,102,189,212];*/


    /*$scope.medicina = [
      {v: "Medicina"},
      {v: 412},
      {v: $scope.available[0]},
    ];
    $scope.visitantes = [
      {v: "visitantes"},
      {v: 237},
      {v: $scope.available[1]},
    ];
    $scope.cafeteria = [
      {v: "Cafeteria"},
      {v: 288},
      {v: $scope.available[2]},
    ];
    $scope.aulas6 = [
      {v: "Aulas vI/Residencias"},
      {v: 230},
      {v: $scope.available[3]},
    ];
    $scope.aulas5 = [
      {v: "Aulas v/Ingenieria Civil"},
      {v: 291},
      {v: $scope.available[4]},
    ];
    $scope.za = [
      {v: "Zona Azul"},
      {v: 229},
      {v: $scope.available[5]},
    ];
    $scope.zv = [
      {v: "Zona verde"},
      {v: 270},
      {v: $scope.available[6]},
    ];
    $scope.zn = [
      {v: "Zona Naranja"},
      {v: 269},
      {v: $scope.available[7]},
    ];
    $scope.zam = [
      {v: "Zona Amarilla"},
      {v: 341},
      {v: $scope.available[8]},
    ];
    $scope.zm = [
      {v: "Zona Morada"},
      {v: 446},
      {v: $scope.available[9]},
    ];*/

    $scope.z1 = [
      {v: "Zone 1"},
      {v: 0},
      {v: 0},
    ];
    $scope.z2 = [
      {v: "Zone 2"},
      {v: 0},
      {v: 0},
    ];
    $scope.z3 = [
      {v: "Zone 3"},
      {v: 0},
      {v: 0},
    ];
    $scope.z4 = [
      {v: " Zone 4"},
      {v: 0},
      {v: 0},
    ];

    $scope.chartObject = {};

    $scope.chartObject.type = "ColumnChart";

    $scope.chartObject.data = {"cols": [
      {id: "t", label: "Topping", type: "string"},
      {id: "s", label: "Available", type: "number"},
      {id: "s", label: "Busy", type: "number"},
      //{id: "s", label: "Car Pool", type: "number"},
      //{id: "s", label: "Busy", type: "number"},
      //{id: "s", label: "Wheel Chair", type: "number"}

    ], "rows": [
      {c: $scope.z1},
      {c: $scope.z2},
      {c: $scope.z3},
      {c: $scope.z4},
    ]};

    $scope.chartObject.options = {
      'title': 'Parking spaces statistics',
      isStacked: true,
      series: {
        0: { color: '#339966' },
        1: { color: '#6600CC' }
      }
    };


    $scope.p1 = [
      {v: "Busy"},
      {v: 0},
    ];
    $scope.p11 = [
      {v: "Available"},
      {v: 0},
    ];
    $scope.p2 = [
      {v: "Busy"},
      {v: 0},
    ];
    $scope.p22 = [
      {v: "Available"},
      {v: 0},
    ];
    $scope.p3 = [
      {v: "Busy"},
      {v: 0},
    ];
    $scope.p33 = [
      {v: "Available"},
      {v: 0},
    ];
    $scope.p4 = [
      {v: "Busy"},
      {v: 0},
    ];
    $scope.p44 = [
      {v: "Available"},
      {v: 0},
    ];

    //$scope.pies = [$scope.p1,$scope.p2,$scope.p3, $scope.p4];
    //$scope.piess = [$scope.p11,$scope.p22,$scope.p33, $scope.p44];
    //$scope.current = 0;

    $scope.pie1 = {};

    $scope.pie1.data = {"cols": [
      {id: "t", label: "Topping", type: "string"},
      {id: "s", label: "Slices", type: "number"}
    ], "rows": [
      {c: $scope.p1},
      {c: $scope.p11}
    ]};

    $scope.pie1.type = "PieChart";
    $scope.pie1.options = {
      'title': 'Available Spaces in Zone 1',
      is3D: true,
      slices: {
        0: { color: '#CC0066' },
        1: { color: '#00CC00' }
      }
    };

    /*************************/

    $scope.pie2 = {};

    $scope.pie2.data = {"cols": [
      {id: "t", label: "Topping", type: "string"},
      {id: "s", label: "Slices", type: "number"}
    ], "rows": [
      {c: $scope.p2},
      {c: $scope.p22}
    ]};

    $scope.pie2.type = "PieChart";
    $scope.pie2.options = {
      'title': 'Available Spaces in Zone 2',
      is3D: true,
      slices: {
        0: { color: '#FF5050' },
        1: { color: '#6600CC' }
      }
    };

    /*************************/

    $scope.pie3 = {};

    $scope.pie3.data = {"cols": [
      {id: "t", label: "Topping", type: "string"},
      {id: "s", label: "Slices", type: "number"}
    ], "rows": [
      {c: $scope.p3},
      {c: $scope.p33}
    ]};

    $scope.pie3.type = "PieChart";
    $scope.pie3.options = {
      'title': 'Available Spaces in Zone 3',
      is3D: true,
      slices: {
        0: { color: '#0000FF' },
        1: { color: '#00CC99' }
      }
    };

    /*************************/

    $scope.pie4 = {};

    $scope.pie4.data = {"cols": [
      {id: "t", label: "Topping", type: "string"},
      {id: "s", label: "Slices", type: "number"}
    ], "rows": [
      {c: $scope.p4},
      {c: $scope.p44}
    ]};

    $scope.pie4.type = "PieChart";
    $scope.pie4.options = {
      'title': 'Available Spaces in Zone 4',
      is3D: true,
      slices: {
        0: { color: '#FF66FF' },
        1: { color: '#FF9933' }
      }
    };

    /*************************/



    /*$scope.chartObject.data = {"cols": [
      {id: "t", label: "Topping", type: "string"},
      {id: "s", label: "Total Spaces", type: "number"},
      {id: "s", label: "Available", type: "number"},
      {id: "s", label: "Car Pool", type: "number"},
      {id: "s", label: "Busy", type: "number"},
      {id: "s", label: "Wheel Chair", type: "number"}

    ], "rows": [
      {c: $scope.medicina},
      {c: $scope.visitantes},
      {c: $scope.cafeteria },
      {c: $scope.aulas6 },
      {c: $scope.aulas5},
      {c: $scope.za},
      {c: $scope.zv},
      {c: $scope.zn},
      {c: $scope.zam},
      {c: $scope.zm},
    ]};*/

    /*//Aulas VI
     $scope.coordAulas6 = [
     { latitude: 20.732746, longitude: -103.453703 },
     { latitude: 20.732626, longitude: -103.453059 },
     { latitude: 20.733308, longitude: -103.452909 },
     { latitude: 20.733409, longitude: -103.453542 }
     ];

     //Aulas V
     $scope.coordAulas5 = [
     { latitude: 20.736650, longitude: -103.453102 },
     { latitude: 20.736539, longitude: -103.452319 },
     { latitude: 20.735867, longitude: -103.452415 },
     { latitude: 20.735977, longitude: -103.453209 }
     ];

     //Medicina
     $scope.coordMedicina = [
     { latitude: 20.734101, longitude: -103.457801 },
     { latitude: 20.732485, longitude: -103.458005 },
     { latitude: 20.732415, longitude: -103.457587 },
     { latitude: 20.732596, longitude: -103.457404 },
     { latitude: 20.733077, longitude: -103.457329 },
     { latitude: 20.733088, longitude: -103.456932 },
     { latitude: 20.734011, longitude: -103.456932 }
     ];

     //Visitantes
     $scope.coordVisitantes = [
     { latitude: 20.732917, longitude: -103.457201 },
     { latitude: 20.732907, longitude: -103.456471 },
     { latitude: 20.732295, longitude: -103.456053 },
     { latitude: 20.732215, longitude: -103.456063 },
     { latitude: 20.732305, longitude: -103.457083 },
     { latitude: 20.732536, longitude: -103.457254 }
     ];

     //Cafeteria/Centro de congresos
     $scope.coordCafeteria = [
     { latitude: 20.732465, longitude: -103.455967 },
     { latitude: 20.732465, longitude: -103.455645 },
     { latitude: 20.732867, longitude: -103.455076 },
     { latitude: 20.732817, longitude: -103.454690 },
     { latitude: 20.732355, longitude: -103.454701 },
     { latitude: 20.731964, longitude: -103.455173 },
     { latitude: 20.732024, longitude: -103.455774 }
     ];

     //Zona Azul
     $scope.coordAzul = [
     { latitude: 20.733298, longitude: -103.454390 },
     { latitude: 20.733248, longitude: -103.453778 },
     { latitude: 20.732114, longitude: -103.454003 },
     { latitude: 20.732194, longitude: -103.454465 }
     ];

     //Zona Amarilla
     $scope.coordAmarilla = [
     { latitude: 20.734733, longitude: -103.454239 },
     { latitude: 20.733399, longitude: -103.454368 },
     { latitude: 20.733348, longitude: -103.453746 },
     { latitude: 20.734663, longitude: -103.453521 }
     ];

     //Zona Roja
     $scope.coordRoja = [
     { latitude: 20.735245, longitude: -103.454196 },
     { latitude: 20.735205, longitude: -103.453478 },
     { latitude: 20.734733, longitude: -103.453531 },
     { latitude: 20.734803, longitude: -103.454229 }
     ];

     //Zona Verde
     $scope.coordVerde = [
     { latitude: 20.735335, longitude: -103.454186 },
     { latitude: 20.736148, longitude: -103.454121 },
     { latitude: 20.736098, longitude: -103.453327 },
     { latitude: 20.735295, longitude: -103.453445 }
     ];

     //Zona Morada
     $scope.coordMorada = [
     { latitude: 20.737462, longitude: -103.453521 },
     { latitude: 20.737121, longitude: -103.453510 },
     { latitude: 20.737051, longitude: -103.453166 },
     { latitude: 20.736258, longitude: -103.453317 },
     { latitude: 20.736298, longitude: -103.454089 },
     { latitude: 20.737543, longitude: -103.453950 }
     ];*/

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      this.socket.syncUpdates('thing', this.awesomeThings);
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('gubiParkingApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
