window.ProductDeleteController = function ($scope, $http,$routeParams,$location) {

    var id = $routeParams.id;
    if(id){

        $http.delete(`${productAPI}/${id}`).then(

            function(response) {
                $scope.products = response.data;
                $location.path('products');
                alert('Successful Delete');

            },
            function(errors) {
                console.log(errors);
            }
        )

    }}