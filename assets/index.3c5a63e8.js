import{S as e,m as t,n as r,q as a,s as n,v as o,x as s,y as l,M as i,z as c,A as u,B as d,C as p,D as f,E as v,G as g,H as h,I as m,J as y,K as b,L as j,N as w,O as P,P as _,V as E,Q as C,R as D,T as k,W as O,X as T,Y as I,Z as G,_ as R,$ as S,a0 as A,a1 as V,a2 as x,d as U,a3 as J,g as L,a4 as N,a5 as M,a6 as B,a7 as $,p as z,k as q,r as K,o as Y,c as F,a as H,a8 as Q,a9 as W,t as X,l as Z,e as ee,aa as te,ab as re,ac as ae,ad as ne,ae as oe,af as se,ag as le,ah as ie,ai as ce,aj as ue,F as de,b as pe,i as fe,ak as ve,al as ge,am as he}from"./index.1be12e4a.js";import{P as me,a as ye}from"./project.ec6ffcb1.js";import{a as be,r as je}from"./dom.1228cadc.js";import{c as we,d as Pe}from"./images.a8ceee1d.js";import"./editor.worker.3eb73e22.js";function _e(e,t){for(var r=-1,a=null==e?0:e.length,n=Array(a);++r<a;)n[r]=t(e[r],r,e);return n}var Ee=e?e.prototype:void 0,Ce=Ee?Ee.toString:void 0;function De(e){if("string"==typeof e)return e;if(t(e))return _e(e,De)+"";if(r(e))return Ce?Ce.call(e):"";var a=e+"";return"0"==a&&1/e==-Infinity?"-0":a}function ke(e){return e}function Oe(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}var Te=Date.now;var Ie,Ge,Re,Se=(Ie=a?function(e,t){return a(e,"toString",{configurable:!0,enumerable:!1,value:(r=t,function(){return r}),writable:!0});var r}:ke,Ge=0,Re=0,function(){var e=Te(),t=16-(e-Re);if(Re=e,t>0){if(++Ge>=800)return arguments[0]}else Ge=0;return Ie.apply(void 0,arguments)}),Ae=Math.max;function Ve(e,t,r){if(!n(r))return!1;var a=typeof t;return!!("number"==a?o(r)&&s(t,r.length):"string"==a&&t in r)&&l(r[t],e)}var xe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ue=/^\w*$/;function Je(e,a){if(t(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!r(e))||(Ue.test(e)||!xe.test(e)||null!=a&&e in Object(a))}function Le(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var a=arguments,n=t?t.apply(this,a):a[0],o=r.cache;if(o.has(n))return o.get(n);var s=e.apply(this,a);return r.cache=o.set(n,s)||o,s};return r.cache=new(Le.Cache||i),r}Le.Cache=i;var Ne=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Me=/\\(\\)?/g,Be=function(e){var t=Le(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ne,(function(e,r,a,n){t.push(a?n.replace(Me,"$1"):r||e)})),t}));function $e(e,r){return t(e)?e:Je(e,r)?[e]:Be(function(e){return null==e?"":De(e)}(e))}function ze(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}function qe(e,t){for(var r=0,a=(t=$e(t,e)).length;null!=e&&r<a;)e=e[ze(t[r++])];return r&&r==a?e:void 0}var Ke=e?e.isConcatSpreadable:void 0;function Ye(e){return t(e)||c(e)||!!(Ke&&e&&e[Ke])}function Fe(e,t,r,a,n){var o=-1,s=e.length;for(r||(r=Ye),n||(n=[]);++o<s;){var l=e[o];t>0&&r(l)?t>1?Fe(l,t-1,r,a,n):u(n,l):a||(n[n.length]=l)}return n}function He(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new i;++t<r;)this.add(e[t])}function Qe(e,t){for(var r=-1,a=null==e?0:e.length;++r<a;)if(t(e[r],r,e))return!0;return!1}He.prototype.add=He.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},He.prototype.has=function(e){return this.__data__.has(e)};function We(e,t,r,a,n,o){var s=1&r,l=e.length,i=t.length;if(l!=i&&!(s&&i>l))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var d=-1,p=!0,f=2&r?new He:void 0;for(o.set(e,t),o.set(t,e);++d<l;){var v=e[d],g=t[d];if(a)var h=s?a(g,v,d,t,e,o):a(v,g,d,e,t,o);if(void 0!==h){if(h)continue;p=!1;break}if(f){if(!Qe(t,(function(e,t){if(s=t,!f.has(s)&&(v===e||n(v,e,r,a,o)))return f.push(t);var s}))){p=!1;break}}else if(v!==g&&!n(v,g,r,a,o)){p=!1;break}}return o.delete(e),o.delete(t),p}function Xe(e){var t=-1,r=Array(e.size);return e.forEach((function(e,a){r[++t]=[a,e]})),r}function Ze(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var et=e?e.prototype:void 0,tt=et?et.valueOf:void 0;var rt=Object.prototype.hasOwnProperty;var at="[object Object]",nt=Object.prototype.hasOwnProperty;function ot(e,r,a,n,o,s){var i=t(e),c=t(r),u=i?"[object Array]":f(e),m=c?"[object Array]":f(r),y=(u="[object Arguments]"==u?at:u)==at,b=(m="[object Arguments]"==m?at:m)==at,j=u==m;if(j&&v(e)){if(!v(r))return!1;i=!0,y=!1}if(j&&!y)return s||(s=new g),i||h(e)?We(e,r,a,n,o,s):function(e,t,r,a,n,o,s){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new d(e),new d(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return l(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var i=Xe;case"[object Set]":var c=1&a;if(i||(i=Ze),e.size!=t.size&&!c)return!1;var u=s.get(e);if(u)return u==t;a|=2,s.set(e,t);var p=We(i(e),i(t),a,n,o,s);return s.delete(e),p;case"[object Symbol]":if(tt)return tt.call(e)==tt.call(t)}return!1}(e,r,u,a,n,o,s);if(!(1&a)){var w=y&&nt.call(e,"__wrapped__"),P=b&&nt.call(r,"__wrapped__");if(w||P){var _=w?e.value():e,E=P?r.value():r;return s||(s=new g),o(_,E,a,n,s)}}return!!j&&(s||(s=new g),function(e,t,r,a,n,o){var s=1&r,l=p(e),i=l.length;if(i!=p(t).length&&!s)return!1;for(var c=i;c--;){var u=l[c];if(!(s?u in t:rt.call(t,u)))return!1}var d=o.get(e),f=o.get(t);if(d&&f)return d==t&&f==e;var v=!0;o.set(e,t),o.set(t,e);for(var g=s;++c<i;){var h=e[u=l[c]],m=t[u];if(a)var y=s?a(m,h,u,t,e,o):a(h,m,u,e,t,o);if(!(void 0===y?h===m||n(h,m,r,a,o):y)){v=!1;break}g||(g="constructor"==u)}if(v&&!g){var b=e.constructor,j=t.constructor;b==j||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof j&&j instanceof j||(v=!1)}return o.delete(e),o.delete(t),v}(e,r,a,n,o,s))}function st(e,t,r,a,n){return e===t||(null==e||null==t||!m(e)&&!m(t)?e!=e&&t!=t:ot(e,t,r,a,st,n))}function lt(e){return e==e&&!n(e)}function it(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}}function ct(e){var t=function(e){for(var t=y(e),r=t.length;r--;){var a=t[r],n=e[a];t[r]=[a,n,lt(n)]}return t}(e);return 1==t.length&&t[0][2]?it(t[0][0],t[0][1]):function(r){return r===e||function(e,t,r,a){var n=r.length,o=n,s=!a;if(null==e)return!o;for(e=Object(e);n--;){var l=r[n];if(s&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++n<o;){var i=(l=r[n])[0],c=e[i],u=l[1];if(s&&l[2]){if(void 0===c&&!(i in e))return!1}else{var d=new g;if(a)var p=a(c,u,i,e,t,d);if(!(void 0===p?st(u,c,3,a,d):p))return!1}}return!0}(r,e,t)}}function ut(e,t){return null!=e&&t in Object(e)}function dt(e,r){return null!=e&&function(e,r,a){for(var n=-1,o=(r=$e(r,e)).length,l=!1;++n<o;){var i=ze(r[n]);if(!(l=null!=e&&a(e,i)))break;e=e[i]}return l||++n!=o?l:!!(o=null==e?0:e.length)&&b(o)&&s(i,o)&&(t(e)||c(e))}(e,r,ut)}function pt(e,t){return Je(e)&&lt(t)?it(ze(e),t):function(r){var a=function(e,t,r){var a=null==e?void 0:qe(e,t);return void 0===a?r:a}(r,e);return void 0===a&&a===t?dt(r,e):st(t,a,3)}}function ft(e){return Je(e)?(t=ze(e),function(e){return null==e?void 0:e[t]}):function(e){return function(t){return qe(t,e)}}(e);var t}function vt(e){return"function"==typeof e?e:null==e?ke:"object"==typeof e?t(e)?pt(e[0],e[1]):ct(e):ft(e)}var gt,ht=function(e,t,r){for(var a=-1,n=Object(e),o=r(e),s=o.length;s--;){var l=o[gt?s:++a];if(!1===t(n[l],l,n))break}return e};var mt=function(e,t){return function(r,a){if(null==r)return r;if(!o(r))return e(r,a);for(var n=r.length,s=t?n:-1,l=Object(r);(t?s--:++s<n)&&!1!==a(l[s],s,l););return r}}((function(e,t){return e&&ht(e,t,y)}));function yt(e,t){if(e!==t){var a=void 0!==e,n=null===e,o=e==e,s=r(e),l=void 0!==t,i=null===t,c=t==t,u=r(t);if(!i&&!u&&!s&&e>t||s&&l&&c&&!i&&!u||n&&l&&c||!a&&c||!o)return 1;if(!n&&!s&&!u&&e<t||u&&a&&o&&!n&&!s||i&&a&&o||!l&&o||!c)return-1}return 0}function bt(e,r,a){r=r.length?_e(r,(function(e){return t(e)?function(t){return qe(t,1===e.length?e[0]:e)}:e})):[ke];var n=-1;return r=_e(r,j(vt)),function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(function(e,t){var r=-1,a=o(e)?Array(e.length):[];return mt(e,(function(e,n,o){a[++r]=t(e,n,o)})),a}(e,(function(e,t,a){return{criteria:_e(r,(function(t){return t(e)})),index:++n,value:e}})),(function(e,t){return function(e,t,r){for(var a=-1,n=e.criteria,o=t.criteria,s=n.length,l=r.length;++a<s;){var i=yt(n[a],o[a]);if(i)return a>=l?i:i*("desc"==r[a]?-1:1)}return e.index-t.index}(e,t,a)}))}var jt=function(e,t){return Se(function(e,t,r){return t=Ae(void 0===t?e.length-1:t,0),function(){for(var a=arguments,n=-1,o=Ae(a.length-t,0),s=Array(o);++n<o;)s[n]=a[t+n];n=-1;for(var l=Array(t+1);++n<t;)l[n]=a[n];return l[t]=r(s),Oe(e,this,l)}}(e,t,ke),e+"")}((function(e,t){if(null==e)return[];var r=t.length;return r>1&&Ve(e,t[0],t[1])?t=[]:r>2&&Ve(t[0],t[1],t[2])&&(t=[t[0]]),bt(e,Fe(t,1),[])})),wt=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,_t=(e,t,r,a)=>{for(var n,o=a>1?void 0:a?Pt(t,r):t,s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a?n(t,r,o):n(o))||o);return a&&o&&wt(t,r,o),o};x.rawError=!0;let Et=class extends E{constructor(){super(...arguments),this.allGroups=[]}get group(){const e=this.allGroups.flatMap((e=>e.children));return new me(-1,"全部应用",e)}get ungroup(){const e=this.allGroups.find((e=>e.type===ye.ungroup));return e||new me(0,"未分组",[])}get groups(){return this.allGroups.filter((e=>e.type===ye.group))}SET_PROJECTS(e){this.allGroups=e}DELETE_PROJECT(e){const t=this.allGroups.find((t=>t.id===e.gid));t&&(t.children=t.children.filter((t=>t.id!==e.pid)))}UPDATE_PROJECT_NAME(e){const t=this.allGroups.find((t=>t.id===e.id));t&&(t.name=e.newName)}MOVE_PROJECT(e){const{pid:t,fromId:r,toId:a}=e,n=this.allGroups.find((e=>e.id===r)),o=this.allGroups.find((e=>e.id===a));if(n&&o){const e=n.children.findIndex((e=>e.id===t)),r=n.children.splice(e,1)[0];r.groupId=a,o.children.push(r)}}COPY_PROJECT(e){const t=this.allGroups.find((t=>t.id===e.gid));if(t){const r=t.children.find((t=>t.id===e.pid)),a=C(r);a.id=Math.round(1e3*Math.random()),a.name+="_copy",t.children.push(a)}}CREATE_PROJECT_GROUP(e){const t=new me(e.id,e.name,[]);t.type=ye.group,this.allGroups.unshift(t)}DELETE_PROJECT_GROUP(e){const t=this.allGroups.findIndex((t=>t.id===e)),r=this.allGroups.find((e=>e.type===ye.ungroup));if(t>-1&&r){const[e]=this.allGroups.splice(t,1);e.children.forEach((e=>{e.groupId=r.id,r.children.push(e)}))}}async getProjects(){try{const e=await D();if(0!==e.data.code)throw Error(e.data.message);{const t=e.data.data||[],r=new me(0,"未分组",[]);t.forEach((e=>{e.children.forEach((t=>{e.type===ye.ungroup?(t.groupId=0,r.children.push(t)):t.groupId=e.id}))})),this.SET_PROJECTS([r,...t.filter((e=>e.type===ye.group))])}}catch(e){throw e}}async deleteProject(e){try{const t=await k(e.pid);if(0!==t.data.code)throw Error(t.data.message);this.DELETE_PROJECT(e)}catch(t){throw t}}async updateProjectName(e){try{const t=await O(e.id,e.newName);if(0!==t.data.code)throw Error(t.data.message)}catch(t){throw t}}async moveProject(e){try{const{pid:t,fromId:r,toId:a}=e,n=await T(t,r,a);if(0!==n.data.code)throw Error(n.data.message);this.MOVE_PROJECT(e)}catch(t){throw t}}async copyProject(e){try{const t=await I(e.pid);if(0!==t.data.code)throw Error(t.data.message);this.COPY_PROJECT(e)}catch(t){throw t}}async createProjectGroup(e){try{const{data:t}=await G({name:e});if(0!==t.code)throw Error(t.message);this.CREATE_PROJECT_GROUP({id:t.data,name:e})}catch(t){throw t}}async deleteProjectGroup(e){try{const t=await R(e);if(0!==t.data.code)throw Error(t.data.message);this.DELETE_PROJECT_GROUP(e)}catch(t){throw t}}async updateProjectGroupName(e){try{const t=await S(e.id,e.newName);if(0!==t.data.code)throw Error(t.data.message)}catch(t){throw t}}};_t([A],Et.prototype,"SET_PROJECTS",1),_t([A],Et.prototype,"DELETE_PROJECT",1),_t([A],Et.prototype,"UPDATE_PROJECT_NAME",1),_t([A],Et.prototype,"MOVE_PROJECT",1),_t([A],Et.prototype,"COPY_PROJECT",1),_t([A],Et.prototype,"CREATE_PROJECT_GROUP",1),_t([A],Et.prototype,"DELETE_PROJECT_GROUP",1),_t([V],Et.prototype,"getProjects",1),_t([V],Et.prototype,"deleteProject",1),_t([V],Et.prototype,"updateProjectName",1),_t([V],Et.prototype,"moveProject",1),_t([V],Et.prototype,"copyProject",1),_t([V],Et.prototype,"createProjectGroup",1),_t([V],Et.prototype,"deleteProjectGroup",1),_t([V],Et.prototype,"updateProjectGroupName",1),Et=_t([w({dynamic:!0,store:P,name:"project"})],Et);const Ct=_(Et);var Dt=U({name:"MyScreen",props:{screen:{type:Object,required:!0}},setup(e){const{deleteProject:t,copyProject:r,updateProjectName:a}=Ct,{id:n,name:o,groupId:s,share:l,config:i}=J(e.screen),c=L(o.value),u=L(o.value),d=N((()=>i.value.screenshot?{"background-image":`url(${i.value.screenshot})`}:{"background-image":`url(${we})`,"background-size":"50%","background-position":"center center","background-repeat":"no-repeat",filter:"grayscale(1)",opacity:.07})),p=N((()=>{const e=!!l.value;return{published:e,text:e?"已发布":"未发布"}})),f=M("dragStart"),v=M("dragEnd"),g=M("publish"),h=new Image;h.src=Pe;return{name:o,thumbnail:d,publishState:p,screenName:c,oldScreenName:u,onInputBlur:async()=>{if(c.value)try{await a({id:n.value,newName:c.value}),o.value=c.value}catch(e){B.error(B.format(e))}else c.value=u.value},confirmCopyProject:()=>{r({pid:n.value,gid:s.value})},confirmDeleteProject:()=>{$.confirmAsync(`<b>${c.value}</b> 删除后无法恢复，确认删除？`,(()=>t({pid:n.value,gid:s.value})))},onDragStart:e=>{f();const t=e.dataTransfer;t&&(t.effectAllowed="move",t.setDragImage(h,30,30),t.setData("text",`${n.value},${s.value}`))},onDragEnd:()=>{v()},doPublish:()=>{g(n.value)}}}});const kt=Z();z("data-v-496332e7");const Ot={class:"my-screen"},Tt={class:"screen"},It={class:"screen-info"},Gt={class:"screen-edit"},Rt={class:"screen-button"},St=ee(" 编辑 "),At={class:"main-button"},Vt=H("i",{class:"v-icon-move"},null,-1),xt=H("i",{class:"v-icon-copy"},null,-1),Ut=H("i",{class:"v-icon-delete"},null,-1),Jt=H("i",{class:"v-icon-preview"},null,-1),Lt=H("i",{class:"v-icon-release"},null,-1),Nt={class:"screen-main"},Mt={class:"main-name"},Bt={class:"screen-name-input"},$t=H("i",{class:"v-icon-edit"},null,-1),zt={class:"publish-info"};q();const qt=kt(((e,t,r,a,n,o)=>{const s=K("el-button"),l=K("router-link"),i=K("g-tooltip-popover");return Y(),F("div",Ot,[H("div",Tt,[H("div",It,[H("div",{class:"screen-img",style:e.thumbnail},null,4),H("div",Gt,[H("div",Rt,[H(l,{to:{name:"Screen",params:{projectId:e.screen.id}},target:"_blank",class:"edit-wrap"},{default:kt((()=>[H(s,{type:"primary",size:"small",class:"edit"},{default:kt((()=>[St])),_:1})])),_:1},8,["to"]),H("div",At,[H(i,{content:"移动"},{default:kt((()=>[H("span",{class:"button-span",draggable:"true",onDragstart:t[1]||(t[1]=(...t)=>e.onDragStart&&e.onDragStart(...t)),onDragend:t[2]||(t[2]=(...t)=>e.onDragEnd&&e.onDragEnd(...t))},[Vt],32)])),_:1}),H(i,{content:"复制"},{default:kt((()=>[H("span",{class:"button-span",onClick:t[3]||(t[3]=(...t)=>e.confirmCopyProject&&e.confirmCopyProject(...t))},[xt])])),_:1}),H(i,{content:"删除"},{default:kt((()=>[H("span",{class:"button-span",onClick:t[4]||(t[4]=(...t)=>e.confirmDeleteProject&&e.confirmDeleteProject(...t))},[Ut])])),_:1})])]),H(l,{to:{name:"Screen",params:{projectId:e.screen.id}},target:"_blank",class:"preview"},{default:kt((()=>[H(i,{content:"预览"},{default:kt((()=>[Jt])),_:1})])),_:1},8,["to"]),H("div",{class:"public",onClick:t[5]||(t[5]=(...t)=>e.doPublish&&e.doPublish(...t))},[H(i,{content:"发布"},{default:kt((()=>[Lt])),_:1})])])]),H("div",Nt,[H("div",Mt,[H(i,{placement:"top-start","show-after":1e3,content:e.screen.name},{default:kt((()=>[H("div",Bt,[$t,Q(H("input",{"onUpdate:modelValue":t[6]||(t[6]=t=>e.screenName=t),class:"input",onBlur:t[7]||(t[7]=(...t)=>e.onInputBlur&&e.onInputBlur(...t))},null,544),[[W,e.screenName,void 0,{trim:!0}]])])])),_:1},8,["content"]),H("div",zt,[H("span",{class:["dot",{published:e.publishState.published}]},null,2),H("span",null,X(e.publishState.text),1)])])])])])}));Dt.render=qt,Dt.__scopeId="data-v-496332e7";var Kt=U({name:"PublishScreen",props:{projectId:{type:Number,required:!0},modelValue:{type:Boolean,required:!0}},emits:[te],setup(e,t){const r=L(!1),a=L(!1),n=L(!1),o=L(""),s=L("password"),l=L(!0),i=N((()=>a.value?re(e.projectId):"")),c=()=>{r.value=!1,t.emit(te,!1)};ae((()=>e.modelValue),(e=>{r.value=!!e})),ae((()=>e.projectId),(async()=>{try{const t=await ne(e.projectId);if(0===t.data.code){const{data:e}=t.data;l.value=!1,a.value=!!e.share,o.value=e.password}}catch(t){console.log(t)}}));return{visible:r,isPublish:a,shareUrl:i,showTooltip:n,password:o,copyUrl:()=>{a.value&&oe((()=>{se(i.value)&&B.success("复制成功")}))},closeDialog:c,loading:l,passwordType:s,publish:async()=>{try{l.value=!0;const t={share:i.value,password:o.value};0===(await le(e.projectId,t)).data.code&&(l.value=!1,c(),B.success(a.value?"发布成功":"保存成功"))}catch(t){B.error("发布失败")}finally{l.value=!1}}}}});const Yt=Z();z("data-v-634690e2");const Ft={class:"share-setting","element-loading-background":"rgba(48, 54, 64, 0.8)"},Ht={class:"share-header"},Qt={class:"header-wp"},Wt=H("label",{class:"label-color"},"发布分享：",-1),Xt={class:"share-switch"},Zt={class:"share-tutorial"},er=ee(" 查看教程 "),tr={class:"share-verify"},rr=H("div",{class:"label-color"},"分享链接",-1),ar={class:"link-content"},nr=H("div",{class:"label-color"},"访问密码",-1),or={class:"share-pwd"},sr={class:"initial-dialog"};q();const lr=Yt(((e,t,r,a,n,o)=>{const s=K("el-switch"),l=K("router-link"),i=K("el-tooltip"),c=K("g-input"),u=K("el-button"),d=K("el-dialog"),p=ie("loading");return Y(),F(d,{modelValue:e.visible,"onUpdate:modelValue":t[10]||(t[10]=t=>e.visible=t),title:"发布",width:"435px",onClose:e.closeDialog},{default:Yt((()=>[Q(H("div",Ft,[H("div",Ht,[H("div",Qt,[Wt,H("div",Xt,[H(s,{modelValue:e.isPublish,"onUpdate:modelValue":t[1]||(t[1]=t=>e.isPublish=t)},null,8,["modelValue"])])]),H("div",Zt,[H(l,{to:{name:"MyCase"},class:"share-tutorial-url",target:"_blank"},{default:Yt((()=>[er])),_:1})])]),H("div",tr,[rr,H("div",ar,[H(i,{modelValue:e.showTooltip,"onUpdate:modelValue":t[5]||(t[5]=t=>e.showTooltip=t),effect:"blue",placement:"top",content:"点击复制",manual:!0,disabled:!e.isPublish},{default:Yt((()=>[H("textarea",{value:e.shareUrl,class:"g-input share-input",readonly:"",placeholder:"开启发布分享后可获取访问链接",onClick:t[2]||(t[2]=(...t)=>e.copyUrl&&e.copyUrl(...t)),onMouseenter:t[3]||(t[3]=t=>e.showTooltip=!0),onMouseleave:t[4]||(t[4]=t=>e.showTooltip=!1)},null,40,["value"])])),_:1},8,["modelValue","disabled"]),H("div",{class:"func-btn",onClick:t[6]||(t[6]=(...t)=>e.copyUrl&&e.copyUrl(...t))},"复制")]),nr,H("div",or,[H(c,{modelValue:e.password,"onUpdate:modelValue":t[7]||(t[7]=t=>e.password=t),type:e.passwordType,placeholder:"设置访问密码",class:"pwd-input"},null,8,["modelValue","type"]),H("div",{class:"func-btn",onClick:t[8]||(t[8]=t=>e.passwordType?e.passwordType="":e.passwordType="password")},X(e.passwordType?"查看":"隐藏"),1),H("div",{class:"func-btn",onClick:t[9]||(t[9]=t=>e.password="")}," 清空 ")])]),H("div",sr,[H(u,{type:"primary",class:"publish-btn",onClick:e.publish},{default:Yt((()=>[ee(X(e.isPublish?"发布大屏":"保存"),1)])),_:1},8,["onClick"])])],512),[[p,e.loading]])])),_:1},8,["modelValue","onClose"])}));Kt.render=lr,Kt.__scopeId="data-v-634690e2";var ir=U({name:"ProjectList",components:{MyScreen:Dt,PublishScreen:Kt},props:{group:Object},setup(e){const t=L(""),r=L("name"),a=L({name:"按名称排序",createAt:"按创建时间排序",updateAt:"按修改时间排序"}),n=L(!1),o=L(0),s=ce(e,"group"),l=N((()=>{let e=s.value?s.value.children:[];if(t.value){const r=t.value.toLowerCase();e=e.filter((e=>e.name.toLowerCase().includes(r)))}return jt(e,r.value)}));return ue("publish",(e=>{n.value=!0,o.value=e})),{searchText:t,sort:r,sorts:a,visiblePublish:n,publishAppId:o,onSortChange:e=>{r.value=e},screens:l}}});const cr=Z();z("data-v-7df90232");const ur=H("div",{class:"new-projects-title"},"选择下面的方式进行创建",-1),dr={class:"new-projects"},pr=H("img",{src:"/assets/new-project.b5c06121.png"},null,-1),fr=H("span",{class:"project-type ellipsis"},"PC端创建",-1),vr={class:"project-header"},gr={class:"project-title"},hr={class:"header-manager"},mr={class:"search"},yr=H("i",{class:"v-icon-search"},null,-1),br={class:"sort-type"},jr=H("i",{class:"el-icon-caret-bottom arrow-icon"},null,-1),wr={class:"main-screen"};q();const Pr=cr(((e,t,r,a,n,o)=>{const s=K("router-link"),l=K("g-drop-list-item"),i=K("g-drop-list"),c=K("g-drop-list-popover"),u=K("my-screen"),d=K("publish-screen");return Y(),F("div",null,[ur,H("div",dr,[H(s,{to:{name:"CreateScreen"},target:"_blank",class:"new-project"},{default:cr((()=>[pr,fr])),_:1})]),H("div",vr,[H("div",gr,[H("h2",null,X(e.group?e.group.name:""),1)]),H("div",hr,[H("div",mr,[Q(H("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.searchText=t),class:"search-input",placeholder:"搜索"},null,512),[[W,e.searchText,void 0,{trim:!0}]])]),yr,H(c,null,{droplist:cr((()=>[H(i,null,{default:cr((()=>[(Y(!0),F(de,null,pe(e.sorts,((t,r)=>(Y(),F(l,{key:r,onClick:t=>e.onSortChange(r)},{default:cr((()=>[ee(X(t),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),default:cr((()=>[H("div",br,[H("span",{class:"sort-text",title:e.sorts[e.sort]},X(e.sorts[e.sort]),9,["title"]),jr])])),_:1})])]),H("div",wr,[(Y(!0),F(de,null,pe(e.screens,(e=>(Y(),F("div",{key:e.id},[H(u,{screen:e},null,8,["screen"])])))),128))]),H(d,{modelValue:e.visiblePublish,"onUpdate:modelValue":t[2]||(t[2]=t=>e.visiblePublish=t),"project-id":e.publishAppId},null,8,["modelValue","project-id"])])}));ir.render=Pr,ir.__scopeId="data-v-7df90232";var _r=U({name:"MyProject",components:{ProjectList:ir},setup(){const{getProjects:e,moveProject:t,createProjectGroup:r,deleteProjectGroup:a,updateProjectGroupName:n}=Ct,o=L(-1),s=L(!0),l=L(!1),i=L(!1),c=N((()=>Ct.group)),u=N((()=>Ct.ungroup)),d=N((()=>Ct.groups)),p=N((()=>-1===o.value?c.value:0===o.value?u.value:d.value.find((e=>e.id===o.value)))),f=e=>{o.value=e};ue("dragStart",(()=>{i.value=!0})),ue("dragEnd",(()=>{i.value=!1}));return fe((()=>{e().finally((()=>{s.value=!1}))})),{loading:s,group:c,ungroup:u,groups:d,selectedGroup:p,selectedGroupId:o,adding:l,toggleProject:f,onAddInputBlur:e=>{if(!l.value)return;(e.target.value||"").trim()||(l.value=!1)},addGroup:async e=>{if(!l.value)return;const t=(e.target.value||"").trim();if(t)try{await r(t),l.value=!1}catch(a){B.error(B.format(a))}else l.value=!1},onEditInputBlur:(e,t)=>{if(!t.editing)return;const r=(e.target.value||"").trim();r&&t.name!==r||(t.editing=!1)},editGroup:async(e,t)=>{if(!t.editing)return;const r=(e.target.value||"").trim();if(r&&t.name!==r)try{await n({id:t.id,newName:r}),t.name=r,t.editing=!1}catch(a){B.error(B.format(a))}else t.editing=!1},confirmDeleteGroup:e=>{$.confirmAsync(`<b>${e.name}</b> 删除后无法恢复，该分组中的可视化应用将全部移动到未分组，确认删除？`,(()=>a(e.id)),{success:()=>{f(u.value.id)}})},draging:i,onDragEnter:e=>{be(e.target,"drag-enter")},onDragLeave:e=>{je(e.target,"drag-enter")},onDrop:(e,r)=>{e.preventDefault(),je(e.target,"drag-enter");const a=e.dataTransfer.getData("text");if(a){const[e,n]=a.split(",").map((e=>parseInt(e)));n!==r.id&&t({pid:e,fromId:n,toId:r.id})}}}}});const Er=Z();z("data-v-88a13b4e");const Cr={class:"my-project"},Dr={class:"project-main"},kr={class:"project-manage"},Or={class:"manage-title"},Tr={class:"my-project project-group"},Ir=H("span",{style:{"margin-left":"2px"}},"我的分组",-1),Gr={class:"project-num"},Rr={key:0,class:"new-group"},Sr={class:"project-name project-ungrouped"},Ar={class:"project-num"},Vr={class:"project-name"},xr={class:"project-num"},Ur={class:"group-btns"},Jr={class:"project-screen-list"};q();const Lr=Er(((e,t,r,a,n,o)=>{const s=K("project-list"),l=K("g-loading"),i=ie("focus");return Y(),F(l,{spinning:e.loading},{default:Er((()=>[H("div",Cr,[H("div",Dr,[H("div",kr,[H("div",Or,[H("div",Tr,[Ir,H("i",{class:"el-icon-plus btn-add-icon",onClick:t[1]||(t[1]=t=>e.adding=!0)})]),H("div",{class:["my-project project-all",{"project-checked-color":e.selectedGroupId===e.group.id}],onClick:t[2]||(t[2]=t=>e.toggleProject(e.group.id))},[H("span",null,X(e.group.name),1),H("span",Gr,X(e.group.children.length),1)],2),e.adding?(Y(),F("div",Rr,[Q(H("input",{class:"edit-input",onBlur:t[3]||(t[3]=(...t)=>e.onAddInputBlur&&e.onAddInputBlur(...t)),onKeyup:t[4]||(t[4]=ve(((...t)=>e.addGroup&&e.addGroup(...t)),["enter"]))},null,544),[[i]])])):ge("",!0)]),H("div",{class:["manage-main",{draging:e.draging}]},[H("div",{class:["main-project",{"project-checked-color":e.selectedGroupId===e.ungroup.id}],onClick:t[5]||(t[5]=t=>e.toggleProject(e.ungroup.id)),onDragover:t[6]||(t[6]=he((()=>{}),["prevent"])),onDragenter:t[7]||(t[7]=(...t)=>e.onDragEnter&&e.onDragEnter(...t)),onDragleave:t[8]||(t[8]=(...t)=>e.onDragLeave&&e.onDragLeave(...t)),onDrop:t[9]||(t[9]=t=>e.onDrop(t,e.ungroup))},[H("span",Sr,X(e.ungroup.name),1),H("span",Ar,X(e.ungroup.children.length),1)],34),(Y(!0),F(de,null,pe(e.groups,(r=>(Y(),F("div",{key:r.id,class:["main-project group-project",{"project-checked-color":e.selectedGroupId===r.id}],onClick:t=>e.toggleProject(r.id),onDragover:t[10]||(t[10]=he((()=>{}),["prevent"])),onDragenter:t[11]||(t[11]=(...t)=>e.onDragEnter&&e.onDragEnter(...t)),onDragleave:t[12]||(t[12]=(...t)=>e.onDragLeave&&e.onDragLeave(...t)),onDrop:t=>e.onDrop(t,r)},[r.editing?Q((Y(),F("input",{key:0,"default-value":r.name,class:"edit-input",onBlur:t=>e.onEditInputBlur(t,r),onKeyup:ve((t=>e.editGroup(t,r)),["enter"])},null,40,["default-value","onBlur","onKeyup"])),[[i]]):(Y(),F(de,{key:1},[H("span",Vr,X(r.name),1),H("span",xr,X(r.children.length),1),H("span",Ur,[H("i",{class:"v-icon-edit",onClick:e=>r.editing=!0},null,8,["onClick"]),H("i",{class:"v-icon-delete",onClick:t=>e.confirmDeleteGroup(r)},null,8,["onClick"])])],64))],42,["onClick","onDrop"])))),128))],2)]),H("div",Jr,[H(s,{group:e.selectedGroup},null,8,["group"])])])])])),_:1},8,["spinning"])}));_r.render=Lr,_r.__scopeId="data-v-88a13b4e";export default _r;
