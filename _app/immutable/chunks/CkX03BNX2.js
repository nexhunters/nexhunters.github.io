import{$ as e,A as t,F as n,I as r,L as i,M as a,R as o,W as s,Y as c,d as l,et as u,i as d,lt as f,mt as p,p as m,u as h,ut as g,v as _}from"./DkyrMPkq.js";import"./xihTtKlq.js";var v=a(`<div><input type="text" class="
      input-compact
      text-right
      tabular-nums
      pr-6
    "/></div>`);function y(n,a){g(a,!0);let y=d(a,`placeholder`,3,``),b=d(a,`class`,3,``),x=u(!1);function S(e){return Number(e||0).toLocaleString()}function C(e){return Number(e.replace(/,/g,``))||0}function w(e){let t=e.currentTarget,n=C(t.value);a.min!==void 0&&(n=Math.max(a.min,n)),a.max!==void 0&&(n=Math.min(a.max,n)),a.onchange?.(n)}var T=v(),E=c(T);h(E),p(T),s(e=>{_(T,1,`relative ${b()}`),l(E,`id`,a.id),m(E,e),l(E,`placeholder`,y())},[()=>o(x)?a.value:S(a.value)]),i(`focus`,E,()=>e(x,!0)),i(`blur`,E,()=>e(x,!1)),r(`input`,E,w),r(`keydown`,E,function(...e){a.onkeydown?.apply(this,e)}),t(n,T),f()}n([`input`,`keydown`]);export{y as t};