var omunURL = "http://matthewwang.me/omun/"; // website to pull api information from and/or direct users
var omunDate = "4/22/2017"; //Countdown date in MM/DD/YYYY format (no 0's required)
// Utilities
function httpGet(theUrl){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false );
  xmlHttp.send( null );
  return xmlHttp.responseText;
}
function getTimeRemaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );

	if (t >= 0){
    return days + " days until OMUN";
		//return days + " d " + hours + ":" + minutes + ":" + seconds  + " until OMUN";
	}
  else if (t < 0){
    return "OMUN 2017 has officially started!";
  }
	else {
		return "Oops! Something's not working!";
	}
}
// Data Fetchers
function getCommitteeData(){
  committeeData = JSON.parse(httpGet(omunURL+"api/committees.json"));
  for (var key in committeeData){
    if (key != "structure"){
      $("#committees").append('<li class="table-view-cell media"><a href="#' + committeeData[key]["short"] + 'modal"><img class="media-object pull-left" src="' + committeeData[key]["image"] + '" height="42" width="42"><div class="media-body">' + committeeData[key]["name"] + '</div></a></li>');
      /*
      <li class="table-view-cell media">
        <a href="#' + committeeData[key]["short"] + 'modal">
          <img class="media-object pull-left" src="' + committeeData[key]["image"] + '" height="42" width="42">
          <div class="media-body">
            ' + committeeData[key]["name"] + '
          </div>
        </a>
      </li>
      */
    }
  }
  for (var key in committeeData){
    if (key != "structure"){
      $("#content").append('<div id="' + committeeData[key]["short"] + 'modal" class="modal"><header class="bar bar-nav bar-nav-blue"><h1 class="title">'+ committeeData[key]["short"] + '</h1><a class="icon icon-close pull-right" href="#' + committeeData[key]["short"] + 'modal" class="modal"style="color:white;"></a></header><div class="content"><div><img class="center" src="'+ committeeData[key]["image"] +'" width="128" height="128" style="padding-top:10px;"></img></div><div class="content-padded"><h3>' + committeeData[key]["name"] + '</h3><h5>' + committeeData[key]["type"] + '</h5><div id="' + committeeData[key]["short"] + 'data" class="import-data"></div><p>You can find more information about this committee, including the background guide, on our website.</p></div></div></div>');
      /*
      <div id="' + committeeData[key]["short"] + 'modal" class="modal">
        <header class="bar bar-nav bar-nav-blue">
          <h1 class="title">'+ committeeData[key]["short"] + '</h1>
          <a class="icon icon-close pull-right" href="#' + committeeData[key]["short"] + 'modal" class="modal" style="color:white;"></a>
        </header>
        <div class="content">
          <div>
            <img class="center" src="'+ committeeData[key]["image"]' +" width="128" height="128" style="padding-top:10px;"></img>
          </div>
          <div class="content-padded">
            <h3>' + committeeData[key]["name"] + '</h3>
            <h5>' + committeeData[key]["type"] + '</h5>
            <div id="' + committeeData[key]["short"] + 'data" class="import-data">
            </div>
            <p>You can find more information about this committee, including the background guide, on our website.</p>
          </div>
        </div>
      </div>
      */
      $("#"+ committeeData[key]['short'] + "data").load(committeeData[key]["permalink"] + " #content");
    }
  }
}

function getNewsData(){
  newsData = JSON.parse(httpGet(omunURL+"api/posts.json"));
  for (var key in newsData){
    if (key != "structure"){
      $("#posts").append('<li class="table-view-cell media"><a href="#' + newsData[key]["short"] + 'modal"><div class="media-body">' + newsData[key]["title"] + ' <p>' + newsData[key]["excerpt"] + '</p></div></a></li>');
      /*
      <li class="table-view-cell media">
        <a href="#' + newsData[key]["short"] + 'modal">
          <div class="media-body">
            ' + newsData["title"] + '
            <p>' + newsData["excerpt"] + '</p>
          </div>
        </a>
      </li>
      */
    }
  }
  for (var key in newsData){
    if (key != "structure"){
      $("#content").append('<div id="' + newsData[key]["short"] + 'modal" class="modal"><header class="bar bar-nav bar-nav-blue"><a class="icon icon-close pull-right" href="#' + newsData[key]["short"] + 'modal" class="modal" style="color:white;"></a></header><div class="content"><div class="content-padded"><h3>' + newsData[key]["title"] + '</h3><h5>by ' + newsData[key]["author"] + '</h5><div id="' + newsData[key]["short"] + 'data" class="import-data"></div><p>You can find more information about the conference on our website.</p></div></div></div>');
      /*
      <div id="' + newsData[key]["short"] + 'modal" class="modal">
        <header class="bar bar-nav bar-nav-blue">
          <a class="icon icon-close pull-right" href="#' + newsData[key]["short"] + 'modal" class="modal" style="color:white;"></a>
        </header>
        <div class="content">
          <div class="content-padded">
            <h3>' + newsData[key]["title"] + '</h3>
            <h5>by ' + newsData[key]["author"] + '</h5>
            <div id="' + newsData[key]["short"] + 'data" class="import-data">
            </div>
            <p>You can find more information about the conference on our website.</p>
          </div>
        </div>
      </div>
      */
      $("#"+ newsData[key]['short'] + "data").load(newsData[key]["permalink"] + " #content");
    }
  }
}

var initializers = {
    'Schedule': function(){
      window.setInterval(function(){
        $("#countdown").html(getTimeRemaining(omunDate));
      }, 1000);
    },
    'Committees': function() {
      getCommitteeData();
    },
    'News': function(){
      getNewsData();
    }

};

function initializePage(title) {
    var func = initializers[title];
    if(func) { func(); }
}

jQuery(document).ready(function($) {
    window.addEventListener('push', function(e) {
        initializePage(e.detail.state.title);
    });
    initializePage('{{ page.title }}');
    $(".import-data a").on("click", function(event){
      event.preventDefault();
    });

});
