/**
 * Created by Itamar on 11/01/2016.
 */

angular.module('curso').controller('IndexController', IndexController);

IndexController.$inject ['$scope'];

function IndexController($scope) {
    //Criar sempre vinculação de funcoes e variaveis primeiro
    $scope.nome = 'Itamar';
    $scope.testeFuncao = testeFuncao;



    //Criar funcoes após as vinculacoes e ;
    // variaveis
    function testeFuncao(){  // essa funçao é privada. Só acessível dentro de index controller. Ela deve ser passada pelo Scope para ser ascesivel externamente

        alert('Olá ' + $scope.nome);
    }
}

