"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[991],{4991:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r=t(885),a=t(2791),c=t(6871),u=t(409),i="Reviews_author__Y70Lx",s="Reviews_list__pCzae",o=t(184);function p(){var n=(0,a.useState)(null),e=(0,r.Z)(n,2),t=e[0],p=e[1],f=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,u.Jh)(f).then((function(n){p(n.data.results)}))}),[f]),(0,o.jsxs)(o.Fragment,{children:[t&&0===t.length&&(0,o.jsx)("p",{children:"We don`t have any reviews for this movie"}),t&&0!==t.length&&(0,o.jsx)("ul",{className:s,children:t.map((function(n){return(0,o.jsxs)("li",{children:[(0,o.jsxs)("p",{className:i,children:["Author: ",n.author]}),(0,o.jsx)("p",{children:n.content})]},n.id)}))})]})}},409:function(n,e,t){t.d(e,{Gp:function(){return h},IQ:function(){return g},Jh:function(){return m},_L:function(){return p},kq:function(){return d}});var r=t(5861),a=t(7757),c=t.n(a),u=t(4569),i=t.n(u),s="https://api.themoviedb.org/3",o="c1c6ade8161edfcf83637816aa4d7c5f";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"/trending/movie/day?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function n(e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=991.4a68661f.chunk.js.map