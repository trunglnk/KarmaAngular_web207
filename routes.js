var app = angular.module('app-route', ['ngRoute']);
app.config(function ($routeProvider){
    $routeProvider.when('/',{
        templateUrl: './pages/home.html',
        controller: ProductController
    }).when('/shop',{
        templateUrl: './pages/shop.html',
        controller: ProductController
    }).when('/blog',{
        templateUrl: './pages/blog.html'
    }).when('/blog-detail',{
        templateUrl: './pages/single-blog.html'
    }).when('/about',{
        templateUrl: './pages/about.html'
    }).when('/contact',{
        templateUrl: './pages/contact.html'
    }).when('/login',{
        templateUrl: './pages/login.html'
    }).when('/register',{
        templateUrl: './pages/register.html'
    }).when('/change-password',{
        templateUrl: './pages/change-password.html'
    }).when('/single-product',{
        templateUrl: './pages/single-product.html'
    }).when('/cart',{
        templateUrl: './pages/cart.html'
    }).when('/checkout',{
        templateUrl: './pages/checkout.html'
    }).when('/confirmation',{
        templateUrl: './pages/confirmation.html'
    }).when('/categories',{
        templateUrl: './pages/list-cate.html',
        controller: CategoryController
    }).when('/categories/create', {
        templateUrl: './pages/category-create.html',
        controller: CategoryCreateController
    }).when('/categories/edit/:id', {
        templateUrl: './pages/category-create.html',
        controller: CategoryCreateController
    }).when('/categories/delete/:id', {
        templateUrl: './pages/category-create.html',
        controller: CategoryDeleteController
    }).when('/products',{
        templateUrl: './pages/list-product.html',
        controller: ProductController
    }).when('/products/create', {
        templateUrl: './pages/product-create.html',
        controller: ProductCreateController
    }).when('/products/edit/:id', {
        templateUrl: './pages/product-create.html',
        controller: ProductCreateController
    }).when('/products/delete/:id', {
        templateUrl: './pages/list-product.html',
        controller: ProductDeleteController
    }).when('/products/:id', {
        templateUrl: './pages/single-product.html',
        controller: ProductDetailController
    }).when('/categories/:id', {
        templateUrl: './pages/category-detail.html',
        controller: CategoryDetailController
    }).otherwise({
        redirectTo: "/",
    });
});