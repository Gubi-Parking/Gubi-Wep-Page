'use strict';

(function() {

class MainController {

  constructor($http, $scope, $firebaseObject, socket, $log, $interval) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];

    var ref = new Firebase("https://gubi.firebaseio.com");
    $scope.zone1 = $firebaseObject(ref.child("ITESM/Zone1"));
    $scope.zone2 = $firebaseObject(ref.child("ITESM/Zone2"));
    $scope.zone3 = $firebaseObject(ref.child("ITESM/Zone3"));
    $scope.zone4 = $firebaseObject(ref.child("ITESM/Zone4"));

    function go() {
      $scope.z1[1].v = $scope.zone1.Total;
      $scope.z1[2].v = $scope.zone1.Total-$scope.zone1.Busy;
      $scope.z2[1].v = $scope.zone2.Total;
      $scope.z2[2].v = $scope.zone2.Total-$scope.zone2.Busy;
      $scope.z3[1].v = $scope.zone3.Total;
      $scope.z3[2].v = $scope.zone3.Total-$scope.zone3.Busy;
      $scope.z4[1].v = $scope.zone4.Total;
      $scope.z4[2].v = $scope.zone4.Total-$scope.zone4.Busy;
    }

    $interval(go, 1000);


    $scope.map = { center: { latitude: 20.734282, longitude: -103.454845 }, zoom: 17 };

    //$scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
    $scope.options = {scrollwheel: false};
    $scope.marker = {
      coords: {
        latitude: 20.734282,
        longitude: -103.454845
      },
      show: false,
      id: 0
    };

    $scope.windowOptions = {
      visible: false
    };

    $scope.onClick = function() {
      $scope.windowOptions.visible = !$scope.windowOptions.visible;
    };

    $scope.closeClick = function() {
      $scope.windowOptions.visible = false;
    };

    $scope.title = "Window Title!";


    //Aulas VI
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
    ];

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



    $scope.chart =
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

    $scope.available = [200,100,123,234,109,187,99,102,189,212];


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
      {v: "Zona 1"},
      {v: 0},
      {v: 0},
    ];
    $scope.z2 = [
      {v: "Zona 2"},
      {v: 0},
      {v: 0},
    ];
    $scope.z3 = [
      {v: "Zona 3"},
      {v: 0},
      {v: 0},
    ];
    $scope.z4 = [
      {v: " Zona 4"},
      {v: 0},
      {v: 0},
    ];

    $scope.chartObject = {};

    $scope.chartObject.type = "ColumnChart";

    $scope.chartObject.data = {"cols": [
      {id: "t", label: "Topping", type: "string"},
      {id: "s", label: "Total Spaces", type: "number"},
      {id: "s", label: "Available", type: "number"},
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
    };




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



   /* $scope.datas = {
      "ITESM" : {
        "Zone1" : {
          "Busy" : 10,
            "CPool" : 0,
            "Total" : 20,
            "WChair" : 5
        },
        "Zone2" : {
          "Busy" : 0,
            "CPool" : 5,
            "Total" : 25,
            "WChair" : 0
        },
        "Zone3" : {
          "Busy" : 5,
            "CPool" : 0,
            "Total" : 30,
            "WChair" : 0
        },
        "Zone4" : {
          "Busy" : 1,
            "CPool" : 45,
            "Total" : 14,
            "WChair" : 20
        }
      }
    };*/






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
