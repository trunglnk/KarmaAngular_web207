window.CategoryController = function ($scope, $http) {
    $scope.categories = [];
    $http.get(categoryAPI + '?_embed=products').then(
        function (response) {
            if (response.statusText = 'OK') {
                $scope.categories = response.data;
            }
        },
        function (errors) {
            console.log(errors);
        }
    )
}