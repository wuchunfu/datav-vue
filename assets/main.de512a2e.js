var l=Object.defineProperty,E=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var s=(e,a,t)=>a in e?l(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,u=(e,a)=>{for(var t in a||(a={}))v.call(a,t)&&s(e,t,a[t]);if(n)for(var t of n(a))f.call(a,t)&&s(e,t,a[t]);return e},p=(e,a)=>E(e,h(a));import{g as c,a as A,_ as o,U as j,A as I,i as D,N as T,G as P,D as L,s as R}from"./App.7eee7745.js";import{c as g,a as O,b as V}from"./vendor.0227b33d.js";const b=[{path:"/",name:"Home",redirect:"/project",component:()=>o(()=>import("./index.8018150a.js"),["assets/index.8018150a.js","assets/index.28b0a033.css","assets/vendor.0227b33d.js","assets/App.7eee7745.js","assets/App.0e26ef44.css","assets/arrow-down.e8e19c05.js","assets/document.9d46843b.js","assets/tutorial.7d6ae8b8.js","assets/my-com.837b33a8.js","assets/my-data.54947e4c.js","assets/layer.08350e30.js"]),children:[{path:"project",name:"MyProject",component:()=>o(()=>import("./index.0e0c62fd.js"),["assets/index.0e0c62fd.js","assets/index.83f22c5f.css","assets/vendor.0227b33d.js","assets/App.7eee7745.js","assets/App.0e26ef44.css","assets/project.9690eea6.js","assets/dom.2deab946.js","assets/warning.12194cda.js","assets/plus.6e316a1f.js","assets/edit.974f2969.js","assets/delete.c19c0b0b.js","assets/arrow-down.e8e19c05.js","assets/search.24231222.js","assets/copy.09f615c6.js","assets/publish-screen.63170899.js","assets/publish-screen.df6080ef.css","assets/release.0dda30de.js"]),meta:{title:"\u6211\u7684\u53EF\u89C6\u5316"}},{path:"data",name:"MyData",component:()=>o(()=>import("./index.0ef47fae.js"),["assets/index.0ef47fae.js","assets/App.7eee7745.js","assets/App.0e26ef44.css","assets/vendor.0227b33d.js","assets/my-data.54947e4c.js"]),meta:{title:"\u6211\u7684\u6570\u636E"}},{path:"com",name:"MyCom",component:()=>o(()=>import("./index.0d8f9087.js"),["assets/index.0d8f9087.js","assets/App.7eee7745.js","assets/App.0e26ef44.css","assets/vendor.0227b33d.js","assets/my-com.837b33a8.js"]),meta:{title:"\u6211\u7684\u7EC4\u4EF6"}},{path:"case",name:"MyCase",component:()=>o(()=>import("./index.9a2181de.js"),["assets/index.9a2181de.js","assets/App.7eee7745.js","assets/App.0e26ef44.css","assets/vendor.0227b33d.js","assets/tutorial.7d6ae8b8.js"]),meta:{title:"\u6559\u7A0B"}}]}],y=[{path:"/login",name:"Login",component:()=>o(()=>import("./index.4ceb4953.js"),["assets/index.4ceb4953.js","assets/index.6349c3e8.css","assets/App.7eee7745.js","assets/App.0e26ef44.css","assets/vendor.0227b33d.js"]),meta:{title:"\u767B\u5F55"}},...b,{path:"/create-screen",name:"CreateScreen",component:()=>o(()=>import("./create-screen.d66bb8d9.js"),["assets/create-screen.d66bb8d9.js","assets/create-screen.fc5a2777.css","assets/vendor.0227b33d.js","assets/project.9690eea6.js","assets/App.7eee7745.js","assets/App.0e26ef44.css","assets/templates.7b09f335.js","assets/arrow-left.5ce8a1eb.js","assets/arrow-right.7eeeb44b.js","assets/plus.6e316a1f.js","assets/back.29a5db48.js"]),meta:{title:"\u521B\u5EFA"}},{path:"/admin/screen/:projectId",name:"ScreenEditor",props:!0,component:()=>o(()=>import("./index.10f5b09d.js").then(function(e){return e.i}),["assets/index.10f5b09d.js","assets/index.465d979b.css","assets/App.7eee7745.js","assets/App.0e26ef44.css","assets/vendor.0227b33d.js","assets/templates.7b09f335.js"]),meta:{title:"\u7F16\u8F91\u5668"}},{path:"/screen/preview/:screenId",name:"Preview",props:!0,component:()=>o(()=>import("./index.0a8d08f4.js"),["assets/index.0a8d08f4.js","assets/index.4531aeb4.css","assets/vendor.0227b33d.js","assets/App.7eee7745.js","assets/App.0e26ef44.css","assets/dom.2deab946.js","assets/screen.c0ef26c7.js"])},{path:"/:catchAll(.*)*",name:"NotFound",component:()=>o(()=>import("./index.a7c49360.js"),["assets/index.a7c49360.js","assets/index.fd9b7851.css","assets/vendor.0227b33d.js","assets/App.7eee7745.js","assets/App.0e26ef44.css"]),meta:{title:"\u627E\u4E0D\u5230\u9875\u9762"}}],m=g({history:O(),routes:y}),C=["/login","/auth-redirect","/dev"];m.beforeEach(async(e,a,t)=>{if(e.meta&&e.meta.title?document.title=`${e.meta.title} | ${c.title}`:document.title=c.title,A())if(e.path==="/login")t({path:"/"});else{const{role:i,getUserInfo:_,resetToken:d}=j();if(i.value>0)t();else try{await _(),t(p(u({},e),{replace:!0}))}catch{d(),t(`/login?redirect=${e.path}`)}}else C.some(i=>e.path.startsWith(i))?t():t(`/login?redirect=${e.path}`)});const r=V(I);r.use(D);r.use(T);r.use(P);r.use(L);r.use(R);r.use(m);r.mount("#app");
