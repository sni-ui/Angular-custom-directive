var app = angular.module('myApp', []);

app.directive('firstDirective' , function(){
	function linkedFunction($scope, element, attribute){
		$scope.text = "Hello";
		$scope.changeText = function(newText) {
			$scope.text = newText;
		}
	}
return{
	link: linkedFunction,
	template: '<span ng-click="changeText(\'hey \')">Current Text : {{text}}</span>';
	restrict: 'A'
};
});
app.controller('myCtrl' , function (){

});