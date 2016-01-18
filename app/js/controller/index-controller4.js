/**
 * Created by Itamar on 11/01/2016.
 */

angular.module('curso').controller('IndexController4', IndexController4);

IndexController4.$inject = ['$scope', '$timeout', 'AlertService', '$filter'];

function IndexController4($scope, $timeout, AlertService,$filter) {
    //Criar sempre vinculação de funcoes e variaveis primeiro
    $scope.listaDePessoas = [];
    $scope.entidade = {};
    $scope.salvar = salvar;
    $scope.limpar = limpar;

    $scope.myClass= '';
    $scope.ultimaDataCadastrada = '';
    $scope.onClickEditar = onClickEditar;
    $scope.getRowStyle = getRowStyle;
    iniciar();

    function iniciar(){
        $scope.gridOptions = {
            data: 'listaDePessoas',
            columnDefs:[
                {field:'nome', displayName:'Nome', width:200},
                {field:'sobrenome', displayName:'Sobrenome' },
                {field:'nascimento', displayName:'Nascimento',width:150, cellTemplate:"app/template/cell-template-date.html"},
                {field:'editar', displayName:'', width:35, cellTemplate:"app/template/cell-template-editar.html"}
            ],
            rowTemplate:"app/template/row-template.html"
        };
    }

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

    function onClickEditar(linhaSelecionada){
       $scope.entidade = linhaSelecionada;
    }

    function getRowStyle(linhaSelecionada){
        var style = {};
        style.backgroundColor = linhaSelecionada.cor;
        style.color = 'white';
        return style;
    }
}

