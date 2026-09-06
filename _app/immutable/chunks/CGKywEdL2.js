import{G as e,I as t,L as n,N as r,R as i,X as a,d as o,dt as s,et as c,f as l,ht as u,i as d,j as f,m as p,tt as m,ut as h,y as g,z as _}from"./D8BtiOd6.js";import"./xihTtKlq.js";var v=r(`<div><input type="text" class="
      input-compact
      text-right
      tabular-nums
      pr-6
    "/></div>`);function y(t,r){s(r,!0);let y=d(r,`placeholder`,3,``),b=d(r,`class`,3,``),x=m(!1);function S(e){return Number(e||0).toLocaleString()}function C(e){return Number(e.replace(/,/g,``))||0}function w(e){let t=e.currentTarget,n=C(t.value);r.min!==void 0&&(n=Math.max(r.min,n)),r.max!==void 0&&(n=Math.min(r.max,n)),r.onchange?.(n)}var T=v(),E=a(T);o(E),u(T),e(e=>{g(T,1,`relative ${b()}`),l(E,`id`,r.id),p(E,e),l(E,`placeholder`,y())},[()=>_(x)?r.value:S(r.value)]),i(`focus`,E,()=>c(x,!0)),i(`blur`,E,()=>c(x,!1)),n(`input`,E,w),n(`keydown`,E,function(...e){r.onkeydown?.apply(this,e)}),f(t,T),h()}t([`input`,`keydown`]);export{y as t};