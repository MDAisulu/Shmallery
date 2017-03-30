var angular  = require('angular');
var app = angular.module('app', []);
 
 class ShImage{
 	constructor(url, title, width, height){
 		this.width = width;
 		this.height = height;
 		this.url = url;
 		this.title = title;
 	}
 } 

 app.controller('appCtrl', function($scope){
 	$scope.shmallery = [];
	
 	
 	$scope.addImage = function(){
 		var url = $scope.inputText;
 		var title = $scope.title;
 		var width = $scope.width;
 		var height = $scope.height;
		$scope.shmallery.push(new ShImage(url, title, width, height));

 	}

 	$scope.showInfo = function(){
 		alert('Ширина : '+this.width + ' Высота :' + this.height);
 	}
 });