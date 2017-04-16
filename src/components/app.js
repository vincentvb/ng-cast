angular.module('video-player')

.controller('VideoData', function($scope, youTube) {
  $scope.videos = window.exampleVideoData;
  $scope.currentVideo = window.exampleVideoData[0];
  $scope.currentVideoId = `https://www.youtube.com/embed/${$scope.currentVideo.id.videoId}`;
  $scope.selectVideo = function(video, videos) {
    $scope.currentVideo = video;
    $scope.currentVideoId = `https://www.youtube.com/embed/${$scope.currentVideo.id.videoId}`
    $scope.videos = videos
  }
  youTube.getVideo('puppies', $scope.selectVideo);     
})
.directive('app', function() {
  return {   
    templateUrl: 'src/templates/app.html'    

  };
})

