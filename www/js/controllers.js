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
  var committees = Committees.all();
  committees.then(function(result) {
     $scope.committees = result;
  });
})

.controller('CommitteeInfoCtrl', function($scope, $stateParams, Committees) {
  var committees = Committees.get($stateParams.short);
  committees.then(function(result) {
     $scope.committee = result;
  });
})

.controller('AboutCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
