import{r as s,j as e,c as d,F as h,T as a,B as g,a as k,M as E,b as B,d as b,E as w,e as S}from"./App-ByudrTpx.js";function y({onTransform:l,onEmojiSelect:n,onHandleBullets:t}){const[r,c]=s.useState(!1),[x,i]=s.useState(!1),[u,p]=s.useState(!1),[j,m]=s.useState(!1),f=()=>{m(!j)};return e.jsxs("div",{className:d("flex items-center justify-center bg-base-100 text-neutral-900 my-1 p-1 space-x-2 group z-50"),children:[e.jsx(h,{onTransform:l}),e.jsx(a,{id:"moreBtn",icon:e.jsx(g,{}),label:"More formatting options",onClick:()=>{c(!r),i(!1),p(!1)}}),e.jsx(a,{id:"quoteBtn",icon:e.jsx(k,{}),label:"Blockquote",onClick:()=>t("blockquote")}),e.jsx(a,{id:"emojiBtn",icon:e.jsx(E,{}),label:"Emoji",onClick:f}),r&&e.jsx(B,{onTransform:l}),x&&e.jsx(b,{onHandleBullets:t}),u&&e.jsx("div",{className:"grid grid-rows-2 grid-flow-col items-center p-2 bg-transparent absolute mt-28 gap-1",children:[...Array(10).keys()].map(o=>e.jsx(a,{id:`num${o}Btn`,icon:`${o}️`,onClick:()=>t(`num${o}`)},`${o}️⃣`))}),j&&e.jsxs("div",{className:d("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"),children:[e.jsx("span",{className:d("flex items-center fixed z-50 -top-5 right-1 cursor-pointer px-2 font-mono"),onClick:()=>{m(!1)},children:"<Close Emoji Picker>"}),e.jsx(w,{reactionsDefaultOpen:!1,emojiStyle:"google",suggestedEmojisMode:"recent",height:400,width:300,onEmojiClick:(o,P)=>{n(o.emoji),m(!1)}})]})]})}console.clear();console.log("Content script loaded");async function C(){const n=await new Promise(c=>{const x=setInterval(()=>{const i=document.querySelector('.ql-editor[role="textbox"]');i&&(clearInterval(x),c(i))},500)}),t=document.createElement("div");t.id="react-tool-palette",n.parentElement.insertBefore(t,n),S(t).render(e.jsx(s.StrictMode,{children:e.jsx(y,{})})),console.log("ToolPalette injected into LinkedIn post editor.")}C();
