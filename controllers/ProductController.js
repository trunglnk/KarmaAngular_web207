window.ProductController = function ($scope, $http) {

    $scope.products = [];
    // $scope.searchText = "";
    $http.get(productAPI + '?_expand=category').then(
        function (response) {
            if (response.statusText === 'OK') {
                $scope.products = response.data;
            }
        },
        function (errors) {
            console.log(errors);
        }
    )


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


};
