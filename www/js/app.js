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
/*
$scope.play = function(){
  console.log("Play reached!");

  var src = "a.mp3";
  var media = $cordovaMedia.newMedia(src).then(function(){
console.log("success" + src);
alert("error");
  }, function(){
console.log("error");
alert("error");
  });
media.play();
}
*/

$scope.play = function(src){
  console.log("Play called");
console.log("SCR : "+src);
  var media = new Media(src, mediaSuccess, mediaError, mediaStatusCallback);
  media.play();


}


var mediaSuccess = function(){
  console.log("success");
}
var mediaError = function(){
  console.log("Error called");  
}
var mediaStatusCallback = function(status) {
  console.log("media status call back called.!");
    if(status == 1){
      $ionicLoading.show({template: 'Loading'});
    } else {
      $ionicLoading.hide();
    }
}

});