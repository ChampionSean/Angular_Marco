app.controller('myCtrl', function($scope, $http) {
    $http.get("users.json").then(function(response) {
        $scope.myData = response.data.records;
    });
});