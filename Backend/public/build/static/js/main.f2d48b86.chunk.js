(window["webpackJsonpgraphql-client"]=window["webpackJsonpgraphql-client"]||[]).push([[0],{51:function(e,t,n){},76:function(e,t,n){e.exports=n(87)},87:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(32),o=n.n(l),c=n(16),i=n(71),u=n(9),m=n(30),s=n(36),d=n(11),E=n(116),p=n(115),g=n(19),v=n(15),y=n.n(v);function f(){var e=Object(g.a)(["\n  mutation Save($data: String!){\n    saveData(data: $data) {\n        message\n      }\n  }\n"]);return f=function(){return e},e}var h=y()(f()),b=n(61),w=n(33),x=n(62),k=n(63),j=n(72),O=n(105),S=n(106),_=n(107),D=function(e){function t(){return Object(b.a)(this,t),Object(x.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"appbar"},r.a.createElement(O.a,{position:"static",color:"default"},r.a.createElement(S.a,null,r.a.createElement(_.a,{variant:"h6",color:"inherit"},r.a.createElement(u.b,{style:{textDecoration:"none",color:"black"},title:"see all posts",to:"/"},"Home")),r.a.createElement("h4",{style:{marginLeft:"20px"}},r.a.createElement(u.b,{style:{textDecoration:"none",color:"black"},title:"see all posts",to:"/users"},"Users")),r.a.createElement("h4",{style:{marginLeft:"20px"}},r.a.createElement(u.b,{style:{textDecoration:"none",color:"black"},title:"see all posts",to:"/products"},"Products")),r.a.createElement("h4",{style:{marginLeft:"20px"}},r.a.createElement(u.b,{style:{textDecoration:"none",color:"black"},title:"see all posts",to:"/programs"},"Programs")),r.a.createElement("h4",{style:{marginLeft:"20px"}},r.a.createElement(u.b,{style:{textDecoration:"none",color:"black"},title:"see all posts",to:"/transactions"},"Transactions")))))}}]),t}(r.a.Component),N=(n(51),function(){var e=Object(d.a)(h),t=Object(s.a)(e,1)[0],n=Object(a.useState)(""),l=Object(s.a)(n,2),o=l[0],c=l[1],i=Object(a.useState)(""),u=Object(s.a)(i,2),m=u[0],g=u[1],v=Object(a.useState)(""),y=Object(s.a)(v,2),f=y[0],b=y[1];return r.a.createElement("div",{className:"file"},r.a.createElement(D,null),r.a.createElement("div",{className:"content"},r.a.createElement("div",null,r.a.createElement(E.a,{placeholder:"Enter your text",rowsMax:30,rows:10,style:{width:"50%"},"aria-label":"maximum height",value:o,onChange:function(e){c(e.target.value)}})),r.a.createElement(p.a,{variant:"contained",color:"primary",onClick:function(){t({variables:{data:o}}).then((function(e){return b(e.data.saveData.message)})).catch((function(e){return g("Error while saving your data")}))}},"SEND")),r.a.createElement("div",{className:"content"},m?r.a.createElement("div",null,m):"",f?r.a.createElement("div",null,f):""))}),q=n(108),$=n(112),L=n(111),C=n(109),T=n(110);function B(){var e=Object(g.a)(["\n  query User($id: String) {\n    user(id: $id) {\n      id\n      name\n      created\n    }\n  }\n"]);return B=function(){return e},e}function P(){var e=Object(g.a)(["\n  query Users{\n    users {\n      id\n      name\n      created\n    }\n  }\n"]);return P=function(){return e},e}var H=y()(P()),I=y()(B()),A=function(){var e=Object(d.b)(H),t=e.loading,n=e.error,a=e.data,l=function(e){return Object.keys(e.users[0]).filter((function(e){return"__typename"!==e}))};return r.a.createElement("div",{className:"users"},r.a.createElement(D,null),r.a.createElement("div",null," ",t?r.a.createElement("div",null,"loading..."):null,n?r.a.createElement("div",null,"Something went wrong fetching your data!"):null,a?r.a.createElement("div",null,r.a.createElement(q.a,{stickyHeader:!0,style:{marginTop:"30px"}},r.a.createElement(C.a,null,r.a.createElement(T.a,null,l(a).map((function(e){return r.a.createElement(L.a,{key:e,style:{align:"left"}},"__typename"!==e?e:null)})))),r.a.createElement($.a,null,a.users.map((function(e){return r.a.createElement(T.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.id,onClick:function(){return t=e.id,void console.log(t);var t},style:{cursor:"pointer"}},r.a.createElement(u.b,{to:"/users/".concat(e.id),style:{textDecoration:"none"}},l(a).map((function(t){return r.a.createElement(L.a,{key:t,style:{align:"left"}},"created"===t?new Date(e[t]).toLocaleDateString():e[t])}))))}))))):null))},U=n(113),J=n(114),W=function(){var e=window.location.pathname.split("/")[2],t=Object(d.b)(I,{variables:{id:e}}),n=t.loading,a=t.error,l=t.data;return r.a.createElement("div",{className:"user"},r.a.createElement(D,null),r.a.createElement("div",null," ",n?r.a.createElement("div",null,"loading..."):null,a?r.a.createElement("div",null,"Something went wrong fetching your data!"):null,l?r.a.createElement(U.a,{style:{width:"50%",textAlign:"center"}},r.a.createElement(J.a,null,console.log(l),r.a.createElement(_.a,{color:"textSecondary",variant:"h5",component:"h2",gutterBottom:!0},l.user.name),r.a.createElement(_.a,{color:"textSecondary"},l.user.id),r.a.createElement(_.a,{variant:"body2",component:"p"},new Date(l.user.created).toLocaleString()))):null))};function M(){var e=Object(g.a)(["\n  query Product($id: String!) {\n    product(id: $id) {\n        id\n        program_id\n        start\n        end\n        price\n    }\n  }\n"]);return M=function(){return e},e}function z(){var e=Object(g.a)(["\n  query Products{\n    products {\n        id\n        program_id\n        start\n        end\n        price\n    }\n  }\n"]);return z=function(){return e},e}var F=y()(z()),G=y()(M()),K=function(){var e=Object(d.b)(F),t=e.loading,n=e.error,a=e.data,l=function(e){return console.log(e),Object.keys(e.products[0]).filter((function(e){return"__typename"!==e}))};return r.a.createElement("div",{className:"users"},r.a.createElement(D,null),r.a.createElement("div",null," ",t?r.a.createElement("div",null,"loading..."):null,n?r.a.createElement("div",null,"Something went wrong fetching your data!"):null,a?r.a.createElement("div",null,r.a.createElement(q.a,{stickyHeader:!0,style:{marginTop:"30px"}},r.a.createElement(C.a,null,r.a.createElement(T.a,null,l(a).map((function(e){return r.a.createElement(L.a,{key:e,style:{align:"left"}},"__typename"!==e?e:null)})))),r.a.createElement($.a,null,a.products.map((function(e){return r.a.createElement(T.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.id,onClick:function(){e.id},style:{cursor:"pointer"}},r.a.createElement(u.b,{to:"/products/".concat(e.id),style:{textDecoration:"none"}},l(a).map((function(t){return r.a.createElement(L.a,{key:t,style:{align:"left"}},e[t])}))))}))))):null))},Q=function(){var e=window.location.pathname.split("/")[2];console.log(e);var t=Object(d.b)(G,{variables:{id:e}}),n=t.loading,a=t.error,l=t.data;return r.a.createElement("div",{className:"product"},r.a.createElement(D,null),r.a.createElement("div",null," ",n?r.a.createElement("div",null,"loading..."):null,a?r.a.createElement("div",null,"Something went wrong fetching your data!"):null,l?r.a.createElement(U.a,{style:{width:"50%",textAlign:"center"}},r.a.createElement(J.a,null,console.log(l),r.a.createElement(_.a,{color:"textSecondary",variant:"h5",component:"h2",gutterBottom:!0},l.product.program_id),r.a.createElement(_.a,{color:"textSecondary"},l.product.id),r.a.createElement(_.a,{variant:"body2",component:"p"},new Date(l.product.start).toLocaleString()),r.a.createElement(_.a,{variant:"body2",component:"p"},new Date(l.product.end).toLocaleString()),r.a.createElement(_.a,{color:"textSecondary"},l.product.price))):null))};function R(){var e=Object(g.a)(["\n  query Program($id: String!) {\n    program(id: $id) {\n        id\n        title\n    }\n  }\n"]);return R=function(){return e},e}function V(){var e=Object(g.a)(["\n  query Programs{\n    programs {\n        id\n        title\n    }\n  }\n"]);return V=function(){return e},e}var X=y()(V()),Y=y()(R()),Z=function(){var e=Object(d.b)(X),t=e.loading,n=e.error,a=e.data,l=function(e){return console.log(e),Object.keys(e.programs[0]).filter((function(e){return"__typename"!==e}))};return r.a.createElement("div",{className:"programs"},r.a.createElement(D,null),r.a.createElement("div",null," ",t?r.a.createElement("div",null,"loading..."):null,n?r.a.createElement("div",null,"Something went wrong fetching your data!"):null,a?r.a.createElement("div",null,r.a.createElement(q.a,{stickyHeader:!0,style:{marginTop:"30px"}},r.a.createElement(C.a,null,r.a.createElement(T.a,null,l(a).map((function(e){return r.a.createElement(L.a,{key:e,style:{align:"left"}},"__typename"!==e?e:null)})))),r.a.createElement($.a,null,a.programs.map((function(e){return r.a.createElement(T.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.id,onClick:function(){return t=e.id,void console.log(t);var t},style:{cursor:"pointer"}},r.a.createElement(u.b,{to:"/programs/".concat(e.id),style:{textDecoration:"none"}},l(a).map((function(t){return r.a.createElement(L.a,{key:t,style:{align:"left"}},e[t])}))))}))))):null))},ee=function(){var e=window.location.pathname.split("/")[2];console.log(e);var t=Object(d.b)(Y,{variables:{id:e}}),n=t.loading,a=t.error,l=t.data;return r.a.createElement("div",{className:"program"},r.a.createElement(D,null),r.a.createElement("div",null," ",n?r.a.createElement("div",null,"loading..."):null,a?r.a.createElement("div",null,"Something went wrong fetching your data!"):null,l?r.a.createElement(U.a,{style:{width:"50%",textAlign:"center"}},r.a.createElement(J.a,null,console.log(l),r.a.createElement(_.a,{color:"textSecondary",variant:"h5",component:"h2",gutterBottom:!0},l.program.title),r.a.createElement(_.a,{color:"textSecondary"},l.program.id))):null))};function te(){var e=Object(g.a)(["\n  query Transaction($id: String!) {\n    transaction(id: $id) {\n        id\n        product_id\n        user_id\n        timestamp\n      }\n  }\n"]);return te=function(){return e},e}function ne(){var e=Object(g.a)(["\nquery Transactions {\n  transactions {\n    id\n    product_id\n    user_id\n    timestamp\n  }\n}\n"]);return ne=function(){return e},e}var ae=y()(ne()),re=y()(te()),le=function(){var e=Object(d.b)(ae),t=e.loading,n=e.error,a=e.data,l=function(e){return console.log(e),Object.keys(e.transactions[0]).filter((function(e){return"__typename"!==e}))};return r.a.createElement("div",{className:"transactions"},r.a.createElement(D,null),r.a.createElement("div",null," ",t?r.a.createElement("div",null,"loading..."):null,n?r.a.createElement("div",null,"Something went wrong fetching your data!"):null,a?r.a.createElement("div",null,r.a.createElement(q.a,{stickyHeader:!0,style:{marginTop:"30px"}},r.a.createElement(C.a,null,r.a.createElement(T.a,null,l(a).map((function(e){return r.a.createElement(L.a,{key:e,style:{align:"left"}},"__typename"!==e?e:null)})))),r.a.createElement($.a,null,a.transactions.map((function(e){return r.a.createElement(T.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.id,onClick:function(){return t=e.id,void console.log(t);var t},style:{cursor:"pointer"}},r.a.createElement(u.b,{to:"/transactions/".concat(e.id),style:{textDecoration:"none"}},l(a).map((function(t){return r.a.createElement(L.a,{key:t,style:{align:"left"}},e[t])}))))}))))):null))},oe=function(){var e=window.location.pathname.split("/")[2];console.log(e);var t=Object(d.b)(re,{variables:{id:e}}),n=t.loading,a=t.error,l=t.data;return r.a.createElement("div",{className:"program"},r.a.createElement(D,null),r.a.createElement("div",null," ",n?r.a.createElement("div",null,"loading..."):null,a?r.a.createElement("div",null,"Something went wrong fetching your data!"):null,l?r.a.createElement(U.a,{style:{width:"50%",textAlign:"center"}},r.a.createElement(J.a,null,console.log(l),r.a.createElement(_.a,{color:"textSecondary",variant:"h5",component:"h2",gutterBottom:!0},l.transaction.product_id),r.a.createElement(_.a,{color:"textSecondary"},l.transaction.user_id),r.a.createElement(_.a,{color:"textSecondary"},l.transaction.id),r.a.createElement(_.a,{color:"textSecondary"},new Date(l.transaction.timestamp).toLocaleString()))):null))},ce=function(){return r.a.createElement(u.a,{basename:"/"},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:N}),r.a.createElement(m.a,{exact:!0,path:"/users",component:A}),r.a.createElement(m.a,{path:"/users/:id",component:W}),r.a.createElement(m.a,{exact:!0,path:"/products",component:K}),r.a.createElement(m.a,{path:"/products/:id",component:Q}),r.a.createElement(m.a,{exact:!0,path:"/programs",component:Z}),r.a.createElement(m.a,{path:"/programs/:id",component:ee}),r.a.createElement(m.a,{exact:!0,path:"/transactions",component:le}),r.a.createElement(m.a,{path:"/transactions/:id",component:oe})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=new i.a({uri:"http://localhost:4000/graphql"});o.a.render(r.a.createElement(c.a,{client:ie},r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[76,1,2]]]);
//# sourceMappingURL=main.f2d48b86.chunk.js.map