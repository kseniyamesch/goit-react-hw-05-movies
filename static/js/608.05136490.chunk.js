"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[608],{2608:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(885),u=n(2791),a=n(501),c=n(6871),i={form:"Movies_form__4ow+Z"},o=n(409),s=n(184);function p(){var t=(0,a.lr)(),e=(0,r.Z)(t,2),n=e[0],p=e[1],f=(0,u.useState)((function(){return n.get("query")?n.get("query"):""})),l=(0,r.Z)(f,2),h=l[0],v=l[1],d=(0,u.useState)(""),m=(0,r.Z)(d,2),g=m[0],y=m[1];(0,u.useEffect)((function(){n.get("query")&&(0,o.Gp)(h).then((function(t){return y(t.data.results)}))}),[h,n]);var x=(0,c.TH)();return(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),p("query=".concat(t.currentTarget.elements.query.value)),h&&(0,o.Gp)(h).then((function(t){return y(t.data.results)}))},className:i.form,children:[(0,s.jsx)("input",{type:"text",autoFocus:!0,name:"query",value:h,onChange:function(t){v(t.currentTarget.value)}}),(0,s.jsx)("button",{type:"submit",className:i.btn,children:"Search"})]}),0!==(null===g||void 0===g?void 0:g.length)&&(0,s.jsx)("div",{children:(0,s.jsx)("ul",{children:g.map((function(t){var e=t.id;return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"/movies/".concat(e),state:{from:x},children:t.title})},t.id)}))})})]})}},409:function(t,e,n){n.d(e,{Gp:function(){return l},IQ:function(){return m},Jh:function(){return y},_L:function(){return p},kq:function(){return v}});var r=n(5861),u=n(7757),a=n.n(u),c=n(4569),i=n.n(c),o="https://api.themoviedb.org/3",s="c1c6ade8161edfcf83637816aa4d7c5f";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(o,"/trending/movie/day?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(o,"/search/movie?api_key=").concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(o,"/movie/").concat(e,"?api_key=").concat(s,"&language=en-US&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=608.05136490.chunk.js.map