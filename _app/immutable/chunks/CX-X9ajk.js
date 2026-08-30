import{A as e,F as t,H as n,I as r,K as i,L as a,M as o,R as s,X as c,Z as l,d as u,i as d,ot as f,p,st as m,u as h,ut as g,v as _}from"./C5h6pZMf.js";import"./xihTtKlq.js";var v=o(`<div><input type="text" class="
      input-compact
      text-right
      tabular-nums
      pr-6
    "/></div>`);function y(t,o){m(o,!0);let y=d(o,`placeholder`,3,``),b=d(o,`class`,3,``),x=l(!1);function S(e){return Number(e||0).toLocaleString()}function C(e){return Number(e.replace(/,/g,``))||0}function w(e){let t=e.currentTarget,n=C(t.value);o.min!==void 0&&(n=Math.max(o.min,n)),o.max!==void 0&&(n=Math.min(o.max,n)),o.onchange?.(n)}var T=v(),E=i(T);h(E),g(T),n(e=>{_(T,1,`relative ${b()}`),u(E,`id`,o.id),p(E,e),u(E,`placeholder`,y())},[()=>s(x)?o.value:S(o.value)]),a(`focus`,E,()=>c(x,!0)),a(`blur`,E,()=>c(x,!1)),r(`input`,E,w),r(`keydown`,E,function(...e){o.onkeydown?.apply(this,e)}),e(t,T),f()}t([`input`,`keydown`]);export{y as t};