angular.module('omun.services', [])

.factory('News', ['$http',function($http) {
  var omunURL = "http://matthewwang.me/omun/";
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
        console.log("Merp");
        console.log(result["data"]);
        for (i = 0; i < result["data"].length; i++) {
          if (result["data"][i]["short"] == short){
            return result["data"][i];
          }
        }
      });
    }
  };
}])

.factory('Committees', ['$http',function($http) {
  var omunURL = "http://matthewwang.me/omun/";
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
    }
  };
}]);
