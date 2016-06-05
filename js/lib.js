var omunURL = "http://matthewwang.me/omun/";
function httpGet(theUrl){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false );
  xmlHttp.send( null );
  return xmlHttp.responseText;
}
function getCommitteeData(){
  committeeData = JSON.parse(httpGet(omunURL+"api/committees.json"));
  $("#content").append('<ul class="table-view" id="committees">');
  for (var key in committeeData){
    if (key != "structure"){
      $("#content").append('<li class="table-view-cell media"><a class="navigate-right"><img class="media-object pull-left" src="' + committeeData[key]["image"] + '" height="42" width="42"><div class="media-body">' + committeeData[key]["name"] + '</div></a></li>');
      /*
      <li class="table-view-cell media">
        <a class="navigate-right">
          <img class="media-object pull-left" src="' + committeeData[key]["image"] + '" height="42" width="42">
          <div class="media-body">
            ' + committeeData[key]["name"] + '
          </div>
        </a>
      </li>
      */
    }
  }
  $("#content").append('</ul>');
}

function getNewsData(){
  newsData = JSON.parse(httpGet(omunURL+"api/posts.json"));
  $("#content").append('<ul class="table-view" id="posts">');
  for (var key in committeeData){
    if (key != "structure"){
      $("#content").append('<li class="table-view-cell media"><a class="navigate-right"><div class="media-body">' + newsData["title"] + ' <p>' + newsData["excerpt"] + '</p></div></a></li>');
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
  $("#content").append('</ul>');
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
