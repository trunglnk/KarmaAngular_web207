window.ProductDetailController = function($scope, $http,$routeParams) {
    $scope.products = [];

    var id = $routeParams.id;

    $apiURL = "http://localhost:3000/products";
    if (id) {
        $http.get($apiURL +"/"+id+ "?_expand=category").then(
            function (response) {
                if(response.statusText === "OK"){
                    $scope.products = response.data;
                    console.log(response);
                }
            },
            function (errors) {
                console.log(errors);
            }
        )}
}