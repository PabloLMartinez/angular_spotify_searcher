// angular.module is a global place for creating, registering and retrieving Angular modules
// 'SpotifySearcher' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'SpotifySearcher.services' is found in services.js
// 'SpotifySearcher.controllers' is found in controllers.js
angular.module('SpotifySearcher', ['ionic', 'SpotifySearcher.services', 'SpotifySearcher.controllers'])


    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('Searcher', {
                url: '/search',
                templateUrl: 'templates/spotify-searcher-index.html',
                controller: 'SpotifySearcherIndexCtrl'
            })

            .state('Favourites-List', {
                url: '/favourites',
                templateUrl: 'templates/spotify-favourites-list.html',
                controller: 'SpotifyFavouritesListCtrl'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/search');

    });
