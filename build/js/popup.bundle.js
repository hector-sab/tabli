webpackJsonp([2],[function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function r(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n["default"]=e,n}function i(e){function n(){var n=l.createElement(w["default"],{storeRef:r,initialWinStore:i}),t=(l.render(n,a),performance.now());console.log("full render complete. render time: (",t-o," ms)"),d.syncChromeWindows((0,f.logWrap)(function(n){var t=n(i),c=t.setCurrentWindow(e);r.setValue(c);var a=performance.now();console.log("syncChromeWindows and update complete: ",a-o," ms"),document.getElementById("searchBox").focus()}))}var o=performance.now(),t=chrome.extension.getBackgroundPage(),r=t.storeRef,i=t.savedStore,c=t.savedHTML,a=document.getElementById("windowList-region");if(c){a.innerHTML=c;var u=performance.now();console.log("time to set initial HTML: ",u-o)}setTimeout(n,0)}function c(){chrome.windows.getCurrent(null,function(e){i(e.id)})}function a(){window.onload=c}var u=o(8),l=r(u),s=o(6),d=r(s),f=o(7),m=o(165),w=t(m);a()}]);