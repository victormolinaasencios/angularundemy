(function(){

	var app = angular.module('universidadApp',[ ]);

	app.controller('listadoCtrl', ['$scope', function($scope){
		
			$scope.list = ["victor","samuel","jesus"];
			$scope.listTeachers = {
				teachers:[
					{
						name:"victor",
						age:"25",
						course:"php"
					},
					{
						name:"samuel",
						age:"17",
						course:"php"
					},
					{
						name:"guille",
						age:"40",
						course:"css"
					}
				]
			}

	}]);
})();
