import{B as e,C as t,D as n,E as r,F as i,J as a,M as o,O as s,T as c,X as l,c as u,i as d,m as f,q as p,s as m,u as h,x as g,z as _}from"./B9C67q8w.js";import"./xihTtKlq.js";var v=t(`<div><input type="text" class="
      input-compact
      text-right
      tabular-nums
      pr-6
    "/></div>`);function y(t,c){a(c,!0);let y=d(c,`placeholder`,3,``),b=d(c,`class`,3,``),x=e(!1);function S(e){return Number(e||0).toLocaleString()}function C(e){return Number(e.replace(/,/g,``))||0}function w(e){let t=e.currentTarget,n=C(t.value);c.min!==void 0&&(n=Math.max(c.min,n)),c.max!==void 0&&(n=Math.min(c.max,n)),c.onchange?.(n)}var T=v(),E=i(T);m(E),l(T),o(e=>{f(T,1,`relative ${b()}`),h(E,e),u(E,`placeholder`,y())},[()=>s(x)?c.value:S(c.value)]),n(`focus`,E,()=>_(x,!0)),n(`blur`,E,()=>_(x,!1)),r(`input`,E,w),g(t,T),p()}c([`input`]);export{y as t};