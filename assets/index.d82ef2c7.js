import{b6 as e,h as o,aN as t}from"./index.b20965e1.js";import{o as n,b as l}from"./dom.44f3f206.js";const s=e({x:0,y:0}),u=e=>{const u=o((()=>t.contextMenu)),c=o((()=>t.selectedCom)),a=o((()=>{var e;return null==(e=c.value)?void 0:e.locked})),r=o((()=>{var e;return null==(e=c.value)?void 0:e.hided})),d=o((()=>({display:u.value.show?"block":"none",left:`${s.x+10}px`,top:`${s.y+10}px`,transform:document.documentElement.clientHeight-s.y<250?"translate(0px, -100%)":""}))),i=()=>{l(document,"click",i),e&&e.beforeClose&&e.beforeClose(),u.value.show=!1};return{contextMenu:u,selectedCom:c,isLocked:a,isHided:r,contextMenuStyle:d,showMenu:e=>{e.preventDefault(),c.value&&(s.x=e.clientX,s.y=e.clientY,u.value.show=!0,n(document,"click",i))},hideMenu:i}};export{u};