angular.module('empregosrn').controller('FotoController', function($scope, recursoFoto, cadastroDeFotos, $routeParams) {

        $scope.foto = {};
        $scope.mensagem = '';


        if ($routeParams.fotoId) {
            recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
                $scope.foto = foto;
            }, function(erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível obter a foto'
            });
        }

    $scope.submeter = function() {

        if ($scope.formulario.$valid) {

            cadastroDeFotos.cadastrar($scope.foto)
            .then(function(dados) {
                $scope.mensagem = dados.mensagem;
                if (dados.inclusao) $scope.foto = {};
            })
            .catch(function(dados) {
                $scope.mensagem = dados.mensagem;
            });
        }
    };
});


// $scope.submeter = function() {
//             if ($scope.formulario.$valid) {
//                 if ($scope.foto._Id) {
//                     $http.put('/v1/fotos' + $scope.foto_id, $scope.foto)
//                     .success(function() {
//                         $scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso';
//                     })
//                     .error(function(erro) {
//                         console.log(erro);
//                         $scope.mensagem = 'Nao foi possível cadastrar a imagem' + $scope.foto.titulo;
//                     });
//                 }
//                 else {
//                     $http.post('/v1/fotos', $scope.foto)
//                     .success(function() {
//                         $scope.foto = {};
//                         $scope.mensagem = 'Imagem cadastrada com sucesso';
//                     })
//                     .error(function(erro) {
//                         console.log(erro);
//                         $scope.mensagem = 'Nao foi possível cadastrar a imagem';
//                     });
//                 }
//             }
//         };