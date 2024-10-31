(()=>{"use strict";var e,t={316:()=>{const e=window.wp.blocks,t=window.React,M=window.wp.i18n,c=window.wp.blockEditor,L=window.wp.components;window.wp.data;const a=JSON.parse('{"UU":"create-block/perfect-portal-intake-form"}'),l=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 1024 1024"},(0,t.createElement)("g",null,(0,t.createElement)("path",{d:"M1019.9,512C1019.9,231.5,792.5,4.1,512,4.1S4.1,231.5,4.1,512c0,96.1,26.7,186,73.1,262.6V539.5 c-0.6-9.1-0.9-18.3-0.9-27.5C76.3,271.4,271.4,76.3,512,76.3S947.7,271.4,947.7,512S752.6,947.7,512,947.7 c-12.9,0-25.6-0.7-38.2-1.8v72.4c12.6,0.9,25.3,1.6,38.2,1.6C792.5,1019.9,1019.9,792.5,1019.9,512"}),(0,t.createElement)("path",{d:"M234.3,1018h-75.7V513.1c0-94.6,36.7-183.7,103.5-250.7c66.8-67,155.5-103.8,249.9-103.8 c94.4,0,183.1,36.9,249.9,103.8c66.8,66.9,103.5,155.9,103.5,250.7c0,94.7-36.8,183.7-103.5,250.6 c-66.7,67-155.5,103.8-249.9,103.8h-37.8v-75.7H512c74.1,0,143.8-29,196.3-81.6c52.5-52.7,81.4-122.7,81.4-197.2 c0-74.5-28.9-144.6-81.4-197.2c-52.4-52.6-122.1-81.6-196.3-81.6c-74.1,0-143.8,29-196.3,81.6c-52.5,52.7-81.4,122.7-81.4,197.2 V1018z"}),(0,t.createElement)("path",{d:"M392.8,1018h-75.7V512.2c0-51.9,20.3-100.7,57.2-137.4c36.8-36.6,85.7-56.7,137.6-56.7 c52,0,100.8,20.1,137.6,56.7c36.9,36.6,57.2,85.4,57.3,137.3c0,52-20.4,100.8-57.3,137.5c-35.6,35.4-82.9,55.5-133.2,56.6 l-37.8,0.8l-1.6-75.7l37.8-0.8c30.8-0.7,59.7-13,81.5-34.6c22.5-22.4,34.9-52.1,34.9-83.8c0-31.6-12.4-61.3-34.9-83.7 c-22.5-22.4-52.4-34.7-84.2-34.7c-31.8,0-61.8,12.3-84.3,34.7c-22.5,22.3-34.9,52.1-34.9,83.7V1018z"})));(0,e.registerBlockType)(a.UU,{edit:function({attributes:e,setAttributes:a}){const{perfectPortalRegion:l,leadIntakeGuid:i}=e,r=(0,c.useBlockProps)({className:"pp-preview"});return(0,t.createElement)("div",null,(0,t.createElement)(c.InspectorControls,null,(0,t.createElement)(L.PanelBody,{title:(0,M.__)("Settings","perfect-portal-intake-form-widget")},(0,t.createElement)(L.SelectControl,{label:(0,M.__)("Intake Form Region","perfect-portal-widgets"),options:[{value:"",label:"Select a Region",disabled:!0},{label:"Australia",value:"au"},{label:"Canada",value:"ca"},{label:"New Zealand",value:"nz"},{label:"United Kingdom",value:"uk"},{label:"United States",value:"us"}],value:l||"",onChange:e=>a({perfectPortalRegion:e})}),(0,t.createElement)(L.TextControl,{label:(0,M.__)("Intake Form Guid","perfect-portal-widgets"),value:i||"",onChange:e=>a({leadIntakeGuid:e})}))),(0,t.createElement)("div",{...r,"data-perfect-portal":i},(0,t.createElement)("div",{style:{border:"solid 1px black",padding:"5px",display:"flex"}},(0,t.createElement)("img",{src:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDI0IDEwMjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNMTAxOS45LDUxMkMxMDE5LjksMjMxLjUsNzkyLjUsNC4xLDUxMiw0LjFTNC4xLDIzMS41LDQuMSw1MTJjMCw5Ni4xLDI2LjcsMTg2LDczLjEsMjYyLjZWNTM5LjUgYy0wLjYtOS4xLTAuOS0xOC4zLTAuOS0yNy41Qzc2LjMsMjcxLjQsMjcxLjQsNzYuMyw1MTIsNzYuM1M5NDcuNywyNzEuNCw5NDcuNyw1MTJTNzUyLjYsOTQ3LjcsNTEyLDk0Ny43IGMtMTIuOSwwLTI1LjYtMC43LTM4LjItMS44djcyLjRjMTIuNiwwLjksMjUuMywxLjYsMzguMiwxLjZDNzkyLjUsMTAxOS45LDEwMTkuOSw3OTIuNSwxMDE5LjksNTEyIi8+PHBhdGggZD0iTTIzNC4zLDEwMThoLTc1LjdWNTEzLjFjMC05NC42LDM2LjctMTgzLjcsMTAzLjUtMjUwLjdjNjYuOC02NywxNTUuNS0xMDMuOCwyNDkuOS0xMDMuOCBjOTQuNCwwLDE4My4xLDM2LjksMjQ5LjksMTAzLjhjNjYuOCw2Ni45LDEwMy41LDE1NS45LDEwMy41LDI1MC43YzAsOTQuNy0zNi44LDE4My43LTEwMy41LDI1MC42IGMtNjYuNyw2Ny0xNTUuNSwxMDMuOC0yNDkuOSwxMDMuOGgtMzcuOHYtNzUuN0g1MTJjNzQuMSwwLDE0My44LTI5LDE5Ni4zLTgxLjZjNTIuNS01Mi43LDgxLjQtMTIyLjcsODEuNC0xOTcuMiBjMC03NC41LTI4LjktMTQ0LjYtODEuNC0xOTcuMmMtNTIuNC01Mi42LTEyMi4xLTgxLjYtMTk2LjMtODEuNmMtNzQuMSwwLTE0My44LDI5LTE5Ni4zLDgxLjZjLTUyLjUsNTIuNy04MS40LDEyMi43LTgxLjQsMTk3LjIgVjEwMTh6Ii8+PHBhdGggZD0iTTM5Mi44LDEwMThoLTc1LjdWNTEyLjJjMC01MS45LDIwLjMtMTAwLjcsNTcuMi0xMzcuNGMzNi44LTM2LjYsODUuNy01Ni43LDEzNy42LTU2LjcgYzUyLDAsMTAwLjgsMjAuMSwxMzcuNiw1Ni43YzM2LjksMzYuNiw1Ny4yLDg1LjQsNTcuMywxMzcuM2MwLDUyLTIwLjQsMTAwLjgtNTcuMywxMzcuNWMtMzUuNiwzNS40LTgyLjksNTUuNS0xMzMuMiw1Ni42IGwtMzcuOCwwLjhsLTEuNi03NS43bDM3LjgtMC44YzMwLjgtMC43LDU5LjctMTMsODEuNS0zNC42YzIyLjUtMjIuNCwzNC45LTUyLjEsMzQuOS04My44YzAtMzEuNi0xMi40LTYxLjMtMzQuOS04My43IGMtMjIuNS0yMi40LTUyLjQtMzQuNy04NC4yLTM0LjdjLTMxLjgsMC02MS44LDEyLjMtODQuMywzNC43Yy0yMi41LDIyLjMtMzQuOSw1Mi4xLTM0LjksODMuN1YxMDE4eiIvPjwvZz48L3N2Zz4NCg=="}),(0,t.createElement)("span",{style:{paddingInlineStart:"15px"}},(0,t.createElement)("b",null,"Perfect Portal Intake Form"),(0,t.createElement)("br",null),"Intake Form Guid: ",i))))},save:function({attributes:e}){const{perfectPortalRegion:M,leadIntakeGuid:L}=e;let a="//cdn.perfectportal.co.uk/widgets/intake/production/"+M+"/index.js";return(0,t.createElement)("div",{class:"wp-block-create-block-perfect-portal-widgets",...c.useBlockProps.save()},(0,t.createElement)("script",{src:a,type:"module"}),(0,t.createElement)("div",{"data-pp-guid":L}))},icon:l})}},M={};function c(e){var L=M[e];if(void 0!==L)return L.exports;var a=M[e]={exports:{}};return t[e](a,a.exports,c),a.exports}c.m=t,e=[],c.O=(t,M,L,a)=>{if(!M){var l=1/0;for(n=0;n<e.length;n++){for(var[M,L,a]=e[n],i=!0,r=0;r<M.length;r++)(!1&a||l>=a)&&Object.keys(c.O).every((e=>c.O[e](M[r])))?M.splice(r--,1):(i=!1,a<l&&(l=a));if(i){e.splice(n--,1);var u=L();void 0!==u&&(t=u)}}return t}a=a||0;for(var n=e.length;n>0&&e[n-1][2]>a;n--)e[n]=e[n-1];e[n]=[M,L,a]},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={419:0,731:0};c.O.j=t=>0===e[t];var t=(t,M)=>{var L,a,[l,i,r]=M,u=0;if(l.some((t=>0!==e[t]))){for(L in i)c.o(i,L)&&(c.m[L]=i[L]);if(r)var n=r(c)}for(t&&t(M);u<l.length;u++)a=l[u],c.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return c.O(n)},M=globalThis.webpackChunkperfect_portal_widgets=globalThis.webpackChunkperfect_portal_widgets||[];M.forEach(t.bind(null,0)),M.push=t.bind(null,M.push.bind(M))})();var L=c.O(void 0,[731],(()=>c(316)));L=c.O(L)})();