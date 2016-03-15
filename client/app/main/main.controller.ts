'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];

    $scope.chartObject = {};

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

    $scope.chartObject.type = "ColumnChart";

    $scope.onions = [
      {v: "Onions"},
      {v: 3},
    ];

    $scope.medicina = [
      {v: "Medicina"},
      {v: 412},
    ];
    $scope.visitantes = [
      {v: "visitantes"},
      {v: 237},
    ];
    $scope.cafeteria = [
      {v: "Cafeteria"},
      {v: 288},
    ];
    $scope.aulas6 = [
      {v: "Aulas vI/Residencias"},
      {v: 230},
    ];
    $scope.aulas5 = [
      {v: "Aulas v/Ingenieria Civil"},
      {v: 291},
    ];
    $scope.za = [
      {v: "Zona Azul"},
      {v: 229},
    ];
    $scope.zv = [
      {v: "Zona verde"},
      {v: 270},
    ];
    $scope.zn = [
      {v: "Zona Naranja"},
      {v: 269},
    ];
    $scope.zam = [
      {v: "Zona Amarilla"},
      {v: 341},
    ];
    $scope.zm = [
      {v: "Zona Morada"},
      {v: 446},
    ];

    $scope.onions = [
      {v: "Onions"},
      {v: 3},
    ];

    $scope.chartObject.data = {"cols": [
      {id: "t", label: "Topping", type: "string"},
      {id: "s", label: "Total Spaces", type: "number"}
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
    ]};

    $scope.chartObject.options = {
      'title': 'Available parking spaces'
    };

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
