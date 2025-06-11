import{a as g,S as A,N as M,P as E}from"./assets/vendor-Cj1XzFCq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".mob-menu-link")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.menuLinks.forEach(a=>{a.addEventListener("click",()=>{t()})});function t(){e.modal.classList.toggle("is-open")}})();const S="https://sound-wave.b.goit.study/api";async function B(e){console.log("id:",e);try{return(await fetch(`${S}/artists/${e}`)).json()}catch(t){throw console.error("API Error:",t),t}}function T(e,t){if(!e||typeof e!="object")return'<p class="error">No artist data available</p>';const a=e.intFormedYear?e.intDiedYear?`${e.intFormedYear} - ${e.intDiedYear}`:`${e.intFormedYear} - present`:"information missing",r=Array.isArray(t)?t:typeof t=="string"?t.split(",").map(n=>n.trim()):[];function s(n){if(!n||isNaN(n))return"N/A";const i=Math.floor(n/1e3),l=Math.floor(i/60),p=i%60;return`${l}:${p.toString().padStart(2,"0")}`}const o=r.length>0?`<ul class="genres-list-details">
        ${r.map(n=>`<li class="genres-item-details">${n}</li>`).join("")}
      </ul>`:"<p>Genres not specified</p>",d=n=>{const i=n.movie?`<a href="${n.movie}" target="_blank" rel="noopener noreferrer" aria-label="YouTube: ${n.strTrack}">
            <svg width="16" height="16">
              <use href="../img/symbol-defs.svg#icon-Youtube"></use>
            </svg>
         </a>`:"";return`
      <li class="track-item">
        <span class="track-title">${n.strTrack}</span>
        <span class="track-duration">${s(n.intDuration)}</span>
        <span class="track-youtube">${i}</span>
      </li>`};let u="";if(Array.isArray(e.albumsList)&&e.albumsList.length>0)u=`<ul class="albums-list">
      ${e.albumsList.map(n=>{const i=Array.isArray(n.tracks)?n.tracks:[],l=`
          <li class="tracks-header">
            <span>Track</span>
            <span>Time</span>
            <span>Link</span>
          </li>`,p=i.length>0?i.map(d).join(""):'<li class="track-item">No tracks available</li>';return`
          <li class="album-item">
            <h4 class="album-title">${n.strAlbum} (${n.intYearReleased||"Unknown Year"})</h4>
            <ul class="tracks-list">
              ${l}
              ${p}
            </ul>
          </li>`}).join("")}
    </ul>`;else if(Array.isArray(e.tracksList)&&e.tracksList.length>0){const n={};e.tracksList.forEach(i=>{const l=i.strAlbum||"Unknown Album";n[l]||(n[l]=[]),n[l].push(i)}),u=`<ul class="albums-list">
      ${Object.entries(n).map(([i,l])=>{const p=`
          <li class="tracks-header">

            <span class="span-track">Track</span>
            <span class="span-time">Time</span>
            <span class="span-link">Link</span>
          </li>`,$=l.map(d).join("");return`
          <li class="album-item">
            <h4 class="album-title">${i}</h4>
            <ul class="tracks-list">
              ${p}
              ${$}
            </ul>
          </li>`}).join("")}
    </ul>`}else u="<p>There are no albums</p>";return`<div class="modal">
    <button class="close-modal-btn" type="button">
      <svg class="icon-close-btn" width="16" height="16">
        <use href="../img/symbol-defs.svg#icon-close-btn"></use>
      </svg>
    </button>

    <h2 class="artist-name">${e.strArtist||"Unknown Artist"}</h2>
    <img class="img-details" src="${e.strArtistThumb||"placeholder-image.jpg"}" alt="Photo ${e.strArtist||"Unknown Artist"}" />

    <ul class="artist-info-list">
      <li class="item-info">
        <span class="info-label"><strong>Years active:</strong></span>
        <span class="info-value">${a}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Sex:</strong></span>
        <span class="info-value">${e.strGender||"Unknown"}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Members:</strong></span>
        <span class="info-value">${e.intMembers||"Unknown"}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Country:</strong></span>
        <span class="info-value">${e.strCountry||"Unknown"}</span>
      </li>
    </ul>


    <div class="biography-div">
      <h3 class="title-biography">Biography</h3>
      <p class="text-biography">${e.strBiographyEN||"Biography missing"}</p>
    </div>


    <div class="genres-div">
      <h3 class="title-genres"></h3>
      ${o}
    </div>

    <div class="albums-div">
      <h3 class="albums">Albums</h3>
      ${u}
    </div>
  </div>`}const c=document.querySelector(".modal-overlay");async function q(e){e.preventDefault();let t=e.target.dataset.id,a=e.target.dataset.style,r=a?a.split(",").map(s=>s.trim()):[];console.log("artistGenres:",r);try{P();const s=await B(t);c.innerHTML=T(s,r),c.classList.add("is-open"),document.body.classList.add("modal-open"),j()}catch{O("Failed to load artist data.")}finally{U()}}function f(){c.classList.remove("is-open"),document.body.classList.remove("modal-open"),N()}function b(e){e.target===c&&f()}function y(e){e.key==="Escape"&&f()}function j(){const e=c.querySelector(".close-modal-btn");e==null||e.addEventListener("click",f),c.addEventListener("click",b),window.addEventListener("keydown",y)}function N(){window.removeEventListener("keydown",y),c.removeEventListener("click",b)}function P(){c.innerHTML='<div class="loader">Loading...</div>'}function U(){const e=c.querySelector(".loader");e&&e.remove()}function O(e){alert(e)}async function Y(e,t){const s="https://sound-wave.b.goit.study/api"+"/artists",o=await g(s,{params:{limit:t,page:e}});return{totalArtists:o.data.totalArtists,artists:o.data.artists}}const x=document.querySelector(".art-list-card"),v=document.querySelector(".art-btn-loadMore"),k=document.querySelector(".loader");function C(e){let a=document.documentElement.clientWidth<=768?50:145;const r=e.map(({_id:s,strArtist:o,strBiographyEN:d,strArtistThumb:u,genres:n})=>`
  <li class="art-item">
    <img class="art-img" src="${u}" alt="${o}" />
    <ul class="art-genre-list">
      ${n.map(i=>`<li class="art-genre-list-item">${i}</li>`).join("")}
    </ul>
    <h4 class="art-list-name">${o}</h4>
    <p class="art-list-biography">${d.slice(0,a)}...</p>
    <button 
      type="button" 
      class="art-btn-learnMore" 
      data-id="${s}" 
      data-style="${n}"
      >Learn More
      <svg class="icon" width="24" height="24">
        <use href="/img/symbol-defs.svg#icon-caret-right"></use>
      </svg>
    </button>
  </li>
`).join("");x.insertAdjacentHTML("beforeend",r)}function D(){k.classList.add("loader")}function F(){k.classList.remove("loader")}function H(e,t,a){Math.ceil(t/a)>e?I():L()}function I(){v.classList.remove("hidden")}function L(){v.classList.add("hidden")}function R(){let t=document.querySelector(".art-item").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}document.querySelector(".art-btn-loadMore").addEventListener("click",G);document.getElementById("loader");let m=1;const h=8,w=async()=>{try{D();const e=await Y(m,h);F(),H(m,e.totalArtists,h),C(e.artists),document.querySelectorAll(".art-btn-learnMore").forEach(a=>a.addEventListener("click",q))}catch(e){console.error("Помилка в getListArtist:",e)}m>1&&R()};function G(e){e.preventDefault(),++m,L(),w()}w();const W="https://sound-wave.b.goit.study/api";async function _(){try{const t=(await g.get(`${W}/feedbacks`)).data.data;return Array.isArray(t)?t:[]}catch(e){return console.error("Ошибка при загрузке отзывов:",e),[]}}function K({rating:e,descr:t,name:a}){const r=Math.round(e);return`
    <div class="feedback-card">
      <div class="feedback-stars">${"★".repeat(r)+"☆".repeat(5-r)}</div>
      <p class="feedback-text">${t}</p>
      <p class="feedback-author">— ${a}</p>
    </div>
  `}async function V(){const e=document.querySelector("#feedback-list");if(!e)return;const t=await _();Array.isArray(t)&&(e.innerHTML=t.map(a=>`<div class="swiper-slide">${K(a)}</div>`).join(""),await new Promise(a=>setTimeout(a,0)),new A(".feedback-swiper",{modules:[M,E],loop:!0,slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}}))}const z=document.querySelector(".hero-btn");z.addEventListener("click",()=>{document.getElementById("artists").scrollIntoView({behavior:"smooth",block:"start"})});window.addEventListener("DOMContentLoaded",()=>{V()});
//# sourceMappingURL=index.js.map
