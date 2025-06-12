import{a as y,S as M,N as E,P as S}from"./assets/vendor-CD5jJkp3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();(()=>{const t={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".mob-menu-link")};t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e),t.menuLinks.forEach(r=>{r.addEventListener("click",()=>{e()})});function e(){t.modal.classList.toggle("is-open"),t.modal.classList.contains("is-open")?document.body.classList.add("body-lock"):document.body.classList.remove("body-lock")}})();const B="https://sound-wave.b.goit.study/api";async function q(t){console.log("id:",t);try{return(await fetch(`${B}/artists/${t}`)).json()}catch(e){throw console.error("API Error:",e),e}}const f="/goit_JavaScript_team_project/assets/symbol-defs-X33uffLa.svg";function T(t,e){if(!t||typeof t!="object")return'<p class="error">No artist data available</p>';const r=t.intFormedYear?t.intDiedYear?`${t.intFormedYear} - ${t.intDiedYear}`:`${t.intFormedYear} - present`:"information missing",o=Array.isArray(e)?e:typeof e=="string"?e.split(",").map(a=>a.trim()):[];function n(a){if(!a||isNaN(a))return"N/A";const i=Math.floor(a/1e3),c=Math.floor(i/60),p=i%60;return`${c}:${p.toString().padStart(2,"0")}`}const s=o.length>0?`<ul class="genres-list-details">
        ${o.map(a=>`<li class="genres-item-details">${a}</li>`).join("")}
      </ul>`:"<p>Genres not specified</p>",l=a=>{const i=a.movie?`<a href="${a.movie}" target="_blank" rel="noopener noreferrer" aria-label="YouTube: ${a.strTrack}">
            <svg width="16" height="16">
              <use href="${f}#icon-Youtube"></use>
            </svg>
         </a>`:"";return`
      <li class="track-item">
        <span class="track-title">${a.strTrack}</span>
        <span class="track-duration">${n(a.intDuration)}</span>
        <span class="track-youtube">${i}</span>
      </li>`};let u="";if(Array.isArray(t.albumsList)&&t.albumsList.length>0)u=`<ul class="albums-list">
      ${t.albumsList.map(a=>{const i=Array.isArray(a.tracks)?a.tracks:[],c=`
          <li class="tracks-header">
            <span>Track</span>
            <span>Time</span>
            <span>Link</span>
          </li>`,p=i.length>0?i.map(l).join(""):'<li class="track-item">No tracks available</li>';return`
          <li class="album-item">
            <h4 class="album-title">${a.strAlbum} (${a.intYearReleased||"Unknown Year"})</h4>
            <ul class="tracks-list">
              ${c}
              ${p}
            </ul>
          </li>`}).join("")}
    </ul>`;else if(Array.isArray(t.tracksList)&&t.tracksList.length>0){const a={};t.tracksList.forEach(i=>{const c=i.strAlbum||"Unknown Album";a[c]||(a[c]=[]),a[c].push(i)}),u=`<ul class="albums-list">
      ${Object.entries(a).map(([i,c])=>{const p=`
          <li class="tracks-header">

            <span class="span-track">Track</span>
            <span class="span-time">Time</span>
            <span class="span-link">Link</span>
          </li>`,A=c.map(l).join("");return`
          <li class="album-item">
            <h4 class="album-title">${i}</h4>
            <ul class="tracks-list">
              ${p}
              ${A}
            </ul>
          </li>`}).join("")}
    </ul>`}else u="<p>There are no albums</p>";return`<div class="modal">
    <button class="close-modal-btn" type="button">
      <svg class="icon-close-btn" width="16" height="16">
        <use href="${f}#icon-close-btn"></use>
      </svg>
    </button>

    <h2 class="artist-name">${t.strArtist||"Unknown Artist"}</h2>
    <img class="img-details" src="${t.strArtistThumb||"placeholder-image.jpg"}" alt="Photo ${t.strArtist||"Unknown Artist"}" />

    <ul class="artist-info-list">
      <li class="item-info">
        <span class="info-label"><strong>Years active</strong></span>
        <span class="info-value">${r}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Sex</strong></span>
        <span class="info-value">${t.strGender||"Unknown"}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Members</strong></span>
        <span class="info-value">${t.intMembers||"Unknown"}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Country</strong></span>
        <span class="info-value">${t.strCountry||"Unknown"}</span>
      </li>
    </ul>


    <div class="biography-div">
      <h3 class="title-biography">Biography</h3>
      <p class="text-biography">${t.strBiographyEN||"Biography missing"}</p>
    </div>


    <div class="genres-div">
      <h3 class="title-genres"></h3>
      ${s}
    </div>

    <div class="albums-div">
      <h3 class="albums">Albums</h3>
      ${u}
    </div>
  </div>`}const d=document.querySelector(".modal-overlay");async function j(t){t.preventDefault();const e=t.target.closest(".art-btn-learnMore");if(!e)return;const r=e.dataset.id,o=e.dataset.style;let n=o?o.split(",").map(s=>s.trim()):[];console.log("artistGenres:",n);try{U();const s=await q(r);d.innerHTML=T(s,n),d.classList.add("is-open"),document.body.classList.add("modal-open"),N()}catch{O("Failed to load artist data.")}finally{F()}}function g(){d.classList.remove("is-open"),document.body.classList.remove("modal-open"),P()}function b(t){t.target===d&&g()}function v(t){t.key==="Escape"&&g()}function N(){const t=d.querySelector(".close-modal-btn");t==null||t.addEventListener("click",g),d.addEventListener("click",b),window.addEventListener("keydown",v)}function P(){window.removeEventListener("keydown",v),d.removeEventListener("click",b)}function U(){d.innerHTML='<div class="loader">Loading...</div>'}function F(){const t=d.querySelector(".loader");t&&t.remove()}function O(t){alert(t)}async function Y(t,e){const n="https://sound-wave.b.goit.study/api"+"/artists",s=await y(n,{params:{limit:e,page:t}});return{totalArtists:s.data.totalArtists,artists:s.data.artists}}const _=document.querySelector(".art-list-card"),L=document.querySelector(".art-btn-loadMore"),k=document.querySelector(".loader");function C(t){let r=document.documentElement.clientWidth<=768?50:145;const o=t.map(({_id:n,strArtist:s,strBiographyEN:l,strArtistThumb:u,genres:a})=>`
  <li class="art-item">
    <img class="art-img" src="${u}" alt="${s}" />
    <ul class="art-genre-list">
      ${a.map(i=>`<li class="art-genre-list-item">${i}</li>`).join("")}
    </ul>
    <h4 class="art-list-name">${s}</h4>
    <p class="art-list-biography">${l.slice(0,r)}...</p>
    <button 
      type="button" 
      class="art-btn-learnMore" 
      data-id="${n}" 
      data-style="${a}"
      >Learn More
      <svg class="icon" width="24" height="24">
        <use href="${f}#icon-caret-right"></use>
        </svg>
    </button>
  </li>
`).join("");_.insertAdjacentHTML("beforeend",o)}function D(){k.classList.add("loader")}function x(){k.classList.remove("loader")}function H(t,e,r){Math.ceil(e/r)>t?R():$()}function R(){L.classList.remove("hidden")}function $(){L.classList.add("hidden")}function I(){let e=document.querySelector(".art-item").getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"})}document.querySelector(".art-btn-loadMore").addEventListener("click",G);document.getElementById("loader");let m=1;const h=8,w=async()=>{try{D();const t=await Y(m,h);x(),H(m,t.totalArtists,h),C(t.artists),document.querySelectorAll(".art-btn-learnMore").forEach(r=>r.addEventListener("click",j))}catch(t){console.error("Помилка в getListArtist:",t)}m>1&&I()};function G(t){t.preventDefault(),++m,$(),w()}w();const W="https://sound-wave.b.goit.study/api";async function K(){try{const e=(await y.get(`${W}/feedbacks`)).data.data;return Array.isArray(e)?e:[]}catch(t){return console.error("Ошибка при загрузке отзывов:",t),[]}}function J({rating:t,descr:e,name:r}){return`
    <div class="feedback-card">
      <div class="star-rating star-rating--sm" data-rating="${Math.round(t)}">
        ${'<span class="star-rating__star"></span>'.repeat(5)}
      </div>
      <p class="feedback-text">${e}</p>
      <p class="feedback-author">— ${r}</p>
    </div>
  `}async function V(){const t=document.querySelector("#feedback-list");if(!t)return;const e=await K();Array.isArray(e)&&(t.innerHTML=e.map(r=>`<div class="swiper-slide">${J(r)}</div>`).join(""),await new Promise(r=>setTimeout(r,0)),new M(".feedback-swiper",{modules:[E,S],loop:!0,slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}}),document.querySelectorAll(".star-rating").forEach(r=>{const o=Number(r.dataset.rating)||0;r.querySelectorAll(".star-rating__star").forEach((s,l)=>{s.style.backgroundColor=l<o?"#FFD700":"#555"})}))}window.addEventListener("DOMContentLoaded",()=>{V()});
//# sourceMappingURL=index.js.map
