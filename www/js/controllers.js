angular.module('omun.controllers', [])

.controller('HomeCtrl', function($scope, Committees, News, $timeout, $ionicLoading, $ionicPopup) {
  //var init = $localStorage.get('init');
      //if (init.setup === undefined) {
        //console.log("Uh oh!");
      //}
    /*
    else{
      if (init.setup === undefined) {
        $localStorage.set('init',{'setup':'done'});
      }
      $http.get("http://matthewwang.me/omun/api/committees.json")
        .success(function(data) {
            $localStorage.set('committees',data);
        })
        .error(function() {
            console.log("Uh oh!");
        });
      $http.get("http://matthewwang.me/omun/api/posts.json")
        .success(function(data) {
            $localStorage.set('articles',data);
        })
        .error(function() {
            console.log("Uh oh!");
        });
    }
    */
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
  $timeout(function () {
    var omunCountdown = function(endtime){
      var t = Date.parse(endtime) - Date.parse(new Date());
      //var seconds = Math.floor( (t/1000) % 60 );
      //var minutes = Math.floor( (t/1000/60) % 60 );
      //var hours = Math.floor( (t/(1000*60*60)) % 24 );
      var days = Math.floor( t/(1000*60*60*24) );

      if (t >= 0){
        return days + " days until OMUN 2017";
      }
      else if (t < 0){
        return "OMUN 2017 has officially started!";
      }
      else {
        return "Oops! Something's not working!";
      }
    }
    $scope.countdown = omunCountdown("4/22/2017");
    var committee = Committees.random();
    committee.then(function(result) {
       $scope.committee = result;
    });
    var news = News.latest();
    news.then(function(result) {
       $scope.news = result;
    });
    $ionicLoading.hide();
  }, 2000);
})

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
