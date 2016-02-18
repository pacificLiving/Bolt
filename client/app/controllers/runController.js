angular.module('run.controller', [])

.controller('RunController', function($scope, $timeout, Geo){
  $scope.raceStarted = 0;
  $scope.statTime;
  $scope.destination;

  var tick = function() {
    $scope.time = Math.floor((Date.now() - $scope.startTime)/1000);
    $timeout(tick, 100)
  }

  $scope.startRun = function() {
    $scope.startTime = Date.now();
    $scope.raceStarted = true;
    tick();
  }

  $scope.currentCoords = {
    lat: null,
    lng: null
  };
  // $scope.getCurrentCoords = function() {
  //   console.log('ran');
  //   Geo.getCurrentCoords(function(coordsObj) {
  //     $scope.currentCoords = coordsObj;
  //     console.log('$scope.currentCoords.lat: ', $scope.currentCoords.lat);
  //     console.log('$scope.currentCoords.lng: ', $scope.currentCoords.lng);
  //   });
  // };

  $scope.makeInitialMap = function($scope) {
    console.log('in controller');
    Geo.makeInitialMap($scope);
  };

  $scope.makeInitialMap($scope);

  $scope.updateCurrentPosition = function() {
    Geo.updateCurrentPosition();
  };

  $scope.checkIfFinished = function() {
    if ($scope.destination) {
      var lat = $scope.destination.lat;
      var lng = $scope.destination.lng;


    }
  }

  // Determine user location and update map each second
  $scope.geoUpdater = setInterval($scope.updateCurrentPosition, 1000);

  // Stop geotracker upon canceling run
  $scope.stopGeoUpdater = function() {
    clearInterval($scope.geoUpdater);
  };
})
