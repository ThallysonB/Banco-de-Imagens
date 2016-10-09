angular.module('empregosrn').controller('FotosController', function($scope, recursoFoto) {

  $scope.fotos = [];
  $scope.filtro = '';
  $scope.mensagem = '',

  // adicionar foto

  recursoFoto.query(function(fotos) {
          $scope.fotos = fotos;
      }, function(erro) {
          console.log(erro);
      });

  // remover foto
  $scope.remover = function(foto) {
    recursoFoto.delete({fotoId: foto._id}, function() {
      var indiceDaFoto = $scope.fotos.indexOf(foto);
        $scope.fotos.splice(indiceDaFoto, 1);
        $scope.mensagem = 'A imagem ' + foto.titulo + ' foi removida com sucesso!';
    }, function(erro) {
        console.log(erro);
        $scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo + '!';
    });
  };
});


 // adicionar foto
  // $http.get('v1/fotos')
  //   .success(function (fotos) {
  //   $scope.fotos = fotos;
  // })
  //   .error(function (erro) {
  //   console.log(erro);
  // });

  //   // remover foto
//   $scope.remover = function(foto) {
//     $http.delete('v1/fotos/' +foto._id)
//     .success(function () {
//       var indiceDaFoto = $scope.fotos.indexOf(foto);
//       $scope.fotos.splice(indiceDaFoto, 1);
//       $scope.mensagem = 'A imagem ' + foto.titulo + ' foi removida com sucesso!';
//     })
//     .error(function(erro) {
//       console.log(erro);
//       $scope.mensagem = 'Não foi possível remover a foto!' + foto.titulo;
//     });
//   };