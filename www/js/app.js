// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('ctrl',function($scope,$cordovaMedia,$cordovaFile,$ionicLoading){


$scope.data = new Object();
var src = "mp3/Passenger - Let Her Go [Official Video]-RBumgq5yVrA.mp3";
//var media = new Media(src, null, null, mediaStatusCallback);


 $scope.init = function() {
  var media = new Media(src, null, null, mediaStatusCallback);
 };
  //var media = new Media(src, null, null, mediaStatusCallback);
  $scope.play = function(){
   media.play();
      }
      // Update media position every second
          $scope.mediaTimer = setInterval(function () {
          // get media position
          media.getCurrentPosition(
         // success callback
         function (position) {
            if (position > -1) {
                console.log((position) + " sec");
                 $scope.adjust = position;
            }
         },
         // error callback
         function (e) {
              console.log("Error getting pos=" + e);
         }
        );
        }, 1000); //calling mediaTimer function in every 1 second

   $scope.stop = function(){
  console.log("stop");
  media.stop();
}
$scope.pause = function(){
  media.pause();
}
$scope.seek = function(){
  console.log("Seek to, duration :" + media._duration); // media._duration = length of song (in seconds)
  var time = media._duration * 1000; // time = length of song (in milliseconds) 
  var adjustingSong = (time/100) * $scope.adjust;  // algo to get relation btw rang and length of any song

  media.seekTo(adjustingSong);
}

$scope.duration = function(){
  console.log("duration" + media._duration);
//media.getDuration(media);
//console.log("time : "+ JSON.stringify(media));


}


//$scope.song();

var mediaStatusCallback = function(status) {
  console.log("media status call back called.!");
    if(status == 1){
      $ionicLoading.show({template: 'Loading...'});
    } else {
      $ionicLoading.hide();
    }
}

});