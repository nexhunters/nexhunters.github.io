import{H as e,L as t,M as n,P as r,R as i,Y as a,_t as o,at as s,d as c,f as l,gt as u,i as d,m as f,ot as p,tt as m,xt as h,y as g,z as _}from"./C61ONDLo.js";import"./xihTtKlq.js";var v=r(`<div><input type="text" class="
      input-compact
      text-right
      tabular-nums
      pr-6
    "/></div>`);function y(t,r){o(r,!0);let y=d(r,`placeholder`,3,``),b=d(r,`class`,3,``),x=p(!1);function S(e){return Number(e||0).toLocaleString()}function C(e){return Number(e.replace(/,/g,``))||0}function w(e){let t=e.currentTarget,n=C(t.value);r.min!==void 0&&(n=Math.max(r.min,n)),r.max!==void 0&&(n=Math.min(r.max,n)),r.onchange?.(n)}var T=v(),E=m(T);c(E),h(T),a(e=>{g(T,1,`relative ${b()}`),l(E,`id`,r.id),f(E,e),l(E,`placeholder`,y())},[()=>e(x)?r.value:S(r.value)]),_(`focus`,E,()=>s(x,!0)),_(`blur`,E,()=>s(x,!1)),i(`input`,E,w),i(`keydown`,E,function(...e){r.onkeydown?.apply(this,e)}),n(t,T),u()}t([`input`,`keydown`]);export{y as t};