var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,i=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&o(e,t,a[t]);if(l)for(var t of l(a))n.call(a,t)&&o(e,t,a[t]);return e},r=(e,l)=>a(e,t(l));import{d as c,g as d,a4 as p,ax as m,Q as u,ay as f,av as b,a6 as g,p as h,k as v,r as y,o as x,c as k,a as w,F as j,b as O,t as V,al as C,l as P}from"./index.1be12e4a.js";import{c as _,a as D}from"./index.edc94498.js";import"./editor.worker.3eb73e22.js";import"./dom.1228cadc.js";var T=c({name:"ComponentsPanel",setup(){const e=d(""),a=d([]),t=p((()=>m.components.show)),l=p((()=>{const e=u(D),t={type:"all",name:"全部",icon:"v-icon-app"};return e.forEach((e=>{e.expand="",e.data.length>1?e.data.unshift(r(i({},t),{data:e.data.flatMap((e=>e.data))})):(e.expand="all",Object.assign(e.data[0],t))})),e.push({type:"favorite",name:"收藏",icon:"v-icon-favorite",data:[r(i({},t),{data:a.value})],expand:"all"}),e}));return{searchText:e,favoriteComs:a,visiblePanel:t,changeVisible:()=>{m.setPanelState({type:f.components,value:!t.value})},categories:l,toAddCom:(e,a)=>{if(a){const{pageConfig:a}=b,t=_(e);t.attr.x=Math.floor((a.width-t.attr.w)/2),t.attr.y=Math.floor((a.height-t.attr.h)/2),b.addCom(t)}else g.warning("正在开发中。。。")},dragStart:(e,a)=>{e.dataTransfer.setData("text",a);const t=e.target.childNodes[0];e.dataTransfer.setDragImage(t,t.clientWidth/2,t.clientHeight/2)}}}});const S=P();h("data-v-658714d7");const I={class:"components-panel"},M={class:"panel-title"},U=w("span",{class:"panel-text"},"组件列表",-1),A={class:"collpase-hd-text"},E={class:"menu-list"},z={class:"menu-item-text"},F={key:0,class:"favorite-empty"},H={class:"com-search-wp"};v();const N=S(((e,a,t,l,s,n)=>{const o=y("el-tooltip"),i=y("el-collapse-item"),r=y("el-collapse"),c=y("el-tab-pane"),d=y("el-tabs"),p=y("el-input"),m=y("el-aside");return x(),k(m,{width:"auto",class:["component-panel-wp",{"--hide":!e.visiblePanel}]},{default:S((()=>[w("div",I,[w("div",M,[U,w("i",{class:"v-icon-back close-btn",onClick:a[1]||(a[1]=(...a)=>e.changeVisible&&e.changeVisible(...a))})]),w(d,{"tab-position":"left"},{default:S((()=>[(x(!0),k(j,null,O(e.categories,(a=>(x(),k(c,{key:a.type},{label:S((()=>[w(o,{content:a.name,placement:"left",effect:"blue","open-delay":500,enterable:!1},{default:S((()=>[w("i",{class:["com-tab-icon",a.icon]},null,2)])),_:2},1032,["content"])])),default:S((()=>[w(r,{modelValue:a.expand,"onUpdate:modelValue":e=>a.expand=e,accordion:""},{default:S((()=>[(x(!0),k(j,null,O(a.data,(t=>(x(),k(i,{key:t.type,name:t.type},{title:S((()=>[w("i",{class:["collpase-hd-icon",t.icon]},null,2),w("span",A,V(t.name+" ("+t.data.length+")"),1)])),default:S((()=>[w("ul",E,[(x(!0),k(j,null,O(t.data,(a=>(x(),k("li",{key:a.name,title:a.alias,draggable:a.used,class:"menu-item",onDragstart:t=>e.dragStart(t,a.name),onClick:t=>e.toAddCom(a.name,a.used)},[w("div",{class:"menu-item-img",style:`background-image: url(${a.img});`},null,4),w("p",z,V(a.alias),1)],40,["title","draggable","onDragstart","onClick"])))),128))]),0===t.data.length?(x(),k(j,{key:0},["favorite"===a.type?(x(),k("div",F," 没有收藏组件 ")):C("",!0)],64)):C("",!0)])),_:2},1032,["name"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1024)))),128))])),_:1}),w("div",H,[w(p,{modelValue:e.searchText,"onUpdate:modelValue":a[2]||(a[2]=a=>e.searchText=a),placeholder:"搜索组件",size:"small",clearable:""},null,8,["modelValue"])])])])),_:1},8,["class"])}));T.render=N,T.__scopeId="data-v-658714d7";export default T;
