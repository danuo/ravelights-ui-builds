import{as as c,at as s,G as i,R as m,z as r,A as d,J as t,E as u,X as f,au as l,av as v}from"./index.31c89960.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";const y={__name:"FancyToggleComponent",props:c({callback:Function,label:String,icon:String,fancy:Boolean,muted:Boolean},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=s(e,"modelValue");function o(){a.value=!a.value,n.callback&&n.callback()}const n=e;return(b,p)=>i((r(),d("div",{class:l(["container relative-position non-selectable flex justify-start",{active:a.value,fancy:e.fancy,muted:e.muted}]),onClick:o},[t("div",{class:l(["icon-box row items-center q-pl-md",{"q-pr-md":e.fancy}])},[u(f,{size:"sm",name:e.icon},null,8,["name"])],2),t("div",{class:l(["row items-center",{"q-pl-md":e.fancy,"q-pl-sm":!e.fancy}])},v(e.label),3)],2)),[[m]])}};var B=g(y,[["__scopeId","data-v-53bba1a9"]]);export{B as F};
