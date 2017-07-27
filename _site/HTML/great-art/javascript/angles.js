var app = angular.module('blog', []);

app.controller('main', function($scope){ 

    // Start as not visible but when button is tapped it will show as true 

        $scope.visible = false;

    // Create the array to hold the list of Birthdays

        $scope.persons = [];

    // Create the function to push the data into the "bdays" array

    $scope.newSelection = function(){

        $scope.persons.push({Text:$scope.Text, name:$scope.name});

        $scope.Text = '';
        $scope.name = '';

    };
});