import{a as g,S as A,N as M,P as E}from"./assets/vendor-CD5jJkp3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".mob-menu-link")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.menuLinks.forEach(r=>{r.addEventListener("click",()=>{t()})});function t(){e.modal.classList.toggle("is-open")}})();const S="https://sound-wave.b.goit.study/api";async function B(e){console.log("id:",e);try{return(await fetch(`${S}/artists/${e}`)).json()}catch(t){throw console.error("API Error:",t),t}}function q(e,t){if(!e||typeof e!="object")return'<p class="error">No artist data available</p>';const r=e.intFormedYear?e.intDiedYear?`${e.intFormedYear} - ${e.intDiedYear}`:`${e.intFormedYear} - present`:"information missing",o=Array.isArray(t)?t:typeof t=="string"?t.split(",").map(n=>n.trim()):[];function a(n){if(!n||isNaN(n))return"N/A";const i=Math.floor(n/1e3),c=Math.floor(i/60),p=i%60;return`${c}:${p.toString().padStart(2,"0")}`}const s=o.length>0?`<ul class="genres-list-details">
        ${o.map(n=>`<li class="genres-item-details">${n}</li>`).join("")}
      </ul>`:"<p>Genres not specified</p>",l=n=>{const i=n.movie?`<a href="${n.movie}" target="_blank" rel="noopener noreferrer" aria-label="YouTube: ${n.strTrack}">
            <svg width="16" height="16">
              <use href="/img/symbol-defs.svg#icon-Youtube"></use>
            </svg>
         </a>`:"";return`
      <li class="track-item">
        <span class="track-title">${n.strTrack}</span>
        <span class="track-duration">${a(n.intDuration)}</span>
        <span class="track-youtube">${i}</span>
      </li>`};let u="";if(Array.isArray(e.albumsList)&&e.albumsList.length>0)u=`<ul class="albums-list">
      ${e.albumsList.map(n=>{const i=Array.isArray(n.tracks)?n.tracks:[],c=`
          <li class="tracks-header">
            <span>Track</span>
            <span>Time</span>
            <span>Link</span>
          </li>`,p=i.length>0?i.map(l).join(""):'<li class="track-item">No tracks available</li>';return`
          <li class="album-item">
            <h4 class="album-title">${n.strAlbum} (${n.intYearReleased||"Unknown Year"})</h4>
            <ul class="tracks-list">
              ${c}
              ${p}
            </ul>
          </li>`}).join("")}
    </ul>`;else if(Array.isArray(e.tracksList)&&e.tracksList.length>0){const n={};e.tracksList.forEach(i=>{const c=i.strAlbum||"Unknown Album";n[c]||(n[c]=[]),n[c].push(i)}),u=`<ul class="albums-list">
      ${Object.entries(n).map(([i,c])=>{const p=`
          <li class="tracks-header">

            <span class="span-track">Track</span>
            <span class="span-time">Time</span>
            <span class="span-link">Link</span>
          </li>`,$=c.map(l).join("");return`
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
        <use href="/img/symbol-defs.svg#icon-close-btn"></use>
      </svg>
    </button>

    <h2 class="artist-name">${e.strArtist||"Unknown Artist"}</h2>
    <img class="img-details" src="${e.strArtistThumb||"placeholder-image.jpg"}" alt="Photo ${e.strArtist||"Unknown Artist"}" />

    <ul class="artist-info-list">
      <li class="item-info">
        <span class="info-label"><strong>Years active</strong></span>
        <span class="info-value">${r}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Sex</strong></span>
        <span class="info-value">${e.strGender||"Unknown"}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Members</strong></span>
        <span class="info-value">${e.intMembers||"Unknown"}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Country</strong></span>
        <span class="info-value">${e.strCountry||"Unknown"}</span>
      </li>
    </ul>


    <div class="biography-div">
      <h3 class="title-biography">Biography</h3>
      <p class="text-biography">${e.strBiographyEN||"Biography missing"}</p>
    </div>


    <div class="genres-div">
      <h3 class="title-genres"></h3>
      ${s}
    </div>

    <div class="albums-div">
      <h3 class="albums">Albums</h3>
      ${u}
    </div>
  </div>`}const d=document.querySelector(".modal-overlay");async function T(e){e.preventDefault();const t=e.target.closest(".art-btn-learnMore");if(!t)return;const r=t.dataset.id,o=t.dataset.style;let a=o?o.split(",").map(s=>s.trim()):[];console.log("artistGenres:",a);try{P();const s=await B(r);d.innerHTML=q(s,a),d.classList.add("is-open"),document.body.classList.add("modal-open"),j()}catch{F("Failed to load artist data.")}finally{U()}}function f(){d.classList.remove("is-open"),document.body.classList.remove("modal-open"),N()}function b(e){e.target===d&&f()}function y(e){e.key==="Escape"&&f()}function j(){const e=d.querySelector(".close-modal-btn");e==null||e.addEventListener("click",f),d.addEventListener("click",b),window.addEventListener("keydown",y)}function N(){window.removeEventListener("keydown",y),d.removeEventListener("click",b)}function P(){d.innerHTML='<div class="loader">Loading...</div>'}function U(){const e=d.querySelector(".loader");e&&e.remove()}function F(e){alert(e)}async function O(e,t){const a="https://sound-wave.b.goit.study/api"+"/artists",s=await g(a,{params:{limit:t,page:e}});return{totalArtists:s.data.totalArtists,artists:s.data.artists}}const Y=document.querySelector(".art-list-card"),v=document.querySelector(".art-btn-loadMore"),k=document.querySelector(".loader");function C(e){let r=document.documentElement.clientWidth<=768?50:145;const o=e.map(({_id:a,strArtist:s,strBiographyEN:l,strArtistThumb:u,genres:n})=>`
  <li class="art-item">
    <img class="art-img" src="${u}" alt="${s}" />
    <ul class="art-genre-list">
      ${n.map(i=>`<li class="art-genre-list-item">${i}</li>`).join("")}
    </ul>
    <h4 class="art-list-name">${s}</h4>
    <p class="art-list-biography">${l.slice(0,r)}...</p>
    <button 
      type="button" 
      class="art-btn-learnMore" 
      data-id="${a}" 
      data-style="${n}"
      >Learn More
      <svg class="icon" width="24" height="24">
        <use href="/img/symbol-defs.svg#icon-caret-right"></use>
      </svg>
    </button>
  </li>
`).join("");Y.insertAdjacentHTML("beforeend",o)}function D(){k.classList.add("loader")}function x(){k.classList.remove("loader")}function H(e,t,r){Math.ceil(t/r)>e?I():L()}function I(){v.classList.remove("hidden")}function L(){v.classList.add("hidden")}function R(){let t=document.querySelector(".art-item").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}document.querySelector(".art-btn-loadMore").addEventListener("click",_);document.getElementById("loader");let m=1;const h=8,w=async()=>{try{D();const e=await O(m,h);x(),H(m,e.totalArtists,h),C(e.artists),document.querySelectorAll(".art-btn-learnMore").forEach(r=>r.addEventListener("click",T))}catch(e){console.error("Помилка в getListArtist:",e)}m>1&&R()};function _(e){e.preventDefault(),++m,L(),w()}w();const G="https://sound-wave.b.goit.study/api";async function W(){try{const t=(await g.get(`${G}/feedbacks`)).data.data;return Array.isArray(t)?t:[]}catch(e){return console.error("Ошибка при загрузке отзывов:",e),[]}}function K({rating:e,descr:t,name:r}){return`
    <div class="feedback-card">
      <div class="star-rating star-rating--sm" data-rating="${Math.round(e)}">
        ${'<span class="star-rating__star"></span>'.repeat(5)}
      </div>
      <p class="feedback-text">${t}</p>
      <p class="feedback-author">— ${r}</p>
    </div>
  `}async function V(){const e=document.querySelector("#feedback-list");if(!e)return;const t=await W();Array.isArray(t)&&(e.innerHTML=t.map(r=>`<div class="swiper-slide">${K(r)}</div>`).join(""),await new Promise(r=>setTimeout(r,0)),new A(".feedback-swiper",{modules:[M,E],loop:!0,slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}}),document.querySelectorAll(".star-rating").forEach(r=>{const o=Number(r.dataset.rating)||0;r.querySelectorAll(".star-rating__star").forEach((s,l)=>{s.style.backgroundColor=l<o?"#FFD700":"#555"})}))}const z=document.querySelector(".hero-btn");z.addEventListener("click",()=>{document.getElementById("artists").scrollIntoView({behavior:"smooth",block:"start"})});window.addEventListener("DOMContentLoaded",()=>{V()});
//# sourceMappingURL=index.js.map
