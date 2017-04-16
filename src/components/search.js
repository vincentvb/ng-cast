angular.module('video-player')

.directive('search', function() {
  return {
    controllerAs: 'ctrl',
    controller: function(youTube, $scope) {
      this.actuallyGetVideo = (callback) => {
        
        youTube.getVideo($scope.query, callback);
      }
    },
    templateUrl: "src/templates/search.html"
  };
});
