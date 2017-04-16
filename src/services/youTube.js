angular.module('video-player')
.service('youTube', function($http){
  this.getVideo = (query, callback) => {
    $http({
      url: "https://www.googleapis.com/youtube/v3/search", 
      method: "GET",
      params: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
     }
    })
    .then(function(response) {
      console.log(document.getElementsByClassName('form-control')[0].value);
      console.log(callback);
      callback(response.data.items[0], response.data.items);
    }, function(response) {
      console.log(document);
      console.error('Didnt work');
    });
  }
});
