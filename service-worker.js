"use strict";var precacheConfig=[["/index.html","6911efb6c742bd106b27fa58e8bc1a8d"],["/static/css/main.671090ca.css","325f34cd82adc66bc3a5488952fc6074"],["/static/js/main.f8283a4f.js","edbdd0cd1da36a9d993d5436d15d8660"],["/static/media/adobe-il.8670d30b.svg","8670d30bb8fe5afcbbb63f845a6582de"],["/static/media/adobe-xd.10baff4c.svg","10baff4c898ad2ba358e36ef829d1c60"],["/static/media/angular.1c0c349a.svg","1c0c349ad9921e0675e6d7a2920d4c72"],["/static/media/azger-logo.5eaf1c88.svg","5eaf1c88d56d43e8e34c90ec58492e6a"],["/static/media/banner3.e48508ba.jpeg","e48508ba256ead920a35fcb8a92d8e7b"],["/static/media/blaise-pascal.32a9b988.png","32a9b988f552195acc135138f61b2139"],["/static/media/bootstrap.087292cd.svg","087292cd6aad2ee0fef6541d038b112e"],["/static/media/css3.3707da3c.svg","3707da3c6a394c7ee2523273f8d98a25"],["/static/media/elasticsearch.d0109b29.svg","d0109b299ad21029d9405bb59a54fdae"],["/static/media/esisa.27af0892.png","27af0892419d9e28cf5b61f6de252c1a"],["/static/media/git.1190a19c.svg","1190a19ce3cc940741a60137a1e074cb"],["/static/media/html.f618641c.svg","f618641c78751b81086e2cd729ddb296"],["/static/media/javascript.2d2e31cc.svg","2d2e31cc63a96c7e6044f52d30fd21b9"],["/static/media/jquery.2ce6fb9b.svg","2ce6fb9bbccb18625f7d118cd75f48d2"],["/static/media/material-ui-logo.cb2f65a2.svg","cb2f65a2181811ba82d3db0ed0880d1c"],["/static/media/md.22c90887.svg","22c90887a5d6d7bae368250b95c1ce20"],["/static/media/mysql.f79f40aa.svg","f79f40aa3bd987d11c541fc5958da176"],["/static/media/neo4j.ddd0657a.svg","ddd0657a758db7b7cf6ca9d58850924b"],["/static/media/nodejs.a1231528.svg","a123152868245dee71c441124a98ac3e"],["/static/media/npm.6f7aeee8.svg","6f7aeee8bb8ee61edfd134eef3152e22"],["/static/media/postgresql.45e46bc0.svg","45e46bc025b8fd350c09492ce01d4549"],["/static/media/react.4009eef3.svg","4009eef3b3e291f296e71962c70895c5"],["/static/media/redux.aa0a3376.svg","aa0a337603611296524a666b62a9ff23"],["/static/media/sass.b446ca5a.svg","b446ca5a397c1ef6fb94cd02c4e94335"],["/static/media/typescript.2881bc05.svg","2881bc0565711dc20f3443e20e62ee4c"],["/static/media/vs-code.389f119b.svg","389f119bfd38b4eda8f3bc2cd1020bcd"],["/static/media/webpack.837b970d.svg","837b970d5c77507b2ea4bb0ec18059a0"],["/static/media/yarn.878ab384.svg","878ab38467e5d9ce11b5add119296fd9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),s=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var s="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(s,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});