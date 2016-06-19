angular.module('omun.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('NewsCtrl', function($scope, $http, News) {
  var news = News.all();
  news.then(function(result) {
     $scope.news = result;
  });
})

.controller('NewsArticleCtrl', function($scope, $stateParams, News) {
  var news = News.get($stateParams.short);
  news.then(function(result) {
     $scope.article = result;
  });
})

.controller('ScheduleCtrl', function($scope) {})

.controller('CommitteesCtrl', function($scope, Committees) {
  $scope.committees = Committees.all();
})

.controller('CommitteeInfoCtrl', function($scope, $stateParams, Committees) {
  $scope.committee = Committees.get($stateParams.short);
})

.controller('AboutCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
