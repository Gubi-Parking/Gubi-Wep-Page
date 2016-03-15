'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];

    $scope.chartObject.data = {"cols": [
      {
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
        }]};



    $scope.onions = [
      {v: "Onions"},
      {v: 3},
    ];

    $scope.chartObject.data = {"cols": [
      {id: "t", label: "Topping", type: "string"},
      {id: "s", label: "Slices", type: "number"}
    ], "rows": [
      {c: [
        {v: "Mushrooms"},
        {v: 3},
      ]},
      {c: $scope.onions},
      {c: [
        {v: "Olives"},
        {v: 31}
      ]},
      {c: [
        {v: "Zucchini"},
        {v: 1},
      ]},
      {c: [
        {v: "Pepperoni"},
        {v: 2},
      ]}
    ]};



    $scope.chartObject.options = {
      'title': 'How Much Pizza I Ate Last Night'
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
