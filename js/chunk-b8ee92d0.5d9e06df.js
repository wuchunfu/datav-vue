(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8ee92d0"],{"0a03":function(e,t,n){},"46a7":function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n("55b5"),l=n.n(a),i=n("a559"),o=n.n(i),c=n("6ddb"),u=n("ca11"),r=n("08ea"),d=function(e,t,n){void 0===n&&(n=r["a"].com),this.locked=!1,this.hided=!1,this.selected=!1,this.hovered=!1,this.renameing=!1,this.attr={x:0,y:0,w:100,h:100,deg:0,opacity:1,filpV:!1,filpH:!1},this.projectId=0,this.id=Object(c["b"])(e),this.name="V"+e,this.type=n;var a=Object(u["b"])(this.name);this.alias=a.com.alias,this.icon=a.category.icon,this.img=a.com.img,this.attr=o()({},this.attr,t)},b=n("68e5");function s(e,t,n){return"source"===t&&(e.source=o()({fields:{},render:"render",description:"",dcConfig:{useFilter:!1,pageFilters:[]},useAutoUpdate:!1,autoUpdate:1},n)),e}function p(e,t){var n;return n={},n[e]=o()({type:"string",description:"",optional:!1,map:""},t||{}),n}function m(e,t,n,a,l){return void 0===l&&(l=b["a"].static),"source"===n&&(t.source={id:Object(c["b"])(),type:l,comId:e,config:o()({local:!0,cookie:!1},f(l,a))}),t}function f(e,t){var n=Object.create({});switch(e){case b["a"].static:n.data=Object(c["g"])(t)?t:JSON.stringify(t);break;case b["a"].api:n.api=t;break;default:throw Error("Unknown DataSourceType: "+e)}return n}var j=function(e){function t(){var t;return t=e.call(this,"MainTitle",{w:300,h:56})||this,t.config={title:"",textStyle:{fontFamily:"Microsoft Yahei",fontSize:32,color:"#fff",fontWeight:"normal"},textAlign:"center",urlConfig:{url:"",isBlank:!1},writingMode:"horizontal-tb"},t.events={},t.initData(),t}l()(t,e);var n=t.prototype;return n.initData=function(){var e=[p("title",{description:"标题值",optional:!0}),p("url",{description:"超链接",optional:!0})];return this.data=s({},"source",{fields:Object.assign.apply(Object,[{}].concat(e))}),this.source=m(this.id,{},"source",{title:"我是标题数据",url:""}),this},t}(d);t["b"]=j},6679:function(e,t,n){var a=n("3729"),l=n("1310"),i="[object Boolean]";function o(e){return!0===e||!1===e||l(e)&&a(e)==i}e.exports=o},"6d19":function(e,t,n){"use strict";n("6f65")},"6f65":function(e,t,n){},"777d":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),l=Object(a["m"])(" 2 ");function i(e,t,n,i,o,c){var u=Object(a["O"])("el-input"),r=Object(a["O"])("el-header"),d=Object(a["O"])("el-form-item"),b=Object(a["O"])("el-option"),s=Object(a["O"])("el-select"),p=Object(a["O"])("PropComponent"),m=Object(a["O"])("el-form"),f=Object(a["O"])("el-collapse-item"),j=Object(a["O"])("el-collapse"),O=Object(a["O"])("el-col"),g=Object(a["O"])("el-row"),V=Object(a["O"])("el-main"),y=Object(a["O"])("el-container");return Object(a["F"])(),Object(a["j"])(y,null,{default:Object(a["db"])((function(){return[Object(a["n"])(r,{class:"pc-header"},{default:Object(a["db"])((function(){return[Object(a["n"])(u,{size:"large",placeholder:"输入组件目录"})]})),_:1}),Object(a["n"])(V,null,{default:Object(a["db"])((function(){return[Object(a["n"])(g,null,{default:Object(a["db"])((function(){return[Object(a["n"])(O,{span:12},{default:Object(a["db"])((function(){return[Object(a["n"])(j,{class:"pc-collapse"},{default:Object(a["db"])((function(){return[(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["M"])(e.list,(function(t){return Object(a["F"])(),Object(a["j"])(f,{key:t.key,title:t.path,name:t.key},{default:Object(a["db"])((function(){return[Object(a["n"])(m,{"label-width":"150px"},{default:Object(a["db"])((function(){return[Object(a["n"])(d,{label:"名称"},{default:Object(a["db"])((function(){return[Object(a["n"])(u,{modelValue:t.config.alias,"onUpdate:modelValue":function(e){return t.config.alias=e}},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1024),Object(a["n"])(d,{label:"组件类型"},{default:Object(a["db"])((function(){return[Object(a["n"])(s,{modelValue:t.config.component,"onUpdate:modelValue":function(e){return t.config.component=e}},{default:Object(a["db"])((function(){return[(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["M"])(e.componentTypes,(function(e){return Object(a["F"])(),Object(a["j"])(b,{key:e,label:e,value:e},null,8,["label","value"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:2},1024),Object(a["n"])(d,{label:"默认值"},{default:Object(a["db"])((function(){return[Object(a["n"])(p,{"data-type":t.config.type,"component-type":t.config.component,onChange:function(e){return t.config.defaultValue=e}},null,8,["data-type","component-type","onChange"])]})),_:2},1024),Object(a["n"])(d,{label:"控制显示的属性名"},{default:Object(a["db"])((function(){return[Object(a["n"])(s,{modelValue:t.config.showCol,"onUpdate:modelValue":function(e){return t.config.showCol=e}},{default:Object(a["db"])((function(){return[(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["M"])(t.cols,(function(e){return Object(a["F"])(),Object(a["j"])(b,{key:e,label:e,value:e},null,8,["label","value"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:2},1024),Object(a["n"])(d,{label:"显示模式"},{default:Object(a["db"])((function(){return[Object(a["n"])(s,{modelValue:t.config.displayMode,"onUpdate:modelValue":function(e){return t.config.displayMode=e}},{default:Object(a["db"])((function(){return[(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["M"])(e.displayModes,(function(e){return Object(a["F"])(),Object(a["j"])(b,{key:e,label:e,value:e},null,8,["label","value"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:2},1024),Object(a["n"])(d,{label:"提示"},{default:Object(a["db"])((function(){return[Object(a["n"])(u,{modelValue:t.config.tip,"onUpdate:modelValue":function(e){return t.config.tip=e}},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1024)]})),_:2},1024)]})),_:2},1032,["title","name"])})),128))]})),_:1})]})),_:1}),Object(a["n"])(O,{span:12},{default:Object(a["db"])((function(){return[l]})),_:1})]})),_:1})]})),_:1})]})),_:1})}var o,c,u,r=n("a559"),d=n.n(r),b=n("6679"),s=n.n(b),p=n("6ddb");(function(e){e["number"]="number",e["string"]="string",e["boolean"]="boolean",e["object"]="object",e["array"]="array"})(o||(o={})),function(e){e["none"]="none",e["input"]="input",e["number"]="number",e["checkbox"]="checkbox",e["switch"]="switch",e["color"]="color",e["select"]="select",e["fontFamily"]="fontFamily",e["fontWeight"]="fontWeight",e["fontStyle"]="fontStyle",e["hAlign"]="hAlign",e["vAlign"]="vAlign",e["writingMode"]="writingMode",e["justify"]="justify",e["align"]="align",e["angle"]="angle",e["location"]="location",e["lineStyle"]="lineStyle",e["fillType"]="fillType",e["box"]="box",e["decorate"]="decorate"}(c||(c={})),function(e){e["flat"]="flat",e["nest"]="nest"}(u||(u={}));var m=function(){var e={type:o.object,component:c.none,alias:"",tip:"",displayMode:u.flat,showCol:"",defaultValue:null};return e},f=function e(t,n,a){for(var l=Object.entries(t),i=0,r=l;i<r.length;i++){var d=r[i],b=d[0],f=d[1],j=m(),O={key:b,config:j,path:a?a+"."+b:b};Object(p["g"])(f)?(j.type=o.string,j.component=c.input,j.defaultValue=""):Object(p["e"])(t)?(j.type=o.number,j.component=c.number,j.defaultValue=0):s()(f)?(j.type=o.boolean,j.component=c.switch,j.defaultValue=!1):Object(p["f"])(f)?(j.type=o.object,j.displayMode=u.nest,O.children=[],O.cols=Object.keys(f),e(f,O.children,O.path)):Object(p["c"])(f)&&f.length>0&&(j.type=o.array,j.component=c.none,j.displayMode=u.nest,O.children=[],O.cols=Object.keys(f[0]),e(f[0],O.children,O.path)),n.push(O)}},j=n("46a7"),O=Object(a["hb"])("data-v-4c3fa448");Object(a["I"])("data-v-4c3fa448");var g={key:20};Object(a["G"])();var V=O((function(e,t,n,l,i,o){var c=Object(a["O"])("el-input"),u=Object(a["O"])("el-input-number"),r=Object(a["O"])("el-checkbox"),d=Object(a["O"])("el-switch"),b=Object(a["O"])("el-color-picker"),s=Object(a["O"])("el-select"),p=Object(a["O"])("el-option");return e.componentType===e.componentTypes.input?(Object(a["F"])(),Object(a["j"])(c,{key:0,modelValue:e.strValue,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.strValue=t})},null,8,["modelValue"])):e.componentType===e.componentTypes.number?(Object(a["F"])(),Object(a["j"])(u,{key:1,modelValue:e.numValue,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.numValue=t})},null,8,["modelValue"])):e.componentType===e.componentTypes.checkbox?(Object(a["F"])(),Object(a["j"])(r,{key:2,modelValue:e.boolValue,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.boolValue=t})},null,8,["modelValue"])):e.componentType===e.componentTypes.switch?(Object(a["F"])(),Object(a["j"])(d,{key:3,modelValue:e.boolValue,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.boolValue=t})},null,8,["modelValue"])):e.componentType===e.componentTypes.color?(Object(a["F"])(),Object(a["j"])(b,{key:4,modelValue:e.strValue,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.strValue=t}),"show-alpha":""},null,8,["modelValue"])):e.componentType===e.componentTypes.select?(Object(a["F"])(),Object(a["j"])(s,{key:5,modelValue:e.arrValue,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.arrValue=t}),multiple:"",filterable:"","allow-create":"",placeholder:"创建下拉选项"},null,8,["modelValue"])):e.componentType===e.componentTypes.fontFamily?(Object(a["F"])(),Object(a["j"])(s,{key:6,modelValue:e.strValue,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.strValue=t})},{default:O((function(){return[(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["M"])(e.fontFamilys,(function(e){return Object(a["F"])(),Object(a["j"])(p,{key:e.id,label:e.value,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])):e.componentType===e.componentTypes.fontWeight?(Object(a["F"])(),Object(a["j"])(s,{key:7,modelValue:e.strValue,"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.strValue=t})},{default:O((function(){return[(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["M"])(e.fontWeights,(function(e){return Object(a["F"])(),Object(a["j"])(p,{key:e.id,label:e.value,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])):e.componentType===e.componentTypes.fontStyle?(Object(a["F"])(),Object(a["j"])(s,{key:8,modelValue:e.strValue,"onUpdate:modelValue":t[9]||(t[9]=function(t){return e.strValue=t})},{default:O((function(){return[(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["M"])(e.fontStyles,(function(e){return Object(a["F"])(),Object(a["j"])(p,{key:e.id,label:e.value,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])):e.componentType===e.componentTypes.hAlign?(Object(a["F"])(),Object(a["j"])(s,{key:9,modelValue:e.strValue,"onUpdate:modelValue":t[10]||(t[10]=function(t){return e.strValue=t})},{default:O((function(){return[(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["M"])(e.hAligns,(function(e){return Object(a["F"])(),Object(a["j"])(p,{key:e.id,label:e.value,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])):e.componentType===e.componentTypes.vAlign?(Object(a["F"])(),Object(a["j"])(s,{key:10,modelValue:e.strValue,"onUpdate:modelValue":t[11]||(t[11]=function(t){return e.strValue=t})},{default:O((function(){return[(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["M"])(e.vAligns,(function(e){return Object(a["F"])(),Object(a["j"])(p,{key:e.id,label:e.value,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])):e.componentType===e.componentTypes.writingMode?(Object(a["F"])(),Object(a["j"])(s,{key:11,modelValue:e.strValue,"onUpdate:modelValue":t[12]||(t[12]=function(t){return e.strValue=t})},{default:O((function(){return[(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["M"])(e.writingModes,(function(e){return Object(a["F"])(),Object(a["j"])(p,{key:e.id,label:e.value,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])):e.componentType===e.componentTypes.justifyContent?(Object(a["F"])(),Object(a["j"])(s,{key:12,modelValue:e.strValue,"onUpdate:modelValue":t[13]||(t[13]=function(t){return e.strValue=t})},{default:O((function(){return[(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["M"])(e.justifyContents,(function(e){return Object(a["F"])(),Object(a["j"])(p,{key:e.id,label:e.value,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])):e.componentType===e.componentTypes.align?(Object(a["F"])(),Object(a["j"])(s,{key:13,modelValue:e.strValue,"onUpdate:modelValue":t[14]||(t[14]=function(t){return e.strValue=t})},{default:O((function(){return[(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["M"])(e.aligns,(function(e){return Object(a["F"])(),Object(a["j"])(p,{key:e.id,label:e.value,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])):e.componentType===e.componentTypes.angle?(Object(a["F"])(),Object(a["j"])(s,{key:14,modelValue:e.strValue,"onUpdate:modelValue":t[15]||(t[15]=function(t){return e.strValue=t})},{default:O((function(){return[(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["M"])(e.angles,(function(e){return Object(a["F"])(),Object(a["j"])(p,{key:e.id,label:e.value,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])):e.componentType===e.componentTypes.location?(Object(a["F"])(),Object(a["j"])(s,{key:15,modelValue:e.strValue,"onUpdate:modelValue":t[16]||(t[16]=function(t){return e.strValue=t})},{default:O((function(){return[(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["M"])(e.locations,(function(e){return Object(a["F"])(),Object(a["j"])(p,{key:e.id,label:e.value,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])):e.componentType===e.componentTypes.lineStyle?(Object(a["F"])(),Object(a["j"])(s,{key:16,modelValue:e.strValue,"onUpdate:modelValue":t[17]||(t[17]=function(t){return e.strValue=t})},{default:O((function(){return[(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["M"])(e.lineStyles,(function(e){return Object(a["F"])(),Object(a["j"])(p,{key:e.id,label:e.value,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])):e.componentType===e.componentTypes.fillType?(Object(a["F"])(),Object(a["j"])(s,{key:17,modelValue:e.strValue,"onUpdate:modelValue":t[18]||(t[18]=function(t){return e.strValue=t})},{default:O((function(){return[(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["M"])(e.fillTypes,(function(e){return Object(a["F"])(),Object(a["j"])(p,{key:e.id,label:e.value,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])):e.componentType===e.componentTypes.box?(Object(a["F"])(),Object(a["j"])(s,{key:18,modelValue:e.strValue,"onUpdate:modelValue":t[19]||(t[19]=function(t){return e.strValue=t})},{default:O((function(){return[(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["M"])(e.boxImgs,(function(e){return Object(a["F"])(),Object(a["j"])(p,{key:e.id,label:e.src,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])):e.componentType===e.componentTypes.decorate?(Object(a["F"])(),Object(a["j"])(s,{key:19,modelValue:e.strValue,"onUpdate:modelValue":t[20]||(t[20]=function(t){return e.strValue=t})},{default:O((function(){return[(Object(a["F"])(!0),Object(a["j"])(a["b"],null,Object(a["M"])(e.decorateImgs,(function(e){return Object(a["F"])(),Object(a["j"])(p,{key:e.id,label:e.src,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])):(Object(a["F"])(),Object(a["j"])("span",g,"--"))})),y=[{id:"Microsoft Yahei",value:"微软雅黑"},{id:"SimSun",value:"宋体"},{id:"SimHei",value:"黑体"},{id:"LiSu",value:"隶书"},{id:"YouYuan",value:"幼圆"}],v=[{id:"lighter",value:"细"},{id:"normal",value:"正常"},{id:"bolder",value:"粗"},{id:"100",value:"100"},{id:"200",value:"200"},{id:"300",value:"300"},{id:"400",value:"400"},{id:"500",value:"500"},{id:"600",value:"600"},{id:"700",value:"700"},{id:"800",value:"800"},{id:"900",value:"900"}],h=[{id:"italic",value:"斜体"},{id:"normal",value:"正常"}],F=[{id:"left",value:"左对齐"},{id:"center",value:"居中对齐"},{id:"right",value:"右对齐"}],x=[{id:"top",value:"上对齐"},{id:"middle",value:"居中对齐"},{id:"bottom",value:"下对齐"}],T=[{id:"horizontal-tb",value:"水平"},{id:"vertical-rl",value:"垂直"}],k=[{id:"flex-start",value:"左对齐"},{id:"center",value:"居中对齐"},{id:"flex-end",value:"右对齐"}],w=[{id:"flex-start",value:"上对齐"},{id:"center",value:"居中对齐"},{id:"flex-end",value:"下对齐"}],A=[{id:"horizontal",value:"水平"},{id:"bevel",value:"斜角"},{id:"vertical",value:"垂直"}],M=[{id:"top-center",value:"顶部居中"},{id:"top-left",value:"顶部居左"},{id:"top-right",value:"顶部居右"},{id:"bottom-center",value:"底部居中"},{id:"bottom-left",value:"底部居左"},{id:"bottom-right",value:"底部居右"}],U=[{id:"solid",value:"实线"},{id:"dotted",value:"虚线"}],_=[{id:"solid",value:"实体填充"},{id:"linear",value:"渐变填充"}],B=n("b641"),C=Object(a["p"])({name:"PropComponent",props:{dataType:{type:String,required:!0},componentType:{type:String,required:!0}},emits:["change"],setup:function(e,t){var n=Object(a["K"])(d()({},c)),l=Object(a["K"])(""),i=Object(a["K"])(0),o=Object(a["K"])(!1),u=Object(a["K"])([]);return Object(a["bb"])((function(){return l.value}),(function(e){t.emit("change",e)})),Object(a["bb"])((function(){return i.value}),(function(e){t.emit("change",e)})),Object(a["bb"])((function(){return o.value}),(function(e){t.emit("change",e)})),Object(a["bb"])((function(){return u.value}),(function(e){t.emit("change",e)})),{componentTypes:n,strValue:l,numValue:i,boolValue:o,arrValue:u,fontFamilys:y,fontWeights:v,fontStyles:h,hAligns:F,vAligns:x,writingModes:T,justifyContents:k,aligns:w,angles:A,locations:M,lineStyles:U,fillTypes:_,boxImgs:B["b"],decorateImgs:B["d"]}}});n("6d19");C.render=V,C.__scopeId="data-v-4c3fa448";var S=C,z=Object(a["p"])({name:"PropsConfig",components:{PropComponent:S},setup:function(){var e=Object(a["K"])([]),t=new j["b"];f(t.config,e.value,"");var n=Object(a["K"])(d()({},c)),l=Object(a["K"])(d()({},u));return{list:e,componentTypes:n,displayModes:l}}});n("976c");z.render=i;t["default"]=z},"976c":function(e,t,n){"use strict";n("0a03")},b641:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return b}));var a=n("a559"),l=n.n(a),i="//files.pengxiaotian.com/datav/bj.png",o="//files.pengxiaotian.com/datav/datav-vue-logo.png",c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABQCAMAAADVyVCaAAAAM1BMVEVHcEwXvP8b1/8TV20UQVEZzf8Tn/8UiaMWqc4VkrEZw/AWsv8Vj7EUqf8YuOITRFYViKUfZVF5AAAACnRSTlMA////////Jt+CR+EzygAAAL9JREFUWMPt2FsOwjAMRNGGuKX0kbL/1bIBQv0YR0Kau4Ejz0+kTBNjjLGxPTptTxwh33uv6cTVXtmEVNhUXQI31dwlYFP1CdhUPwg51nQCNNWMyH+FNhIkhhIFQBQSUltNJup2JF+hEyKEUggQWsFPqAU3oRe8hEFwEhbhjtjjguweopVeMGLAFTbDR5gMJ2ExvITBcBN6w0+ojRviBLwXZ4BQGiFC93bHCEkfisRIYvkPYiGBIRDx/5Mxxsb2AVpUNS9SI1eoAAAAAElFTkSuQmCC",u=[{id:1,src:"box1-126-154.png",width:[71,23],slice:[],repeat:"initial"},{id:2,src:"box2-79-67.png",width:[32,37],slice:["fill"],repeat:"initial"},{id:3,src:"box3-116-115.png",width:[14],slice:["fill"],repeat:"initial"},{id:4,src:"box4-241-138.png",width:[14,100],slice:[],repeat:"initial"},{id:5,src:"box5-689-232.png",width:[46,305,117,33],slice:["fill"],repeat:"repeat"},{id:6,src:"box6-484-101.png",width:[45,103,51,29],slice:["fill"],repeat:"repeat"},{id:7,src:"box7-986-212.png",width:[29,107,109,16],slice:["fill"],repeat:"repeat"},{id:8,src:"box8-492-335.png",width:[15,11,16,8],slice:["fill"],repeat:"repeat"},{id:9,src:"box9-731-407.png",width:[152,27,127,354],slice:["fill"],repeat:"repeat"},{id:10,src:"box10-524-282.png",width:[56,4,76,393],slice:["fill"],repeat:"repeat"},{id:11,src:"box11-592-131.png",width:[17,24,18,19],slice:["fill"],repeat:"repeat"}],r=[{id:1,src:"deco1-1920-1080.gif",size:"100%",position:"left bottom"},{id:2,src:"deco2-1920-1080.gif",size:"100%",position:"center center"},{id:3,src:"deco3-1080-824.gif",size:"100%",position:"right top"},{id:4,src:"deco4-1080-824.gif",size:"100%",position:"right bottom"},{id:5,src:"deco5-1920-1080.gif",size:"100%",position:"left top"},{id:6,src:"deco6-1626-356.gif",size:"100%",position:"center center"},{id:7,src:"deco7-94-1461.gif",size:"contain",position:"left top"},{id:8,src:"deco8-500-54.gif",size:"contain",position:"left top"},{id:9,src:"deco9-500-64.gif",size:"contain",position:"left top"},{id:10,src:"deco10-782-259.gif",size:"contain",position:"left top"},{id:11,src:"deco11-58-36.png",size:"100%",position:"center center"},{id:12,src:"deco12-58-36.png",size:"100%",position:"center center"}],d=u.map((function(e){return l()({},e,{src:"//files.pengxiaotian.com/box/"+e.src,slice:[].concat(e.width,e.slice)})})),b=r.map((function(e){return l()({},e,{src:"//files.pengxiaotian.com/decoration/"+e.src})}))},ca11:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var a={type:"bar",name:"柱图",icon:"v-icon-chart-bar",data:[{name:"VBasicBar",alias:"基本柱状图",img:"//files.pengxiaotian.com/com/basic-bar.png",used:!0},{name:"VArcBar",alias:"弧形柱图",img:"//files.pengxiaotian.com/com/arc-bar.png",used:!0},{name:"VBarWithLine",alias:"折线柱图(多)",img:"//files.pengxiaotian.com/com/bar-with-line.png",used:!0},{name:"VLineBarChart",alias:"折线柱图",img:"//files.pengxiaotian.com/com/line-bar-chart.png",used:!0},{name:"VHoriBasicBar",alias:"水平基本柱状图",img:"//files.pengxiaotian.com/com/hori-basic-bar.png",used:!0}]},l={type:"line",name:"折线",icon:"v-icon-chart-line",data:[{name:"VBasicLine",alias:"基本折线图",img:"//files.pengxiaotian.com/com/basic-line.png",used:!0},{name:"VBasicArea",alias:"区域图",img:"//files.pengxiaotian.com/com/basic-area.png",used:!0}]},i={type:"pie",name:"饼图",icon:"v-icon-chart-pie",data:[{name:"VBasicPie",alias:"基本饼图",img:"//files.pengxiaotian.com/com/basic-pie.png",used:!0},{name:"VPieOneValue",alias:"指标占比图",img:"//files.pengxiaotian.com/com/pie-one-value.png",used:!0}]},o={type:"map",name:"地图",icon:"v-icon-map",data:[{name:"VChina2d",alias:"基础平面地图",img:"//files.pengxiaotian.com/com/2d-china.png",used:!0,children:[{name:"VChina2dEffectScatter",alias:"动态气泡层",img:"//files.pengxiaotian.com/com/2d-china.png",used:!0},{name:"VChina2dFlyLines",alias:"飞线层",img:"//files.pengxiaotian.com/com/2d-china.png",used:!0}]},{name:"VBasicLine",alias:"世界",img:"//files.pengxiaotian.com/com/3d-world.png",used:!1}]},c={type:"img",name:"图片",icon:"v-icon-img",data:[{name:"VMainImg",alias:"单张图片",img:"//files.pengxiaotian.com/com/main-img.png",used:!0}]},u={type:"title",name:"标题",icon:"v-icon-title",data:[{name:"VMainTitle",alias:"通用标题",img:"//files.pengxiaotian.com/com/main-title.png",used:!0},{name:"VMarquee",alias:"跑马灯",img:"//files.pengxiaotian.com/com/marquee.png",used:!0},{name:"VWordCloud",alias:"词云",img:"//files.pengxiaotian.com/com/word-cloud.png",used:!0},{name:"VNumberTitleFlop",alias:"数字翻牌器",img:"//files.pengxiaotian.com/com/number-title-flop.png",used:!0},{name:"VParagraph",alias:"多行文本",img:"//files.pengxiaotian.com/com/paragraph.png",used:!0},{name:"VPercentageBar",alias:"进度条",img:"//files.pengxiaotian.com/com/percentage-bar.png",used:!0},{name:"VTimer",alias:"时间器",img:"//files.pengxiaotian.com/com/timer.png",used:!0}]},r={type:"list",name:"列表",icon:"v-icon-list",data:[{name:"VCarouselTable",alias:"轮播列表",img:"//files.pengxiaotian.com/com/carousel-table.png",used:!0},{name:"VTableBar",alias:"轮播列表柱状图",img:"//files.pengxiaotian.com/com/table-bar.png",used:!0}]},d={type:"relation",name:"关系",icon:"v-icon-relation",data:[{name:"VTree",alias:"树图",img:"//files.pengxiaotian.com/com/tree.png",used:!0}]},b={type:"material",name:"素材",icon:"v-icon-material",data:[{name:"VDecoration",alias:"装饰",img:"//files.pengxiaotian.com/com/decoration.png",used:!0},{name:"VBorderBox",alias:"边框",img:"//files.pengxiaotian.com/com/border-box.png",used:!0},{name:"VBGBox",alias:"自定义背景",img:"//files.pengxiaotian.com/com/bg-box.png",used:!0}]},s={type:"interact",name:"交互",icon:"v-icon-interact",data:[{name:"VTabList",alias:"Tab列表",img:"//files.pengxiaotian.com/com/tab-list.png",used:!0},{name:"VFullScreen",alias:"全屏切换",img:"//files.pengxiaotian.com/com/full-screen.png",used:!0},{name:"VTabSelect",alias:"Tab选择器",img:"//files.pengxiaotian.com/com/tab-select.png",used:!0}]},p={type:"other",name:"其他",icon:"v-icon-other",data:[{name:"VDatePicker",alias:"日期选择器",img:"//files.pengxiaotian.com/com/date-picker.jpg",used:!0}]},m=[{type:"regular",name:"常规图表",icon:"v-icon-chart",data:[a,l,i]},{type:"map",name:"地图",icon:"v-icon-map",data:[o]},{type:"media",name:"媒体",icon:"v-icon-media",data:[c]},{type:"text",name:"文本",icon:"v-icon-font",data:[u,r]},{type:"relation",name:"关系网络",icon:"v-icon-relation",data:[d]},{type:"material",name:"素材",icon:"v-icon-material",data:[b]},{type:"interact",name:"交互",icon:"v-icon-interact",data:[s]},{type:"other",name:"其他",icon:"v-icon-other",data:[p]}];function f(e){for(var t=0;t<m.length;t++)for(var n=m[t],a=0;a<n.data.length;a++){var l=n.data[a],i=l.data.find((function(t){return t.name===e}));if(i)return{classification:n,category:l,com:i}}return null}}}]);
//# sourceMappingURL=chunk-b8ee92d0.5d9e06df.js.map