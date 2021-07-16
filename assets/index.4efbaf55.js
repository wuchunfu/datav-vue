import{d as e,e as a,i as l,f as n,o as s,c as i,a as t,t as d,w as o,F as c,A as u,b as m,B as v,j as r,aJ as p,p as b,k as f,g as h,b0 as g,b1 as k,q as y,a_ as C}from"./index.f27a2b68.js";import{_ as F}from"./config-title.acf95b2e.js";import{_ as w}from"./empty-panel.ae020ef6.js";var j=e({name:"EventItem",props:{item:{type:Object,required:!0}},setup(e){const n=a(!0),s=a(e.item.enable),i=l("addField"),t=l("deleteField"),d=l("updateField"),o=l("toggleEnable");return{visible:n,isEnabled:s,addField:()=>{i(e.item.name)},deleteField:a=>{t(e.item.name,a)},updateField:(a,l,n)=>{a[l]=n;const s=e.item.fields.filter((e=>e.name)).map((e=>({name:e.name,map:e.map})));d(e.item.name,s)},onEnableChange:a=>{e.item.enable=a,o(e.item.name,a)}}}});const E={class:"event"},V={class:"event-text"},O=v(" 启用 "),_={key:0,class:"variables"},x={class:"variables-table"},P=t("thead",null,[t("tr",null,[t("th",{width:"80"},[t("span",null,"字段")]),t("th",{width:"110",style:{position:"relative"}},[t("span",null,"绑定到变量")]),t("th",{width:"110"},[t("span",null,"字段说明")])])],-1),I={class:"variables-tbody"},q={class:"variable-input"},K={class:"variable-input"},L={class:"variable-btn"},z={class:"variable-input"},A={class:"desc"},B={class:"add-variable"},J=v(" 新建一个字段 ");j.render=function(e,a,l,v,r,p){const b=n("el-checkbox"),f=n("g-input"),h=n("el-button");return s(),i("div",E,[t("div",{class:"events-title",onClick:a[2]||(a[2]=a=>e.visible=!e.visible)},[t("i",{class:["v-icon-arrow-right",e.visible?"events-down":"events-up"]},null,2),t("div",V,d(e.item.description),1),t(b,{modelValue:e.isEnabled,"onUpdate:modelValue":a[1]||(a[1]=a=>e.isEnabled=a),class:"enable-checkbox",onChange:e.onEnableChange},{default:o((()=>[O])),_:1},8,["modelValue","onChange"])]),e.visible?(s(),i("div",_,[t("table",x,[P,t("tbody",I,[(s(!0),i(c,null,u(e.item.fields,((a,l)=>(s(),i("tr",{key:l},[a.custom?(s(),i(c,{key:0},[t("td",q,[t(f,{"model-value":a.name,placeholder:"可自定义",class:"attr-input",onChange:l=>e.updateField(a,"name",l)},null,8,["model-value","onChange"])]),t("td",K,[t(f,{"model-value":a.map,placeholder:"可自定义",class:"attr-input",onChange:l=>e.updateField(a,"map",l)},null,8,["model-value","onChange"])]),t("td",L,[t("i",{class:"v-icon-delete delete-btn",onClick:a=>e.deleteField(l)},null,8,["onClick"])])],64)):(s(),i(c,{key:1},[t("td",null,d(a.name),1),t("td",z,[t(f,{"model-value":a.map,placeholder:"可自定义",class:"attr-input",onChange:l=>e.updateField(a,"map",l)},null,8,["model-value","onChange"])]),t("td",A,d(a.description),1)],64))])))),128))])]),t("div",B,[t(h,{size:"mini",icon:"v-icon-plus",onClick:e.addField},{default:o((()=>[J])),_:1},8,["onClick"])])])):m("",!0)])};var M=e({name:"InteractionPanel",components:{ConfigTitle:F,EmptyPanel:w,EventItem:j},setup(){const e=l("com"),n=a(!0),s=r((()=>Object.keys(e.value.events))),i=a([]);let t=a(p.pageConfig.variables.componentsView[e.value.id]);const d=(e,a,l,n=!1)=>({name:e,map:a||e,description:l,custom:n}),o=a=>{if(t.value||(t.value={}),!t.value[a]){const l=Object.keys(e.value.events[a].fields);t.value[a]={enable:!1,fields:k(l)}}};return b("addField",(e=>{const a=i.value.find((a=>a.name===e));a.fields.some((e=>""===e.name))||a.fields.push(d("","","",!0))})),b("deleteField",((a,l)=>{const n=i.value.find((e=>e.name===a)).fields.splice(l,1)[0].name;if(n){delete t.value[a].fields[n];const l=t.value[a];l.enable&&p.setPublishersView({id:e.value.id,keys:Object.entries(l.fields).map((e=>e[1]||e[0])),enable:!0})}})),b("updateField",((a,l)=>{o(a),t.value[a].fields=g(l,"name","map"),t.value[a].enable&&p.setPublishersView({id:e.value.id,keys:l.map((e=>e.map||e.name)),enable:!0})})),b("toggleEnable",((a,l)=>{o(a);const n=t.value[a];n.enable=l;const s=[];for(const e in n.fields)l&&!n.fields[e]&&(n.fields[e]=e),s.push(n.fields[e]);p.setPublishersView({id:e.value.id,keys:s,enable:l})})),f(t,(()=>{p.pageConfig.variables.componentsView[e.value.id]=t.value})),h((()=>{(()=>{const a=[];for(const[l,n]of Object.entries(e.value.events)){const e={name:l,description:n.description,enable:!1,fields:Object.entries(n.fields).map((([e,a])=>d(e,"",a.description)))};if(t.value){const a=t.value[l];if(a){e.enable=a.enable;for(const[l,n]of Object.entries(a.fields)){const a=e.fields.find((e=>e.name===l));a?a.map=n:e.fields.push(d(l,n,"",!0))}}}a.push(e)}i.value.push(...a)})()})),{com:e,eventKeys:s,visible:n,eventList:i}}});const T={class:"interaction-panle"},U={key:0},D={class:"com-events"},G=v(d("交互事件")),H={class:"extra"},N=v("教程"),Q={class:"event-list"};M.render=function(e,a,l,d,m,v){const r=n("config-title"),p=n("router-link"),b=n("event-item"),f=n("empty-panel");return s(),i("div",T,[t(r,{"com-name":e.com.name,"com-alias":e.com.alias},null,8,["com-name","com-alias"]),e.eventKeys.length>0?(s(),i("div",U,[t("div",D,[t("div",{class:"events-title",onClick:a[1]||(a[1]=a=>e.visible=!e.visible)},[t("div",null,[t("i",{class:["v-icon-arrow-right",e.visible?"events-down":"events-up"]},null,2),G]),t("span",H,[t(p,{to:{name:"MyCase"},target:"_blank",rel:"noopener noreferrer",class:"tutorial-link"},{default:o((()=>[N])),_:1})])]),y(t("div",Q,[(s(!0),i(c,null,u(e.eventList,(e=>(s(),i(b,{key:e.name,item:e},null,8,["item"])))),128))],512),[[C,e.visible]])])])):(s(),i(f,{key:1,content:"该组件没有交互事件"}))])};export default M;