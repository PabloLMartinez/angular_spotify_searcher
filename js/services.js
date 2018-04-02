angular.module('SpotifySearcher.services', [])

    .factory('SpotifySearcherService', function($http, $q) {

        return {
            /**
             * Function for searching a track by name
             * @param {string} searchKey
             */
            findByTrackName: function(searchKey) {
                var searchTrack = searchKey.replace(' ', '+');
                var deferred = $q.defer();

                $http.get('https://api.spotify.com/v1/search?q=' + searchTrack + '&type=track', {
                    headers: {
                        "Authorization": 'Bearer BQA3FkdKAczhumL9SYYyfAzLxQSVvHGggRThjcz20hQt-sJtY0DJRn1ZeeoO3pBTx3yQu2Cjnqpuv63a1hfr3-6-NNNJBVbjDvEbi8Ta9j-00Ujjazb71Bq5lzwrZMHAbPJZKCt_9j22H2-jtKw'
                    }
                }).success(function(data){
                    deferred.resolve(data);
                }).error(function(data, status) {
                    console.error('Error', status, data);
                });

                return deferred.promise;
            }
        }

    });
