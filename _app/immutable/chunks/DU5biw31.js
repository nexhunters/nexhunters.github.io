import{B as e,C as t,D as n,E as r,I as i,J as a,M as o,O as s,Q as c,T as l,V as u,Y as d,c as f,i as p,m,s as h,u as g,x as _}from"./CPY6OQDp.js";import"./xihTtKlq.js";var v=t(`<div><input type="text" class="
      input-compact
      text-right
      tabular-nums
      pr-6
    "/></div>`);function y(t,l){d(l,!0);let y=p(l,`placeholder`,3,``),b=p(l,`class`,3,``),x=u(!1);function S(e){return Number(e||0).toLocaleString()}function C(e){return Number(e.replace(/,/g,``))||0}function w(e){let t=e.currentTarget,n=C(t.value);l.min!==void 0&&(n=Math.max(l.min,n)),l.max!==void 0&&(n=Math.min(l.max,n)),l.onchange?.(n)}var T=v(),E=i(T);h(E),c(T),o(e=>{m(T,1,`relative ${b()}`),f(E,`id`,l.id),g(E,e),f(E,`placeholder`,y())},[()=>s(x)?l.value:S(l.value)]),n(`focus`,E,()=>e(x,!0)),n(`blur`,E,()=>e(x,!1)),r(`input`,E,w),_(t,T),a()}l([`input`]);export{y as t};