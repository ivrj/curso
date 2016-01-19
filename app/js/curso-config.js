/**
 * Created by Itamar on 11/01/2016.
 */
angular.module('curso',[
    'ngMessages',
    'toastr',
    'ui.grid',
    'ngMaterial',
    'ui.router',
    'oc.lazyLoad'
]).config(config);

config.$inject = ['$stateProvider','$urlRouterProvider'];
function config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/home");
    var home = {
        url: "/home",
        templateUrl: "app/views/home/home.html"
    };
    var menu = {
        url: "/menu",
        templateUrl: "app/views/menu/menu.html"
    };
    var cadastroPessoa = {
        url: "/cadastro-pessoa",
        templateUrl: "app/views/pessoa/cadastro-pessoa.html",
        resolve: {
            deps: function ($ocLazyLoad){
                return $ocLazyLoad.load('app/views/pessoa/cadastro-pessoa-controller.js')
            }
        }
    };
    var pesquisaPessoa = {
        url: "/pesquisa-pessoa",
        templateUrl: "app/views/pessoa/pesquisa-pessoa.html",
        resolve: {
            deps: function ($ocLazyLoad){
                return $ocLazyLoad.load('app/views/pessoa/pesquisa-pessoa-controller.js')
            }
        }
    };
    $stateProvider.state('home', home);
    $stateProvider.state('menu', menu);
    $stateProvider.state('cadastroPessoa', cadastroPessoa);
    $stateProvider.state('pesquisaPessoa', pesquisaPessoa);
}