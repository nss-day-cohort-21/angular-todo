"use strict";

const app = angular.module("TodoApp", ["ngRoute"]);

app.config(($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/list.html',
		controller: 'listCtrl'
	})
	.otherwise('/');
});

app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain,
		databaseURL: creds.databaseURL
	};

	firebase.initializeApp(authConfig);
});