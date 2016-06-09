# omun-app
The OMUN App. Still in Alpha.

## A few notes/thoughts

### Build and Compile
Since this app is supposed to be cross-platform, I'm writing the app in web technologies: so not Swift or Java, but HTML, CSS, and JS. In order to do that, I use [Apache Cordova](https://cordova.apache.org/)/[Adobe Phonegap](http://phonegap.com/) to turn my HTML/CSS/JS into their respective .ipa and .apk formats. In addition, I use a mobile HTML/CSS/JS Framework: while I'm using [ratchet](http://goratchet.com) right now, I'm considering switching over to [Ionic](http://ionicframework.com) as it looks better/has more functionality.

### Data
Most of the information on this app isn't stored locally, but pulled from a relatively-static API from the omun.ca website. For now, it's on [my test server](http://matthewwang.me/omun/api), but I plan to expand more on it sooner or later, and move it to omun.ca.

This also unfortuantely means that the app doesn't work without an internet connection, at least for now. I'll look into something to amend that down the road, but it isn't my priority.


