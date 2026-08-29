import{F as e,G as t,I as n,L as r,P as i,V as a,X as o,Y as s,at as c,d as l,i as u,j as d,k as f,lt as p,ot as m,p as h,u as g,v as _}from"./CySbjV0w.js";import"./xihTtKlq.js";var v=d(`<div><input type="text" class="
      input-compact
      text-right
      tabular-nums
      pr-6
    "/></div>`);function y(i,d){m(d,!0);let y=u(d,`placeholder`,3,``),b=u(d,`class`,3,``),x=o(!1);function S(e){return Number(e||0).toLocaleString()}function C(e){return Number(e.replace(/,/g,``))||0}function w(e){let t=e.currentTarget,n=C(t.value);d.min!==void 0&&(n=Math.max(d.min,n)),d.max!==void 0&&(n=Math.min(d.max,n)),d.onchange?.(n)}var T=v(),E=t(T);g(E),p(T),a(e=>{_(T,1,`relative ${b()}`),l(E,`id`,d.id),h(E,e),l(E,`placeholder`,y())},[()=>r(x)?d.value:S(d.value)]),n(`focus`,E,()=>s(x,!0)),n(`blur`,E,()=>s(x,!1)),e(`input`,E,w),e(`keydown`,E,function(...e){d.onkeydown?.apply(this,e)}),f(i,T),c()}i([`input`,`keydown`]);export{y as t};