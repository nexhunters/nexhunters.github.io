import{$ as e,A as t,B as n,E as r,G as i,I as a,M as o,W as s,c,et as l,h as u,i as d,j as f,k as p,rt as m,s as h,u as g,w as _}from"./2cBuABIn.js";import"./xihTtKlq.js";var v=r(`<div><input type="text" class="
      input-compact
      text-right
      tabular-nums
      pr-6
    "/></div>`);function y(r,p){l(p,!0);let y=d(p,`placeholder`,3,``),b=d(p,`class`,3,``),x=i(!1);function S(e){return Number(e||0).toLocaleString()}function C(e){return Number(e.replace(/,/g,``))||0}function w(e){let t=e.currentTarget,n=C(t.value);p.min!==void 0&&(n=Math.max(p.min,n)),p.max!==void 0&&(n=Math.min(p.max,n)),p.onchange?.(n)}var T=v(),E=n(T);h(E),m(T),a(e=>{u(T,1,`relative ${b()}`),c(E,`id`,p.id),g(E,e),c(E,`placeholder`,y())},[()=>o(x)?p.value:S(p.value)]),f(`focus`,E,()=>s(x,!0)),f(`blur`,E,()=>s(x,!1)),t(`input`,E,w),t(`keydown`,E,function(...e){p.onkeydown?.apply(this,e)}),_(r,T),e()}p([`input`,`keydown`]);export{y as t};