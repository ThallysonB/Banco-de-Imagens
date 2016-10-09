angular.module('myDirectives', [])
.directive('minhasImagens', function () {

  var ddo = {};

  ddo.restric = "AE";

  ddo.scope = {
    titulo: '@',
  };

  ddo.transclude = true;

  ddo.templateUrl = 'js/directives/minhas-imagens.html';

  return ddo;

})

// FOCO BOTÃO VOLTAR AO CADASTRAR UMA IMAGEM
.directive('meuFocus', function() {
        var ddo = {};
        ddo.restrict = "A";
       // não tem mais scope
        ddo.link = function(scope, element) {
             scope.$on('fotoCadastrada', function() {
                 element[0].focus();
             });
        };

        return ddo;
    });