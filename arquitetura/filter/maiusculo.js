/**
 * Created by Itamar on 14/01/2016.
 */

angular.module('curso')
    .filter('maiusculo', maiusculo);

function maiusculo(){
    return function (input) {
        if(input && (typeof  input === 'string')){
            return input.toUpperCase();
        }

        return input;
    }
}