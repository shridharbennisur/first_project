var app = angular.module('myapp',['ngRoute']); 

app.config(function ($routeProvider, $locationProvider) {

   $routeProvider
      .when('/hghgh',{
          templateUrl:'partials/home.html',
          controller:'homeCntrl'

      })
      .when('/',{
          templateUrl:'partials/login.html',
          controller:'loginCntrl'
      })
        .when('/home', {
            template:"<h1>Home</h1>"    
        })
        .when('/techcrunch',{
            templateUrl:'partials/news.html',
            controller:'news'
        })
        .when('/newsweek',{
            templateUrl:'partials/news.html',
            controller:'news'

        })
        .when('/the-next-web',{
            templateUrl:'partials/news.html',
            controller:'news'
        })
       
});

