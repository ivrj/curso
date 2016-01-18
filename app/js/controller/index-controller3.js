/**
 * Created by Itamar on 11/01/2016.
 */

angular.module('curso').controller('IndexController3', IndexController3);

IndexController3.$inject = ['$scope', '$timeout', 'AlertService', '$filter'];

function IndexController3($scope, $timeout, AlertService,$filter) {
    //Criar sempre vinculação de funcoes e variaveis primeiro
    $scope.listaDePessoas = [];
    $scope.entidade = {};
    $scope.salvar = salvar;
    $scope.limpar = limpar;

    function salvar() {

        setarTouchedNosInputs();
        if ($scope.formPessoa.$invalid) {
            
            AlertService.showError('Verifique os campos antesde salvar', 'Erro');
            return;
        }

        var data = $scope.entidade.nascimento;
        $scope.ultimaDataCadastrada = $filter('date')(data,'dd/MM/yyyy');
        $scope.listaDePessoas.push($scope.entidade);
        limpar();
        AlertService.showSuccess('Registro salvo com sucesso', 'Ok');

    }

        function limpar() {
        $scope.entidade = {};

        $timeout(function () {
            setarUntouchedNosInputs();

        }, 10);

    }

    function setarTouchedNosInputs() {

        angular.forEach($scope.formPessoa.$error, function (error) {
            angular.forEach(error, function (field) {
                field.$setTouched();
            })
        })
    }

    function setarUntouchedNosInputs() {

        angular.forEach($scope.formPessoa.$error, function (error) {
            angular.forEach(error, function (field) {
                field.$setUntouched();
            })
        })
    }
}

