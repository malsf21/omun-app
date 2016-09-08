angular.module('omun', ['ionic', 'omun.controllers', 'omun.services', 'ngSanitize'])

.run(function($ionicPlatform, $ionicPopup) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
    if(window.Connection) {
      if(navigator.connection.type == Connection.NONE) {
        $ionicPopup.confirm({
          title: 'No Internet Connection',
          content: 'Some content won\'t be available! Go online to access the full content.',
          buttons: [
            { text: 'Continue' }
          ]
        })
        .then(function(result) {
          if(!result) {
            ionic.Platform.exitApp();
          }
        });
      }
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: function(){
      if (ionic.Platform.isAndroid()){
        return "templates/tabs-android.html";
      }
      else{
        return "templates/tabs.html";
      }
    }
  })

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.news', {
    url: '/news',
    views: {
      'tab-news': {
        templateUrl: 'templates/tab-news.html',
        controller: 'NewsCtrl'
      }
    }
  })
    .state('tab.news-article', {
      url: '/news/:short',
      views: {
        'tab-news': {
          templateUrl: 'templates/news-article.html',
          controller: 'NewsArticleCtrl'
        }
      }
    })
  .state('tab.schedule', {
    url: '/schedule',
    views: {
      'tab-schedule': {
        templateUrl: 'templates/tab-schedule.html',
        controller: 'ScheduleCtrl'
      }
    }
  })
    .state('tab.conference-timeline', {
      url: '/schedule/timeline',
      views: {
        'tab-schedule': {
          templateUrl: 'templates/conference-timeline.html',
          controller: 'ScheduleCtrl'
        }
      }
    })
    .state('tab.conference-schedule', {
      url: '/schedule/conference',
      views: {
        'tab-schedule': {
          templateUrl: 'templates/conference-schedule.html',
          controller: 'ScheduleCtrl'
        }
      }
    })
  .state('tab.committees', {
    url: '/committees',
    views: {
      'tab-committees': {
        templateUrl: 'templates/tab-committees.html',
        controller: 'CommitteesCtrl'
      }
    }
  })
    .state('tab.committee-info', {
      url: '/committees/:short',
      views: {
        'tab-committees': {
          templateUrl: 'templates/committee-info.html',
          controller: 'CommitteeInfoCtrl'
        }
      }
    })
  .state('tab.about', {
    url: '/about',
    views: {
      'tab-about': {
        templateUrl: 'templates/tab-about.html',
        controller: 'AboutCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

})
.filter('to_trusted', ['$sce', function($sce){
  return function(text){
      var decoded = angular.element('<textarea />').html(text).text()
      return $sce.trustAsHtml(decoded);
  };
}]);
