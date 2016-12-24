var app = angular.module('universidadApp',[]);
app.controller('profesorCtrl', ['$scope', function ($scope) {
	$scope.teacher = teacherData;
}])

var teacherData = {
	name: "Juan Carlos Pineda",
	profile: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	age: 47,
	photo: "img/juancarlos.jpg"
};