var app = angular.module('universidadApp',[]);
app.controller('profesorCtrl', ['$scope', function ($scope) {
	$scope.teacher = teacherData;
	$scope.editingTeacher = {};
	$scope.display = false;

	$scope.editTeacher = function(){
		angular.copy( $scope.teacher, $scope.editingTeacher);
		$scope.display = true;
	};

	$scope.saveDataTeacher = function(){
		$scope.teacher = $scope.editingTeacher;
		$scope.editingTeacher = {};
		$scope.display = false;
	};

	$scope.cancelDataTeacher = function(){
		$scope.editingTeacher = {};
		$scope.display = false;
	};
	
}])

var teacherData = {
	name: "Juan Carlos Pineda",
	profile: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	age: 47,
	photo: "img/juancarlos.jpg"
};