window.ProductCreateController = function (
    $scope, $http, $location, $routeParams
) {
    $scope.cateId = "";
    $scope.productName = '';
    $scope.productPrice = '';
    $scope.productSale = '';
    $scope.productOver = '';
    $scope.image = '';
    $scope.productStatus = '';
    $scope.priceNew = '';


    $scope.onChangeImage = function ($event) {
        var file = $event.target.files[0]; // nếu upload 1 ảnh
        var reader = new FileReader();  //sd FileReader đọc
        reader.readAsDataURL(file);
        reader.onload = function () { //gán kq đọc
            $scope.image = reader.result;

        }
    }


    var id = $routeParams.id;

    if (id) {
        $http.get(`${productAPI}/${id}`).then(
            function(response) {
                if (response.status === 200) {
                    console.log(response);
                    // gán lại gtri cho input
                    $scope.cateId = response.data.categoryId;
                    $scope.productName = response.data.name;
                    $scope.productPrice = response.data.price;
                    $scope.productSale = response.data.sale;
                    $scope.productOver = response.data.overview;
                    $scope.image = response.data.image;
                    $scope.productStatus = response.data.status;
                    $scope.priceNew = response.data.priceNew;

                }
            },
            function (errors) {
                console.log(errors);
            }
        );

    }


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


    $scope.onSubmit = function () {

        if (id) {
            return $http.put(
                `${productAPI}/${id}`,
                {   categoryId: $scope.cateId,
                    name: $scope.productName,
                    price: $scope.productPrice,
                    sale: $scope.productSale,
                    overview: $scope.productOver,
                    image: $scope.image,
                    status: $scope.productStatus,
                    priceNew: $scope.priceNew,
                }
            ).then(
                function(response) {
                    if (response.status === 200) {
                        $location.path('products');
                    }
                },
                function(errors) {
                    console.log(errors);
                }
            )
        }

        $http.post(
            productAPI,
            { categoryId: $scope.cateId,
                name: $scope.productName,
                price: $scope.productPrice,
                sale: $scope.productSale,
                overview: $scope.productOver,
                image: $scope.image,
                status: $scope.productStatus,
                priceNew: $scope.priceNew,
            }
        ).then(
            function (response) {
                console.log(response);
                if (response.status === 201) {
                    $location.path('products');
                }
            },
            function (errors) {
                console.log(errors);
            }
        );

    }
};

