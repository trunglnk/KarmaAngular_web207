window.CategoryDetailController = function($scope, $http, $routeParams) {
    $scope.category = [];

    var id = $routeParams.id;

    var url = `${categoryAPI}/${id}?_embed=products`;

    $http.get(url).then(
        function (response) {
            if (response.statusText = 'OK') {
                $scope.category = response.data;
            }
        },
        function (errors) {
            console.log(errors);
        }
    )



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
