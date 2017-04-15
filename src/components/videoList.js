angular.module('video-player')
.directive('videoList', function() {
  return {
    templateUrl: "src/templates/videoList.html"
  };
});
// .controller('VideoData', function($scope) {
// 	$scope.videoData = window.exampleVideoData;
// });