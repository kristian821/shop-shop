(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{102:function(e,t,a){e.exports=a(121)},110:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(44),o=a.n(c),l=a(9),i=(a(110),a(3)),u=a(13),s=a(11),m=a(5),d=a(90);function p(e,t,a){return new Promise((function(n,r){var c,o,l,i=window.indexedDB.open("shop-shop",1);i.onupgradeneeded=function(e){var t=i.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},i.onerror=function(e){console.log("There was an error")},i.onsuccess=function(r){switch(c=i.result,o=c.transaction(e,"readwrite"),l=o.objectStore(e),c.onerror=function(e){console.log("error:",e)},t){case"put":l.put(a),n(a);break;case"get":var u=l.getAll();u.onsuccess=function(){n(u.result)};break;case"delete":l.delete(a._id);break;default:console.log("No valid method")}o.oncomplete=function(){c.close()}}}))}var f,E,b,g,h,O=function(e){var t=e.image,a=e.name,n=e._id,c=e.price,o=e.quantity,s=Object(l.c)((function(e){return e.cart})),m=Object(l.b)();return r.a.createElement("div",{className:"card px-1 py-1"},r.a.createElement(u.b,{to:"/products/".concat(n)},r.a.createElement("img",{alt:a,src:"/images/".concat(t)}),r.a.createElement("p",null,a)),r.a.createElement("div",null,r.a.createElement("div",null,o," ",function(e,t){return 1===t?e:e+"s"}("item",o)," in stock"),r.a.createElement("span",null,"$",c)),r.a.createElement("button",{onClick:function(){var t=s.find((function(e){return e._id===n}));t?(m({type:"UPDATE_CART_QUANITY",_id:n,purchaseQuanity:parseInt(t.purchaseQuanity)+1}),p("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuanity:parseInt(t.purchaseQuanity)+1}))):(m({type:"ADD_TO_CART",product:Object(i.a)(Object(i.a)({},e),{},{purchaseQuanity:1})}),p("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuanity:1})))}},"Add to cart"))},v=a(24),y=Object(m.gql)(f||(f=Object(v.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),j=(Object(m.gql)(E||(E=Object(v.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(m.gql)(b||(b=Object(v.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),w=Object(m.gql)(g||(g=Object(v.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),_=Object(m.gql)(h||(h=Object(v.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),T=a(57),k=a.n(T);var N=function(){var e=Object(l.c)((function(e){return e.currentCategory})),t=Object(l.c)((function(e){return e.products})),a=Object(l.b)(),c=Object(m.useQuery)(y),o=c.loading,i=c.data;return Object(n.useEffect)((function(){i?(a({type:"UPDATE_PRODUCTS",products:i.products}),i.products.forEach((function(e){p("products","put",e)}))):o||p("products","get").then((function(e){a({type:"UPDATE_PRODUCTS",products:e})}))}),[i,o,a]),r.a.createElement("div",{className:"my-2"},r.a.createElement("h2",null,"Our Products:"),t.length?r.a.createElement("div",{className:"flex-row"},(e?t.filter((function(t){return t.category._id===e})):t).map((function(e){return r.a.createElement(O,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity})}))):r.a.createElement("h3",null,"You haven't added any products yet!"),o?r.a.createElement("img",{src:k.a,alt:"loading"}):null)};var C=function(){var e=Object(l.c)((function(e){return e.categories})),t=Object(l.b)(),a=Object(m.useQuery)(j),c=a.loading,o=a.data;return Object(n.useEffect)((function(){o?(t({type:"UPDATE_CATEGORIES",categories:o.categories}),o.categories.forEach((function(e){p("categories","put",e)}))):c||p("categories","get").then((function(e){t({type:"UPDATE_CATEGORIES",categories:e})}))}),[o,c,t]),r.a.createElement("div",null,r.a.createElement("h2",null,"Choose a Category:"),e.map((function(e){return r.a.createElement("button",{key:e._id,onClick:function(){var a;a=e._id,t({type:"UPDATE_CURRENT_CATEGORY",currentCategory:a})}},e.name)})))},A=a(21),x=a.n(A),S=a(27),R=a(26),D=a(20),P=function(e){var t=e.item,a=Object(l.b)();return r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",null,r.a.createElement("img",{src:"/images/".concat(t.image),alt:""})),r.a.createElement("div",null,r.a.createElement("div",null,t.name,", $",t.price),r.a.createElement("div",null,r.a.createElement("span",null,"Qty:"),r.a.createElement("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;0===n?(a({type:"REMOVE_FROM_CART",_id:t._id}),p("cart","delete",Object(i.a)({},t))):(a({type:"UPDATE_CART_QUANITY",_id:t._id,purchaseQuantity:parseInt(n)}),p("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(n)})))}}),r.a.createElement("span",{role:"img","aria-label":"trash",onClick:function(e){a({type:"REMOVE_FROM_CART",_id:e._id}),p("cart","delete",Object(i.a)({},e))}(t)},"\ud83d\uddd1\ufe0f"))))},U=a(87),Q=a(88),I=a(71),$=a.n(I),q=new(function(){function e(){Object(U.a)(this,e)}return Object(Q.a)(e,[{key:"getProfile",value:function(){return $()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return $()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),F=a(89),L=(a(120),Object(F.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),M=function(){var e=Object(l.c)((function(e){return e.cart})),t=Object(l.c)((function(e){return e.cartOpen})),a=Object(l.b)(),c=Object(m.useLazyQuery)(_),o=Object(D.a)(c,2),i=o[0],u=o[1].data;function s(){a({type:"TOGGLE_CART",payload:void 0})}return Object(n.useEffect)((function(){function t(){return(t=Object(R.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("cart","get");case 2:t=e.sent,a({type:"ADD_MULTIPLE_TO_CART",payload:{products:Object(S.a)(t)}});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.length||function(){t.apply(this,arguments)}()}),[e.length,a]),Object(n.useEffect)((function(){u&&L.then((function(e){e.redirectToChekout({sessionId:u.checkout.session})}))}),[u]),t?r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"close",onClick:s},"[close]"),r.a.createElement("h2",null,"Shopping Cart"),r.a.createElement("div",null,r.a.createElement(P,{item:{name:"Camera",image:"camera.jpg",price:5,purchaseQuantity:3}}),r.a.createElement(P,{item:{name:"Soap",image:"soap.jpg",price:6,purchaseQuantity:4}}),r.a.createElement("div",{className:"flex-row space-between"},r.a.createElement("strong",null,"Total: $",function(){var t=0;return e.forEach((function(e){t+=e.price*e.purchaseQuantity})),t.toFixed(2)}()),q.loggedIn()?r.a.createElement("button",{onClick:function(){var t=[];e.forEach((function(e){for(var a=0;a<e.purchaseQuantity;a++)t.push(e._id)})),i({variables:{products:t}})}},"Checkout"):r.a.createElement("span",null,"(log in to check out)")))):r.a.createElement("div",{className:"cart-closed",onClick:s},r.a.createElement("span",{role:"img","aria-label":"trash"},"\ud83d\uded2"))},G=a(91),W={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_PRODUCTS":return Object(i.a)(Object(i.a)({},e),{},{products:Object(S.a)(t.products)});case"UPDATE_CATEGORIES":return Object(i.a)(Object(i.a)({},e),{},{categories:Object(S.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(i.a)(Object(i.a)({},e),{},{currentCategory:t.currentCategory});case"ADD_TO_CART":return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(S.a)(e.cart),[t.product])});case"ADD_MULTIPLE_TO_CART":return Object(i.a)(Object(i.a)({},e),{},{cart:[].concat(Object(S.a)(e.cart),Object(S.a)(t.payload.products))});case"REMOVE_FROM_CART":var a=e.cart.filter((function(e){return e._id!==t._id}));return Object(i.a)(Object(i.a)({},e),{},{cartOpen:a.length>0,cart:a});case"UPDATE_CART_QUANITY":return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuanity=t.purchaseQuanity),e}))});case"CLEAR_CART":return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!1,cart:[]});case"TOGGLE_CART":return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!e.cartOpen});default:return e}},B=Object(G.a)(Y);console.log(B);var H=B,V=function(){return console.log("Initial State: ".concat(H.getState())),r.a.createElement("div",{className:"container"},r.a.createElement(C,null),r.a.createElement(N,null),r.a.createElement(M,null))};var z=function(){var e=Object(l.c)((function(e){return e.products})),t=Object(l.c)((function(e){return e.cart})),a=Object(l.b)(),c=Object(s.f)().id,o=Object(n.useState)({}),d=Object(D.a)(o,2),f=d[0],E=d[1],b=Object(m.useQuery)(y),g=b.loading,h=b.data;return Object(n.useEffect)((function(){e.length?E(e.find((function(e){return e._id===c}))):h?(a({type:"UPDATE_PRODUCTS",products:h.products}),h.products.foreach((function(e){p("products","put",e)}))):g||p("products","get").then((function(e){a({type:"UPDATE_PRODUCTS",products:e})}))}),[e,h,g,a,c]),r.a.createElement(r.a.Fragment,null,f?r.a.createElement("div",{className:"container my-1"},r.a.createElement(u.b,{to:"/"},"\u2190 Back to Products"),r.a.createElement("h2",null,f.name),r.a.createElement("p",null,f.description),r.a.createElement("p",null,r.a.createElement("strong",null,"Price:"),"$",f.price," ",r.a.createElement("button",{onClick:function(){var e=t.find((function(e){return e._id===c}));e?(a({type:"UPDATE_CART_QUANITY",_id:c,purchaseQuanity:parseInt(e.purchaseQuanity)+1}),p("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuanity:parseInt(e.purchaseQuanity)+1}))):(a({type:"ADD_TO_CART",product:Object(i.a)(Object(i.a)({},f),{},{purchaseQuanity:1})}),p("cart","put",Object(i.a)(Object(i.a)({},f),{},{purchaseQuanity:1})))}},"Add to Cart"),r.a.createElement("button",{disabled:!t.find((function(e){return e._id===f._id})),onClick:function(){a({type:"REMOVE_FROM_CART",_id:f._id}),p("cart","delete",Object(i.a)({},f))}},"Remove from Cart")),r.a.createElement("img",{src:"/images/".concat(f.image),alt:f.name})):null,g?r.a.createElement("img",{src:k.a,alt:"loading"}):null,r.a.createElement(M,null))};var J,K,X,Z=function(e){var t=e.children;return r.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"}},t)},ee=function(){return r.a.createElement("div",null,r.a.createElement(Z,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))},te=a(36),ae=Object(m.gql)(J||(J=Object(v.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),ne=Object(m.gql)(K||(K=Object(v.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),re=Object(m.gql)(X||(X=Object(v.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var ce=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(D.a)(t,2),c=a[0],o=a[1],l=Object(m.useMutation)(ae),s=Object(D.a)(l,2),d=s[0],p=s[1].error,f=function(){var e=Object(R.a)(x.a.mark((function e(t){var a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{email:c.email,password:c.password}});case 4:a=e.sent,n=a.data.login.token,q.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.target,a=t.name,n=t.value;o(Object(i.a)(Object(i.a)({},c),{},Object(te.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(u.b,{to:"/signup"},"\u2190 Go to Signup"),r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:f},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:E})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:E})),p?r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var oe=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(D.a)(t,2),c=a[0],o=a[1],l=Object(m.useMutation)(re),s=Object(D.a)(l,1)[0],d=function(){var e=Object(R.a)(x.a.mark((function e(t){var a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s({variables:{email:c.email,password:c.password,firstName:c.firstName,lastName:c.lastName}});case 3:a=e.sent,n=a.data.addUser.token,q.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.target,a=t.name,n=t.value;o(Object(i.a)(Object(i.a)({},c),{},Object(te.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(u.b,{to:"/login"},"\u2190 Go to Login"),r.a.createElement("h2",null,"Signup"),r.a.createElement("form",{onSubmit:d},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"firstName"},"First Name:"),r.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:p})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),r.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:p})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:p})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:p})),r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var le=function(){return r.a.createElement("header",{className:"flex-row px-1"},r.a.createElement("h1",null,r.a.createElement(u.b,{to:"/"},r.a.createElement("span",{role:"img","aria-label":"shopping bag"},"\ud83d\udecd\ufe0f"),"-Shop-Shop")),r.a.createElement("nav",null,q.loggedIn()?r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(u.b,{to:"/orderHistory"},"Order History")),r.a.createElement("li",{className:"mx-1"},r.a.createElement("a",{href:"/",onClick:function(){return q.logout()}},"Logout"))):r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(u.b,{to:"/signup"},"Signup")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(u.b,{to:"/login"},"Login")))))};var ie=function(){var e=Object(m.useMutation)(ne),t=Object(D.a)(e,1)[0];return Object(n.useEffect)((function(){function e(){return(e=Object(R.a)(x.a.mark((function e(){var a,n,r,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("cart","get");case 2:if(a=e.sent,!(n=a.map((function(e){return e._id}))).length){e.next=12;break}return e.next=7,t({variables:{products:n}});case 7:r=e.sent,c=r.data,c.addOrder.products.forEach((function(e){p("cart","delete",e)})),setTimeout(window.location.assign("/"),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),r.a.createElement("div",null,r.a.createElement(Z,null,r.a.createElement("h1",null,"Success!"),r.a.createElement("h2",null,"Thank you for your  purchase!"),r.a.createElement("h2",null,"You will now be redirected to the homepage")))};var ue=function(){var e,t=Object(m.useQuery)(w).data;return t&&(e=t.user),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container my-1"},r.a.createElement(u.b,{to:"/"},"\u2190 Back to Products"),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Order History for ",e.firstName," ",e.lastName),e.orders.map((function(e){return r.a.createElement("div",{key:e._id,className:"my-2"},r.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),r.a.createElement("div",{className:"flex-row"},e.products.map((function(e,t){var a=e._id,n=e.image,c=e.name,o=e.price;return r.a.createElement("div",{key:t,className:"card px-1 py-1"},r.a.createElement(u.b,{to:"/products/".concat(a)},r.a.createElement("img",{alt:c,src:"/images/".concat(n)}),r.a.createElement("p",null,c)),r.a.createElement("div",null,r.a.createElement("span",null,"$",o)))}))))}))):null))},se=Object(m.createHttpLink)({uri:"/graphql"}),me=Object(d.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(i.a)(Object(i.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),de=new m.ApolloClient({link:me.concat(se),cache:new m.InMemoryCache});var pe=function(){return r.a.createElement(m.ApolloProvider,{client:de},r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(le,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:V}),r.a.createElement(s.a,{exact:!0,path:"/login",component:ce}),r.a.createElement(s.a,{exact:!0,path:"/signup",component:oe}),r.a.createElement(s.a,{exact:!0,path:"/orderHistory",component:ue}),r.a.createElement(s.a,{exact:!0,path:"/products/:id",component:z}),r.a.createElement(s.a,{exact:!0,path:"/success",component:ie}),r.a.createElement(s.a,{component:ee})))))},fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ee(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:H},r.a.createElement(pe,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");fe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ee(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ee(t,e)}))}}()},57:function(e,t,a){e.exports=a.p+"static/media/spinner.ab497855.gif"}},[[102,1,2]]]);
//# sourceMappingURL=main.98d44a5c.chunk.js.map