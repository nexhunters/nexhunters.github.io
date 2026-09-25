var e=`kv`,t=null;function n(){return t||(t=new Promise((t,n)=>{let r=indexedDB.open(`nexhunter`,1);r.onupgradeneeded=()=>{let t=r.result;t.objectStoreNames.contains(e)||t.createObjectStore(e,{keyPath:`key`})},r.onsuccess=()=>t(r.result),r.onerror=()=>n(r.error??Error(`IndexedDB open failed`))}),t)}async function r(t,r){try{let i=await n();return await new Promise((n,a)=>{let o=r(i.transaction(e,t).objectStore(e));o.onsuccess=()=>n(o.result),o.onerror=()=>a(o.error??Error(`IndexedDB request failed`))})}catch{return null}}async function i(e){return(await r(`readonly`,t=>t.get(e)))?.value}async function a(e){let t=await r(`readonly`,t=>t.getAll(e)),n=new Map;for(let e of t??[])n.set(e.key,e.value);return n}async function o(e,t){await r(`readwrite`,n=>n.put({key:e,value:t}))}async function s(t){if(t.length!==0)try{let r=await n();await new Promise((n,i)=>{let a=r.transaction(e,`readwrite`),o=a.objectStore(e);for(let e of t)o.delete(e);a.oncomplete=()=>n(),a.onerror=()=>i(a.error??Error(`IndexedDB delete failed`)),a.onabort=()=>i(a.error??Error(`IndexedDB delete aborted`))})}catch{}}async function c(e){return(await r(`readonly`,t=>{let n=e?IDBKeyRange.bound(e,e+`￿`):void 0;return t.getAllKeys(n)})??[]).map(String)}var l=`
        id
        idMal
        title {
          romaji
          english
          native
        }
        coverImage {
          extraLarge
          large
          color
        }
        bannerImage
        description
        format
        episodes
        duration
        status
        averageScore
        popularity
        genres
        studios(isMain: true) {
          nodes {
            name
          }
        }
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        nextAiringEpisode {
          episode
          airingAt
          timeUntilAiring
        }
        trailer {
          id
          site
          thumbnail
        }
        source
        isAdult
`,u=`
        relations {
          edges {
            relationType
            node {
              id
              type
              format
              status
              title {
                romaji
                english
                native
              }
              coverImage {
                large
                color
              }
              startDate {
                year
                month
                day
              }
              averageScore
              popularity
              nextAiringEpisode {
                episode
                airingAt
              }
            }
          }
        }
`,ee=`
  query Season($season: MediaSeason, $seasonYear: Int, $page: Int, $format: MediaFormat, $formatNot: MediaFormat) {
    Page(page: $page, perPage: 50) {
      pageInfo {
        hasNextPage
        currentPage
      }
      media(
        season: $season
        seasonYear: $seasonYear
        type: ANIME
        sort: [POPULARITY_DESC]
        isAdult: false
        format: $format
        format_not: $formatNot
      ) {
        ${l}
        ${u}
      }
    }
  }
`,d=`
  query Watched($ids: [Int], $page: Int) {
    Page(page: $page, perPage: 50) {
      pageInfo {
        hasNextPage
        currentPage
      }
      media(id_in: $ids, type: ANIME) {
        ${l}
      }
    }
  }
`,f=`
  query GenreRecommendations($genres: [String], $page: Int) {
    Page(page: $page, perPage: 50) {
      pageInfo {
        hasNextPage
        currentPage
      }
      media(genre_in: $genres, type: ANIME, sort: [SCORE_DESC, POPULARITY_DESC], isAdult: false) {
        ${l}
        ${u}
      }
    }
  }
`,p=`
  query Calendar($ids: [Int], $from: Int, $to: Int, $page: Int) {
    Page(page: $page, perPage: 50) {
      pageInfo {
        hasNextPage
        currentPage
      }
      airingSchedules(
        mediaId_in: $ids
        airingAt_greater: $from
        airingAt_lesser: $to
        sort: TIME
      ) {
        id
        episode
        airingAt
        media {
          ${l}
        }
      }
    }
  }
`,m=[`WINTER`,`SPRING`,`SUMMER`,`FALL`],h={WINTER:`Winter`,SPRING:`Spring`,SUMMER:`Summer`,FALL:`Fall`};function g(e=new Date){let t=e.getMonth()+1;return{season:t<=3?`WINTER`:t<=6?`SPRING`:t<=9?`SUMMER`:`FALL`,seasonYear:e.getFullYear()}}function _(e,t){return`${h[e]} ${t}`}function v(e,t,n){let r=m.indexOf(e)+n;return{season:m[(r%4+4)%4],seasonYear:t+Math.floor(r/4)}}async function y(e,t){let n=null;for(let r=1;r<=3;r++){let i=await fetch(`https://graphql.anilist.co`,{method:`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:JSON.stringify({query:e,variables:t})});if(i.status===429)throw Error(`AniList request failed (429 Too Many Requests)`);try{if(i.status===500||i.status===502){let e=Number(i.headers.get(`Retry-After`));await b((Number.isFinite(e)?e:2)*1e3*r),n=Error(`AniList request failed (${i.status})`);continue}if(!i.ok)throw Error(`AniList request failed (${i.status})`);let e=await i.json();if(e.errors?.length)throw Error(e.errors[0].message);if(!e.data)throw Error(`AniList returned no data`);return e.data}catch(e){n=e instanceof Error?e:Error(String(e)),await b(500*r)}}throw n??Error(`AniList request failed`)}function b(e){return new Promise(t=>setTimeout(t,e))}async function x(e,t,n=1,r=`SERIES`){let i=await y(ee,{season:e,seasonYear:t,page:n,...r===`MOVIE`?{format:`MOVIE`}:{formatNot:`MOVIE`}});for(let e of i.Page.media)L(e);return i.Page}var S=`nexhunter.anilist.v8`,C=360*60*1e3,w=new Map;function T(e,t){return`${S}.season.${t}.${e}`}function E(e,t,n){return`${T(e,t)}.${n}`}async function D(e,t=C){let n=Date.now(),r=w.get(e);if(r&&n-r.cachedAt<t)return r.page;let a;try{a=await i(e)}catch{return null}if(a&&a.page){let r=a;if(n-r.cachedAt<t)return w.set(e,r),r.page}return null}async function O(e,t){let n={cachedAt:Date.now(),page:t};w.set(e,n);try{await o(e,n)}catch{}}async function k(e,t=C){let n=Date.now(),r=new Map,i=[];for(let a of e){let e=w.get(a);e&&n-e.cachedAt<t?r.set(a,e.page):i.push(a)}if(i.length>0)try{let e=await a(i);for(let[i,a]of e){let e=a;e?.page&&n-e.cachedAt<t&&(w.set(i,e),r.set(i,e.page))}}catch{}return r}async function A(e){for(let t of w.keys())t.startsWith(e)&&w.delete(t);try{let t=await c(e);t.length>0&&await s(t)}catch{}}var j=new Map,te=typeof location<`u`&&new URLSearchParams(location.search).has(`cacheDebug`);function M(e,t,n){te&&console.debug(`[cache] ${e}`,t,n??``)}async function N(e,t,n){let r=await D(e,t);if(r)return M(`hit`,e),r;M(`miss`,e);let i=j.get(e);if(i)return M(`in-flight share`,e),i;let a=n().then(async t=>(await O(e,t),M(`write`,e),j.delete(e),t)).catch(t=>{throw M(`error`,e,t instanceof Error?t.message:String(t)),j.delete(e),t});return j.set(e,a),a}function P(e,t){A(T(e,t))}var F=`
  query Media($id: Int) {
    Media(id: $id, type: ANIME) {
      ${l}
      ${u}
    }
  }
`;function I(e){return`${S}.media.${e}`}function L(e){O(I(e.id),e)}async function R(e){return N(I(e),C,async()=>{let t=await y(F,{id:e});if(!t.Media)throw Error(`Media not found`);return t.Media})}async function z(e){if(e.length===0)return[];let t=[...new Set(e)],n=new Map,r=[],i=await k(t.map(e=>I(e)));for(let e of t){let t=i.get(I(e));t?n.set(e,t):r.push(e)}if(r.length>0){let e=`
          query MediaBatch($ids: [Int], $page: Int) {
            Page(page: $page, perPage: 50) {
              pageInfo { hasNextPage currentPage }
              media(id_in: $ids, type: ANIME) {
                ${l}
                ${u}
              }
            }
          }
        `;for(let t=0;t<r.length;t+=50){let i=r.slice(t,t+50),a=`batch|${[...i].sort((e,t)=>e-t).join(`,`)}`,o=j.get(a);if(o){for(let e of await o)n.set(e.id,e);continue}let s=(async()=>{let t=[],r=1,a=!0;for(;a&&r<=20;){let o=await y(e,{ids:i,page:r});for(let e of o.Page.media)n.has(e.id)||n.set(e.id,e),L(e),t.push(e);if(a=o.Page.pageInfo.hasNextPage,o.Page.media.length===0)break;r++}return t})().finally(()=>j.delete(a));j.set(a,s),await s}}return t.map(e=>n.get(e)).filter(e=>e!==void 0)}async function B(e,t,n=`SERIES`){return N(E(e,t,n),C,()=>x(e,t,1,n))}async function V(e,t,n,r=`SERIES`){return n<=1?B(e,t,r):N(`${E(e,t,r)}.p${n}`,C,()=>x(e,t,n,r))}async function H(e){if(e.length===0)return[];let t=[],n=new Set,r=1,i=!0;for(;i&&r<=20;){let a=await y(d,{ids:e,page:r});for(let e of a.Page.media)n.has(e.id)||(n.add(e.id),t.push(e));if(i=a.Page.pageInfo.hasNextPage,a.Page.media.length===0)break;r++}return t}async function U(e){if(e.length===0)return[];let t=q(e),n=await D(t,C);if(n)return n.media;let r=j.get(t);if(r)return await r;let i=(async()=>{let n=await k(e.map(e=>I(e))),r=e.filter(e=>!n.has(I(e))),i=r.length>0?await H(r):[],a=new Map;for(let[e,t]of n){let n=Number(e.slice(e.lastIndexOf(`.`)+1));Number.isNaN(n)||a.set(n,t)}for(let e of i)a.set(e.id,e);let o=e.map(e=>a.get(e)).filter(e=>e!==void 0);return await O(t,{pageInfo:{hasNextPage:!1,currentPage:1},media:o}),o})().finally(()=>j.delete(t));return j.set(t,i),i}async function W(e,t=1){return e.length===0?{pageInfo:{hasNextPage:!1,currentPage:1},media:[]}:N(`${S}.genres.${t}.${[...e].sort().join(`,`)}`,C,async()=>{let n=await y(f,{genres:e,page:t});for(let e of n.Page.media)L(e);return n.Page})}function G(e,t){e.length!==0&&O(q(e),{pageInfo:{hasNextPage:!1,currentPage:1},media:t})}function K(e){if(e.length===0)return;let t=q(e);w.delete(t);for(let t of e)w.delete(I(t));A(`${S}.watched.`),A(`${S}.media.`)}function q(e){return`${S}.watched.${[...e].sort((e,t)=>e-t).join(`,`)}`}var J=1488*60*60*1e3,Y=1536*60*60*1e3,X=1440*60*1e3;async function Z(e,t,n){if(e.length===0||n<=t)return[];let r=[],i=1,a=!0;for(;a&&i<=20;){let o=await y(p,{ids:e,from:t,to:n,page:i});if(r.push(...o.Page.airingSchedules),a=o.Page.pageInfo.hasNextPage,o.Page.airingSchedules.length===0)break;i++}return r}async function ne(e,t,n){return N($(e,t),X,()=>Z(e,t,n))}function Q(e,t,n){e.length!==0&&O($(e,t),n)}function re(e,t){if(e.length===0)return;let n=$(e,t);w.delete(n),A(`${S}.calendar.`)}function $(e,t){let n=new Date(t*1e3).toISOString().slice(0,10);return`${S}.calendar.${[...e].sort((e,t)=>e-t).join(`,`)}.${n}`}function ie(e){switch(e){case`RELEASING`:return{text:`Airing`,className:`b-air`};case`NOT_YET_RELEASED`:return{text:`Upcoming`,className:`b-new`};case`FINISHED`:return{text:`Finished`,className:`b-done`};case`CANCELLED`:return{text:`Cancelled`,className:`b-hold`};case`HIATUS`:return{text:`Hiatus`,className:`b-hold`};default:return{text:e??`Unknown`,className:`b-unknown`}}}function ae(e){switch(e){case`TV`:return`TV`;case`TV_SHORT`:return`TV Short`;case`MOVIE`:return`Movie`;case`OVA`:return`OVA`;case`ONA`:return`ONA`;case`SPECIAL`:return`Special`;case`MUSIC`:return`Music`;default:return e??`-`}}function oe(e){switch(e){case`ORIGINAL`:return`Original`;case`MANGA`:return`Manga`;case`LIGHT_NOVEL`:return`Light Novel`;case`NOVEL`:return`Novel`;case`ONE_SHOT`:return`One-shot`;case`GAME`:return`Game`;case`VISUAL_NOVEL`:return`Visual Novel`;case`WEB_MANGA`:return`Web Manga`;case`OTHER`:return`Other`;default:return e??`-`}}function se(e){return e.studios.nodes.map(e=>e.name).join(`, `)||`Unknown`}function ce(e,t=new Set){let n=(e.relations?.edges??[]).find(e=>e.relationType===`PREQUEL`&&e.node.type===`ANIME`);return n&&t.has(n.node.id)?{isContinuation:!0,label:`Sequel to ${n.node.title.english??n.node.title.romaji}`,targetId:n.node.id}:{isContinuation:!1,label:null,targetId:null}}function le(e){if(!e?.year)return`-`;let t=e.month??1,n=e.day??1;return new Date(e.year,t-1,n).toLocaleDateString(void 0,{year:`numeric`,month:`short`,day:`numeric`})}function ue(e){let t=e.nextAiringEpisode;if(!t)return{text:``,at:null};let n=Math.max(t.timeUntilAiring,0),r=Math.floor(n/86400),i=Math.floor(n%86400/3600),a=Math.floor(n%3600/60);return{text:e.format===`MOVIE`?r>0?`Premieres in ${r}d ${i}h`:i>0?`Premieres in ${i}h ${a}m`:`Premieres in ${a}m`:r>0?`Ep ${t.episode} in ${r}d ${i}h`:i>0?`Ep ${t.episode} in ${i}h ${a}m`:`Ep ${t.episode} in ${a}m`,at:new Date(t.airingAt*1e3).toLocaleString(void 0,{weekday:`short`,month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`})}}function de(e){return e.title.romaji??e.title.native??`Anime #${e.id}`}export{_ as C,se as D,ie as E,G as S,oe as T,V as _,K as a,ce as b,Z as c,ae as d,ne as f,B as g,z as h,P as i,H as l,R as m,J as n,g as o,W as p,re as r,le as s,Y as t,ue as u,U as v,v as w,Q as x,de as y};