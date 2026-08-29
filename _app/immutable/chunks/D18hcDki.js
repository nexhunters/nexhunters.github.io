import{A as e,D as t,G as n,K as r,L as i,M as a,N as o,T as s,V as c,at as l,c as u,h as d,i as f,j as p,nt as m,s as h,tt as g,u as _}from"./Ctm3nevV.js";import"./xihTtKlq.js";var v=t(`<div><input type="text" class="
      input-compact
      text-right
      tabular-nums
      pr-6
    "/></div>`);function y(e,t){m(t,!0);let y=f(t,`placeholder`,3,``),b=f(t,`class`,3,``),x=r(!1);function S(e){return Number(e||0).toLocaleString()}function C(e){return Number(e.replace(/,/g,``))||0}function w(e){let n=e.currentTarget,r=C(n.value);t.min!==void 0&&(r=Math.max(t.min,r)),t.max!==void 0&&(r=Math.min(t.max,r)),t.onchange?.(r)}var T=v(),E=c(T);h(E),l(T),i(e=>{d(T,1,`relative ${b()}`),u(E,`id`,t.id),_(E,e),u(E,`placeholder`,y())},[()=>o(x)?t.value:S(t.value)]),a(`focus`,E,()=>n(x,!0)),a(`blur`,E,()=>n(x,!1)),p(`input`,E,w),p(`keydown`,E,function(...e){t.onkeydown?.apply(this,e)}),s(e,T),g()}e([`input`,`keydown`]);export{y as t};