angular.module('SpotifySearcher.controllers', [])
    .run(function($rootScope) {
        $rootScope.favouritesTracks = [];
    })
    .controller('SpotifySearcherIndexCtrl', function ($scope, $rootScope, SpotifySearcherService) {

        $scope.searchKey = "";
    
        /**
         * Function clear input search
         */
        $scope.clearSearch = function () {
            $scope.searchKey = "";
            $scope.tracks = "";
        }

        /**
         * Function search by name
         */
        $scope.search = function () {
            SpotifySearcherService.findByTrackName($scope.searchKey).then(function (tracks) {
                $scope.tracks = tracks.tracks.items;
            });
        }

        /**
         * Function add favourite track
         * @param {object} track
         */
        $scope.addToFavourites = function (track) {
            $rootScope.favouritesTracks.push(track.name);

            localStorage.setItem('favouritesTracks', JSON.stringify($rootScope.favouritesTracks));
        }

    })

    .controller('SpotifyFavouritesListCtrl', function ($scope, $rootScope) {

        $rootScope.favouritesTracks = JSON.parse(localStorage.getItem('favouritesTracks'));

        /**
         * Function remove a favourite track
         * @param {object} item
         */
        $scope.removeTrack = function (item) {

            $rootScope.favouritesTracks.splice(item, 1);

            localStorage.setItem('favouritesTracks', JSON.stringify($rootScope.favouritesTracks));
        }
    });
