/**
 * Created by Itamar on 11/01/2016.
 */

angular.module('curso').controller('IndexController2', IndexController2);

IndexController2.$inject ['$scope'];

function IndexController2($scope) {
    //Criar sempre vinculação de funcoes e variaveis primeiro
    $scope.nome = 'Itamar';

    $scope.myStyle = {};

    $scope.$watch('nome', onChangeNome);

    function onChangeNome(  valorNovo, valorAntigo){
        if(valorNovo === valorAntigo){
            return
        }

        if(valorNovo === 'delta'){
            $scope.myStyle.backgroundColor = 'red';
        }else{
            $scope.myStyle.backgroundColor = 'blue';
        }
    }


    //Criar funcoes após as vinculacoes e ;
    // variaveis
    function testeFuncao(){  // essa funçao é privada. Só acessível dentro de index controller. Ela deve ser passada pelo Scope para ser ascesivel externamente

        alert('Olá ' + $scope.nome);
    }
}

