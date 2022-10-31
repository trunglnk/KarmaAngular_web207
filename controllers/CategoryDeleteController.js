window.CategoryDeleteController = function ($scope, $http,$routeParams,$location) {

    var id = $routeParams.id;

    if (id) {

        $http.delete(`${categoryAPI}/${id}`).then(
            function (response) {
                $scope.categories = response.data;
                $location.path('categories');

            },
            function (errors) {
                console.log(errors);
            }
        );
    }
};