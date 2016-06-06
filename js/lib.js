var omunURL = "http://matthewwang.me/omun/";
function httpGet(theUrl){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false );
  xmlHttp.send( null );
  return xmlHttp.responseText;
}
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
      $("#content").append('<div id="' + committeeData[key]["short"] + 'modal" class="modal"><header class="bar bar-nav bar-nav-blue"><h1 class="title">'+ committeeData[key]["short"] + '</h1><a class="icon icon-close pull-right" href="#' + committeeData[key]["short"] + 'modal" class="modal"style="color:white;"></a></header><div class="content"><div><img class="center" src="'+ committeeData[key]["image"] +'" width="128" height="128" style="padding-top:10px;"></img></div><div class="content-padded"><h3>' + committeeData[key]["name"] + '</h3><h5>' + committeeData[key]["type"] + '</h5><div id="' + committeeData[key]["short"] + 'data"></div><p>You can find more information about this committee, including the background guide, on our website.</p></div></div></div>');
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
            <div id="' + committeeData[key]["short"] + 'data">
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
      $("#posts").append('<li class="table-view-cell media"><a class="navigate-right"><div class="media-body">' + newsData[key]["title"] + ' <p>' + newsData[key]["excerpt"] + '</p></div></a></li>');
      /*
      <li class="table-view-cell media">
        <a class="navigate-right">
          <div class="media-body">
            ' + newsData["title"] + '
            <p>' + newsData["excerpt"] + '</p>
          </div>
        </a>
      </li>
      */
    }
  }
}

var initializers = {
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
});
