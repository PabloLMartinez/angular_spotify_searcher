angular.module('SpotifySearcher.controllers', [])
    .run(function($rootScope) {
        $rootScope.favouritesTracks = [];
    })
    .controller('SpotifySearcherIndexCtrl', function ($scope, $rootScope, SpotifySearcherService) {

        $scope.searchKey = "";

        $scope.clearSearch = function () {
            $scope.searchKey = "";
            $scope.tracks = "";
        }

        $scope.search = function () {
            SpotifySearcherService.findByTrackName($scope.searchKey).then(function (tracks) {
                $scope.tracks = tracks.tracks.items;
            });
        }

        $scope.addToFavourites = function (track) {
            $rootScope.favouritesTracks.push(track.name);

            localStorage.setItem('favouritesTracks', JSON.stringify($rootScope.favouritesTracks));
        }

    })

    .controller('SpotifyFavouritesListCtrl', function ($scope, $rootScope) {

        $rootScope.favouritesTracks = JSON.parse(localStorage.getItem('favouritesTracks'));

        $scope.removeTrack = function (item) {

            $rootScope.favouritesTracks.splice(item, 1);

            localStorage.setItem('favouritesTracks', JSON.stringify($rootScope.favouritesTracks));
        }
    });
