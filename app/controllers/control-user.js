'use strict';

app.controller("userCtrl", function ($scope, $window, userFactory, $location) {
	console.log("userCtrl firing");

	$scope.loginGoogle = () => {
		console.log("you clicked on google login");
		userFactory.authWithProvider()
		.then((result)=>{
			let user = result.user.uid;
			$location.path('/task-list');
			$scope.apply();
		}).catch((error) => {
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log("error with google login", errorCode, errorMessage);
		});
	};
});