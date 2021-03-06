angular.module('omun.services', [])

.factory('News', ['$http',function($http) {
  var omunURL = "http://omun.ca/";
  var getData = function() {
    return $http({method:"GET", url:omunURL + 'api/posts.json'}).then(function(result){
      return result.data;
    });
  };
  return {
    all: function() {
      var news = getData();
      return news.then(function(result) {
        return result.data;
      });
    },
    get: function(short) {
      var news = getData();
      return news.then(function(result) {
        for (i = 0; i < result["data"].length; i++) {
          if (result["data"][i]["short"] == short){
            return result["data"][i];
          }
        }
      });
    },
    latest: function() {
      var news = getData();
      return news.then(function(result) {
        return result["data"][0];
      });
    }
  };
}])

.factory('Committees', ['$http',function($http) {
  var omunURL = "http://omun.ca/";
  var getData = function() {
    return $http({method:"GET", url:omunURL + 'api/committees.json'}).then(function(result){
      return result.data;
    });
  };
  return {
    all: function() {
      var committees = getData();
      return committees.then(function(result) {
        return result.data;
      });
    },
    get: function(short) {
      var committees = getData();
      return committees.then(function(result) {
        for (i = 0; i < result["data"].length; i++) {
          if (result["data"][i]["short"] == short){
            return result["data"][i];
          }
        }
      });
    },
    random: function() {
      var committees = getData();
      return committees.then(function(result) {
        return result["data"][Math.floor(Math.random()*(result["data"].length-1))];
      });
    }
  };
}]);
