(this.webpackJsonpmyyfrettask=this.webpackJsonpmyyfrettask||[]).push([[0],{23:function(e,t,a){},31:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/data.d8f89426.csv"},47:function(e,t,a){e.exports=a(61)},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),l=a.n(r),i=(a(52),a(53),a(5)),o=(a(54),a(63)),s=a(9),m=a(1),u=(a(23),a(31),function(e){var t=e.id,a=e.name,n=e.brand,r=e.business_unit,l=e.category,i=e.description,o=e.image,s=e.price,m=e.addFunc;return c.a.createElement("div",{className:"movie-card-container",id:t},c.a.createElement("img",{className:"poster",src:o,alt:"movie poster"}),c.a.createElement("div",{className:"movie-title",style:{display:"flex",justifyContent:"space-between"}},c.a.createElement("div",null,n),c.a.createElement("div",null,r)),c.a.createElement("div",{className:"movie-details"},i),c.a.createElement("div",{className:"movie-title",style:{display:"flex",justifyContent:"space-between"}},c.a.createElement("div",null,l),c.a.createElement("div",null,s),c.a.createElement("button",{className:"add-to",onClick:function(){return m({id:t,name:a,description:i,image:o,price:s,units:1})}},"+")))}),d=a(16),p=a(36),v={cart:[],data:[]},E=c.a.createContext(v),f=E.Provider,b=function(e){var t=e.children,a=c.a.useReducer((function(e,t){switch(t.type){case"CART_ADD":var a=[].concat(Object(p.a)(e.cart),[t.payload]);return Object(d.a)({},e,{cart:a});case"CART_REMOVE":return a=e.cart.filter((function(e){return e._id!==t.payload._id})),Object(d.a)({},e,{cart:a});case"ADD_DATA":return console.log("Putting data into context ",t.payload),Object(d.a)({},e,{data:t.payload});default:throw new Error}}),v),n=Object(i.a)(a,2),r=n[0],l=n[1];return c.a.createElement(f,{value:{state:r,dispatch:l}},t)},g=function(){var e=Object(n.useContext)(E),t=e.dispatch,a=Object(n.useState)([]),r=Object(i.a)(a,2),l=r[0],o=r[1],s=Object(n.useState)(0),m=Object(i.a)(s,2),d=m[0],p=m[1];Object(n.useEffect)((function(){console.log("Context",e),o(e.state.data.slice(10*d,10*(d+1)))}),[e,d]);var v=function(e){t({type:"CART_ADD",payload:e})};return c.a.createElement("div",{style:{marginTop:"80px"}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"elements"},l.length>0&&l.map((function(e){return c.a.createElement(u,Object.assign({key:e.id},e,{addFunc:v}))})))),c.a.createElement("div",{style:{display:"flex",justifyContent:"center",width:"90vw",margin:"1%"}},d>0&&c.a.createElement("button",{className:"btn prev-btn",onClick:function(){p(d-1),o(e.state.data.slice(10*d,10*(d+1)))}},"Previous"),d<e.state.data.length&&c.a.createElement("button",{className:"btn next-btn",onClick:function(){p(d+1),o(e.state.data.slice(10*d,10*(d+1)))}},"Next")))},y=function(e){var t=e.id,a=(e.name,e.brand),n=e.business_unit,r=e.category,l=e.description,i=e.image,o=e.price;return c.a.createElement("div",{className:"movie-card-container",id:t},c.a.createElement("img",{className:"poster",src:i,alt:"movie poster"}),c.a.createElement("div",{className:"movie-title",style:{display:"flex",justifyContent:"space-between"}},c.a.createElement("div",null,a),c.a.createElement("div",null,n)),c.a.createElement("div",{className:"movie-details"},l),c.a.createElement("div",{className:"movie-title",style:{display:"flex",justifyContent:"space-between"}},c.a.createElement("div",null,r),c.a.createElement("div",null,o)))},h=function(){var e=Object(n.useContext)(E);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{marginTop:"80px"}},c.a.createElement("div",{className:"elements"},e.state.data.map((function(e){return console.log("Data Rendering from state"),"1"===e.avlble?(console.log("Availabe Product"),c.a.createElement(y,{key:e._id,id:e.id,name:e.name,brand:e.brand,business_unit:e.business_unit,category:e.category,description:e.description,image:e.image,price:e.price})):(console.log("Unavilabe Product"),null)})))))},x=function(){var e=Object(n.useContext)(E);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{marginTop:"80px"}},c.a.createElement("div",{className:"elements"},e.state.data.map((function(e){return console.log("Data Rendering from state"),"0"===e.avlble?(console.log("UnAvailabe Product"),c.a.createElement(y,{key:e._id,id:e.id,name:e.name,brand:e.brand,business_unit:e.business_unit,category:e.category,description:e.description,image:e.image,price:e.price})):(console.log("Availabe Product"),null)})))))},j=function(){var e=Object(n.useContext)(E);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{marginTop:"80px",display:"flex",flexWrap:"wrap",justifyContent:"space-around",width:"100vw"}},e.state.cart.map((function(e){return c.a.createElement(u,{key:e.id,id:e._id,name:e.name,brand:e.brand,business_unit:e.business_unit,category:e.category,description:e.description,image:e.image,price:e.price})}))))};var N=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),u=Object(i.a)(l,2),d=u[0],p=u[1];Object(n.useEffect)((function(){var e=window.matchMedia("(max-width: 700px)");return e.addListener(v),v(e),function(){e.removeListener(v)}}),[]);var v=function(e){e.matches?p(!0):p(!1)};return c.a.createElement(s.a,null,c.a.createElement("header",{className:"Header"},c.a.createElement("img",{src:"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/103016556/original/49be30f313de56dd95e55eea69e0b9fc3939dcd3/make-jewelry-or-diamond-shop-logo.jpg",className:"Logo",alt:"logo"}),c.a.createElement(o.a,{in:!d||a,timeout:350,classNames:"NavAnimation",unmountOnExit:!0},c.a.createElement("nav",{className:"Nav"},c.a.createElement(s.b,{to:"/"},"All Products"),c.a.createElement(s.b,{to:"/avlbleprod"},"Available Products"),c.a.createElement(s.b,{to:"/unavlbleprod"},"Unavilable Products"),c.a.createElement(s.b,{to:"/wish"},"WishList"))),c.a.createElement("button",{onClick:function(){r(!a)},className:"Burger"},c.a.createElement("div",{className:"bar1"}),c.a.createElement("div",{className:"bar2"}),c.a.createElement("div",{className:"bar3"}))),c.a.createElement("main",null,c.a.createElement(m.c,null,c.a.createElement(m.a,{exact:!0,path:"/",component:g}),c.a.createElement(m.a,{exact:!0,path:"/avlbleprod",component:h}),c.a.createElement(m.a,{exact:!0,path:"/unavlbleprod",component:x}),c.a.createElement(m.a,{exact:!0,path:"/wish",component:j}))))},w=a(35),O=a(34),_=a.n(O);a(60);var C=function(){return c.a.createElement("footer",null,c.a.createElement("div",{className:"credits text-center"},c.a.createElement("p",null,c.a.createElement("a",{href:"!#",target:"_top"},"Please Contact Us for your any of the Query")),c.a.createElement("p",null,c.a.createElement("a",{href:"!#",target:"_top"},"aravindhalahalli.81@gmail.com")),c.a.createElement("p",{style:{paddingBottom:"5px"}},c.a.createElement("a",{href:"!#",target:"_top"},"+91 8296392602"))))};function A(){var e=Object(n.useContext)(E).dispatch;return Object(n.useEffect)((function(){console.log("Type : ",typeof e),w.a(_.a).then((function(t){e({type:"ADD_DATA",payload:t})})).catch((function(e){throw e}))}),[]),c.a.createElement("div",{className:"App"},c.a.createElement(N,null),c.a.createElement(C,null))}var k=function(){return c.a.createElement(b,null,c.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.4c19ac83.chunk.js.map