(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),i=(a(13),a(1)),l=a(2),s=a(4),u=a(3),h=a(5),m=function(e){var t=e.email,a=e.name,n=e.id;return r.a.createElement("div",{className:"tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"Robot",src:"https://robohash.org/".concat(n)}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,t)))},d=function(e){var t=e.robots,a=t.map((function(e,a){return r.a.createElement(m,{key:a,id:t[a].id,name:t[a].name,email:t[a].email})}));return r.a.createElement("div",{className:"tc"},r.a.createElement("div",null,a))},b=function(e){var t=e.search;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placehoder:"Search Robot",onChange:t}))},f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid blue",height:"800px"}},this.props.children)}}]),t}(n.Component),p=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onSearch=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchfield,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"MY ROBOT FRIENDS"),r.a.createElement(b,{search:this.onSearch}),r.a.createElement(f,null,r.a.createElement(d,{robots:n}))):r.a.createElement("h1",{className:"tc"}," Loading ")}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}}]),t}(n.Component);a(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.ccde226b.chunk.js.map