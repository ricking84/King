angular.module('app.menu', [])
.config(function($stateProvider){
    //our first state called menu
    $stateProvider
    .state('menu', {
        url: '',
        template: '<h2>There is a menu here</h2>'
    });
});