var omunURL = "http://matthewwang.me/omun/";
function httpGet(theUrl){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false );
  xmlHttp.send( null );
  return xmlHttp.responseText;
}
angular.module('omun.services', [])

.factory('News', function() {
  console.log(httpGet(omunURL+"api/posts.json"));
  var news = [{
    "title": "Incoming OMUN 2017 Secretariat/Directors",
    "author": "Matthew Wang",
    "date": "2016-05-30",
    "short": "Introducing-Secretariat",
    "tags": "general",
    "excerpt": "Hey guys! Just a quick update, but we've announced our Secretariat and Directors for OMUN 2017. They're dedicated to making OMUN the awesome, completely student-run Model UN simulation it was last year, but also to make the experience better for...",
    "permalink" : "http://matthewwang.me/omun/2016/05/30/welcome-omun-staff.html"
  },
  {
    "title": "Welcome to the OMUN Website!",
    "author": "Matthew Wang",
    "date": "2016-05-26",
    "short": "Welcome-To-Website",
    "tags": "site",
    "excerpt": "Welcome to the OMUN website! Here you'll find information about Ontario Model United Nations, a Model United Nations simulation held at Upper Canada College. You'll learn more about the committees available, general conference information, and about the OMUN staff that...",
    "permalink" : "http://matthewwang.me/omun/2016/05/26/welcome-to-the-omun-website.html"
  }];

  return {
    all: function() {
      return news;
    },
    get: function(short) {
      for (i = 0; i < news.length; i++) {
        if (news[i].short == short){
          return news[i];
        }
      }
    }
  };
})

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
