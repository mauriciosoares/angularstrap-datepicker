'use strict';

var app = angular.module('app', ['$strap.directives']);

app.controller('MainCtrl', function($scope, $strapConfig) {

	$scope.datepicker = {
		date: '20/11/2013'
	};
});

app.value('$strapConfig', {
	datepicker: {
		language: 'pt',
    format: 'dd/mm/yyyy'
	}
});