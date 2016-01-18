/**
 * Created by Itamar on 14/01/2016.
 */
angular.module('curso')
    .factory('ParametrosAplicacao',ParametrosAplicacao);

function ParametrosAplicacao(){
    return {
        nomeDoUsuario: '',
        email: '',
        logado: false
    };

}