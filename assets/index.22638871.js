import{b as v,c as s}from"./App.2074c692.js";import{a3 as b,a4 as r,a9 as u,aZ as l,b3 as m,af as p,ag as g,aa as y,a5 as d,b5 as _,b4 as z}from"./vendor.60e09344.js";const N=b({name:"GInputNumber",props:{modelValue:{type:Number,default:0},label:{type:String,default:""},size:{type:String,default:"small"},min:{type:Number,default:-1/0},max:{type:Number,default:1/0},step:{type:Number,default:1},inline:{type:[Boolean,String],default:!1},suffix:String},emits:[s],setup(e,a){const i=o=>{a.emit(s,o)},n={Button:{textColorText:"var(--datav-font-color)",fontSizeMedium:"12px",iconSizeMedium:"12px"}};return e.size==="medium"&&(n.Button.fontSizeMedium="14px",n.Button.iconSizeMedium="14px"),{themeOverrides:n,handleInput:i}}}),S={key:0,class:"g-input__caption"};function h(e,a,i,n,o,x){const f=r("n-input-number"),c=r("n-config-provider");return d(),u("div",{class:y(["datav-gui g-input-number",[{"--inline":!!e.inline,"--single":e.inline==="inline-single"}]])},[l(c,{"theme-overrides":e.themeOverrides,abstract:""},{default:m(()=>[l(f,{value:e.modelValue,size:e.size,min:e.min,max:e.max,step:e.step,"onUpdate:value":e.handleInput},_({_:2},[e.suffix?{name:"suffix",fn:m(()=>[z(p(e.suffix),1)])}:void 0]),1032,["value","size","min","max","step","onUpdate:value"])]),_:1},8,["theme-overrides"]),e.label?(d(),u("span",S,p(e.label),1)):g("",!0)],2)}var t=v(N,[["render",h]]);t.install=e=>{e.component(t.name,t)};export{t as default};
