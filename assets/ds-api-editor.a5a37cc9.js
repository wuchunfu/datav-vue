import{b,a8 as r,E as f}from"./App.2074c692.js";import{a3 as m,bh as g,a4 as n,a9 as h,ac as t,aZ as s,ag as B,b3 as _,be as k,bf as F,a5 as v,b4 as D}from"./vendor.60e09344.js";const A=m({name:"DsApiEditor",setup(){const e=g("com"),o=g("apiDataConfig"),p=Object.keys(r).map(a=>({label:a,value:a})),d=Object.keys(f.variables.publishersView);return{ApiRequestMethod:r,apiDataConfig:o,apiMethods:p,variables:d,updateData:a=>{o.value.config.api=a.value,f.setSubscribersView({id:e.value.id,data:a.value})},updateApiHeaders:a=>{o.value.config.apiHeaders=a.value},updateApiBody:a=>{o.value.config.apiBody=a.value}}}}),i=e=>(k("data-v-3aff038f"),e=e(),F(),e),y={class:"ds-wrapper ds-api"},w=i(()=>t("p",null,"\u8BF7\u6C42\u65B9\u5F0F",-1)),M={class:"datav-new-select-wp"},S=i(()=>t("p",{class:"url-info"},[t("label",{class:"prefix-label textarea-label"},"URL\uFF1A"),t("a",{target:"_blank",rel:"noopener noreferrer",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",class:"api-help"},"\u91CD\u8981\uFF1A\u8DE8\u57DF\u95EE\u9898\u89E3\u51B3\u65B9\u6848")],-1)),j=i(()=>t("p",{class:"url-info-text"}," \u5C06\u56DE\u8C03\u53C2\u6570\u914D\u7F6E\u5230url\u4E2D, \u4F8B: http://api.test?value=:value ",-1)),H={class:"post-request-data"},O=i(()=>t("p",{class:"url-info-text"},"Headers (Optional)",-1)),V={key:0,class:"post-request-data"},T=i(()=>t("p",{class:"url-info-text"},"POST \u8BF7\u6C42\u53C2\u6570",-1)),U=D(" \u670D\u52A1\u5668\u4EE3\u7406\u8BF7\u6C42 (\u56E0\u8DE8\u57DF\u65E0\u6CD5\u8BBF\u95EE\u65F6\u53EF\u52FE\u9009) "),q=D(" \u9700\u8981 cookie (\u4E0D\u9009\u62E9\u4EE3\u7406\u5E76\u4E14\u9700\u8981\u83B7\u53D6cookie\u65F6\u4F7F\u7528) ");function I(e,o,p,d,E,C){const c=n("n-select"),a=n("g-monaco-editor"),l=n("n-checkbox");return v(),h("div",y,[w,t("div",M,[s(c,{value:e.apiDataConfig.config.apiMethod,"onUpdate:value":o[0]||(o[0]=u=>e.apiDataConfig.config.apiMethod=u),options:e.apiMethods,class:"datav-new-select"},null,8,["value","options"])]),S,j,s(a,{language:"plaintext","line-numbers":"off",height:120,code:e.apiDataConfig.config.api,completions:e.variables,onBlur:e.updateData},null,8,["code","completions","onBlur"]),t("div",H,[O,s(a,{language:"json",height:120,"auto-format":!0,code:e.apiDataConfig.config.apiHeaders,onBlur:e.updateApiHeaders},null,8,["code","onBlur"])]),e.apiDataConfig.config.apiMethod===e.ApiRequestMethod.POST?(v(),h("div",V,[T,s(a,{language:"json",height:120,"auto-format":!0,code:e.apiDataConfig.config.apiBody,onBlur:e.updateApiBody},null,8,["code","onBlur"])])):B("",!0),s(l,{checked:e.apiDataConfig.config.local,"onUpdate:checked":o[1]||(o[1]=u=>e.apiDataConfig.config.local=u),class:"ds-checkbox"},{default:_(()=>[U]),_:1},8,["checked"]),s(l,{checked:e.apiDataConfig.config.cookie,"onUpdate:checked":o[2]||(o[2]=u=>e.apiDataConfig.config.cookie=u),class:"ds-checkbox"},{default:_(()=>[q]),_:1},8,["checked"])])}var $=b(A,[["render",I],["__scopeId","data-v-3aff038f"]]);export{$ as default};
