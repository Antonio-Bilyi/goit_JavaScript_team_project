import{a as h,S as A,N as M,P as E}from"./assets/vendor-CD5jJkp3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".mob-menu-link")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.menuLinks.forEach(r=>{r.addEventListener("click",()=>{t()})});function t(){e.modal.classList.toggle("is-open"),e.modal.classList.contains("is-open")?document.body.classList.add("body-lock"):document.body.classList.remove("body-lock")}})();const S="https://sound-wave.b.goit.study/api";async function B(e){console.log("id:",e);try{return(await fetch(`${S}/artists/${e}`)).json()}catch(t){throw console.error("API Error:",t),t}}function q(e,t){if(!e||typeof e!="object")return'<p class="error">No artist data available</p>';const r=e.intFormedYear?e.intDiedYear?`${e.intFormedYear} - ${e.intDiedYear}`:`${e.intFormedYear} - present`:"information missing",o=Array.isArray(t)?t:typeof t=="string"?t.split(",").map(a=>a.trim()):[];function n(a){if(!a||isNaN(a))return"N/A";const i=Math.floor(a/1e3),c=Math.floor(i/60),p=i%60;return`${c}:${p.toString().padStart(2,"0")}`}const s=o.length>0?`<ul class="genres-list-details">
        ${o.map(a=>`<li class="genres-item-details">${a}</li>`).join("")}
      </ul>`:"<p>Genres not specified</p>",l=a=>{const i=a.movie?`<a href="${a.movie}" target="_blank" rel="noopener noreferrer" aria-label="YouTube: ${a.strTrack}">
            <svg width="16" height="16">
              <use href="/img/symbol-defs.svg#icon-Youtube"></use>
            </svg>
         </a>`:"";return`
      <li class="track-item">
        <span class="track-title">${a.strTrack}</span>
        <span class="track-duration">${n(a.intDuration)}</span>
        <span class="track-youtube">${i}</span>
      </li>`};let u="";if(Array.isArray(e.albumsList)&&e.albumsList.length>0)u=`<ul class="albums-list">
      ${e.albumsList.map(a=>{const i=Array.isArray(a.tracks)?a.tracks:[],c=`
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
    </ul>`;else if(Array.isArray(e.tracksList)&&e.tracksList.length>0){const a={};e.tracksList.forEach(i=>{const c=i.strAlbum||"Unknown Album";a[c]||(a[c]=[]),a[c].push(i)}),u=`<ul class="albums-list">
      ${Object.entries(a).map(([i,c])=>{const p=`
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
  </div>`}const d=document.querySelector(".modal-overlay");async function T(e){e.preventDefault();const t=e.target.closest(".art-btn-learnMore");if(!t)return;const r=t.dataset.id,o=t.dataset.style;let n=o?o.split(",").map(s=>s.trim()):[];console.log("artistGenres:",n);try{P();const s=await B(r);d.innerHTML=q(s,n),d.classList.add("is-open"),document.body.classList.add("modal-open"),j()}catch{C("Failed to load artist data.")}finally{U()}}function f(){d.classList.remove("is-open"),document.body.classList.remove("modal-open"),N()}function y(e){e.target===d&&f()}function b(e){e.key==="Escape"&&f()}function j(){const e=d.querySelector(".close-modal-btn");e==null||e.addEventListener("click",f),d.addEventListener("click",y),window.addEventListener("keydown",b)}function N(){window.removeEventListener("keydown",b),d.removeEventListener("click",y)}function P(){d.innerHTML='<div class="loader">Loading...</div>'}function U(){const e=d.querySelector(".loader");e&&e.remove()}function C(e){alert(e)}async function D(e,t){const n="https://sound-wave.b.goit.study/api"+"/artists",s=await h(n,{params:{limit:t,page:e}});return{totalArtists:s.data.totalArtists,artists:s.data.artists}}const F="/goit_JavaScript_team_project/assets/symbol-defs-DrsLeCxm.svg",O=document.querySelector(".art-list-card"),v=document.querySelector(".art-btn-loadMore"),L=document.querySelector(".loader");function Y(e){let r=document.documentElement.clientWidth<=768?50:145;const o=e.map(({_id:n,strArtist:s,strBiographyEN:l,strArtistThumb:u,genres:a})=>`
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
        <use href="${F}#icon-caret-right"></use>
        </svg>
    </button>
  </li>
`).join("");O.insertAdjacentHTML("beforeend",o)}function _(){L.classList.add("loader")}function x(){L.classList.remove("loader")}function H(e,t,r){Math.ceil(t/r)>e?R():k()}function R(){v.classList.remove("hidden")}function k(){v.classList.add("hidden")}function I(){let t=document.querySelector(".art-item").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}document.querySelector(".art-btn-loadMore").addEventListener("click",G);document.getElementById("loader");let m=1;const g=8,w=async()=>{try{_();const e=await D(m,g);x(),H(m,e.totalArtists,g),Y(e.artists),document.querySelectorAll(".art-btn-learnMore").forEach(r=>r.addEventListener("click",T))}catch(e){console.error("Помилка в getListArtist:",e)}m>1&&I()};function G(e){e.preventDefault(),++m,k(),w()}w();const W="https://sound-wave.b.goit.study/api";async function K(){try{const t=(await h.get(`${W}/feedbacks`)).data.data;return Array.isArray(t)?t:[]}catch(e){return console.error("Ошибка при загрузке отзывов:",e),[]}}function J({rating:e,descr:t,name:r}){return`
    <div class="feedback-card">
      <div class="star-rating star-rating--sm" data-rating="${Math.round(e)}">
        ${'<span class="star-rating__star"></span>'.repeat(5)}
      </div>
      <p class="feedback-text">${t}</p>
      <p class="feedback-author">— ${r}</p>
    </div>
  `}async function V(){const e=document.querySelector("#feedback-list");if(!e)return;const t=await K();Array.isArray(t)&&(e.innerHTML=t.map(r=>`<div class="swiper-slide">${J(r)}</div>`).join(""),await new Promise(r=>setTimeout(r,0)),new A(".feedback-swiper",{modules:[M,E],loop:!0,slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}}),document.querySelectorAll(".star-rating").forEach(r=>{const o=Number(r.dataset.rating)||0;r.querySelectorAll(".star-rating__star").forEach((s,l)=>{s.style.backgroundColor=l<o?"#FFD700":"#555"})}))}window.addEventListener("DOMContentLoaded",()=>{V()});
//# sourceMappingURL=index.js.map
