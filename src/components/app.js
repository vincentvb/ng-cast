angular.module('video-player')

.directive('app', function() {
  return {
	  templateUrl: 'src/templates/app.html'
  };
})
.controller('VideoData', function($scope) {
	$scope.videoData = window.exampleVideoData;
	$scope.currentVideo = window.exampleVideoData[0]
	$scope.currentVideoId = `https://www.youtube.com/embed/${window.exampleVideoData[0].id.videoId}`;
});

