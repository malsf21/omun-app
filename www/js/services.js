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
            console.log("Flerp");
            console.log(i);
            console.log(result["data"][i]);
            return result["data"][i];
          }
        }
      });
    }
  };
}])

.factory('Committees', function() {
  var committees = [{
    "name": "International Court of Justice",
    "short": "ICJ",
    "type": "Specialized Agency",
    "size": "20",
    "shortbio": "The International Court of Justice judges countries based on their actions, and sets punishments accordingly.",
    "permalink": "http://matthewwang.me/omun/committees/icj.html",
    "image": "http://matthewwang.me/omun/img/committees/icj.png"
  },
  {
    "name": "United Nations Human Rights Council",
    "short": "UNHRC",
    "type": "Specialized Agency",
    "size": "56",
    "guide": "http://matthewwang.me/omun/files/committees/DelegateGuide.pdf",
    "shortbio": "The United Nations Human Rights Council deals with Human Rights all over the world.",
    "permalink": "http://matthewwang.me/omun/committees/unhrc.html",
    "image": "http://matthewwang.me/omun/img/committees/unhrc.png"
  },
  {
    "name": "World Health Organisation",
    "short": "WHO",
    "type": "General Assembly",
    "size": "192",
    "shortbio": "The World Health Organisation strives to ensure that world health and safety standards are humane, and ensures that all health issues and crisises can be dealt with by the international community.",
    "permalink": "http://matthewwang.me/omun/committees/who.html",
    "image": "http://matthewwang.me/omun/img/committees/who.bmp"
  }];

  return {
    all: function() {
      return committees;
    },
    get: function(short) {
      for (i = 0; i < committees.length; i++) {
        if (committees[i].short == short){
          return committees[i];
        }
      }
    }
  };
});
