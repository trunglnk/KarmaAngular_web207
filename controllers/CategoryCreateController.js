window.CategoryCreateController = function (
    $scope, $http, $location, $routeParams
) {
    //Khởi tạo giá mặc định
    $scope.categoryName = '';
    $scope.categoryStatus = '';
    $scope.categoryDate = '';


    //Kết hợp edit
    var id = $routeParams.id;
    if (id) {
        $http.get(`${categoryAPI}/${id}`).then(
            function(response) {
                if (response.status === 200) {
                    console.log(response);
                    //Gán lại gtri input
                    $scope.categoryName = response.data.name;
                    $scope.categoryStatus = response.data.status;
                    $scope.categoryDate = response.data.date;
                }
            },
            function (errors) {
                console.log(errors);
            }
        );
    }


    $scope.onSubmit = function () {
        if (id) {
            return $http.put(
                `${categoryAPI}/${id}`,
                { name: $scope.categoryName , status: $scope.categoryStatus, date: $scope.categoryDate}
            ).then(
                function(response) {
                    if (response.status === 200) {
                        //location thay đổi url hiện tại
                        $location.path('categories');
                    }
                },
                function(errors) {
                    console.log(errors);
                }
            )
        }

        $http.post(
            categoryAPI, // API url
            { name: $scope.categoryName, status: $scope.categoryStatus, date: $scope.categoryDate } // dữ liệu
        ).then(
            function (response) {
                console.log(response);
                if (response.status === 201) {
                    $location.path('categories');
                }
            },
            function (errors) {
                console.log(errors);
            }
        );
    }
};
