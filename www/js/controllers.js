angular.module('omun.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('NewsCtrl', function($scope, News) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.news = News.all();
})

.controller('NewsArticleCtrl', function($scope, $stateParams, News) {
  $scope.article = News.get($stateParams.short);
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
