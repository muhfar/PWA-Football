!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=["/","main.js","standing_bundle.js","team_bundle.js","index.html","standing.html","team.html","nav.html","manifest.json","pages/home.html","pages/matches.html","pages/favorite.html","assets/Bundesliga.svg","assets/FIFA World Cup.svg","assets/Premier League.svg","assets/UEFA Champions League.svg","assets/icon-192.png","assets/icon-512.png","fonts/MaterialIcons-Regular.eot","fonts/MaterialIcons-Regular.ttf","fonts/MaterialIcons-Regular.woff","fonts/MaterialIcons-Regular.woff2"];self.addEventListener("install",(function(e){e.waitUntil(caches.open("footballLeague-v4").then((function(e){return e.addAll(n)})))})),self.addEventListener("fetch",(function(e){e.request.url.indexOf("https://api.football-data.org/v2/")>-1?e.respondWith(caches.open("footballLeague-v4").then((function(t){return fetch(e.request).then((function(n){return t.put(e.request.url,n.clone()),n}))}))):e.respondWith(caches.match(e.request,{ignoreSearch:!0}).then((function(t){return t||fetch(e.request)})))})),self.addEventListener("activate",(function(e){e.waitUntil(caches.keys().then((function(e){return Promise.all(e.map((function(e){if("footballLeague-v4"!=e)return console.log("Service Worker | cache "+e+" dihapus!"),caches.delete(e)})))})))})),self.addEventListener("push",(function(e){var t={body:e.data?e.data.text():"Push message no payload",icon:"icon-192.png",vibrate:[100,50,100],data:{dateOfArrival:Date.now(),primaryKey:1}};e.waitUntil(self.registration.showNotification("Push Notification",t))}))}]);