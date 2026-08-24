import{$ as e,A as t,C as n,F as r,O as i,Q as a,T as o,U as s,W as c,c as l,i as u,j as d,k as f,m as p,nt as m,s as h,u as g,z as _}from"./NS1LoXqH.js";import"./xihTtKlq.js";var v=o(`<div><input type="text" class="
      input-compact
      text-right
      tabular-nums
      pr-6
    "/></div>`);function y(i,o){e(o,!0);let y=u(o,`placeholder`,3,``),b=u(o,`class`,3,``),x=c(!1);function S(e){return Number(e||0).toLocaleString()}function C(e){return Number(e.replace(/,/g,``))||0}function w(e){let t=e.currentTarget,n=C(t.value);o.min!==void 0&&(n=Math.max(o.min,n)),o.max!==void 0&&(n=Math.min(o.max,n)),o.onchange?.(n)}var T=v(),E=_(T);h(E),m(T),r(e=>{p(T,1,`relative ${b()}`),l(E,`id`,o.id),g(E,e),l(E,`placeholder`,y())},[()=>d(x)?o.value:S(o.value)]),t(`focus`,E,()=>s(x,!0)),t(`blur`,E,()=>s(x,!1)),f(`input`,E,w),n(i,T),a()}i([`input`]);export{y as t};