'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];

    $scope.chartObject = {};

    $scope.chartObject.type = "ColumnChart";

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
