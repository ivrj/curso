/**
 * Created by Itamar on 14/01/2016.
 */

angular.module('curso')
    .service('AlertService', AlertService);

AlertService.$inject = ['toastr'];

function AlertService(toastr){
    //as funcoes devem ser expostas para ficarem visiveis fora do service
    this.showSuccess= showSuccess;
    this.showError= showError;
    this.showWarning= showWarning;
    this.showInfo= showInfo;

    function showSuccess(mensagem, titulo){
        if(!titulo){
            titulo = 'Ok';
        }
        toastr.success(mensagem, titulo, {progressBar: true});
    }
    function showError(mensagem, titulo){
        if(!titulo){
            titulo = 'Erro:';
        }
        toastr.error(mensagem, titulo, {progressBar: true, duration: 10});
    }
    function showWarning(mensagem, titulo){
        if(!titulo){
            titulo = 'Alerta:';
        }
        toastr.warning(mensagem, titulo, {progressBar: true});
    }
    function showInfo(mensagem, titulo){
        if(!titulo){
            titulo = 'Info:';
        }
        toastr.info(mensagem, titulo, {progressBar: true});
    }
}