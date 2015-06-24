angular.module('starter.controllers', [])

        .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

            //Base
            $scope.$on('$ionicView.enter', function (e) {
            });

            //Cria o objeto da modal
            $ionicModal.fromTemplateUrl('templates/modal.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.modal = modal;
            });

            //Fecha a modal
            $scope.close = function () {
                $scope.modal.hide();
            };

            //Abre a modal
            $scope.modalAnoForm = function () {
                $scope.modal.show();
            };

            $scope.filterPanel = false;

            $scope.toggle = function () {
                $scope.filterPanel = !$scope.filterPanel;
            };

        })

        .controller('PlaylistsCtrl', function ($scope) {
            $scope.playlists = [
                {title: 'Andra', id: 1, img: '9', cat: 'Personalizado'},
                {title: 'Grupo Rexcel', id: 2, img: '191', cat: 'Padrão'},
                {title: 'Rolapecas', id: 3, img: '16', cat: 'Personalizado'},
                {title: 'Estronic', id: 4, img: '128', cat: 'Padrão'},
                {title: 'Fecva', id: 5, img: '31', cat: 'Padrão'}
            ];
        })


        .controller('PlaylistCtrl', function ($scope, $stateParams) {
        });
