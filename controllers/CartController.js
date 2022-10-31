window.ProductController = function ($scope, $http) {

    $scope.products = [];

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

    $scope.cart = [];

    var findItemById = function(items, id) {
        return _.find(items, function(item) {
            return item.id === id;
        });
    };

    $scope.getCost = function(item) {
        return item.qty * item.price;
    };

    $scope.addItem = function(itemToAdd) {
        var found = findItemById($scope.cart, itemToAdd.id);
        if (found) {
            found.qty += itemToAdd.qty;
        }
        else {
            $scope.cart.push(angular.copy(itemToAdd));}
    };

    $scope.getTotal = function() {
        var total =  _.reduce($scope.cart, function(sum, item) {
            return sum + $scope.getCost(item);
        }, 0);
        console.log('total: ' + total);
        return total;
    };

    $scope.clearCart = function() {
        $scope.cart.length = 0;
    };

    $scope.removeItem = function(item) {
        var index = $scope.cart.indexOf(item);
        $scope.cart.splice(index, 1);
    };
};
